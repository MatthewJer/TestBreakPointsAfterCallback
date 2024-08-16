import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { authConfig } from './app.authconfig';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: OAuthStorage, useValue: localStorage },
  ]
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken();
  }

  initCodeFlow() {
    return this.oauthService.initCodeFlow();
  }

  logOut() {
    this.oauthService.logOut();
  }

  title = 'TestBreakPointsAfterCallback';
}
