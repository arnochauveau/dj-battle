import angular from 'angular';

import {services} from './services/index.js';
import {components} from './components/index.js';

import '../style/app.css';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [services, components])
  .component('appContainer', {
      template: require('./appContainer.html'),
      controller: appContainerController
  });

function appContainerController(scoreStorage){
  let $ctrl = this;

  $ctrl.scores = [];

  $ctrl.$onInit = function () {
    $ctrl.scores = scoreStorage.getScores();
    console.log($ctrl.scores);
  }
}

export default MODULE_NAME;
