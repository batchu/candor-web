import { withCookies, Cookies } from 'react-cookie';
export default class CookieHelper{

     setCookie(key, value){
        Cookies.set(key,value, {path: '/'})
    }

    getExpiration(expires_at){
        let expires = new Date()
        return expires.setTime(expires.getTime() + (expires_at * 1000))
    }

}