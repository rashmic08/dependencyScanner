import * as axios from 'axios';
const NetworkService = {
    upload: function upload(formData) {        
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/uploads/dependencies/files', 
        formData, 
        {
            headers: { 
                accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI4MTUyMTYsImV4cCI6MTU3MjgxODgxNiwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.W3mdHO_o4RQJl8itQGLsrqBXk7Ki4oq2r4477psRp4YncLOjen9-mdGOUa8LpcnKohRZkB1gTOWijzWvIcUj3mGFEWNXIaqb79qst3CFNIsfR8DmYrMB6r98YD7oBho7w50QX3e7f6aCDEq6ZkuR3W7JCAO9KoZgrTHz5lDz7bMEMcEPfRQEtb2v8cqsdfWK9iNBiu7bLCyvkWbD0JbkN0R3ErY287K5QH3DZWDHqvofM-K7ACTfvHHyccG2YLOoCIVkjWhN6pZrzTbQJ3TIo7XVBx8ho6XVYjvO2TdG4EGgqJWhKkmcJyhIAkprkYI9_mrWh4tNikwsKAQV2S7CAIgFK7Qrg5vKDHtB91qRZrNFQJGpr3Cd8OHk-Li6Fzjs3bVVLEh0nD1C-Vjo64ns3SfZEcw2OxKDalDnAMspPfEEQ6ZbuLc7mCfs7s6Oo8r99kF97bkuh3RDjR3HvRPtGEjeuxLUeiKgroJCioaBGx4gW598b5cDWgOcfR2XK7UhEB3A2NsxD4XXGrd-o2uIaclg36tE3vLNqmfeuowwCUCKOAtStMt7wcZG0E0lOejb3c0B4-LxCLPvFJW14cd_bZ4NyTekdSmFilKLvPmmUmZghNoiwxtnzMR0ZZsRieP37UDnVTCdheow5mlrP9lMkL4268Dn1AD4aFD9XlpnepM',
            }
        }).then(x =>x.data).then(data => {                 
            return data;
        });
    },
    uploadId: function uploadId(formData) {       
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/finishes/dependencies/files/uploads', 
        formData, 
        {
            headers: { 
                 accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI4MTUyMTYsImV4cCI6MTU3MjgxODgxNiwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.W3mdHO_o4RQJl8itQGLsrqBXk7Ki4oq2r4477psRp4YncLOjen9-mdGOUa8LpcnKohRZkB1gTOWijzWvIcUj3mGFEWNXIaqb79qst3CFNIsfR8DmYrMB6r98YD7oBho7w50QX3e7f6aCDEq6ZkuR3W7JCAO9KoZgrTHz5lDz7bMEMcEPfRQEtb2v8cqsdfWK9iNBiu7bLCyvkWbD0JbkN0R3ErY287K5QH3DZWDHqvofM-K7ACTfvHHyccG2YLOoCIVkjWhN6pZrzTbQJ3TIo7XVBx8ho6XVYjvO2TdG4EGgqJWhKkmcJyhIAkprkYI9_mrWh4tNikwsKAQV2S7CAIgFK7Qrg5vKDHtB91qRZrNFQJGpr3Cd8OHk-Li6Fzjs3bVVLEh0nD1C-Vjo64ns3SfZEcw2OxKDalDnAMspPfEEQ6ZbuLc7mCfs7s6Oo8r99kF97bkuh3RDjR3HvRPtGEjeuxLUeiKgroJCioaBGx4gW598b5cDWgOcfR2XK7UhEB3A2NsxD4XXGrd-o2uIaclg36tE3vLNqmfeuowwCUCKOAtStMt7wcZG0E0lOejb3c0B4-LxCLPvFJW14cd_bZ4NyTekdSmFilKLvPmmUmZghNoiwxtnzMR0ZZsRieP37UDnVTCdheow5mlrP9lMkL4268Dn1AD4aFD9XlpnepM',
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
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI4MTUyMTYsImV4cCI6MTU3MjgxODgxNiwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.W3mdHO_o4RQJl8itQGLsrqBXk7Ki4oq2r4477psRp4YncLOjen9-mdGOUa8LpcnKohRZkB1gTOWijzWvIcUj3mGFEWNXIaqb79qst3CFNIsfR8DmYrMB6r98YD7oBho7w50QX3e7f6aCDEq6ZkuR3W7JCAO9KoZgrTHz5lDz7bMEMcEPfRQEtb2v8cqsdfWK9iNBiu7bLCyvkWbD0JbkN0R3ErY287K5QH3DZWDHqvofM-K7ACTfvHHyccG2YLOoCIVkjWhN6pZrzTbQJ3TIo7XVBx8ho6XVYjvO2TdG4EGgqJWhKkmcJyhIAkprkYI9_mrWh4tNikwsKAQV2S7CAIgFK7Qrg5vKDHtB91qRZrNFQJGpr3Cd8OHk-Li6Fzjs3bVVLEh0nD1C-Vjo64ns3SfZEcw2OxKDalDnAMspPfEEQ6ZbuLc7mCfs7s6Oo8r99kF97bkuh3RDjR3HvRPtGEjeuxLUeiKgroJCioaBGx4gW598b5cDWgOcfR2XK7UhEB3A2NsxD4XXGrd-o2uIaclg36tE3vLNqmfeuowwCUCKOAtStMt7wcZG0E0lOejb3c0B4-LxCLPvFJW14cd_bZ4NyTekdSmFilKLvPmmUmZghNoiwxtnzMR0ZZsRieP37UDnVTCdheow5mlrP9lMkL4268Dn1AD4aFD9XlpnepM',
            }
        }).then(x => x).then(status => {             
              return status;
        });
    }
}

export { NetworkService }