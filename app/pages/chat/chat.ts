import {Page, NavController} from 'ionic-angular';
import {FirebaseAuth, AuthProviders} from 'angularfire2';
import {HelloPage} from '../hello/hello';
import {ChatList} from '../../share/chat-list';
import {ChatInput} from '../../share/chat-input';

@Page({
  templateUrl: 'build/pages/chat/chat.html',
  directives: [ChatList, ChatInput]
})
export class ChatPage {
  name: string = '';

  constructor(private auth: FirebaseAuth, private nav: NavController) {
    this.name = this.auth.getAuth().twitter.displayName;
  }

  logout() {
    this.name = '';
    this.auth.logout();
    this.nav.setRoot(HelloPage);
  }
}
