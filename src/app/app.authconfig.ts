import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    // Your OIDC issuer URL
    issuer: 'https://demo.duendesoftware.com',
  
    // Your client ID registered with the OIDC provider
    clientId: 'interactive.confidential',

    dummyClientSecret: 'secret',
  
    // The redirect URI after a successful login
    redirectUri: 'http://localhost:4200/auth/callback',
  
    // The logout redirect URI
    postLogoutRedirectUri: 'http://localhost:4200/', //Development
  
    // The response type to request
    responseType: 'code',
  
    // The scopes to request
    scope: 'openid profile email api offline_access',
  
    // Require HTTPS
    requireHttps: true,
  
    // Show debug information in the console (for development)
    showDebugInformation: true,
  
  };