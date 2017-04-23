import {app} from "../../bootstrap.js"
export let name = "studentSidebar";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/studentSidebar/studentSidebar.html",
    controller:["$scope","$rootScope","$element","$state",'$cookies','$transitions',"http",controller]
  });
}
function controller($scope,$rootScope,$element,$state,$cookies,$transitions,http){
  let vm = this;
  vm.isActive = null;
  vm.$onInit = function(){
    changeActive($state.current.name);
    vm.isActive = $rootScope.studentActive;
    $transitions.onEnter({ entering: '*.*' }, function(transition, state) {
      changeActive(state.name);
    });
  }

  function changeActive(stateName){
    switch (stateName){
      case "student.test":
        $rootScope.studentActive = [false,false,false,false]; 
        $rootScope.studentActive[0] = true;
      break;
      case "student.homework":
        $rootScope.studentActive = [false,false,false,false]; 
        $rootScope.studentActive[1] = true;
      break;
      case "student.onlineQuestion":
        $rootScope.studentActive = [false,false,false,false]; 
        $rootScope.studentActive[2] = true;
      break;
      case "student.center":
        $rootScope.studentActive = [false,false,false,false]; 
        $rootScope.studentActive[3] = true;
      break;
    }
  }
}