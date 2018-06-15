import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
 
  // Address of Auth-Svr
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
 
  // Our Client
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa-demo',

  // What we want to have?
  scope: 'openid profile email voucher',
  //           Identity       | Access
  //           ID_Token       | Access_Token
  //             ODIC         | App-specific
}