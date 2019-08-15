import { ConfigService } from './config.service';
import { Subject } from 'rxjs'

export class ContentsService {

    constructor(global) {
        this.requestService = global.$service.$requestservice;
        //this.RequestService = new RequestService();
        this.config = new ConfigService();
        this._categoriesSubject = new Subject();
    }

    get categoriesSubject() {
        return this._userSubject;
    }
    async getCategories() {
        let url = `${this.config.host}/categories`;
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

export default ContentsService;