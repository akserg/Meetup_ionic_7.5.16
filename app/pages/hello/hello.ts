import {Page, NavController} from 'ionic-angular';

import {FirebaseAuth, AuthProviders} from 'angularfire2';

import {ChatPage} from '../chat/chat';

@Page({
  templateUrl: 'build/pages/hello/hello.html',
  providers: [FirebaseAuth]
})
export class HelloPage {
  constructor(private auth: FirebaseAuth, private nav: NavController) { }

  loginTwitter() {
    this.auth.login({
      provider: AuthProviders.Twitter
    }).then(() => {
      this.nav.setRoot(ChatPage);
    });
  }
}
