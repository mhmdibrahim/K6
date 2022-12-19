import http from "k6/http";
import { check, group, sleep } from "k6";
import { Counter, Rate, Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";




/* Main function
The main function is what the virtual users will loop over during test execution.
*/
export default function() {


    function makeEmail() {
        var strValues = "abcdefghijklmnopqrstuvwxyz123";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }
    console.log(makeEmail());
    
}

function makeName(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 
}

function makephone(length) {
    var result           = '';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 
}

//   const payload = JSON.stringify({
//     FirstName: 'k61',
//     LastName: 'user1',
//     Phone:'1256329685',
//     Email:'devmhmd010123@gmail.com',
//     Password:'a12345678',
//     MainSpecialtyId:'1',
//     CountryCodeId:'1',
//     GenderId:'1',
//     LicenseFile:
//     { 
//         lastModified:2022-10-20,
//         name:"license",
//         webkitRelativePath:"C:/Users/abdellatif-mohamed/Desktop/limboxmas-530.jpg.cf"

//     },
//   });