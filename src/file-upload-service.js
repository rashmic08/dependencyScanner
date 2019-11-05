import * as axios from 'axios';
const NetworkService = {
    upload: function upload(formData) {        
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/uploads/dependencies/files', 
        formData, 
        {
            headers: { 
                accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI5NzI2ODEsImV4cCI6MTU3Mjk3NjI4MSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.dxdV5CFiFdt-ZuOi3OWu5z9muWRPadGYCILdPOEEZVU_xXAtgn4gf32BiWG8LGaWkUK8nfis5R4FJqt1P81qKDQGnzBkLnrWwI-ext2yyP3SzSdpADAsxd7X3MmSLfaFMyrz5UD2hqRcfF88Hsrnk-t2LiuMw2Wtz9h_N0qlxnVVGypg2PIkXhFV6rG-vH7Wt1qOwnVhByXDg5KLSC1doxESJeCuo5schBXWa73L38pGZ4AZcTptHbTVbUBaeXUP78VaVPIeBaT0vsOnENmaJA4mkC00bHlz0y1rv3WVazj0Kf2WGFFG2byU03TzNzQ1eimVX0yEj7N32NYbtLFXPQAoiIFREtbLxU9DNceJF7rNCr3ZIXeMlWmNVS5PdVFFKruZKO8-l06UZC7fcq-S12__2Fk18NJRUyGTjcUAyJZGH_GlhTyk6YyUuoSuVyRUhCZGiCQiLX3U_Kf9pTTzefegXTyMj6Nwle7Q_alM3eAqneZZDhQrBCwCUj5YjVHENRYyaXDklg1uzLhfkuyegasPur0Hico-p6uHUsl14KhOsvnNhjl9ZFFiLLImjrrCT6TyoEyxzaIdEiltLyaYUvhXYudUW_hOPoMSVH9CZc8BwYN50-5AwjnilujVwQHqO42p7a5miero1bYrkITFo0IXcrMpWZLE97R_gzqkrLY',
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
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI5NzI2ODEsImV4cCI6MTU3Mjk3NjI4MSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.dxdV5CFiFdt-ZuOi3OWu5z9muWRPadGYCILdPOEEZVU_xXAtgn4gf32BiWG8LGaWkUK8nfis5R4FJqt1P81qKDQGnzBkLnrWwI-ext2yyP3SzSdpADAsxd7X3MmSLfaFMyrz5UD2hqRcfF88Hsrnk-t2LiuMw2Wtz9h_N0qlxnVVGypg2PIkXhFV6rG-vH7Wt1qOwnVhByXDg5KLSC1doxESJeCuo5schBXWa73L38pGZ4AZcTptHbTVbUBaeXUP78VaVPIeBaT0vsOnENmaJA4mkC00bHlz0y1rv3WVazj0Kf2WGFFG2byU03TzNzQ1eimVX0yEj7N32NYbtLFXPQAoiIFREtbLxU9DNceJF7rNCr3ZIXeMlWmNVS5PdVFFKruZKO8-l06UZC7fcq-S12__2Fk18NJRUyGTjcUAyJZGH_GlhTyk6YyUuoSuVyRUhCZGiCQiLX3U_Kf9pTTzefegXTyMj6Nwle7Q_alM3eAqneZZDhQrBCwCUj5YjVHENRYyaXDklg1uzLhfkuyegasPur0Hico-p6uHUsl14KhOsvnNhjl9ZFFiLLImjrrCT6TyoEyxzaIdEiltLyaYUvhXYudUW_hOPoMSVH9CZc8BwYN50-5AwjnilujVwQHqO42p7a5miero1bYrkITFo0IXcrMpWZLE97R_gzqkrLY',
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
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI5NzI2ODEsImV4cCI6MTU3Mjk3NjI4MSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.dxdV5CFiFdt-ZuOi3OWu5z9muWRPadGYCILdPOEEZVU_xXAtgn4gf32BiWG8LGaWkUK8nfis5R4FJqt1P81qKDQGnzBkLnrWwI-ext2yyP3SzSdpADAsxd7X3MmSLfaFMyrz5UD2hqRcfF88Hsrnk-t2LiuMw2Wtz9h_N0qlxnVVGypg2PIkXhFV6rG-vH7Wt1qOwnVhByXDg5KLSC1doxESJeCuo5schBXWa73L38pGZ4AZcTptHbTVbUBaeXUP78VaVPIeBaT0vsOnENmaJA4mkC00bHlz0y1rv3WVazj0Kf2WGFFG2byU03TzNzQ1eimVX0yEj7N32NYbtLFXPQAoiIFREtbLxU9DNceJF7rNCr3ZIXeMlWmNVS5PdVFFKruZKO8-l06UZC7fcq-S12__2Fk18NJRUyGTjcUAyJZGH_GlhTyk6YyUuoSuVyRUhCZGiCQiLX3U_Kf9pTTzefegXTyMj6Nwle7Q_alM3eAqneZZDhQrBCwCUj5YjVHENRYyaXDklg1uzLhfkuyegasPur0Hico-p6uHUsl14KhOsvnNhjl9ZFFiLLImjrrCT6TyoEyxzaIdEiltLyaYUvhXYudUW_hOPoMSVH9CZc8BwYN50-5AwjnilujVwQHqO42p7a5miero1bYrkITFo0IXcrMpWZLE97R_gzqkrLY',
            }
        }).then(x => x).then(status => {             
              return status;
        });
    }
}

export { NetworkService }