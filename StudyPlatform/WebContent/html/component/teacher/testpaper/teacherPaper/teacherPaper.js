import {app} from "../../../../bootstrap.js"
export let name = "teacherPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacher/testpaper/teacherPaper/teacherPaper.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  $scope.$on("ready_back",function(){
    $state.go("teacher.paper");
  });
  let vm = this;
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2},
    {label:"简答题",value:3}
  ];
  vm.currentType = 1;
  vm.questions = [];
  vm.allQuestion = [];
  vm.currentPage = 1;
  vm.pageItem = 5;
  vm.maxSize = 5;
  vm.msg = "";
  vm.currentSubject = null;
  vm.subjectlist =null;
  vm.currentPage=1;
  vm.pageItems =5;
  vm.previousPage =previousPage;
  vm.nextPage =nextPage;
  vm.$onInit = async function(){
    try {
      vm.subjectlist = await http.get("GetTeacherSubject");
      if( vm.subjectlist.length !== 0){
        vm.currentSubject = vm.subjectlist[0].SubjectID;
        vm.getQuestionByType();
      }  
    } catch (error) {
      http.alert({
        parent:$element,content:"初始化页面异常"
      });
    }
    
  }
  vm.paper = {
    subjectId :null,
    papername:new Date().toLocaleString(),
    papertitles:[]
  };
  vm.createPager = function(){
    vm.msg = "";
    let count = vm.paper.papertitles.length;
    let totalScore = 0;
    vm.paper.subjectId = vm.currentSubject;
    vm.paper.papertitles.forEach((item)=>{
      totalScore += item.score;
    });
    if( count === 0 || totalScore === 0 ){
      http.alert({
        parent:$element,content:"请选择题目且合理配置试卷分数"
      });
      return;
    }
    if(totalScore!==100){
    	http.alert({
            parent:$element,content:"试卷总分需为100分!,目前为"+totalScore+"分"
        });
    	 return;
    }
    
    let dialog = http.confirm({
        parent:$element,content:"确定创建试卷?共"+count+"道题,共"+totalScore+"分"
    });
    dialog.then(async function(){
      try {
        let result = await http.post("CreatePaper",vm.paper);
        http.alert({
          parent:$element,content:"创建试卷成功"
        }).then(function(){
          $state.go("teacher.publishPaper");
        },function(){
          $state.go("teacher.publishPaper");
        });
      } catch (error) {
        http.alert({
          parent:$element,content:"创建试卷失败"
        });
      }
    },function(){

    });
  };
 function previousPage(){
		vm.currentPage--;
		getQuestions();
	}
	function nextPage(){
		vm.currentPage++;
		getQuestions();
	}	
  vm.getQuestionByType = async function(){
	  if( vm.subjectlist.length!==0){
		  let rs = await getQuestions();
	  } 
  }
  vm.getQuestionBySubject =async function(){
	  if( vm.subjectlist.length!==0){
	    let rs = await getQuestions();
	  }
  }

  vm.append = function(question){
    if( question.isChecked === true ){
      vm.paper.papertitles.push({
        itemId:question.itemId,
        score:question.score
      });
    }else{
      vm.paper.papertitles = vm.paper.papertitles.filter( (item)=>{
        return item.itemId !== question.itemId;
      });
    }
  }

  vm.questionScoreChange = function(question){
    let find = vm.paper.papertitles.find(function(item){
      return item.itemId === question.itemId;
    });
    if( find ){
      find.score = question.score;
    }
  }

  function mergeData(){
    vm.allQuestion.map( (item)=>{
      let find = vm.paper.papertitles.find( (tItem)=>{
        return tItem.itemId === item.itemId
      });
      if( find ){
        item.isChecked = true;
        item.score = find.score;
      }
    });
  }

  async function getQuestions(){
    let result = null;
   try {
      result = await http.get("GetQuestions",{
    	subjectId:vm.currentSubject,
        type:vm.currentType,
        currentPage:vm.currentPage,
		pageItems:vm.pageItems
        
      });
      vm.allQuestion = result;
      if(vm.allQuestion.length===0){
    	  vm.allQuestion.totalpage=0;
		}
      if( vm.allQuestion.length!==0){
    	  vm.allQuestion.totalpage =Math.ceil(vm.allQuestion[0].count/vm.pageItems);
      }
      mergeData();
      vm.allQuestion.forEach( (item)=>{
        if( "score" in item === false ){
          item.score = 5;
        }
      });
      
    } catch (error) {
      http.alert({
        parent:$element,content:"获取题目数据异常"
      });
    }
    return result;
  }

}