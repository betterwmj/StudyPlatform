import {app} from "../../bootstrap.js"
export let name = "studentQuestionHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentQuestionHistory/studentQuestionHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	let vm = this;
  vm.$onInit = async function(){
    try {
      vm.questionList = await http.get("GetStudentQuestion");
    } catch (error) {
      http.alert({
        parent:$element,content:"获取历史数据失败"
      });
    }
  };
}