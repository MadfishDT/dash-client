import { ConfigService } from './config.service';

export class LoginService {

    constructor(global) {
        this.requestService = global.$service.$requestservice;
        //this.RequestService = new RequestService();
        this.config = new ConfigService();
        this.user = null;
    }

    get userInfo() {
        return this.user;
    }
    async login(email, password) {
        const body = JSON.stringify({email: email, password: password});
        let url = `${this.config.host}/login`;

        try {            
            let result = await this.requestService.
            requestPost(url,body,[{kind: 'Content-Type', value: 'application/json'}]);

            if(result.result) {
                this.user = result.data;
                console.log(JSON.stringify(this.user));
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
    }
    async getUserProfile() {
        let url = `${this.config.host}/profile`;
        try {
            let result = await this.requestService.
            requestGet(url);
            if(result) {
                this.user = result.data;
                return result.data;
            } else {
                return null;
            }
        } catch(e) {
            return null;
        }
    }

    async getAuthenticated() {
        let url = `${this.config.host}/authrequired`;

        try {
            let result = await this.requestService.
            requestGet(url);
            if(result.result) {
                return result.data;
            } else {
                return null;
            }
        } catch (e) {
            return null;
        }
    }
}

export default LoginService;