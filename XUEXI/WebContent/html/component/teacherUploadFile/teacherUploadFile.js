import {app} from "../../bootstrap.js"
export let name = "teacherUploadFile";
export default function root(app){
  app.component(name,{
    templateUrl:"./component/teacherUploadFile/teacherUploadFile.html",
    controller:["$scope","$rootScope","$element","$state",'$cookies','$transitions',"http",controller]
  });
}
function controller($scope,$rootScope,$element,$state,$cookies,$transitions,http){
      let vm = this;
      vm.progress =0;
	  vm.$onInit = function(){
		
            let fileInputs = findFileInput();
            fileInputs.eq(0).bind("change",onSelectFile);
		    
	   }
		 function findFileInput(){
		       return angular.element(document.getElementsByClassName("js_file"));
		  }
		   vm.uploadFile = async function(){
			   let uploadFile=[];
			   uploadFile = findFileInput();
		       let file=[];
		       for(var i=0;i<uploadFile.length;i++){
		           if(uploadFile[i].files[0]!==undefined){
		                file.push(uploadFile[i].files[0]);
		           } 
		       }
		       let formData = new FormData();
		       for(var i=0;i<file.length;i++){
		           formData.append("uploadFile"+i,file[i]);
		           formData.append("isImg",false);
		       } 
			   try {

				   if(file.length!=0){
					   let result = await http.submitForm("UploadFile",formData,{     
		                    progress: 
		                      function(e){
			                        if (e.lengthComputable) {
			                        	vm.progress=Math.round(((e.loaded / e.total) * 100 ));
			                        }
		                      }      	
			                
			            });
					   if(result!=null){
						   
						   http.alert({
						          parent:$element,content:"上传文件成功"
						   });
					   }
					   
				   }
			   } catch (error) {
				   console.log(error);
				   http.alert({
				          parent:$element,content:"上传文件失败"
				   });
			   }
		       
		   }
		   function onSelectFile(event){
		       let files=event.target.files;
		       if( files.length === 0 ){
		           return;
		       }
		       let file = files[0];
		       let reader = new FileReader();
		       reader.onload = function(e) { 
		         
		       }; 
		       reader.readAsDataURL(file);
		   }
		   $scope.$on("ready_back",function(){
		        $state.go("teacher.teacherIndex");
		   	       
		    });
		  
}