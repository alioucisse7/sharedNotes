import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';
//import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  public isSearchBarOpened = false;
  isLoggedIn:boolean = false;
  users: null;
  constructor(private fb: Facebook) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
    }
    login() {
      this.fb.login(['email'])
        .then((res : FacebookLoginResponse ) => {
          const fc= firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
          firebase.auth().signInWithCredential(fc).then(fs =>{alert("firebase sec")}).catch(ferr =>{alert("firebase error")})
        }).catch(err=>{
          alert(JSON.stringify(err))
        })
      }
    }
         /* if(res.status === "connected") {
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,firts_name,birthday,email", []).then((user) => {

                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

           /* this.isLoggedIn = true;
            this.getUserDetail(res.authResponse.userID);*/

          /*} else {
            this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
    }*/
   /* logout() {
      this.fb.logout()
        .then( res => this.isLoggedIn = false)
        .catch(e => console.log('Error logout from Facebook', e));
    }
    getUserDetail(userid) {
      this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
        .then(res => {
          console.log(res);
          this.users = res;
        })
        .catch(e => {
          console.log(e);
        });
    }
  onSearch(event){
    console.log(event);
  }
  
}*/

