import {app} from "../../bootstrap.js"
export let name = "studentQuestionHistory";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentQuestionHistory/studentQuestionHistory.html",
    controller:["$scope","$element","$state",'$cookies',"http",controller]
  });
}
function controller($scope,$element,$state,$cookies,http){
	

}