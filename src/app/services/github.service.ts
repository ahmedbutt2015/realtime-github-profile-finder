import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  private username:string;
  private client_id = '4f3a58dfb411c9b831b3';
  private client_secret = '301f2c47e1072f7ecdfbaf7f3010b89640b1b315';

  constructor(private _http:Http) {
    console.log('Github Service Ready ....');
    this.username = 'ahmedbutt2015';
  }

  setUsername(name) {
    this.username = name
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
}
