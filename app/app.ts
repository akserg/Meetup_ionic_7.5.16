import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HelloPage} from './pages/hello/hello';

import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';

@App({
  templateUrl: 'build/app.html',
  providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase('https://meetup07052016.firebaseio.com'),
        firebaseAuthConfig({
          provider: AuthProviders.Twitter,
          method: AuthMethods.Popup,
          remember: 'default',
          scope: ['email']
        })
    ],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloPage the root (or first) page
  rootPage: any = HelloPage;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
