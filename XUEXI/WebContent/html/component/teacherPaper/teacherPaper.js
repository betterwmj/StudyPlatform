import {app} from "../../bootstrap.js"
export let name = "teacherPaper";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherPaper/teacherPaper.html",
    controller:["$scope","$element","$state",'$cookies',"$uibModal","http",controller]
  });
}
function controller($scope,$element,$state,$cookies,$uibModal,http){
  let vm = this;
  vm.paper = {
    papername:new Date().toLocaleString(),
    papertitles:[]
  };
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2}
  ];
  vm.currentType = vm.types[0];
  vm.questions = [];
  vm.allQuestion = [];
  vm.currentPage = 1;
  vm.pageItem = 5;
  vm.maxSize = 5;
  vm.msg = "";
  vm.$onInit = async function(){
    let rs = await getQuestions(1);
    $scope.$applyAsync(null);
  }

  vm.createPager = async function(){
    vm.msg = "";
    let result = await http.post("CreatePaper",vm.paper);
    if( result === true ){
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "创建试卷成功";}
        }
      });
    }else{
      $uibModal.open({
        animation: true,
        component: 'commonDialog',
        resolve: {
          content:()=>{ return "试卷创建失败";}
        }
      });
    }
    $scope.$applyAsync(null);
  };

  $scope.$watch('$ctrl.currentType',async ()=>{
      let rs = await getQuestions(vm.currentType.value);
      $scope.$applyAsync(null);
  },true);

  async function getQuestions(value){
    let result = await http.get("GetQuestions",{
      type:value
    });
    vm.allQuestion = result;
    mergeData();
    vm.allQuestion.forEach( (item)=>{
      if( "score" in item === false ){
        item.score = 5;
      }
    });
    getData();
    $scope.$applyAsync(null);
    return result;
  }

  function getData(){
    let newData = [];
    let start = (vm.currentPage-1)*vm.pageItem;
    for(let i = start; i < start+vm.pageItem; ++i){
      if( i >= vm.allQuestion.length ){
        vm.questions = newData;
        return;
      }
      newData.push( vm.allQuestion[i]);
    }
    vm.questions = newData;
  }

  vm.pageChanged = function(){
    getData();
  };

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
}