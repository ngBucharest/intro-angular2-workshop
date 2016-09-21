import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PhoneService {
  private phonesUrl = 'phones/';

  constructor(private http: Http) { }

  getPhone(id): Observable<any> {
    return this.http.get(`${this.phonesUrl}${id}.json`)
      .map(this.extractPhoneData)
      .catch(this.handleError);
  }

  getPhones(): Observable<any[]> {
    return this.http.get(`${this.phonesUrl}phones.json`)
      .map(this.extractPhonesData)
      .catch(this.handleError);
  }

  extractPhonesData(response: Response) {
    let body = response.json();
    return body.data || { };
  }

  extractPhoneData(response: Response) {
    let body = response.json();
    return body;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
