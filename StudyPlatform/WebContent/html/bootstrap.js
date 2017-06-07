import angular from "angular";
import angularCookies from "angular-cookies";
import angularUIRouter from "angular-ui-router";
import ngMaterial from "ngMaterial";
//import angularUIBootstrap from "angular-ui-bootstrap";
import root from "./component/root/root.js";
import commonDialog from "./component/commonDialog/commonDialog.js";
import login from "./component/login/login.js";
import tophead from "./component/tophead/tophead.js";
import teacherIndex from "./component/teacher/teacherIndex/teacherIndex.js";
import teacherIndexHead from "./component/teacher/teacherIndexHead/teacherIndexHead.js";

import registerStudent from "./component/registerStudent/registerStudent.js"
import registerTeacher from "./component/registerTeacher/registerTeacher.js";
import teacherCenter from "./component/teacher/selfCenter/teacherCenter/teacherCenter.js";
import homeworkDetail from "./component/teacher/homework/homeworkDetail/homeworkDetail.js";
import teacherManagerClassCreate from "./component/teacher/selfCenter/teacherManagerClassCreate/teacherManagerClassCreate.js";
import teacherAssignStudent from "./component/teacher/selfCenter/teacherAssignStudent/teacherAssignStudent.js";
import teacherPaper from "./component/teacher/testpaper/teacherPaper/teacherPaper.js";
import teacherPaperNavigation from "./component/teacher/testpaper/teacherPaperNavigation/teacherPaperNavigation.js";
import publishPaper from "./component/teacher/testpaper/publishPaper/publishPaper.js";
import paperDetail from "./component/teacher/testpaper/paperDetail/paperDetail.js";
import paperResult from "./component/teacher/testpaper/paperResult/paperResult.js";
import paperResultDetail from "./component/teacher/testpaper/paperResultDetail/paperResultDetail.js";
import studentTest from "./component/student/paper/studentTest/studentTest.js";
import studentTestPaper from "./component/student/paper/studentTestPaper/studentTestPaper.js";
import studentTestPaperList from "./component/student/paper/studentTestPaperList/studentTestPaperList.js";
import teacherHomeWorkNavigation from "./component/teacher/homework/teacherHomeworkNavigation/teacherHomeworkNavigation.js";
import homeworkCreate from "./component/teacher/homework/homeworkCreate/homeworkCreate.js";
import homeWorkHistory from "./component/teacher/homework/homeWorkHistory/homeWorkHistory.js";
import teacherHomeworkResultList from "./component/teacher/homework/teacherHomeworkResultList/teacherHomeworkResultList.js";
import teacherHomeworkResultDetail from "./component/teacher/homework/teacherHomeworkResultDetail/teacherHomeworkResultDetail.js";
import onlineAnswer from "./component/teacher/onlineAnswer/onlineAnswer/onlineAnswer.js";
import teacherOnlineAnswerNavigation from "./component/teacher/onlineAnswer/teacherOnlineAnswerNavigation/teacherOnlineAnswerNavigation.js";
import teacheronlineHistoryAnswer from "./component/teacher/onlineAnswer/teacheronlineHistoryAnswer/teacheronlineHistoryAnswer.js";
import teacherClassStudent from "./component/teacher/selfCenter/teacherClassStudent/teacherClassStudent.js";
import teacherUploadFile from "./component/teacher/teacherUploadFile/teacherUploadFile.js";

import studentIndex from "./component//student/studentIndex/studentIndex.js";
import studentIndexHead from "./component//student/studentIndexHead/studentIndexHead.js";
import studentTestPaperResultDetail from "./component/student/paper/studentTestPaperResultDetail/studentTestPaperResultDetail.js";

import studentHomework from "./component/student/homework/studentHomework/studentHomework.js";
import studentHomeworkList from "./component/student/homework/studentHomeworkList/studentHomeworkList.js";
import studentHomeworkResultDetail from "./component/student/homework/studentHomeworkResultDetail/studentHomeworkResultDetail.js";
import studentHomeworkDetail from "./component/student/homework/studentHomeworkDetail/studentHomeworkDetail.js";

import onlineQuestion from "./component/student/onlineQuestion/onlineQuestion/onlineQuestion.js";
import studentCenter from "./component/student/studentCenter/studentCenter.js";
import teacherUserInfo from "./component/teacher/selfCenter/teacherUserInfo/teacherUserInfo.js";
import publishHomework from "./component/teacher/homework/publishHomework/publishHomework.js";
import teacherOnlineAnswerDetail from "./component/teacher/onlineAnswer/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.js";

import studentOnlineNavigation from "./component/student/onlineQuestion/studentOnlineNavigation/studentOnlineNavigation.js";
import studentPostQuestion from "./component/student/onlineQuestion/studentPostQuestion/studentPostQuestion.js";

import studentOnlineAnswerDetail from "./component/student/onlineQuestion/studentOnlineAnswerDetail/studentOnlineAnswerDetail.js";
import studentQuestionHistory from "./component/student/onlineQuestion/studentQuestionHistory/studentQuestionHistory.js";

import adminCenter from "./component/adminCenter/adminCenter.js";

import schoolNews from "./component/schoolNews/schoolNews.js";
import schoolNewsDetail from "./component/schoolNewsDetail/schoolNewsDetail.js";

import courceRescource from "./component/courceRescource/courceRescource.js";
import httpService from "./service/http.js";
import * as settingRouter from "./config/router.js";
export let name = "app";
export let dependent = [
  'ngCookies','ui.router','ngMaterial','ng',
];
export let app = angular.module(name,dependent);
app.config(["$cookiesProvider",function($cookiesProvider){
  let curr = new Date().getTime();
  curr += 1000*60*60*24*120;//120天cookie过期
  $cookiesProvider.defaults.expires = new Date(curr);
}]);
courceRescource(app);
schoolNews(app);
schoolNewsDetail(app);
commonDialog(app);
root(app);
login(app);
tophead(app);
teacherIndex(app);
teacherIndexHead(app);

registerTeacher(app);
registerStudent(app);
teacherCenter(app);
homeworkDetail(app);
teacherManagerClassCreate(app);
teacherAssignStudent(app);
teacherPaper(app);
teacherPaperNavigation(app);
teacherUploadFile(app);


publishPaper(app);
paperResult(app);
httpService(app);
paperDetail(app);
paperResultDetail(app);
teacherHomeWorkNavigation(app);
homeworkCreate(app);
homeWorkHistory(app);
teacherHomeworkResultList(app);
teacherHomeworkResultDetail(app);
onlineAnswer(app);
teacherOnlineAnswerDetail(app);
teacherOnlineAnswerNavigation(app);
teacheronlineHistoryAnswer(app);
teacherUserInfo(app);
teacherClassStudent(app);


studentIndex(app);
studentIndexHead(app);
studentTest(app);
studentTestPaperList(app);
studentTestPaper(app);
studentTestPaperResultDetail(app);
studentHomework(app);
onlineQuestion(app);
studentCenter(app);
studentHomeworkList(app);
publishHomework(app);
studentHomeworkDetail(app);
studentHomeworkResultDetail(app);
studentOnlineNavigation(app);
studentPostQuestion(app);
studentQuestionHistory(app);
studentOnlineAnswerDetail(app);
adminCenter(app);
app.config(["$stateProvider",settingRouter.routerConfig]);
app.config(function($mdThemingProvider) {
	  $mdThemingProvider
	    .theme('default')
	    .primaryPalette('blue')
	    .accentPalette('blue')
	    .warnPalette('red')
	    .backgroundPalette('grey');
});
