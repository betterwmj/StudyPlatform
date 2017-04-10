import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state","http",controller]
  });
}
function controller($scope,$element,$state,http){
  let vm = this;
  vm.userInfo = {
    userName:"",
    password:"",
    type:"0"
  };
  
  vm.loginResultMsg = "";
  vm.login = login;
  vm.$onInit = function(){
    
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
    }
    $scope.$applyAsync(null);
  }
}