import http from '../../http-common';
import authHeader from "./auth-header";

const URL = "/cloudinary";

class CloudinaryService {

    getAll(){
        return http.get(`${URL}/`, {headers: authHeader()});
    }

    upload(userId, file){
    
        let formData = new FormData();
        formData.append("file", file);
        
        return http.post(`${URL}/upload`, formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            },
            params: {
                userId: userId
            }
        });
    }
}

export default new CloudinaryService();