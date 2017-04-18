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
    let subjects = await http.get("GetClassSubject");
    let group = [];
    let temp = [];
    let len = 3;
    for(let i = 0 ; i<subjects.length; ++i){
      temp.push(subjects[i]); 
      if( temp.length ==3 || i === subjects.length-1){
        group.push(temp);
        temp = [];
      }
    }
    vm.subjects = group;
    $scope.$applyAsync(null);
  }
}