import http from 'k6/http';
import { check } from 'k6';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'; 
import { myTrend, options, urlbase, thinktime1, thinktime2 } from "./common.js";
import { SharedArray } from 'k6/data';
import { sleep } from 'k6';


export { options };

const license_file = open('./Capture1.PNG','b');
const data = new SharedArray('users', function () {
    // here you can open files, and then do additional processing or generate the array with data dynamically
    const f = JSON.parse(open('./users.json'));
    return f; // f must be an array[]
  });


export default function () {

        function makeEmail() {
            var strValues = "1234567890";
            var strEmail = randomUser.FirstName;
            var strTmp;
            for (var i = 0; i < 3; i++) {
                strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
                strEmail = strEmail + strTmp;
            }
            strEmail = strEmail + "@" + randomUser.lastName + ".com";
            return strEmail;
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
 
        const randomUser = data[Math.floor(Math.random() * data.length)];
        console.log(randomUser);
    //const binFile = FileReader("C:/Users/abdellatif-mohamed/Desktop/limboxmas-530.jpg.cf");
  const url = 'http://18.197.85.177:5201/api/Security/Register';


const fd = new FormData();
fd.append('FirstName',randomUser.FirstName);
fd.append('LastName',randomUser.lastName);
fd.append('Phone',makephone(10));
fd.append('Email',makeEmail());
fd.append('Password','a12345678');
fd.append('MainSpecialtyId','1');
fd.append('CountryCodeId','1');
fd.append('GenderId','1');
fd.append('LicenseFile',http.file(license_file,'image1.png', 'image/png'));
console.log(license_file);

  const params = {
            headers: {
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Host': '18.197.85.177:5201',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Content-Type': 'multipart/form-data; boundary=' + fd.boundary
            }
  };

 var res =  http.post(url,fd.body(), params);
 console.log(res.body);
 check(res, {
    'is status 200': (r) => r.status === 200,

    'Data code is true': (r) => r.json().Data === true,

    'error code is null': (r) => r.json().ErrorCode === null,
    
    'failure is null': (r) => r.json().Failure === null,
  });


}