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
  vm.errorMsg = {
    userName:false,
    password:false
  };
  vm.subjects = [];
  vm.loginResultMsg = false;
  vm.remember = true;//是否记住密码
  vm.login = login;
  vm.$onInit = async function(){
    let userInfo = $cookies.getObject("userInfo");
    if( userInfo ){
      vm.userInfo.userName = userInfo.userName;
      vm.userInfo.password = userInfo.password;
    }
  }

  async function login(){
    if( false === loginCheck() ){
      return;
    }
    let userData = {};
    angular.copy(vm.userInfo,userData);
    userData.type = parseInt(userData.type);
    let result = null;
    try {
      result = await http.post("Login",userData);
    } catch (error) {
      http.alert({
        parent:$element,content:"登录失败,"+error
      });
      return;
    }
    if( vm.remember ){
      result.password = vm.userInfo.password;
    }
    if(userData.type === 0 ){
      $cookies.putObject("userInfo",result);
      $state.go("student.test");

    }else{
      $cookies.putObject("userInfo",result);
      $state.go("teacher.paper");
    }
  }

  function loginCheck(){
    if( !vm.userInfo.userName ){
      http.alert({
        parent:$element,content:"用户名不能为空"
      });
      return false;
    }
    if( !vm.userInfo.password ){
      http.alert({
        parent:$element,content:"密码不能为空"
      });
      return false;
    }
    vm.userInfo.userName = vm.userInfo.userName.trim();
    vm.userInfo.password = vm.userInfo.password.trim();
    if(!vm.userInfo.userName || vm.userInfo.userName === ""){
      http.alert({
        parent:$element,content:"用户名不能为空"
      });
      return false;
    }
    if(vm.userInfo.password === ""){
      vm.errorMsg.password = "密码不能为空";
      return false;
    }
    return true;
  }
}