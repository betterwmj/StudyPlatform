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
import teacherPaperNavigation from "./component/teacherPaperNavigation/teacherPaperNavigation.js";
import publishPaper from "./component/publishPaper/publishPaper.js";
import paperDetail from "./component/paperDetail/paperDetail.js";
import paperResult from "./component/paperResult/paperResult.js";
import paperResultDetail from "./component/paperResultDetail/paperResultDetail.js";
import studentTest from "./component/studentTest/studentTest.js";
import studentTestPaper from "./component/studentTestPaper/studentTestPaper.js";
import studentTestPaperList from "./component/studentTestPaperList/studentTestPaperList.js";
import teacherHomeWorkNavigation from "./component/teacherHomeworkNavigation/teacherHomeworkNavigation.js";
import homeworkCreate from "./component/homeworkCreate/homeworkCreate.js";
import homeWorkHistory from "./component/homeWorkHistory/homeWorkHistory.js";
import onlineAnswer from "./component/onlineAnswer/onlineAnswer.js";
import studentTestPaperResultDetail from "./component/studentTestPaperResultDetail/studentTestPaperResultDetail.js";
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
teacherPaperNavigation(app);
publishPaper(app);
paperResult(app);
httpService(app);
paperDetail(app);
paperResultDetail(app);
studentTest(app);
studentTestPaperList(app);
studentTestPaper(app);
teacherHomeWorkNavigation(app);
homeworkCreate(app);
homeWorkHistory(app);
onlineAnswer(app);
studentTestPaperResultDetail(app);
app.config(["$stateProvider",settingRouter.routerConfig]);


