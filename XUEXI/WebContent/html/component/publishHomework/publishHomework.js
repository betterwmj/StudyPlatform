import {app} from "../../bootstrap.js"
export let name = "publishHomework";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/publishHomework/publishHomework.html",
    controller:["$scope","$element","$state",'$cookies',"http","$stateParams",controller]
  });
}
function controller($scope,$element,$state,$cookies,http,$stateParams){
  let vm = this;
  vm.msg = "";
  vm.$onInit = async function(){
    vm.homework = $stateParams.homework;
    console.log($stateParams);
    vm.classes = await http.get("GetTeacherClasses");
    $scope.$applyAsync(null);
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
        vm.msg = "试卷发布成功";
      }else{
        vm.msg = "试卷发布失败";
      }
      $scope.$applyAsync(null);
    } catch (error) {
      vm.msg = "试卷发布失败";
      $scope.$applyAsync(null);
    }
  }
}