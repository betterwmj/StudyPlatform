import {app} from "../../bootstrap.js"
export let name = "teacherHomeworkResultDetail";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherHomeworkResultDetail/teacherHomeworkResultDetail.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.teacherHomeworkResultList",{
      homeworkId:   vm.homework.homeworkID,
      homeWorkName: vm.homework.homeWorkName
    });
  });
  let vm = this;
  vm.homework = null;
  vm.homeworkResultDetail = [];
  vm.evaluation = "";
  vm.$onInit = async function(){
    try {
      vm.homework = {
        homeworkID:$stateParams.homeworkId,
        homeWorkName:$stateParams.homeWorkName,
        studentName:$stateParams.studentName,
        studentId:$stateParams.studentId,
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
  vm.submitEvaluation = async function(){
    try {
      if( !vm.evaluation || vm.evaluation.trim() === "" ){
        http.alert({
          parent:$element,content:"请输入评价信息"
        });
        return;
      }
      vm.evaluation = vm.evaluation.trim();
      let data = {
        studentId:vm.homework.studentId,
        homeWorkId:vm.homework.homeworkID,
        evaluation:vm.evaluation
      };
      let result = await http.get("TeacherEvaluation",data);
      if( result === true ){
        http.alert({
          parent:$element,content:"提交评价成功"
        });
      }else{
        http.alert({
          parent:$element,content:"提交评价失败"
        });
      }
    } catch (error) {
      http.alert({
        parent:$element,content:"提交评价失败"
      });
    }
  }
}