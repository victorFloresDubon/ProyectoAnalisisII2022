import http from '../http-common';

const mapping = 'auth';

class AuthService {

    /**
     * Crea una nueva cuenta de usuario
     * @param {Object} nuevoUsuario Información del nuevo usuario
     * @returns Mensaje de confirmación
     */
    signUp(nuevoUsuario){
        return http
            .post(`${mapping}/signUp`, nuevoUsuario);
    }

    /**
     * Permite obtener una nueva autorización para un nuevo inicio de sesión
     * @param {Object} usuario 
     * @returns Token de autorización
     */
    async signIn(usuario){
        const res = await http
            .post(`${mapping}/signIn`, usuario);
        if (res.data.token) {
            localStorage.setItem("user", res.data.token);
        }
        return res.data;
    }

    /**
     * Permite cambiar la contraseña del usuario actual
     * @param {Object} usuario Datos del usuario, nueva clave y confirmación de nueva clave
     * @returns Mensaje de confirmación de cambio de clave
     */
    chgpwd(usuario){
        return http
            .put(`${mapping}/chgpwd`, usuario);
    }

    /**
     * Cierra la sesión actual
     */
    logout(){
        localStorage.removeItem("user");
    }

    /**
     * Obtiene el token de autorización para cada petición
     * @returns La autorización actual del usuario en sesión
     */
    getUsuarioActual(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();