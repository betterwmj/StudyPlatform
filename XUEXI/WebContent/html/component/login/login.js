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
    vm.subjects = await http.get('GetAllSubject');
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
      //vm.loginResultMsg = error;
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return error;}
        }
      });
      $scope.$applyAsync(null);
      return;
    }
    if( vm.remember ){
      result.password = vm.userInfo.password;
    }
    if(userData.type === 0 ){
      $cookies.putObject("userInfo",result);
      $state.go("student.test");
    }else{
      vm.subjects.forEach( (subject)=>{
        if( subject.SubjectID === result.subjectId){
          result.subjectName = subject.SubjectName;
        }
      });
      $cookies.putObject("userInfo",result);
      $state.go("teacher.paper");
    }
    $scope.$applyAsync(null);
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