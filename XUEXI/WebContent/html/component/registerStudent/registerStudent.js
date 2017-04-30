import {app} from "../../bootstrap.js"
export let name = "registerStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerStudent/registerStudent.html",
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
    school:"",
    telephone:"",
  };
  vm.register = async function(){
    if( check() === false ){
      return;
    }
    try {
      let result = await http.post("StudentRegister",
        $httpParamSerializerJQLike({
          userName:vm.userInfo.userName,
          realName:vm.userInfo.realName,
          password:vm.userInfo.password,
          school:vm.userInfo.school,
          telephone:vm.telephone
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

  function check(){
    let msg = "";
    if(vm.userInfo.userName.trim() === ""){
      msg = "用户名不能为空";
    }else if(vm.userInfo.realName.trim() === ""){
      msg = "真实姓名不能为空";
    }else if( vm.userInfo.password.trim() === "" ){
      msg = "密码不能为空";
    }else if( vm.userInfo.rePassword !== vm.userInfo.password ){
      msg = "两次输入密码不一致";
    }else if( vm.userInfo.school.trim() === "" ){
      msg = "学校不能为空";
    }else if( vm.userInfo.telephone.trim() === "" ){
      msg = "手机号不能为空";
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