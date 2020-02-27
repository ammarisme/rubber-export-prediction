import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpServiceService {
  url = "http://localhost:3000/api/";
  constructor(private http: HttpClient) { }

  getPredictions(year) {
    return this.http.get(this.url + "get-predictions/" + year);
  }

  getParameterValuesForMonth(year, month){
    return this.http.get(this.url + "get-parameterValuesForMonth/"+ year + "/" + month);
  }

  getParameterValuesForYear(parameter, year){
    return this.http.get(this.url + "get-parametervalues/"+ parameter + "/" + year);
  }
}
