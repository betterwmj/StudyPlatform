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
  vm.$onInit = async function(){
    console.log($stateParams);
    vm.subject = $stateParams.subject;
    vm.homeworkList = await http.get("GetHomework",{
      subjectId:vm.subject.SubjectID
    });
    vm.homeworkList.forEach( (item)=>{
      item.finishTime = new Date(item.finishTime.time);
    });
    $scope.$applyAsync(null);
  }
}