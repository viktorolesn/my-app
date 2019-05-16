import ls from 'local-storage';

export function setToken(token){
    try {
        ls.set('token', token)
    } catch(error) {
        console.log(error)
    }
}

export function getToken(){
    try {
        const token = ls.get('token')
        if (token) {
            return token
        }
    } catch(error) {
        console.log(error);
      

    }
}

export function signOut(){
    try {
        ls.clear()
        console.log("STORAGE TOKEN:");
        getToken();

    } catch (error) {
        console.log(error)
    }
}