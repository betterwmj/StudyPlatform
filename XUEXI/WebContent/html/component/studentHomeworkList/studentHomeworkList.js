import {app} from "../../bootstrap.js"
export let name = "studentHomeworkList";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentHomeworkList/studentHomeworkList.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.homeworkListUnFinish = [];
  vm.homeworkListFinish = [];
  vm.currentUnfinishPage=1;
  vm.pageItems =5;
  vm.currentFinishPage=1;
 vm.previousFinishPage =previousFinishPage;
 vm.nextFinishPage =nextFinishPage;
 vm.previousUnfinishPage=previousUnfinishPage;
 vm.nextUnfinishPage=nextUnfinishPage;
 vm.homeworkFinishTemp =[];
  vm.homeworkUnfinishTemp=[];
  vm.$onInit = async function(){
      try {
    	   vm.subject = {
  		        SubjectName:$stateParams.SubjectName,
  		        SubjectID:$stateParams.SubjectID
  	      };   
        
        if($stateParams.currentUnfinishPage!=null){	  
      	    vm.currentUnfinishPage=$stateParams.currentUnfinishPage;
            vm.pageItems=$stateParams.pageItems;
        }
        if($stateParams.currentFinishPage!=null){	  
      	  vm.currentFinishPage=$stateParams.currentFinishPage;
            vm.pageItems=$stateParams.pageItems;
            vm.selectedIndex =1
        }
        let rs = await getHomeWork();
      } catch (error) {
        http.alert({
          parent:$element,content:"初始化页面异常"
        });
      }
    
  }
  function previousFinishPage(){
		vm.currentFinishPage--;
		getFinishData();
	}
	function nextFinishPage(){
		vm.currentFinishPage++;
		getFinishData();
	}	
	function previousUnfinishPage(){
		vm.currentUnfinishPage--;
		getUnFinishData();
   }
   function nextUnfinishPage(){
		vm.currentUnfinishPage++;
		getUnFinishData();
   }

  async function  getHomeWork(){
	    vm.homeworkList = await http.get("GetHomework",{
	        subjectId:vm.subject.SubjectID
	      });
	      vm.homeworkList.forEach( (item)=>{
	        item.finishTime = new Date(item.finishTime.time);
	      });
	      vm.homeworkResults = await http.get("GetHomeworkResult");
	      vm.homeworkList.forEach( (homework)=>{
	        let find = vm.homeworkResults.find( (result)=>{
	          return homework.homeId === result.homework.homeworkId
	        });
	        if( find ){
	          vm.homeworkListFinish.push(homework);
	        }else{
	          vm.homeworkListUnFinish.push(homework);
	        }
	      });
        if(vm.homeworkListFinish.length===0){
          vm.homeworkFinishTemp=vm.homeworkListFinish;
          vm.homeworkFinishTemp.totalpage=0; 	
        } else{
          
          vm.homeworkFinishTemp=vm.homeworkListFinish;
          vm.homeworkFinishTemp.totalpage =Math.ceil( vm.homeworkFinishTemp.length/vm.pageItems);
          getFinishData();
        }  
        if(vm.homeworkListUnFinish.length===0){
          vm.homeworkUnfinishTemp=vm.homeworkListUnFinish;
          vm.homeworkUnfinishTemp.totalpage=0;
        }else{
            vm.homeworkUnfinishTemp=vm.homeworkListUnFinish;
            vm.homeworkUnfinishTemp.totalpage =Math.ceil( vm.homeworkUnfinishTemp.length/vm.pageItems);
            getUnFinishData();
        }  
  }
   function getFinishData(){
	    let newData = [];
	    let start = (vm.currentFinishPage-1)*vm.pageItems;
	    console.log("start"+start);
	    for(let i = start; i < start+vm.pageItems; ++i){
	      if( i >= vm.homeworkFinishTemp.length ){
	        vm.homeworkListFinish = newData;
	        return;
	      }
	      newData.push( vm.homeworkFinishTemp[i]);
	    }
	    vm.homeworkListFinish = newData;
  }
  function getUnFinishData(){
	    let newData = [];
	    let start = (vm.currentUnfinishPage-1)*vm.pageItems;
	    for(let i = start; i < start+vm.pageItems; ++i){
	      if( i >= vm.homeworkUnfinishTemp.length ){
	        vm.homeworkListUnFinish = newData;
	        return;
	      }
	      newData.push( vm.homeworkUnfinishTemp[i]);
	    }
	    vm.homeworkListUnFinish = newData;
	}
  $scope.$on("ready_back",function(){
    $state.go("student.homework");
  });
}