import { app } from "../../bootstrap.js"
export let name = "teacherOnlineAnswerDetail";
export default function root(app) {
	app.component(name, {
		templateUrl: "./component/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.html",
		controller: ["$scope", "$cookies", "$element", "$state", "http", "$stateParams","$mdDialog", controller]
	});
}
function controller($scope, $cookies, $element, $state, http, $stateParams,$mdDialog ) {
	let vm = this;
	vm.$onInit = init;
	vm.isShow = false;
	vm.replyList = null;
	vm.onlineQuesionsDetail = null;
	vm.currentClass = null;
	vm.isHistroy = null;
	vm.imgUrl = null;
	vm.postReply = postReply;
	vm.currentReplyPage =1;
	vm.replyPageItem=7;
	vm.previousPage =previousPage;
	vm.nextPage =nextPage;
	function init() {
		vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail;
		vm.currentClass = $stateParams.currentClass;
		vm.isHistroy = $stateParams.isHistroy;
		vm.currentPage = $stateParams.currentPage;
		vm.pageItems = $stateParams.pageItems;
		vm.totalpage = $stateParams.totalpage;
		vm.userinfo = $cookies.getObject("userInfo");
		vm.userinfoId = parseInt("10", vm.userinfo.id);
		getQuestionReply();
		let imgInput = document.getElementsByClassName("js_reply_imgs")[0];
		angular.element(imgInput).bind("change", onSelectImg);
	}
	vm.showReply = function () {
		vm.isShow = !vm.isShow;
		vm.msg = "";
	}
	vm.goToImgUrl = function (img) {
		http.imgDialog(img);
		//window.open(img);
	}
	function previousPage(){
		vm.currentReplyPage--;
		getQuestionReply();
	}
	function nextPage(){
		vm.currentReplyPage++;
		getQuestionReply();
	}	
	async function postReply() {
		let content = vm.answerContent;
		if (content === null || content === "" || content === undefined) {
			http.alert({
				parent: $element, content: "请输入内容"
			});
			return;
		}
		http.wait();
		let userInfo = $cookies.getObject("userInfo");
		let data = {
			answer: vm.answerContent,
			questionID: $stateParams.onlineQuestionsDetail.id,
			img: "",
			answerID: userInfo.id,
			type: userInfo.type
		};
		let imgInput = document.getElementsByClassName("js_reply_imgs")[0];
		if (imgInput.files.length > 0) {
			try {
				let formData = new FormData();
				formData.append("img", imgInput.files[0]);
				let imgResult = await http.submitForm("UploadImage", formData);
				data.img = imgResult;
			} catch (error) {
				$mdDialog.hide();
				http.alert({
					parent: $element, content: "图片上传失败"
				});
				return;
			}
		}
		try {
			let result = await http.post('ReplyStudentQuestion', data);
			if (result === true) {
				$mdDialog.hide();
				http.alert({
					parent: $element, content: "回复成功"
				})
				.then(function(){
					vm.answerContent = "";
					imgInput.value = "";
					document.getElementsByClassName("js_reply_img_preview")[0].src = "";
					vm.isShow = false;
				});
				getQuestionReply();
			} else {
				$mdDialog.hide();
				http.alert({
					parent: $element, content: "回复失败"
				});
			}
		} catch (error) {
			$mdDialog.hide();
			http.alert({
				parent: $element, content: "回复失败"
			});
		}
	}

	async function getQuestionReply() {
		try {
			let result = await http.get('getQuestionAnswer', {
				questionID: vm.onlineQuesionsDetail.id ,
				currentPage:vm.currentReplyPage,
				pageItems:vm.replyPageItem
				});
			vm.replyList = result;
			if(result.length===0){
				vm.replyList.totalReplypage=0;
			}
			if(result.length!==0){
				vm.replyList.totalReplypage =Math.ceil(result[0].count/vm.replyPageItem);
				vm.replyList.forEach(async (item) => {
					item.answerTime = new Date(item.answerTime.time);
					if (item.type === 0) {
						let studentInfo = await http.get("GetStudents", {
							userID: item.answerId
						});
						if (studentInfo.length !== 0)
							item.realName = studentInfo[0].realName;
					} else {
						let teacherInfo = await http.get("GetTeachers", {
							userID: item.answerId
						});
						if (teacherInfo.length !== 0)
							item.realName = teacherInfo[0].realName;
					}
	
				});
			
			
			}
			
		} catch (error) {
			http.alert({
				parent: $element, content: "获取回复失败," + error
			});
			return;
		}
	}
	vm.deleleReply = async function (replyId, answerId) {
		let userinfo = $cookies.getObject("userInfo");
		if (parseInt("10", userinfo.id) === answerId) {
			let dialog = http.confirm({
				parent: $element, content: "是否删除?"
			});
			dialog.then(async function () {
				let result = await http.get('DeleteReply', { ReplyID: replyId });
				if (result === true) {

					getQuestionReply();
				} else {

					http.alert({
						parent: $element, content: "删除失败"
					});
				}
			}, function () {

			});
		}
	}
	function onSelectImg(event) {
		let img = document.getElementsByClassName("js_reply_img_preview")[0];
		let files = event.target.files;
		if (files.length === 0) {
			img.src = "";
			return;
		}
		let file = files[0];
		let reader = new FileReader();
		reader.onload = function (e) {
			img.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
	$scope.$on("ready_back", function () {
		if (vm.isHistroy === true) {
			$state.go("teacher.onlineHistoryAnswer",{
				currentPage : vm.currentPage,
			    pageItems :   vm.pageItems ,
			    totalpage :   vm.totalpage
			});
			
		} else {
			$state.go("teacher.onlineanswer", {
				currentClass: vm.currentClass,
				currentPage : vm.currentPage,
			    pageItems :   vm.pageItems ,
			    totalpage :   vm.totalpage
			});
		}
	});
}