import angular from 'angular';
import {scoreStorage} from './ScoreStorage.js';

export let services = angular
  .module('services',[])
  .service('scoreStorage', scoreStorage)
  .name;
