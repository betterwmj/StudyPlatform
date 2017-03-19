<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
	<meta  charset="utf-8" />
	<title>无标题文档</title>
	<script src="/XUEXI/js/angular.js"></script>
	<script src="/XUEXI/js/jquery-3.2.0.min.js"></script>
	<link href="/XUEXI/style/teacherpage.css" rel="stylesheet" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body ng-app="app" ng-controller="teacherController" ng-init="init()">
	 <div id="container"><!--页面层容器-->
	   <jsp:include page="head.jsp"/>
	 </div>
	 班级名称:<input type="text" ng-model="className"> <button ng-click="createClass()">创建班级</button>
</body>
<script>
var app = angular.module("app",[]);
app.controller("teacherController",["$scope","$http",function($scope,$http){
	$scope.className = "";
	$scope.students = [];
	$scope.init = function(){
		$http({
    		url:"/XUEXI/GetStudent",method:"GET",
    	}).then(function(response){
    		$scope.students = response.data;
    	},function(response){
    		window.alert(response);
    	});
	};
	$scope.createClass = function(){
		if( $scope.className === "" ){
			window.alert("请输入班级名称");
			return;
		}
		$http({
    		url:"/XUEXI/CreateClass",method:"GET",params:{"className":$scope.className}
    	}).then(function(response){
    		if( response.data === "true"){
    			window.alert("添加班级成功");
    		}
    	},function(response){
    		window.alert(response);
    	});
	};
}]);
</script>
</html>