import {app} from "../../bootstrap.js"
export let name = "teacherSidebar";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherSidebar/teacherSidebar.html",
    controller:["$scope","$rootScope","$element","$state",'$cookies','$transitions',"http",controller]
  });
}
function controller($scope,$rootScope,$element,$state,$cookies,$transitions,http){
  let vm = this;
  vm.isActive = null;
  vm.$onInit = function(){
    changeActive($state.current.name);
    vm.isActive = $rootScope.teacherActive;
    $transitions.onEnter({ entering: '*.*' }, function(transition, state) {
      changeActive(state.name);
    });
  }

  function changeActive(stateName){
    switch (stateName){
      case "teacher.paper":
        $rootScope.teacherActive = [false,false,false,false]; 
        $rootScope.teacherActive[0] = true;
      break;
      case "teacher.homework":
        $rootScope.teacherActive = [false,false,false,false]; 
        $rootScope.teacherActive[1] = true;
      break;
      case "teacher.onlineanswer":
        $rootScope.teacherActive = [false,false,false,false]; 
        $rootScope.teacherActive[2] = true;
      break;
      case "teacher.center":
        $rootScope.teacherActive = [false,false,false,false]; 
        $rootScope.teacherActive[3] = true;
      break;
    }
  }
}