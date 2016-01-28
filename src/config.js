export function config($logProvider, facebookProvider, googleProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // Set options third-party lib
  googleProvider.setAppConfig(
    {
      SCOPE: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
      CLIENTID: 'Appid',
      REDIRECT: 'http://localhost:3000',
      COOKIEPOLICY: 'single_host_origin'
    });
  facebookProvider.setID('APPID');
}
