import {app} from "../../bootstrap.js"
export let name = "teacherAssignStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherAssignStudent/teacherAssignStudent.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.center");
  });
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    try {
      vm.userInfo = $cookies.getObject("userInfo");
      vm.classes = await http.get("GetTeacherClasses");
      if( vm.classes.length > 0){
        vm.currentClass = vm.classes[0].classes.classId;
      }
      vm.students = await http.get("GetStudents");
    } catch (error) {
      http.alert({
        parent:$element,content:"加载数据异常"
      });
    }
  }
  vm.toAssign = async function(){
    vm.msg = "";
    let data = {
      classId:vm.currentClass,
      studentIds:[],
    };
    vm.students.forEach( (student)=>{
      if( student.isCheck === true){
        data.studentIds.push(student.userID);
      }
    });
    let result = await http.post('AssignStudent',data);
    if(result === true){
      http.alert({
        parent:$element,content:"分配班级成功"
      });
    }
    else if( result === false ){
      http.alert({
        parent:$element,content:"分配班级失败"
      });
    }else{
      let students =vm.students.find( (item) =>{
    	  return result.userID === item.userID;
      });
      http.alert({
        parent:$element,content:students.realName+"已加入该班级"
      });
    }
  }
}