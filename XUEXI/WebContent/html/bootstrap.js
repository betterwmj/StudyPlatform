import angular from "angular";
import angularCookies from "angular-cookies";
import angularUIRouter from "angular-ui-router";
import angularUIBootstrap from "angular-ui-bootstrap";
import root from "./component/root/root.js";
import login from "./component/login/login.js";
import tophead from "./component/tophead/tophead.js";
import studentSidebar from "./component/studentSidebar/studentSidebar.js";
import teacherSidebar from "./component/teacherSidebar/teacherSidebar.js";
import registerStudent from "./component/registerStudent/registerStudent.js"
import registerTeacher from "./component/registerTeacher/registerTeacher.js";
import teacherCenter from "./component/teacherCenter/teacherCenter.js";
import teacherManagerClassCreate from "./component/teacherManagerClassCreate/teacherManagerClassCreate.js";
import teacherAssignStudent from "./component/teacherAssignStudent/teacherAssignStudent.js";
import teacherPaper from "./component/teacherPaper/teacherPaper.js";
import httpService from "./service/http.js";
import * as settingRouter from "./config/router.js";
export let name = "app";
export let dependent = [
  'ngCookies','ui.router','ui.bootstrap','ng',
];
export let app = angular.module(name,dependent);

root(app);
login(app);
tophead(app);
studentSidebar(app);
teacherSidebar(app);
registerTeacher(app);
registerStudent(app);
teacherCenter(app);
teacherManagerClassCreate(app);
teacherAssignStudent(app);
teacherPaper(app);
httpService(app);
app.config(["$stateProvider",settingRouter.routerConfig]);


