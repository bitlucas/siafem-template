import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { ConsultaEmpenhoComponent } from './consulta-empenho.component';
import { Observable } from 'rxjs/Rx';
import { Empenho } from '../empenho';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpenhoService {
	http: Http;
	headers: Headers;
  options: RequestOptions;
	url: string = 'http://localhost:9393/api/v1/empenhos'
	mensagem: string = '';
	params = new URLSearchParams();

  constructor(http: Http) { 
  	this.http = http;
  	this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
    
    
  }

  lista(): Observable<Empenho[]>{
  		return this.http
        .get(this.url)
	  		.map(res => res.json());

	    }

  cadastra(consulta: Empenho){
      
      return this.http
        .post(this.url, JSON.stringify(consulta), { headers: this.headers });
  }

    apaga(id: string){

      
        return this.http
          .delete(this.url+'/'+id, this.options);
   }

   pegaEmpenho(id: string){
        return this.http
          .get(this.url+'/'+id, this.options);
   }


// }));

}
