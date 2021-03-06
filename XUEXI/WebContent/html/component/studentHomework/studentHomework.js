import {app} from "../../bootstrap.js"
export let name = "studentHomework";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomework/studentHomework.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subjects = [];
  vm.$onInit = async function(){
    try {
      vm.subjects = await http.get("GetAllSubject");
      let result =[];
      vm.subject = {
	        SubjectName:$stateParams.SubjectName,
	        SubjectID:$stateParams.SubjectID,
    	      
    	};
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
      }
      vm.subjects  = result;
 
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
  }
  $scope.$on("ready_back",function(){
	  $state.go("student.studentIndex");
  });
  
}