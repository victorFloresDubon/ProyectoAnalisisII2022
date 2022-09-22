import http from "../../http-common";

const URL = "/auth";

class UsuarioService {

    /**
     * Registra un nuevo usuario en el sistema
     * @param {Object} nuevoUsuario 
     * @returns 
     */
    signUp(nuevoUsuario){
        return http.post(`${URL}/signUp`, nuevoUsuario);
    }

    /**
     * Inicia sesión de un nuevo usuario
     * @param {Object} usuarioData 
     * @returns 
     */
    async signIn(usuarioData){
        const res = await http
            .post(`${URL}/signIn`, usuarioData);
        if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    }

    chgpwd(usuarioData){
        return http.put(`${URL}/chgpwd`, usuarioData);
    }

    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new UsuarioService;