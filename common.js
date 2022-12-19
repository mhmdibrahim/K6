
import http from "k6/http";
import { Trend } from "k6/metrics";

// Default runtime options
export let options = {
	vus: 2,
	duration: '10s',
    iterations: 3 ,
	thresholds: {
		transaction_time: ["avg<1000"], // Require transaction_time's average to be <1000ms
		http_req_duration: ["avg<2000"], // Require http_req_duration's average to be <2000ms
	}
};

// Create a Trend metric to hold transaction time data samples from the HTTP calls to the various end points
// Please see note below about this metric and the thresholds set in 'options' above
export let myTrend = new Trend("transaction_time");

// Base URL that we prepend to all URLs we use
export let urlbase = "https://api.staging.loadimpact.com";

// Think times, to slow down execution somewhat
export let thinktime1 = 0.1;
export let thinktime2 = 2.0;
