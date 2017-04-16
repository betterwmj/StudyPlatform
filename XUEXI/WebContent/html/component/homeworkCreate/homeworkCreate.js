import {app} from "../../bootstrap.js"
export let name = "homeworkCreate";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/homeworkCreate/homeworkCreate.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
  let vm = this;
  vm.types = [
    {label:"选择题",value:1},
    {label:"判断题",value:2},
    {label:"简答题",value:3}
  ];
  let temp = {
    "type":vm.types[0],
    "title":"",
    "answer":'',
    "options":[
      {
        "optionA":'',
        "optionB":'',
        "optionC":'',
        "optionD":''
      }
    ]
  };
  vm.questions = [];
  vm.currentQuestion = Object.assign({},temp);
  vm.currentQuestion.type = vm.types[0];
  vm.questions.push( vm.currentQuestion );
  vm.currIndex = 0;
  vm.$onInit = function(){

  };
  vm.upItem = function(){
    if( vm.currIndex === 0) {
      return;
    }
    --vm.currIndex;
    vm.currentQuestion = vm.questions[vm.currIndex];
  };
  vm.createNextQuestion = function(){
    ++vm.currIndex;
    if( vm.questions[vm.currIndex] ){
      vm.currentQuestion = vm.questions[vm.currIndex];
    }else{
      let itemTemp = Object.assign({},temp);
      itemTemp.type = vm.types[0];
      vm.questions.push(itemTemp);
      vm.currentQuestion = itemTemp;
    }
  };

  vm.createHomework = function(){
    let questionList = [];
    vm.questions.forEach( ()=>{
      
    });
  }
}