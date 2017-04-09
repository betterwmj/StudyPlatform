import angular from "angular";
import angularUIRouter from "angular-ui-router";
import angularUIBootstrap from "angular-ui-bootstrap";
import root from "./component/root/root.js";
import login from "./component/login/login.js";
import * as settingRouter from "./config/router.js";
export let name = "app";
export let dependent = [
  'ui.router','ui.bootstrap'
];
export let app = angular.module(name,dependent);

root(app);
login(app);
app.config(["$stateProvider",settingRouter.routerConfig]);


