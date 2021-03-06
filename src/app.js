import { Facebook } from './js/services/facebook.provider';
import { Google } from './js/services/google.provider';
import { config } from './config';
import { runBlock } from './run';
import { HomeController } from './js/controllers/homeController';

angular.module('auth', [])
    .config(config)
    .run(runBlock)
    .provider('facebook', Facebook)
    .provider('google', Google)
    .controller('HomeController', HomeController);
