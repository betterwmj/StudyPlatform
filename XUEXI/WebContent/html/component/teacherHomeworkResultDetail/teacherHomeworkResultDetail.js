import {app} from "../../bootstrap.js"
export let name = "teacherHomeworkResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherHomeworkResultDetail/teacherHomeworkResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.homework = null;
  vm.homeworkResultDetail = [];
  vm.$onInit = async function(){
    try {
      vm.homework = {
        homeworkID:$stateParams.homeworkId,
        homeWorkName:$stateParams.homeWorkName,
      };
      vm.homeworkResultDetail = await http.get("GetHomeworkResultDetail",{
        homeworkResultID:$stateParams.homeworkResultID,
      });
    } catch (error) {
      http.alert({
        parent:$element,content:"获取学生作业结果详情异常"
      });
    }
  }
}