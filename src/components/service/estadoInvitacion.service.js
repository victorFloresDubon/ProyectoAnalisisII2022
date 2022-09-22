import http from "../../http-common";

const URL = "/estadoinvitacion";

class EstadoInvitacionService {

    getAll(){
        return http.get(`${URL}/`);
    };

    get(id){
        let params = {
            id: id
        };

        return http.get(`${URL}/findby`, {params});
    };

    create(estado){
        return http.post(`${URL}`, estado);
    }

    update(id, data) {
        let params = {
            id: id,
            body: data
        };
        return http.put(`${URL}`, null, {params});
    };

    delete(id){
        let params = {
            id: id
        };
        return http.delete(`${URL}`, {params});
    };
}