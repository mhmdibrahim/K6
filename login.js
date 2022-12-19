import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'http://18.197.85.177:5201/api/Security/Login';
  const payload = JSON.stringify({
    Email: 'devmhmd0@gmail.com',
    Password: 'a12345678',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  
 var res =  http.post(url, payload, params);
 console.log(res.body);
 check(res, {
    'is status 200': (r) => r.status === 200,

    'error code is null': (r) => r.json().ErrorCode === null,
    
    'failure is null': (r) => r.json().Failure === null,
  });
}