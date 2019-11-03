import * as axios from 'axios';
const NetworkService = {
    upload: function upload(formData) {        
        return axios.post('https://cors-anywhere.herokuapp.com/https://app.debricked.com/api/1.0/open/uploads/dependencies/files', 
        formData, 
        {
            headers: { 
                accept: 'application/json',
                'content-type':'multipart/form-data',          
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3OTk4MDksImV4cCI6MTU3MjgwMzQwOSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.MdCQs5YfrbrM49v_zXfg6XKnwPnmTMotm_40B2KDICkIEgIlvBjOBPKye63ji4hTjEnMJ4yuVfyDAGix6Jq6ZWMh59LLGuP9__2huiEb9KGPOsuc58M9mzXp54wV4yfQUcotn7h0H5XIYRMdfPXXqrtEJIS1e7XPjbZ-EdgOWMb36_f2T-yqcOQALw28m9tUEIKraA6xV9EN_0-wQX-K-RHGekPhvzPnbL2fWa1nNUey5kyLU4OIDj2lLnavRJBzCNTL6_e_19POtKnu-TVwjN-laR3Kqymmj41ZcG6rM-b_mN05wdTrjV-qx3Ml1zVEb_tXAu_ewkKMVp6-S_3H2_QxEH4Sqj_sxB8beaPJdv95aXLmlH-6ho4E2UJJ2WHsVSl73LYaPpsqKOKd_py4052VRiY7tnPOgq3adfdPiq56t8a-dRBhLmjDpnVI_EiAMdTAXCYR_nPtlOpGDL175ohWFS2YP04dtZNARwNT0gk0weF7UrZAO0VcBfI4ZG-WmQ_spiMdy4UADx_WIOxjKUEgT2MnukFdW-OanljC_BgWehlNPG7rduYuQeZ36AVBE4rQCMVBhGQVrzoW6clGaNqxFkPX4AS_ky27M3qbG1quVjhxukQCp3cWciaItRtmWHiaNFWLM5mHGRjHd7BnZfiZda3A-ccBzMpQDWjAQRA',
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
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3OTk4MDksImV4cCI6MTU3MjgwMzQwOSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.MdCQs5YfrbrM49v_zXfg6XKnwPnmTMotm_40B2KDICkIEgIlvBjOBPKye63ji4hTjEnMJ4yuVfyDAGix6Jq6ZWMh59LLGuP9__2huiEb9KGPOsuc58M9mzXp54wV4yfQUcotn7h0H5XIYRMdfPXXqrtEJIS1e7XPjbZ-EdgOWMb36_f2T-yqcOQALw28m9tUEIKraA6xV9EN_0-wQX-K-RHGekPhvzPnbL2fWa1nNUey5kyLU4OIDj2lLnavRJBzCNTL6_e_19POtKnu-TVwjN-laR3Kqymmj41ZcG6rM-b_mN05wdTrjV-qx3Ml1zVEb_tXAu_ewkKMVp6-S_3H2_QxEH4Sqj_sxB8beaPJdv95aXLmlH-6ho4E2UJJ2WHsVSl73LYaPpsqKOKd_py4052VRiY7tnPOgq3adfdPiq56t8a-dRBhLmjDpnVI_EiAMdTAXCYR_nPtlOpGDL175ohWFS2YP04dtZNARwNT0gk0weF7UrZAO0VcBfI4ZG-WmQ_spiMdy4UADx_WIOxjKUEgT2MnukFdW-OanljC_BgWehlNPG7rduYuQeZ36AVBE4rQCMVBhGQVrzoW6clGaNqxFkPX4AS_ky27M3qbG1quVjhxukQCp3cWciaItRtmWHiaNFWLM5mHGRjHd7BnZfiZda3A-ccBzMpQDWjAQRA',
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
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1NzI3OTk4MDksImV4cCI6MTU3MjgwMzQwOSwicm9sZXMiOlt7fSx7fV0sInVzZXJuYW1lIjoicmFzaG1pYyJ9.MdCQs5YfrbrM49v_zXfg6XKnwPnmTMotm_40B2KDICkIEgIlvBjOBPKye63ji4hTjEnMJ4yuVfyDAGix6Jq6ZWMh59LLGuP9__2huiEb9KGPOsuc58M9mzXp54wV4yfQUcotn7h0H5XIYRMdfPXXqrtEJIS1e7XPjbZ-EdgOWMb36_f2T-yqcOQALw28m9tUEIKraA6xV9EN_0-wQX-K-RHGekPhvzPnbL2fWa1nNUey5kyLU4OIDj2lLnavRJBzCNTL6_e_19POtKnu-TVwjN-laR3Kqymmj41ZcG6rM-b_mN05wdTrjV-qx3Ml1zVEb_tXAu_ewkKMVp6-S_3H2_QxEH4Sqj_sxB8beaPJdv95aXLmlH-6ho4E2UJJ2WHsVSl73LYaPpsqKOKd_py4052VRiY7tnPOgq3adfdPiq56t8a-dRBhLmjDpnVI_EiAMdTAXCYR_nPtlOpGDL175ohWFS2YP04dtZNARwNT0gk0weF7UrZAO0VcBfI4ZG-WmQ_spiMdy4UADx_WIOxjKUEgT2MnukFdW-OanljC_BgWehlNPG7rduYuQeZ36AVBE4rQCMVBhGQVrzoW6clGaNqxFkPX4AS_ky27M3qbG1quVjhxukQCp3cWciaItRtmWHiaNFWLM5mHGRjHd7BnZfiZda3A-ccBzMpQDWjAQRA',
            }
        }).then(x => x).then(status => {             
              return status;
        });
    }
}

export { NetworkService }