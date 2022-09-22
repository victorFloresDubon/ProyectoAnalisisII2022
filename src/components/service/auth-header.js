export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token){
        return { Authorization: 'Bearer ' + user.token}; // Encabezado para back-end de Spring Boot
    } else {
        return {};
    }
}