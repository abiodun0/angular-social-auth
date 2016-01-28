export class HomeController {
    constructor($log, facebook, google) {
      'ngInject';
      this.facebook = facebook;
      this.google = google;
      this.$log = $log;
    }
    facebookLogin() {
      this.facebook.login((err, res) => {
        this.$log.debug(res);
      });
    }
    googleLogin() {
      this.google.login((res) => {
        this.$log.debug(res);
      });
    }
}
