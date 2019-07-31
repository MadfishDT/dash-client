import { ConfigService } from './config.service';

export class LoginService {
    constructor(global) {
        this.service = global.$service;
        //this.RequestService = new RequestService();
        this.config = new ConfigService();
    }

    async login(email, password) {
        const body = JSON.stringify({email: email, password: password});
        let url = `${this.config.host}/login`;

        try {
            
            let result = await this.service.$requestservice.
            requestPost(url,body,[{kind: 'Content-Type', value: 'application/json'}]);

            if(result) {
                //router.push('dashboard');
            //    console.log('success login');
                return true;
            } else {
                console.log('fail login');
                return false;
            }
        } catch (e){
            console.log(`fail login exceptional ${e}`);
            console.log('fail login exceptional');
            return false;
        }
      /*  let xhr = new XMLHttpRequest();
        
        xhr.open('POST', url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        xhr.send();*/
    }

    //logout(email, password) {
        
    //}
    //isAuthenticated() {

    //}
}

export default LoginService;