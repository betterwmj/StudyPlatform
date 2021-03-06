import {app} from "../../../../bootstrap.js"
export let name = "studentTest";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/student/paper/studentTest/studentTest.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subjects = [];
  $scope.$on("ready_back",function(){
    $state.go("student.studentIndex");
  });
  vm.$onInit = async function(){
    try {
        vm.subjects = await http.get("GetAllSubject");  
        let result =[];
        for( var i=0 ;i< vm.subjects.length;i++ ){
        	let flag =0;
        	for(var j=0;j<result.length;j++){
	        	if(result[j].SubjectID ===vm.subjects[i].SubjectID){
	        		flag=1;
	        		break;
	        	}
        	}
        	if(flag===0){
        		result.push(vm.subjects[i]);
        	} 	
        	console.log(result);
        }
        vm.subjects  = result;
        setColor();
    } catch (error) {
        http.alert({
            parent:$element,content:"初始化页面失败"
        });
    }
  }

  function setColor(){
    vm.subjects.forEach(function(item){
      item.color = http.getColor();
    });
  }
}