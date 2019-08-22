import { ConfigService } from './config.service';
import { Subject } from 'rxjs'

export class ContentsRecoveryService {

    constructor(global) {
        this.requestService = global.$service.$requestservice;
        this.tempDatas = {};
    }
    async addAnswers(categoriid, data) {
        let url = `${this.config.host}/answers`;
        const formData = {
            catagory_id: categoriid,
            answers: data,
        }
        this.requestService.requestPost(url, {});
    }
   
}

export default ContentsRecoveryService;