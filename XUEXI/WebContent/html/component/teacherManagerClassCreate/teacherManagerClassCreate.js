import {app} from "../../bootstrap.js"
export let name = "teacherManagerClassCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherManagerClassCreate/teacherManagerClassCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.classInfo = {  
    className:"",
  };
  vm.msg = "";
  vm.$onInit = async function(){
    vm.userInfo = $cookies.getObject("userInfo");
    let specialitiesList = await http.get("GetSpecialities");
    vm.specialitiesList = specialitiesList;
    vm.currentSpecialities = vm.specialitiesList[0];
    $scope.$applyAsync(null);
  }
   
  vm.create = async function(){
    vm.msg = "";
    let result = await http.get("CreateClass",{
      className:vm.classInfo.className,
      spencialitiesID:vm.currentSpecialities.specialitiesId
    });
    console.log(result);
    if( result === true ){
      vm.msg = "班级创建成功";
    }else{
      vm.msg = "该班级已存在,您可选择加入该班级";
    }
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
  vm.addClass=async function(){
	  let result = await http.get("AddClass",{
		  "classID":vm.currentClass.classId
	  });
	  if( result == true){
		   vm.msgadd="加入该班级成功";
	  }else{
		   vm.msgadd="你已加入该班";
	  }
	  
	  
	  $scope.$applyAsync(null);
  }
  
}