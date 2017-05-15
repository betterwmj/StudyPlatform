import {app} from "../../bootstrap.js"
export let name = "teacheronlineHistoryAnswer";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacheronlineHistoryAnswer/teacheronlineHistoryAnswer.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
	$scope.$on("ready_back",function(){
    $state.go("teacher.onlineanswerNavigation");
  });
  let vm = this;
  vm.currentPage=1;
	vm.pageItems =7;
	vm.previousPage =previousPage;
	vm.nextPage =nextPage;
  vm.questionsList=null;
  vm.$onInit = async function(){
	  if($stateParams.currentPage!==null){
		  vm.currentPage = $stateParams.currentPage;
		  vm.pageItems = $stateParams.pageItems;
		  vm.totalpage = $stateParams.totalpage;
	  }
	  getTeacherQuestion();
  }
  async function  getTeacherQuestion(){
		try{	
		     let result = await http.get("GetStudentQuestion",{
		    	currentPage:vm.currentPage,
				pageItems:vm.pageItems
		      });
				vm.questionsList = result;
				if(result.length!==0){
					vm.questionsList.totalpage =Math.ceil(result[0].count/vm.pageItems);
					vm.questionsList.forEach( async (item)=>{
				   	item.createTime =new Date(item.createTime.time);
				   	let studentInfo = await http.get("GetStudents",{
							userID:item.studentId
				   	});
				   	if(studentInfo.length!==0){
							item.studentName =studentInfo[0].realName;
						}
					});
				}
	  }catch (error) {
	      http.alert({
					parent:$element,content:"获取历史数据失败"
				});
	  }
	}
   function previousPage(){
		vm.currentPage--;
		getTeacherQuestion();
	}
	function nextPage(){
		vm.currentPage++;
		getTeacherQuestion();
	}	
}