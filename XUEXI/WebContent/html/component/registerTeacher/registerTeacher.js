import {app} from "../../bootstrap.js"
export let name = "registerTeacher";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerTeacher/registerTeacher.html",
    controller:["$scope","$element","$state",'$cookies',"http",'$httpParamSerializerJQLike',"$uibModal",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$httpParamSerializerJQLike,$uibModal){
  let vm = this;
  vm.userInfo = {
    userName:"",
    realName:"",
    password:"",
    rePassword:"",
    subjectID:"",
  };
  vm.register = async function(){
    if( checkRegister() === false ){
      return;
    }
    try {
      let result = await http.post("TeacherRegister",
        $httpParamSerializerJQLike({
          userName:vm.userInfo.userName,
          realName:vm.userInfo.realName,
          password:vm.userInfo.password,
        }),
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        });
      if( result === true ){
        $state.go('login');
      }
    } catch (error) {
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "注册失败,"+error;}
        }
      });
    }
  }
  function checkRegister(){
    let msg = "";
    if( vm.userInfo.userName.trim() === ""){
      msg = "请输入用户名";
    }else if( vm.userInfo.realName.trim() === "" ){
      msg = "请输入真实姓名";
    }else if( vm.userInfo.password.trim() === "" ){
      msg = "请输入密码";
    }else if( vm.userInfo.password !== vm.userInfo.rePassword ){
      msg = "两次输入密码不一样";
    }
    if( msg === ""){
      return true;
    }else{
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return msg;}
        }
      });
      return false;
    }
  }
}