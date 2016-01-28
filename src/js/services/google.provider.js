export class Google {
    constructor() {
      this.appConfig = {};
    }

    $get($log) {
      'ngInject';
      var appConfig = this.appConfig;

      function getUserInfo(authResponse, cb) {
        if (authResponse['status']['signed_in']) {
          $log.debug(authResponse['status']);

          if (authResponse['status']['method'] == 'PROMPT') {

            gapi.client.load('oauth2', 'v2', function () {
              gapi.client.oauth2.userinfo.get()
                .execute(function (resp)
                {
                  $log.debug(resp);
                  cb(resp);
                });
            });
          }
        }        else
            {
              $log.debug('not logged in');
            }
      }

      return {
        init() {
          (function () {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/auth:plusone.js?onload=startApp';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();

          (function () {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/client:platform.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();

        },

        login(cb) {
          gapi.auth.signIn({
            callback: function (authResponse) {
              getUserInfo(authResponse, cb);
            },

            clientid: appConfig.CLIENTID,
            scope: appConfig.SCOPE,
            theme: 'dark',
            cookiepolicy: appConfig.COOKIEPOLICY || 'single_host_origin',
            accesstype: 'token',
          });
        },
      };
    }

    setAppConfig(object) {
      this.appConfig = object;
    }
}
