import {app} from "../../bootstrap.js"
export let name = "teacherAssignStudent";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherAssignStudent/teacherAssignStudent.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    vm.userInfo = $cookies.getObject("userInfo");
    let classes = await http.get("GetTeacherClasses");
    vm.classes = classes;
    vm.currentClass = vm.classes[0];
    let students = await http.get("GetStudents");
    vm.students = students;
    $scope.$applyAsync(null);
  }
  vm.toAssign = async function(){
    vm.msg = "";
    let data = {
      classId:vm.currentClass.classId,
      studentIds:[],
    };
    vm.students.forEach( (student)=>{
      if( student.isCheck === true){
        data.studentIds.push(student.userID);
      }
    });
    let result = await http.post('AssignStudent',data);
    if(result === true){
       vm.msg ="分配班级成功";
    }
    else if( result === false ){
      vm.msg = "分配班级失败";
    }else{
      let students =vm.students.find( (item) =>{
    	  return result.userID === item.userID;
      });
      vm.msg = students.realName+"已加入该班级";
    }
    $scope.$applyAsync(null);
  }
}