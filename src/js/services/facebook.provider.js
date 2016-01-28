export class Facebook {
    constructor() {
      this.appID = 'sampleAppID';
    }

    $get($window) {
      'ngInject';
      const appID = this.appID;
      return {
        init() {
          $window.fbAsyncInit = function() {
                FB.init({
                  appId: appID,
                  xfbml: true,
                  version: 'v2.5',
                });
              };

          (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}

            js = d.createElement(s); js.id = id;
            js.src = 'http://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

        },

        login(cb) {

          FB.login(function (response) {
              if (response.status === 'connected') {
                FB.api('/me?fields=email,first_name,last_name,picture', function (response) {
                  cb(null, response);
                });
              } else if (response.status === 'not_authorized') {
                cb('not recoginzed');

                // The person is logged into Facebook, but not your app.
              } else {
                cb('Not Authorized');

                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
              }
            }, { scope: 'public_profile, email' });

        },

      };
    }

    setID(value) {
      this.appID = value;

    }

}
