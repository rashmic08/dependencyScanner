import * as axios from 'axios';
const NetworkService = {
    upload: function upload(formData) {        
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/uploads/dependencies/files', 
        formData, 
        {
            headers: { 
                accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3Mjk0ODcsImV4cCI6MTU3MjczMzA4Nywicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.IAcR6Bp881fPxJCSjmOIJC2NHBMfvsb3myd7ND94bI4EWJffr8Ps-Vf48LAt2DIAirX4EriiKK1XtPXJdjvP0m8BEM1PGTIvjv0BdMlr3iWavcg58P2HMIqJWsXLL1lnWZk3KKtf-A67WjwZOtw30Fg96b2umVUUg6Zr-BKNtdDXlipIM51JVlbVlCtenWkHqmCJGLijU0s-OcgSHB6gqazt0Bzz50td7uoaXh_Lpy08ZXH4YVD5frBFFIcC0VL3SzL5Q1IcHgeEu4kdrQv6QodqFGuVAU6ORP537XdGzNDjjKKn8RSuayaKbkjWBc4fl1AHS_YTn-SYIlqffE2kbTxZt9rgJ4c2Q_52pghCwPO413nNyVJ6HWev_NrwNby8ZjxLag51SmgzWE6QYfoBcC9MbAnVLJJtvO9UnfaCkACnWRoEaPG1MzOxVAYwPlGmM4mZfmskmfoQmZIgeWWJW3eqQ8QZkxQUlMD30BTVH9lVFKxoGiEmiYTaBDWH9Mro4HC6x5qti2Ag-hO_0S3TcOdnoQBCfE87P5N-qUI4zeJgcgts9hcjhTfTR9w55jB9B-6UReLw59pEDsKFKhK7d7OFR9712zyFDJIHnP1E-weRJRHP_qnhOiWNF3ebDrc9bvfpxlPO4fbPXvjd5KjOlvqgIqxAtVAxj59x5tbZvTc',
            }
        }).then(x => {
            console.log("hhshsh", x);
        return x.data;
        }).then(item => {                 
                return item;
            });
    },
    uploadId: function uploadId(formData) {        
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/finishes/dependencies/files/uploads', 
        formData, 
        {
            headers: { 
                 accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3Mjk0ODcsImV4cCI6MTU3MjczMzA4Nywicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.IAcR6Bp881fPxJCSjmOIJC2NHBMfvsb3myd7ND94bI4EWJffr8Ps-Vf48LAt2DIAirX4EriiKK1XtPXJdjvP0m8BEM1PGTIvjv0BdMlr3iWavcg58P2HMIqJWsXLL1lnWZk3KKtf-A67WjwZOtw30Fg96b2umVUUg6Zr-BKNtdDXlipIM51JVlbVlCtenWkHqmCJGLijU0s-OcgSHB6gqazt0Bzz50td7uoaXh_Lpy08ZXH4YVD5frBFFIcC0VL3SzL5Q1IcHgeEu4kdrQv6QodqFGuVAU6ORP537XdGzNDjjKKn8RSuayaKbkjWBc4fl1AHS_YTn-SYIlqffE2kbTxZt9rgJ4c2Q_52pghCwPO413nNyVJ6HWev_NrwNby8ZjxLag51SmgzWE6QYfoBcC9MbAnVLJJtvO9UnfaCkACnWRoEaPG1MzOxVAYwPlGmM4mZfmskmfoQmZIgeWWJW3eqQ8QZkxQUlMD30BTVH9lVFKxoGiEmiYTaBDWH9Mro4HC6x5qti2Ag-hO_0S3TcOdnoQBCfE87P5N-qUI4zeJgcgts9hcjhTfTR9w55jB9B-6UReLw59pEDsKFKhK7d7OFR9712zyFDJIHnP1E-weRJRHP_qnhOiWNF3ebDrc9bvfpxlPO4fbPXvjd5KjOlvqgIqxAtVAxj59x5tbZvTc',
            }
        }).then(x => x.status).then(status => {              
                return status;
            });
    },
    uploadIdStatus: function uploadIdStatus(id) {        
        return axios.get('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/ci/upload/status?ciUploadId='+id, 
        {
            headers: { 
                 accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3Mjk0ODcsImV4cCI6MTU3MjczMzA4Nywicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.IAcR6Bp881fPxJCSjmOIJC2NHBMfvsb3myd7ND94bI4EWJffr8Ps-Vf48LAt2DIAirX4EriiKK1XtPXJdjvP0m8BEM1PGTIvjv0BdMlr3iWavcg58P2HMIqJWsXLL1lnWZk3KKtf-A67WjwZOtw30Fg96b2umVUUg6Zr-BKNtdDXlipIM51JVlbVlCtenWkHqmCJGLijU0s-OcgSHB6gqazt0Bzz50td7uoaXh_Lpy08ZXH4YVD5frBFFIcC0VL3SzL5Q1IcHgeEu4kdrQv6QodqFGuVAU6ORP537XdGzNDjjKKn8RSuayaKbkjWBc4fl1AHS_YTn-SYIlqffE2kbTxZt9rgJ4c2Q_52pghCwPO413nNyVJ6HWev_NrwNby8ZjxLag51SmgzWE6QYfoBcC9MbAnVLJJtvO9UnfaCkACnWRoEaPG1MzOxVAYwPlGmM4mZfmskmfoQmZIgeWWJW3eqQ8QZkxQUlMD30BTVH9lVFKxoGiEmiYTaBDWH9Mro4HC6x5qti2Ag-hO_0S3TcOdnoQBCfE87P5N-qUI4zeJgcgts9hcjhTfTR9w55jB9B-6UReLw59pEDsKFKhK7d7OFR9712zyFDJIHnP1E-weRJRHP_qnhOiWNF3ebDrc9bvfpxlPO4fbPXvjd5KjOlvqgIqxAtVAxj59x5tbZvTc',
            }
        }).then(x => x).then(status => {             
              return status;
        });
    }
}

export { NetworkService }