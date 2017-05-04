import {app} from "../../bootstrap.js"
export let name = "teacherManagerClassCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherManagerClassCreate/teacherManagerClassCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.classInfo = {  
    className:"",
  };
  vm.msg = "";
  vm.$onInit = async function(){
    vm.userInfo = $cookies.getObject("userInfo");
    vm.subjectlist = await http.get("GetAllSubject");
    vm.currentSubject = vm.subjectlist[0];
    $scope.$applyAsync(null);
  }
  vm.create = async function(){
    vm.msg = "";
    let result = await http.get("CreateClass",{
      className:vm.classInfo.className,
      subjectID:vm.currentSubject.SubjectID
    });
    console.log(result);
    if( result === true ){
      vm.msg = "班级创建成功";
    }else{
      vm.msg = "该班级已存在";
    }
    $scope.$applyAsync(null);
  }
}