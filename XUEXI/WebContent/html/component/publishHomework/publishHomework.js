import {app} from "../../bootstrap.js"
export let name = "publishHomework";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishHomework/publishHomework.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  $scope.$on("ready_back",function(){
    $state.go("teacher.homeWorkHistory",{
    	currentPage : vm.currentPage,
	    pageItems :   vm.pageItems ,
	    totalpage :   vm.totalpage
    });
    
  });
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    vm.homework = {
      homeId:$stateParams.homeworkId
    };
    vm.currentPage = $stateParams.currentPage;
    vm.pageItems = $stateParams.pageItems;
    vm.totalpage = $stateParams.totalpage;
    vm.subjectId = $stateParams.subjectId;
    try {
      vm.classes = await http.get("GetTeacherSubjectClass",{subjectId:vm.subjectId});
    } catch (error) {
      http.alert({
        parent:$element,content:"获取教师班级信息异常"
      });
    }
  }
  vm.publish = async function(){
    let data = {
      homeworkID:vm.homework.homeId,
      classesID:[]
    };
    vm.classes.forEach( (item)=>{
      if( item.isCheck){
        data.classesID.push({classId:item.classId});
      }
    });
    try {
      let result = await http.post("PublishHomework",data);
      if(result === true){
        let dialog = http.alert({
          arent:$element,content:"作业发布成功"
        });
        dialog.then(function(){
          $state.go("teacher.homeWorkHistory",{
        	 currentPage : vm.currentPage,
      	    pageItems :   vm.pageItems ,
      	    totalpage :   vm.totalpage
          });
          
        });
      }else{
        http.alert({
          arent:$element,content:"作业发布失败"
        });
      }
    } catch (error) {
      http.alert({
        arent:$element,content:"作业发布失败"
      });
    }
  }
}