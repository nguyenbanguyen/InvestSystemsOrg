import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {

    private companiesUrl = 'http://localhost:5002/api/companies';

    constructor(private http: Http) { }

    getCompanies(page: number = 1, q: string = null): Promise<any> {
        let url = `${this.companiesUrl}?page=${page}`;
        if (q) {
            url += `&q=${q}`;
        }
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    getCompany(symbol: string): Promise<any> {
        let url = `${this.companiesUrl}/${symbol}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}