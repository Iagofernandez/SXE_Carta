import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class  AuthService {
email = '';
pass = '';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AngularFireAuth,
              private db: AngularFireDatabase) {}
  user = this.auth.authState.pipe(map (AuthState => {
      console.log('authState: ', AuthState);
      if (AuthState) {

        return AuthState;
      } else {
        return null;
      }
    }));
  loging() {
    console.log('login');
    // tslint:disable-next-line:new-parens
    this.auth.auth.signInWithEmailAndPassword(this.email, this.pass)
      // tslint:disable-next-line:align
      .then (user => {
        console.log ('user logado', user);
      })
      .catch(error => {
        console.log('error en correo:', error);
      });
  }
  gloging() {
    console.log('google login ');
    // tslint:disable-next-line:new-parens
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider() )
      // tslint:disable-next-line:align
    .then (user => {
      console.log ('user logado', user);
    })
      .catch(error => {
        console.log('error en googlge:', error);
      });
  }
  logout() {
    console.log('logout del cliente');
    this.auth.auth.signOut();
  }

  updateUserData(user: any) {
      console.log('user', user);
      const path = 'users/';
      const u = {
        email: user.email
      };

      this.db.object(path).update(u).catch(error => console.log(error));




  }
  getUsers() {
    const path = 'users/';
    return this.db.list(path).snapshotChanges();
  }
  removeUser(userUid) {
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }
}

