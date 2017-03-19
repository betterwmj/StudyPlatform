<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
	<meta  charset="utf-8" />
	<title>无标题文档</title>
	<script src="js/angular.js"></script>
	<script src="js/jquery-3.2.0.min.js"></script>
	<link href="style/teacherpage.css" rel="stylesheet" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body ng-app="app" ng-controller="teacherController">
	 <div id="container"><!--页面层容器-->
	   <jsp:include page="head.jsp"/>
	 </div>   
	<div id="PageBody"><!--页面主体-->
		　<div id="Sidebar"><!--侧边栏-->
		<button name="choice" style="background-color:transparent;border:0 ; " ng-click="getTitle('选择题')"><font color="red"> 选择题</font></button>
		<button name="trueorfalse" style="background-color:transparent;border:0 ; " ng-click="getTitle('判断题')"><font color="red">判断题</font></button>
		</div>　　　
	</div>
	<select ng-model="currSubject">
		<option ng-repeat="item in subjects">{{item.SubjectName}}</option>
	</select>
	<div ng-repeat="item in titles">
	  {{item.title}}<br>
	  A {{item.optionA}}
	  B {{item.optionB}}
	  C {{item.optionC}}
	  D {{item.optionD}}
	</div>
	 
  <script>
    var app = angular.module("app",[]);
    app.controller("teacherController",["$scope","$http",function($scope,$http){
    	$scope.subjects = [];
    	$scope.currSubject = null;
    	$scope.titles = [];
    	$http({
    		url:"/XUEXI/GetAllSubject",method:"GET"
    	}).then(function(response){
    		$scope.subjects = response.data;
    		$scope.currSubject = $scope.subjects[0];
    	},function(response){
    		
    	});
    	$scope.getTitle = function(type){
    		$http({
        		url:"/XUEXI/GetTitle",method:"GET",params:{
        			"subject":$scope.currSubject,
        			"type":type
        		}
        	}).then(function(response){
        		$scope.titles = response.data;
        	},function(response){
        		
        	});
    	}
    }]);
  </script>


</body>
</html>