import { Facebook } from './js/services/facebook.provider';
import { Google } from './js/services/google.provider';
import { runBlock } from './run';

angular.module('auth', [])
    .run(runBlock)
    .provider('facebook', Facebook)
    .provider('google', Google);
