import {Component} from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  private user:any[];
  private repos:any[];
  private username:string;

  constructor(private _githubService:GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user
    })
    this._githubService.getRepos().subscribe(user => {
      console.log(user);
      this.repos = user
    })
  }
  search() {

    this._githubService.setUsername(this.username)
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user
    })
    this._githubService.getRepos().subscribe(user => {
      console.log(user);
      this.repos = user
    })
  }
}
