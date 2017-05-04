import {app} from "../../bootstrap.js"
export let name = "login";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/login/login.html",
    controller:["$scope","$element","$state",'$cookies',"http","$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$uibModal){
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
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return error;}
        }
      });
      return;
    }
    if( vm.remember ){
      result.password = vm.userInfo.password;
    }
    if(userData.type === 0 ){
      try {
          let classInfo = await http.get("GetClassNameByClassId",{classID:result.classId});
          result.classInfo = classInfo;
          $cookies.putObject("userInfo",result);
          $state.go("student.test");
      } catch (error) {
        $uibModal.open({
          animation: true,
          component: 'commonDialog',
          resolve: {
            content:()=>{ return "获取学生班级信息异常";}
          }
        });
      }
    }else{
      $cookies.putObject("userInfo",result);
      $state.go("teacher.paper");
    }
  }

  function loginCheck(){
    vm.loginResultMsg = false;
    vm.errorMsg = {
      userName:false,
      password:false
    };
    if(vm.userInfo.userName === ""){
      vm.errorMsg.userName = "用户名不能为空";
      return false;
    }
    if(vm.userInfo.password === ""){
      vm.errorMsg.password = "密码不能为空";
      return false;
    }
    return true;
  }
}