import { ConfigService } from './config.service';

export class LoginService {
    constructor(global) {
        this.requestService = global.$service.$requestservice;
        //this.RequestService = new RequestService();
        this.config = new ConfigService();
    }

    async login(email, password) {
        const body = JSON.stringify({email: email, password: password});
        let url = `${this.config.host}/login`;

        try {
            
            let result = await this.requestService.
            requestPost(url,body,[{kind: 'Content-Type', value: 'application/json'}]);

            if(result.result) {
                return true;
            } else {
                if(result.code === 401) {
                    console.log('fail');
                }
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
    async isAuthenticated() {
        let url = `${this.config.host}/authrequired`;

        try {
            let result = await this.requestService.
            requestGet(url);
            if(result.result) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}

export default LoginService;