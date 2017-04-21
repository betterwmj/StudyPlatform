import angular from "angular";
import angularCookies from "angular-cookies";
import angularUIRouter from "angular-ui-router";
import angularUIBootstrap from "angular-ui-bootstrap";
import root from "./component/root/root.js";
import commonDialog from "./component/commonDialog/commonDialog.js";
import login from "./component/login/login.js";
import tophead from "./component/tophead/tophead.js";
import studentSidebar from "./component/studentSidebar/studentSidebar.js";
import teacherSidebar from "./component/teacherSidebar/teacherSidebar.js";
import registerStudent from "./component/registerStudent/registerStudent.js"
import registerTeacher from "./component/registerTeacher/registerTeacher.js";
import teacherCenter from "./component/teacherCenter/teacherCenter.js";
import homeworkDetail from "./component/homeworkDetail/homeworkDetail.js";
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
import studentHomework from "./component/studentHomework/studentHomework.js";
import studentHomeworkList from "./component/studentHomeworkList/studentHomeworkList.js";
import onlineQuestion from "./component/onlineQuestion/onlineQuestion.js";
import studentCenter from "./component/studentCenter/studentCenter.js";
import teacherUserInfo from "./component/teacherUserInfo/teacherUserInfo.js";
import publishHomework from "./component/publishHomework/publishHomework.js";
import teacherOnlineAnswerDetail from "./component/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.js";
import studentHomeworkDetail from "./component/studentHomeworkDetail/studentHomeworkDetail.js";

import httpService from "./service/http.js";
import * as settingRouter from "./config/router.js";
export let name = "app";
export let dependent = [
  'ngCookies','ui.router','ui.bootstrap','ng',
];
export let app = angular.module(name,dependent);
app.config(["$cookiesProvider",function($cookiesProvider){
  let curr = new Date().getTime();
  curr += 1000*60*60*24*120;//120天cookie过期
  $cookiesProvider.defaults.expires = new Date(curr);
}]);
commonDialog(app);
root(app);
login(app);
tophead(app);
studentSidebar(app);
teacherSidebar(app);
registerTeacher(app);
registerStudent(app);
teacherCenter(app);
homeworkDetail(app);
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
studentHomework(app);
onlineQuestion(app);
studentCenter(app);
teacherUserInfo(app);
studentHomeworkList(app);
publishHomework(app);
teacherOnlineAnswerDetail(app);
studentHomeworkDetail(app);
app.config(["$stateProvider",settingRouter.routerConfig]);


