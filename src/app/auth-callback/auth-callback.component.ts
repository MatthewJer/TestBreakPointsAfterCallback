import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit {

  constructor (private oauthService: OAuthService, private router: Router) {}

  ngOnInit() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then (() => {
      //Place some breakpoints on the following lines...
      const oneNumber = 2;
      const anotherNumber = 3;
      const someOperation = oneNumber + anotherNumber;
      this.router.navigateByUrl('/');
    });
  }

}
