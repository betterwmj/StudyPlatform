import {app} from "../../bootstrap.js"
export let name = "registerStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/registerStudent/registerStudent.html",
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
    school:"",
    telephone:"",
  };
  vm.register = async function(){
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
  }

  function check(){
    
  }
}