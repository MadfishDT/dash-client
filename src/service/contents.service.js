import { ConfigService } from './config.service';
import { Subject } from 'rxjs'

export class ContentsService {

    constructor(global) {
        this.requestService = global.$service.$requestservice;
        this.config = new ConfigService();
        this._categoriesSubject = new Subject();
        this._categoryChangeSubject = new Subject();

    }
    emitChangeCategory(category_id) {
        this._categoryChangeSubject.next(category_id);
    }
    get categoryChangeSubject() {
        return this._categoryChangeSubject;
    }
    get categoriesSubject() {
        return this._categoriesSubject;
    }
    async getCategories() {
        let url = `${this.config.host}/categories`;
        try {
            let result = await this.requestService.
                requestGet(url);
            if (result.result) {
                return result.data;
            } else {
                return null;
            }
        } catch (e) {
            return null;
        }
    }
    async getQuestions(id) {
        let url = `${this.config.host}/questions?id=${id}`;
        try {
            let result = await this.requestService.
                requestGet(url);
            if (result.result) {
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