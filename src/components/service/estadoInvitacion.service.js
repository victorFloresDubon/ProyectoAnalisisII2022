import http from "../../http-common";
import authHeader from "./auth-header";

const URL = "/estadoinvitacion";

class EstadoInvitacionService {

    getAll(){
        return http.get(`${URL}/`, { headers: authHeader()});
    };

    get(id){
        let params = {
            id: id
        };

        return http.get(`${URL}/findby`, {params: params, headers: { headers: authHeader()}});
    };

    create(estado){
        return http.post(`${URL}`, estado, {headers: authHeader()});
    }

    update(id, data) {
        let params = {
            id: id,
            body: data
        };
        return http.put(`${URL}`, null, {params: params, headers: authHeader()});
    };

    delete(id){
        let params = {
            id: id
        };
        return http.delete(`${URL}`, {params: params, headers: authHeader()});
    };
}