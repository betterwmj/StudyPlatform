import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.userInfo = {
    userName:"",
    password:"",
    type:"0"
  };
  vm.subjects = [];
  vm.loginResultMsg = "";
  vm.login = login;
  vm.$onInit = async function(){
    vm.subjects = await http.get('GetAllSubject');
  }

  async function login(){
    let userData = {};
    angular.copy(vm.userInfo,userData);
    userData.type = parseInt(userData.type);
    let result = null;
    try {
      result = await http.post("Login",userData);
    } catch (error) {
      vm.loginResultMsg = error;
      $scope.$applyAsync(null);
      return;
    }
    $cookies.putObject("userInfo",result);
    if(userData.type === 0 ){
      $state.go("student.test");
    }else{
      $state.go("teacher.paper");
    }
    $scope.$applyAsync(null);
  }
}