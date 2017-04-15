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
    let specialitiesList = await http.get("GetSpecialities");
    vm.specialitiesList = specialitiesList;
    vm.currentSpecialities = vm.specialitiesList[0];
    let students = await http.get("GetStudents");
    vm.students = students;
    $scope.$applyAsync(null);
  }

  $scope.$watch("$ctrl.currentSpecialities",async function(){
    if ( !vm.currentSpecialities ){
      return;
    }
    let classes = await http.get("GetClasses",{
      "spencialitiesID":vm.currentSpecialities.specialitiesId
    });
    vm.classes = classes;
    vm.currentClass = vm.classes[0];
    $scope.$applyAsync(null);
  },true);

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
    if( result === true ){
      vm.msg = "分配班级成功";
    }else{
      vm.msg = "分配班级失败";
    }
    $scope.$applyAsync(null);
  }
}