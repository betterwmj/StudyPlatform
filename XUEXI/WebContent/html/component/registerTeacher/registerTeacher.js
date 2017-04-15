import {app} from "../../bootstrap.js"
export let name = "registerTeacher";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerTeacher/registerTeacher.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike){
  let vm = this;
  vm.userInfo = {
    userName:"",
    realName:"",
    password:"",
    rePassword:"",
    subjectID:"",
  };
  vm.currentSpecialities = null;
  vm.$onInit = async function(){
    let specialitiesList = await http.get("GetSpecialities");
    vm.specialitiesList = specialitiesList;
    vm.currentSpecialities = vm.specialitiesList[0];
    $scope.$applyAsync(null);
  }

  vm.register = async function(){
    let result = await http.post("TeacherRegister",
      $httpParamSerializerJQLike({
        userName:vm.userInfo.userName,
        realName:vm.userInfo.realName,
        password:vm.userInfo.password,
        subjectID:vm.currentSubject.SubjectID,
      }),
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    if( result === true ){
      $cookies.putObject("userInfo",vm.userInfo);
      $state.go('teacher.paper');
    }
  }

  $scope.$watch("$ctrl.currentSpecialities",async function(){
    if ( !vm.currentSpecialities ){
      return;
    }
    let subjects = await http.get("GetAllSubject",{
      "spencialties":vm.currentSpecialities.specialitiesId
    });
    vm.subjects = subjects;
    vm.currentSubject = vm.subjects[0];
    $scope.$applyAsync(null);
  },true);
}