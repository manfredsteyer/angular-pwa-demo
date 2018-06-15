import { authConfig } from './auth.config';
import { AuthService } from './shared/auth/auth.service';
import {Component} from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { Increment } from './actions/increment.actions';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private snackBar: MatSnackBar,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private store: Store<State>,
    private authService: OAuthService) { 

      this.store.dispatch(new Increment());

    this.authService.configure(authConfig);
    this.authService.tokenValidationHandler = new JwksValidationHandler();
    this.authService.loadDiscoveryDocumentAndTryLogin();

    this.setupUpdates();
    this.setupPush();
  }

  setupUpdates() {
    this.swUpdate.available.subscribe(u => {
      this.swUpdate.activateUpdate().then(e => {
        const message = 'Application has been updated';
        const action = 'Ok, Reload!';
        this.snackBar.open(message, action).onAction().subscribe(
          () => location.reload()
        );
      });
    });

    this.swUpdate.checkForUpdate();
  }


  setupPush() {

    const key = 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE';

    this.swPush.requestSubscription({
      serverPublicKey: key
    })
    .then(sub => {
      console.debug('Push Subscription', JSON.stringify(sub) );
    },
    err => {
      console.error('error registering for push', err);
    });

    this.swPush.messages.subscribe(push => {
      console.debug('received push message', push);
    });

  }


}

