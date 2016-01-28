export function runBlock($log, facebook, google) {
  'ngInject';
  $log.debug('runBlock end');
  facebook.init();
  google.init();
}
