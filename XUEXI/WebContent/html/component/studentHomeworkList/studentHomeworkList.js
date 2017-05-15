import {app} from "../../bootstrap.js"
export let name = "studentHomeworkList";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomeworkList/studentHomeworkList.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.homeworkListUnFinish = [];
  vm.homeworkListFinish = [];
  vm.displayHomeworkList = [];
  vm.showFlag = true;
  vm.$onInit = async function(){
    try {
      vm.subject = {
	        SubjectName:$stateParams.SubjectName,
	        SubjectID:$stateParams.SubjectID
      };
      vm.homeworkList = await http.get("GetHomework",{
        subjectId:vm.subject.SubjectID
      });
      vm.homeworkList.forEach( (item)=>{
        item.finishTime = new Date(item.finishTime.time);
      });
      vm.homeworkResults = await http.get("GetHomeworkResult");
      vm.homeworkList.forEach( (homework)=>{
        let find = vm.homeworkResults.find( (result)=>{
          return homework.homeId === result.homework.homeworkId
        });
        if( find ){
          vm.homeworkListFinish.push(homework);
        }else{
          vm.homeworkListUnFinish.push(homework);
        }
      });
      vm.displayHomeworkList = vm.homeworkListUnFinish;
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
    
  }
  vm.changeHomeworkType = function(flag){
    vm.showFlag = flag;
    if(flag){
      vm.displayHomeworkList = vm.homeworkListUnFinish;
    }else{
      vm.displayHomeworkList = vm.homeworkListFinish;
    }
  }

  $scope.$on("ready_back",function(){
    $state.go("student.homework");
  });
}