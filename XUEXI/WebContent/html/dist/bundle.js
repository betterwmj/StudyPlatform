webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.app = exports.dependent = exports.name = undefined;

var _angular = __webpack_require__(18);

var _angular2 = _interopRequireDefault(_angular);

var _angularCookies = __webpack_require__(37);

var _angularCookies2 = _interopRequireDefault(_angularCookies);

var _angularUiRouter = __webpack_require__(39);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _ngMaterial = __webpack_require__(38);

var _ngMaterial2 = _interopRequireDefault(_ngMaterial);

var _root = __webpack_require__(97);

var _root2 = _interopRequireDefault(_root);

var _commonDialog = __webpack_require__(83);

var _commonDialog2 = _interopRequireDefault(_commonDialog);

var _login = __webpack_require__(87);

var _login2 = _interopRequireDefault(_login);

var _tophead = __webpack_require__(132);

var _tophead2 = _interopRequireDefault(_tophead);

var _teacherIndex = __webpack_require__(123);

var _teacherIndex2 = _interopRequireDefault(_teacherIndex);

var _teacherIndexHead = __webpack_require__(122);

var _teacherIndexHead2 = _interopRequireDefault(_teacherIndexHead);

var _studentSidebar = __webpack_require__(111);

var _studentSidebar2 = _interopRequireDefault(_studentSidebar);

var _teacherSidebar = __webpack_require__(129);

var _teacherSidebar2 = _interopRequireDefault(_teacherSidebar);

var _registerStudent = __webpack_require__(95);

var _registerStudent2 = _interopRequireDefault(_registerStudent);

var _registerTeacher = __webpack_require__(96);

var _registerTeacher2 = _interopRequireDefault(_registerTeacher);

var _teacherCenter = __webpack_require__(117);

var _teacherCenter2 = _interopRequireDefault(_teacherCenter);

var _homeworkDetail = __webpack_require__(86);

var _homeworkDetail2 = _interopRequireDefault(_homeworkDetail);

var _teacherManagerClassCreate = __webpack_require__(124);

var _teacherManagerClassCreate2 = _interopRequireDefault(_teacherManagerClassCreate);

var _teacherAssignStudent = __webpack_require__(116);

var _teacherAssignStudent2 = _interopRequireDefault(_teacherAssignStudent);

var _teacherPaper = __webpack_require__(128);

var _teacherPaper2 = _interopRequireDefault(_teacherPaper);

var _teacherPaperNavigation = __webpack_require__(127);

var _teacherPaperNavigation2 = _interopRequireDefault(_teacherPaperNavigation);

var _publishPaper = __webpack_require__(94);

var _publishPaper2 = _interopRequireDefault(_publishPaper);

var _paperDetail = __webpack_require__(90);

var _paperDetail2 = _interopRequireDefault(_paperDetail);

var _paperResult = __webpack_require__(92);

var _paperResult2 = _interopRequireDefault(_paperResult);

var _paperResultDetail = __webpack_require__(91);

var _paperResultDetail2 = _interopRequireDefault(_paperResultDetail);

var _studentTest = __webpack_require__(115);

var _studentTest2 = _interopRequireDefault(_studentTest);

var _studentTestPaper = __webpack_require__(114);

var _studentTestPaper2 = _interopRequireDefault(_studentTestPaper);

var _studentTestPaperList = __webpack_require__(112);

var _studentTestPaperList2 = _interopRequireDefault(_studentTestPaperList);

var _teacherHomeworkNavigation = __webpack_require__(119);

var _teacherHomeworkNavigation2 = _interopRequireDefault(_teacherHomeworkNavigation);

var _homeworkCreate = __webpack_require__(85);

var _homeworkCreate2 = _interopRequireDefault(_homeworkCreate);

var _homeWorkHistory = __webpack_require__(84);

var _homeWorkHistory2 = _interopRequireDefault(_homeWorkHistory);

var _teacherHomeworkResultList = __webpack_require__(121);

var _teacherHomeworkResultList2 = _interopRequireDefault(_teacherHomeworkResultList);

var _teacherHomeworkResultDetail = __webpack_require__(120);

var _teacherHomeworkResultDetail2 = _interopRequireDefault(_teacherHomeworkResultDetail);

var _onlineAnswer = __webpack_require__(88);

var _onlineAnswer2 = _interopRequireDefault(_onlineAnswer);

var _teacherOnlineAnswerNavigation = __webpack_require__(126);

var _teacherOnlineAnswerNavigation2 = _interopRequireDefault(_teacherOnlineAnswerNavigation);

var _teacheronlineHistoryAnswer = __webpack_require__(131);

var _teacheronlineHistoryAnswer2 = _interopRequireDefault(_teacheronlineHistoryAnswer);

var _teacherClassStudent = __webpack_require__(118);

var _teacherClassStudent2 = _interopRequireDefault(_teacherClassStudent);

var _studentIndex = __webpack_require__(106);

var _studentIndex2 = _interopRequireDefault(_studentIndex);

var _studentIndexHead = __webpack_require__(105);

var _studentIndexHead2 = _interopRequireDefault(_studentIndexHead);

var _studentTestPaperResultDetail = __webpack_require__(113);

var _studentTestPaperResultDetail2 = _interopRequireDefault(_studentTestPaperResultDetail);

var _studentHomework = __webpack_require__(104);

var _studentHomework2 = _interopRequireDefault(_studentHomework);

var _studentHomeworkList = __webpack_require__(102);

var _studentHomeworkList2 = _interopRequireDefault(_studentHomeworkList);

var _studentHomeworkResultDetail = __webpack_require__(103);

var _studentHomeworkResultDetail2 = _interopRequireDefault(_studentHomeworkResultDetail);

var _onlineQuestion = __webpack_require__(89);

var _onlineQuestion2 = _interopRequireDefault(_onlineQuestion);

var _studentCenter = __webpack_require__(100);

var _studentCenter2 = _interopRequireDefault(_studentCenter);

var _teacherUserInfo = __webpack_require__(130);

var _teacherUserInfo2 = _interopRequireDefault(_teacherUserInfo);

var _publishHomework = __webpack_require__(93);

var _publishHomework2 = _interopRequireDefault(_publishHomework);

var _teacherOnlineAnswerDetail = __webpack_require__(125);

var _teacherOnlineAnswerDetail2 = _interopRequireDefault(_teacherOnlineAnswerDetail);

var _studentHomeworkDetail = __webpack_require__(101);

var _studentHomeworkDetail2 = _interopRequireDefault(_studentHomeworkDetail);

var _studentOnlineNavigation = __webpack_require__(108);

var _studentOnlineNavigation2 = _interopRequireDefault(_studentOnlineNavigation);

var _studentPostQuestion = __webpack_require__(109);

var _studentPostQuestion2 = _interopRequireDefault(_studentPostQuestion);

var _studentOnlineAnswerDetail = __webpack_require__(107);

var _studentOnlineAnswerDetail2 = _interopRequireDefault(_studentOnlineAnswerDetail);

var _studentQuestionHistory = __webpack_require__(110);

var _studentQuestionHistory2 = _interopRequireDefault(_studentQuestionHistory);

var _adminCenter = __webpack_require__(82);

var _adminCenter2 = _interopRequireDefault(_adminCenter);

var _schoolNews = __webpack_require__(99);

var _schoolNews2 = _interopRequireDefault(_schoolNews);

var _schoolNewsDetail = __webpack_require__(98);

var _schoolNewsDetail2 = _interopRequireDefault(_schoolNewsDetail);

var _http = __webpack_require__(135);

var _http2 = _interopRequireDefault(_http);

var _router = __webpack_require__(133);

var settingRouter = _interopRequireWildcard(_router);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "app";
//import angularUIBootstrap from "angular-ui-bootstrap";
var dependent = exports.dependent = ['ngCookies', 'ui.router', 'ngMaterial', 'ng'];
var app = exports.app = _angular2.default.module(name, dependent);
app.config(["$cookiesProvider", function ($cookiesProvider) {
		var curr = new Date().getTime();
		curr += 1000 * 60 * 60 * 24 * 120; //120天cookie过期
		$cookiesProvider.defaults.expires = new Date(curr);
}]);
(0, _schoolNews2.default)(app);
(0, _schoolNewsDetail2.default)(app);
(0, _commonDialog2.default)(app);
(0, _root2.default)(app);
(0, _login2.default)(app);
(0, _tophead2.default)(app);
(0, _teacherIndex2.default)(app);
(0, _teacherIndexHead2.default)(app);
(0, _studentSidebar2.default)(app);
(0, _teacherSidebar2.default)(app);
(0, _registerTeacher2.default)(app);
(0, _registerStudent2.default)(app);
(0, _teacherCenter2.default)(app);
(0, _homeworkDetail2.default)(app);
(0, _teacherManagerClassCreate2.default)(app);
(0, _teacherAssignStudent2.default)(app);
(0, _teacherPaper2.default)(app);
(0, _teacherPaperNavigation2.default)(app);
(0, _publishPaper2.default)(app);
(0, _paperResult2.default)(app);
(0, _http2.default)(app);
(0, _paperDetail2.default)(app);
(0, _paperResultDetail2.default)(app);
(0, _teacherHomeworkNavigation2.default)(app);
(0, _homeworkCreate2.default)(app);
(0, _homeWorkHistory2.default)(app);
(0, _teacherHomeworkResultList2.default)(app);
(0, _teacherHomeworkResultDetail2.default)(app);
(0, _onlineAnswer2.default)(app);
(0, _teacherOnlineAnswerDetail2.default)(app);
(0, _teacherOnlineAnswerNavigation2.default)(app);
(0, _teacheronlineHistoryAnswer2.default)(app);
(0, _teacherUserInfo2.default)(app);
(0, _teacherClassStudent2.default)(app);

(0, _studentIndex2.default)(app);
(0, _studentIndexHead2.default)(app);
(0, _studentTest2.default)(app);
(0, _studentTestPaperList2.default)(app);
(0, _studentTestPaper2.default)(app);
(0, _studentTestPaperResultDetail2.default)(app);
(0, _studentHomework2.default)(app);
(0, _onlineQuestion2.default)(app);
(0, _studentCenter2.default)(app);
(0, _studentHomeworkList2.default)(app);
(0, _publishHomework2.default)(app);
(0, _studentHomeworkDetail2.default)(app);
(0, _studentHomeworkResultDetail2.default)(app);
(0, _studentOnlineNavigation2.default)(app);
(0, _studentPostQuestion2.default)(app);
(0, _studentQuestionHistory2.default)(app);
(0, _studentOnlineAnswerDetail2.default)(app);
(0, _adminCenter2.default)(app);
app.config(["$stateProvider", settingRouter.routerConfig]);
app.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('blue').warnPalette('red').backgroundPalette('grey');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(41);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "adminCenter";
function root(app) {
	app.component(name, {
		templateUrl: "./component/adminCenter/adminCenter.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$httpParamSerializerJQLike", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $httpParamSerializerJQLike) {
	var init = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							vm.currentType = vm.types[0];
							_context.next = 3;
							return http.get("GetStudents");

						case 3:
							vm.userResult = _context.sent;

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		return function init() {
			return _ref.apply(this, arguments);
		};
	}();

	var updateStudentInfo = function () {
		var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(userinfo) {
			var data, result;
			return _regenerator2.default.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_context6.prev = 0;
							data = {
								"school_number": userinfo.school_number,
								"realName": userinfo.realName,
								"password": userinfo.password,
								"school": userinfo.school,
								"telephone": userinfo.telephone,
								"studentID": userinfo.userID
							};
							_context6.next = 4;
							return http.post("UpdateStudent", data);

						case 4:
							result = _context6.sent;

							if (result == true) {
								http.alert({
									parent: $element, content: "修改成功"
								});
							} else {
								http.alert({
									parent: $element, content: "修改失败"
								});
								vm.getUser();
							}
							_context6.next = 11;
							break;

						case 8:
							_context6.prev = 8;
							_context6.t0 = _context6["catch"](0);

							http.alert({
								parent: $element, content: "更新信息异常"
							});

						case 11:
						case "end":
							return _context6.stop();
					}
				}
			}, _callee6, this, [[0, 8]]);
		}));

		return function updateStudentInfo(_x) {
			return _ref6.apply(this, arguments);
		};
	}();

	var updateTeacherInfo = function () {
		var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(userinfo) {
			var data, result;
			return _regenerator2.default.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.prev = 0;
							data = {
								"teacher_number": userinfo.teacher_number,
								"realName": userinfo.realName,
								"password": userinfo.password,
								"teacherID": userinfo.userID
							};
							_context7.next = 4;
							return http.post("UpdateTeacher", data);

						case 4:
							result = _context7.sent;

							if (result == true) {
								http.alert({
									parent: $element, content: "修改成功"
								});
							} else {
								http.alert({
									parent: $element, content: "修改失败"
								});
								vm.getUser();
							}
							_context7.next = 11;
							break;

						case 8:
							_context7.prev = 8;
							_context7.t0 = _context7["catch"](0);

							http.alert({
								parent: $element, content: "更新信息异常"
							});

						case 11:
						case "end":
							return _context7.stop();
					}
				}
			}, _callee7, this, [[0, 8]]);
		}));

		return function updateTeacherInfo(_x2) {
			return _ref7.apply(this, arguments);
		};
	}();

	var vm = this;
	vm.userResult = null;
	vm.isStudent = true;
	vm.isTeacher = false;
	vm.userinfo = null;
	vm.isShow = false;
	vm.isShow2 = false;
	vm.isShow3 = false;
	vm.types = [{ label: "学生", value: 0 }, { label: "老师", value: 1 }];
	vm.$onInit = init;

	vm.getUser = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						if (!(vm.currentType.value === 0)) {
							_context2.next = 15;
							break;
						}

						vm.isStudent = true;
						vm.isTeacher = false;
						_context2.prev = 3;
						_context2.next = 6;
						return http.get("GetStudents");

					case 6:
						vm.userResult = _context2.sent;
						_context2.next = 13;
						break;

					case 9:
						_context2.prev = 9;
						_context2.t0 = _context2["catch"](3);

						http.alert({
							parent: $element, content: "获取学生信息失败," + _context2.t0
						});
						return _context2.abrupt("return");

					case 13:
						_context2.next = 28;
						break;

					case 15:
						if (!(vm.currentType.value === 1)) {
							_context2.next = 28;
							break;
						}

						vm.isStudent = false;
						vm.isTeacher = true;
						_context2.prev = 18;
						_context2.next = 21;
						return http.get("GetTeachers");

					case 21:
						vm.userResult = _context2.sent;
						_context2.next = 28;
						break;

					case 24:
						_context2.prev = 24;
						_context2.t1 = _context2["catch"](18);

						http.alert({
							parent: $element, content: "获取老师信息失败," + _context2.t1
						});
						return _context2.abrupt("return");

					case 28:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 9], [18, 24]]);
	}));
	vm.search = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
		var result;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						if (!(vm.user_number === "")) {
							_context3.next = 4;
							break;
						}

						vm.getUser();
						_context3.next = 10;
						break;

					case 4:
						if (vm.currentType.value === 0) {
							vm.isStudent = true;
							vm.isTeacher = false;
						} else {
							vm.isStudent = false;
							vm.isTeacher = true;
						}
						_context3.next = 7;
						return http.get("GetUserInfoByName", { user_number: vm.user_number, type: vm.currentType.value });

					case 7:
						result = _context3.sent;

						vm.userResult.splice(0, vm.userResult.length);
						vm.userResult.push(result);

					case 10:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));
	vm.addStudent = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
		var userResult, result;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return http.get("GetUserInfoByName", { user_number: vm.school_number, type: 0 });

					case 2:
						userResult = _context4.sent;

						if (!(userResult !== null)) {
							_context4.next = 7;
							break;
						}

						http.alert({
							parent: $element, content: "改学号已存在"
						});
						_context4.next = 11;
						break;

					case 7:
						_context4.next = 9;
						return http.post("StudentRegister", $httpParamSerializerJQLike({
							school_number: vm.school_number,
							realName: vm.studentRealName
						}), {
							'Content-Type': 'application/x-www-form-urlencoded'
						});

					case 9:
						result = _context4.sent;

						if (result === true) {
							vm.getUser();
							alert("添加学生成功");
						}

					case 11:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, this);
	}));
	vm.addTeacher = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
		var userResult, result;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.next = 2;
						return http.get("GetUserInfoByName", { user_number: vm.teacher_number, type: 1 });

					case 2:
						userResult = _context5.sent;

						if (!(userResult !== null)) {
							_context5.next = 7;
							break;
						}

						http.alert({
							parent: $element, content: "改教工号已存在"
						});
						_context5.next = 11;
						break;

					case 7:
						_context5.next = 9;
						return http.post("TeacherRegister", $httpParamSerializerJQLike({
							teacher_number: vm.teacher_number,
							realName: vm.teacherRealName
						}), {
							'Content-Type': 'application/x-www-form-urlencoded'
						});

					case 9:
						result = _context5.sent;

						if (result === true) {
							alert("添加老师成功");
							vm.getUser();
						}

					case 11:
					case "end":
						return _context5.stop();
				}
			}
		}, _callee5, this);
	}));
	vm.edit = function (user) {
		vm.userinfo = user;
		if (vm.currentType.value === 0) {
			vm.isShow = true;
			vm.isShow2 = true;
			vm.isShow3 = false;
		} else {
			vm.isShow = false;
			vm.isShow2 = true;
			vm.isShow3 = true;
		}
		vm.style = {
			width: "400px",
			top: "30%",
			left: "40%",
			border: "1px solid #888",
			"box-shadow": "1px 1px 10px black",
			padding: "10px",
			"font-size": "12px",
			position: "absolute",
			"text-align": "center",
			"background": "#fff",
			"z-index": 11,
			"border-radius": "1px"
		};
		var popLayer = document.getElementById('popLayer');
		popLayer.style.width = document.body.clientWidth + "px"; //浏览器工作区域内页面宽度
		popLayer.style.height = document.body.clientHeight + "px";
	};
	vm.updateStudent = function () {
		updateStudentInfo(vm.userinfo);
		vm.isShow = false;
		vm.isShow2 = false;
	};
	vm.dismiss = function () {
		vm.isShow = false;
		vm.isShow2 = false;
		vm.isShow3 = false;
		vm.getUser();
	};
	vm.updateTeacher = function () {
		updateTeacherInfo(vm.userinfo);
		vm.isShow2 = false;
		vm.isShow3 = false;
	};

	vm.deleteUser = function () {
		var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(user) {
			var result;
			return _regenerator2.default.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							if (!(delDialog() == true)) {
								_context8.next = 5;
								break;
							}

							_context8.next = 3;
							return http.get("DeleteUser", {
								type: vm.currentType.value,
								userID: user.userID
							});

						case 3:
							result = _context8.sent;

							if (result == true) {
								http.alert({
									parent: $element, content: "删除成功"
								});
								vm.getUser();
							} else {
								http.alert({
									parent: $element, content: "删除失败"
								});
								vm.getUser();
							}

						case 5:
						case "end":
							return _context8.stop();
					}
				}
			}, _callee8, this);
		}));

		return function (_x3) {
			return _ref8.apply(this, arguments);
		};
	}();
	function delDialog() {
		var msg = "您真的确定要删除吗？\n\n请确认！";
		if (confirm(msg) == true) {
			return true;
		} else {
			return false;
		}
	}
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "commonDialog";
function root(app) {
  app.component(name, {
    templateUrl: "./component/commonDialog/commonDialog.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller],
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.title = "提示信息";
  vm.content = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vm.content = vm.resolve.content;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  vm.ok = function () {
    vm.close();
  };

  vm.cancel = function () {
    vm.dismiss();
  };
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "homeWorkHistory";
function root(app) {
  app.component(name, {
    templateUrl: "./component/homeWorkHistory/homeWorkHistory.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.homework");
  });
  var vm = this;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return http.get("GetHomework");

          case 3:
            vm.homeworks = _context.sent;

            vm.homeworks.forEach(function (item) {
              if (item.finishTime) {
                item.finishTime = new Date(item.finishTime.time);
              }
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取作业列表异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(63);

var _assign2 = _interopRequireDefault(_assign);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "homeworkCreate";
function root(app) {
  app.component(name, {
    templateUrl: "./component/homeworkCreate/homeworkCreate.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.homework");
  });
  var vm = this;
  vm.types = [{ label: "选择题", value: 1 }, { label: "判断题", value: 2 }, { label: "简答题", value: 3 }];
  var temp = {
    "type": vm.types[0].value,
    "title": "",
    "answer": '',
    "optionA": "",
    "optionB": "",
    "optionC": "",
    "optionD": ""
  };
  vm.homework = {
    name: new Date().toLocaleString(),
    finishTime: new Date(),
    questions: [],
    subjectId: null
  };
  vm.questions = [];
  vm.currentQuestion = (0, _assign2.default)({}, temp);
  vm.currentQuestion.type = vm.types[0].value;
  vm.questions.push(vm.currentQuestion);
  vm.currIndex = 0;
  vm.currentSubject = null;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return http.get("GetTeacherSubject");

          case 2:
            vm.subjectlist = _context.sent;

            if (vm.subjectlist.length > 0) {
              vm.currentSubject = vm.subjectlist[0].SubjectID;
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  vm.upItem = function () {
    if (vm.currIndex === 0) {
      return;
    }
    --vm.currIndex;
    vm.currentQuestion = vm.questions[vm.currIndex];
  };
  vm.createNextQuestion = function () {
    if (checkQuestion(vm.currentQuestion) === false) {
      return;
    }
    ++vm.currIndex;
    if (vm.questions[vm.currIndex]) {
      vm.currentQuestion = vm.questions[vm.currIndex];
    } else {
      var itemTemp = (0, _assign2.default)({}, temp);
      itemTemp.type = vm.types[0].value;
      vm.questions.push(itemTemp);
      vm.currentQuestion = itemTemp;
    }
  };

  vm.createHomework = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var questionList, list, rs, dialog;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            questionList = {
              titles: [],
              subjectId: vm.currentSubject
            };

            vm.questions.forEach(function (item) {
              var temp = (0, _assign2.default)({}, item);
              temp.type = temp.type;
              questionList.titles.push(temp);
            });
            _context2.prev = 2;
            _context2.next = 5;
            return http.post("AddQuestion", questionList);

          case 5:
            list = _context2.sent;

            list.forEach(function (item) {
              vm.homework.questions.push({
                questionID: item.itemId
              });
            });
            vm.homework.subjectId = vm.currentSubject;
            _context2.next = 10;
            return http.post("CreateHomework", vm.homework);

          case 10:
            rs = _context2.sent;

            if (rs === true) {
              dialog = http.alert({
                parent: $element, content: "创建作业成功"
              });

              dialog.then(function () {
                $state.go("teacher.homeWorkHistory");
              }, function () {
                $state.go("teacher.homeWorkHistory");
              });
            } else {
              http.alert({
                parent: $element, content: "创建作业失败"
              });
            }
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);

            http.alert({
              parent: $element, content: "创建作业失败"
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 14]]);
  }));

  function checkQuestion(question) {
    var type = question.type;
    var title = question.title.trim();
    if (title === "") {
      http.alert({
        parent: $element, content: "请输入题目内容"
      });
      return false;
    }
    if (type === 1) {
      var optionA = question.optionA.trim();
      if (optionA === "") {
        http.alert({
          parent: $element, content: "请输入选项A"
        });
        return false;
      }
      var optionB = question.optionB.trim();
      if (optionB === "") {
        http.alert({
          parent: $element, content: "请输入选项B"
        });
        return false;
      }
      var optionC = question.optionC.trim();
      if (optionC === "") {
        http.alert({
          parent: $element, content: "请输入选项C"
        });
        return false;
      }
      var optionD = question.optionD.trim();
      if (optionD === "") {
        http.alert({
          parent: $element, content: "请输入选项D"
        });
        return false;
      }
    }
    if (!question.answer || question.answer.trim() === "") {
      http.alert({
        parent: $element, content: "请输入答案"
      });
      return false;
    }
    return true;
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "homeworkDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/homeworkDetail/homeworkDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.homeWorkHistory");
  });
  var vm = this;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.homework = {
              homeWorkName: $stateParams.homeWorkName,
              homeworkId: $stateParams.homeworkId
            };
            _context.next = 4;
            return http.get("GetHomeworkDetail", {
              homeworkID: vm.homework.homeworkId
            });

          case 4:
            vm.homeworkDetail = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取作业详情异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "login";
function root(app) {
  app.component(name, {
    templateUrl: "./component/login/login.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var login = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var userData, userResult, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(false === loginCheck())) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              userData = {};

              angular.copy(vm.userInfo, userData);
              userData.type = parseInt(userData.type);
              userResult = null;
              _context2.prev = 6;
              _context2.next = 9;
              return http.get("GetUserInfoByName", { user_number: userData.user_number, type: userData.type });

            case 9:
              userResult = _context2.sent;

              if (!(userResult === null || userResult.password === "")) {
                _context2.next = 13;
                break;
              }

              http.alert({
                parent: $element, content: "该账号未注册，请先注册"
              });
              return _context2.abrupt("return");

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](6);

              http.alert({
                parent: $element, content: "检查用户信息失败," + _context2.t0
              });
              return _context2.abrupt("return");

            case 19:
              result = null;
              _context2.prev = 20;
              _context2.next = 23;
              return http.post("Login", userData);

            case 23:
              result = _context2.sent;
              _context2.next = 30;
              break;

            case 26:
              _context2.prev = 26;
              _context2.t1 = _context2["catch"](20);

              http.alert({
                parent: $element, content: "登录失败," + _context2.t1
              });
              return _context2.abrupt("return");

            case 30:
              if (vm.remember) {
                result.password = vm.userInfo.password;
              }
              if (userData.type === 0) {

                $cookies.putObject("userInfo", result);
                $state.go("student.studentIndex");
              } else if (userData.type === 1) {
                $cookies.putObject("userInfo", result);
                $state.go("teacher.teacherIndex");
              } else {
                $cookies.putObject("userInfo", result);
                $state.go("admin.center");
              }

            case 32:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[6, 15], [20, 26]]);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var vm = this;
  vm.userInfo = {
    user_number: "",
    password: "",
    type: "0"
  };
  vm.subjects = [];
  vm.loginResultMsg = false;
  vm.remember = true; //是否记住密码
  vm.login = login;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var userInfo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userInfo = $cookies.getObject("userInfo");

            if (userInfo) {
              if (userInfo.type === "0") {
                vm.userInfo.user_number = userInfo.school_number;
                vm.userInfo.password = userInfo.password;
              } else if (userInfo.type === "1") {
                vm.userInfo.user_number = userInfo.teacher_number;
                vm.userInfo.password = userInfo.password;
              } else if (userInfo.type === "2") {
                vm.userInfo.user_number = userInfo.teacher_number;
                vm.userInfo.password = userInfo.password;
              }
              vm.userInfo.type = userInfo.type;
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function loginCheck() {
    if (!vm.userInfo.user_number) {
      http.alert({
        parent: $element, content: "用户名不能为空"
      });
      return false;
    }
    if (!vm.userInfo.password) {
      http.alert({
        parent: $element, content: "密码不能为空"
      });
      return false;
    }
    vm.userInfo.user_number = vm.userInfo.user_number.trim();
    vm.userInfo.password = vm.userInfo.password.trim();
    if (!vm.userInfo.user_number || vm.userInfo.user_number === "") {
      http.alert({
        parent: $element, content: "用户名不能为空"
      });
      return false;
    }
    if (!vm.userInfo.password || vm.userInfo.password === "") {
      http.alert({
        parent: $element, content: "密码不能为空"
      });
      return false;
    }
    return true;
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "onlineAnswer";
function root(app) {
	app.component(name, {
		templateUrl: "./component/onlineAnswer/onlineAnswer.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
	var getClassQuestion = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			var result;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							console.log(vm.currentClass);
							_context3.next = 3;
							return http.get("GetClassQuestion", {
								classID: vm.currentClass,
								currentPage: vm.currentPage,
								pageItems: vm.pageItems
							});

						case 3:
							result = _context3.sent;

							vm.questionsList = result;
							if (result.length === 0) {
								vm.questionsList.totalpage = 0;
							}
							if (result.length !== 0) {
								vm.questionsList.totalpage = Math.ceil(result[0].count / vm.pageItems);
								vm.questionsList.forEach(function () {
									var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
										var studentInfo;
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														item.createTime = new Date(item.createTime.time);
														_context2.next = 3;
														return http.get("GetStudents", {
															userID: item.studentId
														});

													case 3:
														studentInfo = _context2.sent;

														if (studentInfo.length !== 0) item.studentName = studentInfo[0].realName;

													case 5:
													case "end":
														return _context2.stop();
												}
											}
										}, _callee2, _this);
									}));

									return function (_x) {
										return _ref3.apply(this, arguments);
									};
								}());
							}

						case 7:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function getClassQuestion() {
			return _ref2.apply(this, arguments);
		};
	}();

	$scope.$on("ready_back", function () {
		$state.go("teacher.onlineanswerNavigation");
	});
	var vm = this;
	vm.questionsList = null;
	vm.currentClass = null;
	vm.currentPage = 1;
	vm.pageItems = 7;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;
	vm.getClassQuestion = getClassQuestion;
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var classes;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return http.get("GetTeacherClasses");

					case 2:
						classes = _context.sent;

						vm.classes = classes;
						if ($stateParams.currentClass != null) {
							vm.currentClass = $stateParams.currentClass;
							vm.currentPage = $stateParams.currentPage;
							vm.pageItems = $stateParams.pageItems;
							vm.totalpage = $stateParams.totalpage;
						} else {
							vm.currentClass = vm.classes[0].classes.classId;
						}
						getClassQuestion();

					case 6:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));
	function previousPage() {
		vm.currentPage--;
		getClassQuestion();
	}
	function nextPage() {
		vm.currentPage++;
		getClassQuestion();
	}
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "onlineQuestion";
function root(app) {
		app.component(name, {
				templateUrl: "./component/onlineQuestion/onlineQuestion.html",
				controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", "$mdColorPalette", controller]
		});
}
function controller($scope, $element, $state, $cookies, http, $stateParams, $mdColorPalette) {
		var getClassQuestion = function () {
				var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
						var _this2 = this;

						var result;
						return _regenerator2.default.wrap(function _callee4$(_context4) {
								while (1) {
										switch (_context4.prev = _context4.next) {
												case 0:
														console.log(vm.currentClass);
														_context4.next = 3;
														return http.get("GetClassQuestion", {
																classID: vm.currentClass,
																currentPage: vm.currentPage,
																pageItems: vm.pageItems
														});

												case 3:
														result = _context4.sent;

														vm.questionsList = result;
														if (result.length === 0) {
																vm.questionsList.totalpage = 0;
														}
														if (result.length !== 0) {
																vm.questionsList.totalpage = Math.ceil(result[0].count / vm.pageItems);
																vm.questionsList.forEach(function () {
																		var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(item) {
																				var studentInfo;
																				return _regenerator2.default.wrap(function _callee3$(_context3) {
																						while (1) {
																								switch (_context3.prev = _context3.next) {
																										case 0:
																												item.createTime = new Date(item.createTime.time);
																												_context3.next = 3;
																												return http.get("GetStudents", {
																														userID: item.studentId
																												});

																										case 3:
																												studentInfo = _context3.sent;

																												if (studentInfo.length !== 0) {
																														item.studentName = studentInfo[0].realName;
																												}

																										case 5:
																										case "end":
																												return _context3.stop();
																								}
																						}
																				}, _callee3, _this2);
																		}));

																		return function (_x2) {
																				return _ref4.apply(this, arguments);
																		};
																}());
														}

												case 7:
												case "end":
														return _context4.stop();
										}
								}
						}, _callee4, this);
				}));

				return function getClassQuestion() {
						return _ref3.apply(this, arguments);
				};
		}();

		var vm = this;
		vm.questionsList = null;
		vm.currentClass = null;
		vm.getClassQuestion = getClassQuestion;
		console.log($mdColorPalette);
		vm.currentPage = 1;
		vm.pageItems = 7;
		vm.previousPage = previousPage;
		vm.nextPage = nextPage;
		vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				var _this = this;

				var classes;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
								switch (_context2.prev = _context2.next) {
										case 0:
												_context2.next = 2;
												return http.get("GetAllSubject");

										case 2:
												classes = _context2.sent;

												vm.classes = classes;
												vm.classes.forEach(function () {
														var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(item) {
																var result;
																return _regenerator2.default.wrap(function _callee$(_context) {
																		while (1) {
																				switch (_context.prev = _context.next) {
																						case 0:
																								_context.next = 2;
																								return http.get("GetClassNameByClassId", { "classID": item.classId });

																						case 2:
																								result = _context.sent;

																								if (result != null) item.className = result.className;

																						case 4:
																						case "end":
																								return _context.stop();
																				}
																		}
																}, _callee, _this);
														}));

														return function (_x) {
																return _ref2.apply(this, arguments);
														};
												}());

												if ($stateParams.currentClass != null) {
														vm.currentClass = $stateParams.currentClass;
														vm.currentPage = $stateParams.currentPage;
														vm.pageItems = $stateParams.pageItems;
														vm.totalpage = $stateParams.totalpage;
												} else if (vm.classes && vm.classes.length > 0) {
														vm.currentClass = vm.classes[0].classId;
												}
												if (vm.currentClass != null) {
														getClassQuestion();
												}

										case 7:
										case "end":
												return _context2.stop();
								}
						}
				}, _callee2, this);
		}));
		function previousPage() {
				vm.currentPage--;
				getClassQuestion();
		}
		function nextPage() {
				vm.currentPage++;
				getClassQuestion();
		}


		$scope.$on("ready_back", function () {
				$state.go("student.question");
		});
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "paperDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/paperDetail/paperDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.publishPaper");
  });
  var vm = this;
  vm.msg = "";
  vm.paper = {};
  vm.paperDetail = null;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vm.paper = {
              testName: $stateParams.testName,
              testpaperID: $stateParams.testpaperID
            };

            if (!(vm.paper === null || vm.paper.testpaperID === null)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return http.get("GetPaperDetail", {
              paperID: vm.paper.testpaperID
            });

          case 6:
            vm.paperDetail = _context.sent;

            setColor();
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);

            http.alert({
              parent: $element, content: "获取试卷详情异常"
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 10]]);
  }));

  function setColor() {
    vm.paperDetail.forEach(function (item) {
      item.color = http.getColor();
    });
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "paperResultDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/paperResultDetail/paperResultDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.paperResult", {
      testpaperID: vm.paperResult.testpaperID,
      testName: vm.paperResult.testName
    });
  });
  var vm = this;
  vm.msg = "";
  vm.paperResult = null;
  vm.paperResultList = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vm.paperResult = {
              id: $stateParams.resultId,
              testpaperID: $stateParams.testpaperID,
              testName: $stateParams.testName
            };
            _context.prev = 1;
            _context.next = 4;
            return http.get("GetPaperResultDetail", {
              paperResultID: vm.paperResult.id
            });

          case 4:
            vm.paperResultList = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);

            http.alert({
              parent: $element, content: "获取试卷作答结果详情异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "paperResult";
function root(app) {
  app.component(name, {
    templateUrl: "./component/paperResult/paperResult.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.publishPaper");
  });
  var vm = this;
  vm.msg = "";
  vm.paper = null;
  vm.paperResultList = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vm.paper = {
              testName: $stateParams.testName,
              testpaperID: $stateParams.testpaperID
            };

            if (!(vm.paper === null || vm.paper.testpaperID === null)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return http.get("GetPaperResult", {
              paperID: vm.paper.testpaperID
            });

          case 6:
            vm.paperResultList = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);

            http.alert({
              parent: $element, content: "获取试卷作答结果异常"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "publishHomework";
function root(app) {
  app.component(name, {
    templateUrl: "./component/publishHomework/publishHomework.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.homeWorkHistory");
  });
  var vm = this;
  vm.msg = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vm.homework = {
              homeId: $stateParams.homeworkId
            };
            vm.subjectId = $stateParams.subjectId;
            _context.prev = 2;
            _context.next = 5;
            return http.get("GetTeacherSubjectClass", { subjectId: vm.subjectId });

          case 5:
            vm.classes = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);

            http.alert({
              parent: $element, content: "获取教师班级信息异常"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  }));
  vm.publish = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var data, result, dialog;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              homeworkID: vm.homework.homeId,
              classesID: []
            };

            vm.classes.forEach(function (item) {
              if (item.isCheck) {
                data.classesID.push({ classId: item.classId });
              }
            });
            _context2.prev = 2;
            _context2.next = 5;
            return http.post("PublishHomework", data);

          case 5:
            result = _context2.sent;

            if (result === true) {
              dialog = http.alert({
                arent: $element, content: "作业发布成功"
              });

              dialog.then(function () {
                $state.go("teacher.homeWorkHistory");
              });
            } else {
              http.alert({
                arent: $element, content: "作业发布失败"
              });
            }
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);

            http.alert({
              arent: $element, content: "作业发布失败"
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "publishPaper";
function root(app) {
  app.component(name, {
    templateUrl: "./component/publishPaper/publishPaper.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.paper");
  });
  var vm = this;
  vm.papers = [];
  vm.msg = "";
  vm.paperLink = null;
  vm.isDownload = false;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return http.get("GetPaper");

          case 3:
            vm.papers = _context.sent;

            vm.papers.forEach(function (item) {
              item.createTime = new Date(item.createTime.time);
            });
            setColor();
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取试卷信息异常"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  vm.publishPaper = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(paper) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return http.get("PublishPaper", {
                paperID: paper.testpaperID
              });

            case 3:
              result = _context2.sent;

              if (!(result === true)) {
                _context2.next = 11;
                break;
              }

              http.alert({
                parent: $element, content: "发布试卷成功"
              });
              _context2.next = 8;
              return http.get("GetPaper");

            case 8:
              vm.papers = _context2.sent;
              _context2.next = 12;
              break;

            case 11:
              http.alert({
                parent: $element, content: "发布试卷失败"
              });

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              http.alert({
                parent: $element, content: "发布试卷失败"
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 14]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  function setColor() {
    vm.papers.forEach(function (item) {
      item.color = http.getColor();
    });
  }

  vm.downloadPaper = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(paperId) {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return http.get("DownLoadPaper", { paperID: paperId });

            case 2:
              result = _context3.sent;

              vm.paperLink = result;
              http.alert({
                parent: $element, content: "试卷生成成功，文件路径如下：\n" + vm.paperLink + "\n"
              }).then(function () {
                var downLink = document.getElementById("download_paper");
                var event = document.createEvent("MouseEvents");
                event.initEvent("click", false, false);
                downLink.dispatchEvent(event);
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "registerStudent";
function root(app) {
		app.component(name, {
				templateUrl: "./component/registerStudent/registerStudent.html",
				controller: ["$scope", "$element", "$state", '$cookies', "http", '$httpParamSerializerJQLike', controller]
		});
}
function controller($scope, $element, $state, $cookies, http, $httpParamSerializerJQLike) {
		var studentRegister = function () {
				var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
						var result;
						return _regenerator2.default.wrap(function _callee2$(_context2) {
								while (1) {
										switch (_context2.prev = _context2.next) {
												case 0:
														_context2.prev = 0;
														_context2.next = 3;
														return http.post("StudentRegister", $httpParamSerializerJQLike({
																school_number: vm.userInfo.school_number,
																realName: vm.userInfo.realName,
																password: vm.userInfo.password,
																school: vm.userInfo.school,
																telephone: vm.telephone
														}), {
																'Content-Type': 'application/x-www-form-urlencoded'
														});

												case 3:
														result = _context2.sent;

														if (result === true) {
																$state.go('login');
														}
														_context2.next = 10;
														break;

												case 7:
														_context2.prev = 7;
														_context2.t0 = _context2["catch"](0);

														http.alert({
																parent: $element, content: "注册失败," + _context2.t0
														});

												case 10:
												case "end":
														return _context2.stop();
										}
								}
						}, _callee2, this, [[0, 7]]);
				}));

				return function studentRegister() {
						return _ref2.apply(this, arguments);
				};
		}();

		var vm = this;
		vm.userInfo = {
				school_number: "",
				realName: "",
				password: "",
				rePassword: "",
				school: "",
				telephone: ""
		};
		vm.register = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var userResult;
				return _regenerator2.default.wrap(function _callee$(_context) {
						while (1) {
								switch (_context.prev = _context.next) {
										case 0:
												if (!(check() === false)) {
														_context.next = 2;
														break;
												}

												return _context.abrupt("return");

										case 2:
												userResult = null;
												_context.prev = 3;
												_context.next = 6;
												return http.get("GetUserInfoByName", { user_number: vm.userInfo.school_number, type: 0 });

										case 6:
												userResult = _context.sent;

												if (!(userResult === null)) {
														_context.next = 10;
														break;
												}

												http.alert({
														parent: $element, content: "您不是本校学生，无法注册"
												});
												return _context.abrupt("return");

										case 10:
												if (!(userResult.realName !== vm.userInfo.realName)) {
														_context.next = 13;
														break;
												}

												http.alert({
														parent: $element, content: "请检查您的真实姓名是否正确"
												});
												return _context.abrupt("return");

										case 13:
												if (!(userResult.password !== "")) {
														_context.next = 18;
														break;
												}

												http.alert({
														parent: $element, content: "您已注册，请登录"
												});
												return _context.abrupt("return");

										case 18:
												studentRegister();

										case 19:
												_context.next = 24;
												break;

										case 21:
												_context.prev = 21;
												_context.t0 = _context["catch"](3);

												http.alert({
														parent: $element, content: "注册时发生异常"
												});

										case 24:
										case "end":
												return _context.stop();
								}
						}
				}, _callee, this, [[3, 21]]);
		}));


		function check() {
				if (!vm.userInfo.school_number || vm.userInfo.school_number.trim() === "") {
						http.alert({
								parent: $element, content: "用户名不能为空"
						});
						return false;
				}
				vm.userInfo.school_number = vm.userInfo.school_number.trim();

				if (!vm.userInfo.realName || vm.userInfo.realName.trim() === "") {
						http.alert({
								parent: $element, content: "真实姓名不能为空"
						});
						return false;
				}
				vm.userInfo.realName = vm.userInfo.realName.trim();

				if (!vm.userInfo.password || vm.userInfo.password.trim() === "") {
						http.alert({
								parent: $element, content: "密码不能为空"
						});
						return false;
				}
				vm.userInfo.password = vm.userInfo.password.trim();

				if (vm.userInfo.rePassword !== vm.userInfo.password) {
						http.alert({
								parent: $element, content: "两次输入密码不一致"
						});
						return false;
				}

				if (!vm.userInfo.school || vm.userInfo.school.trim() === "") {
						http.alert({
								parent: $element, content: "学校不能为空"
						});
						return false;
				}
				vm.userInfo.school = vm.userInfo.school.trim();

				if (!vm.userInfo.telephone || vm.userInfo.telephone.trim() === "") {
						http.alert({
								parent: $element, content: "手机号不能为空"
						});
						return false;
				}
				vm.userInfo.telephone = vm.userInfo.telephone.trim();

				return true;
		}
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "registerTeacher";
function root(app) {
	app.component(name, {
		templateUrl: "./component/registerTeacher/registerTeacher.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", '$httpParamSerializerJQLike', controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $httpParamSerializerJQLike) {
	var register = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var result;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return http.post("TeacherRegister", $httpParamSerializerJQLike({
								teacher_number: vm.userInfo.teacher_number,
								realName: vm.userInfo.realName,
								password: vm.userInfo.password
							}), {
								'Content-Type': 'application/x-www-form-urlencoded'
							});

						case 3:
							result = _context2.sent;

							if (result === true) {
								$state.go('login');
							}
							_context2.next = 10;
							break;

						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2["catch"](0);

							http.alert({
								parent: $element, content: "注册失败"
							});

						case 10:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 7]]);
		}));

		return function register() {
			return _ref2.apply(this, arguments);
		};
	}();

	var vm = this;
	vm.userInfo = {
		teacher_number: "",
		realName: "",
		password: "",
		rePassword: ""
	};
	vm.register = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var userResult;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!(checkRegister() === false)) {
							_context.next = 2;
							break;
						}

						return _context.abrupt("return");

					case 2:
						userResult = null;
						_context.prev = 3;
						_context.next = 6;
						return http.get("GetUserInfoByName", { user_number: vm.userInfo.teacher_number, type: 1 });

					case 6:
						userResult = _context.sent;

						if (!(userResult === null)) {
							_context.next = 10;
							break;
						}

						http.alert({
							parent: $element, content: "您不是本校教师，无法注册"
						});
						return _context.abrupt("return");

					case 10:
						if (!(userResult.realName !== vm.userInfo.realName)) {
							_context.next = 13;
							break;
						}

						http.alert({
							parent: $element, content: "请检查您的真实姓名是否正确"
						});
						return _context.abrupt("return");

					case 13:
						if (!(userResult.password !== "")) {
							_context.next = 16;
							break;
						}

						http.alert({
							parent: $element, content: "您已注册，请登录"
						});
						return _context.abrupt("return");

					case 16:
						register();
						_context.next = 22;
						break;

					case 19:
						_context.prev = 19;
						_context.t0 = _context["catch"](3);

						http.alert({
							parent: $element, content: "注册时发生异常"
						});

					case 22:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 19]]);
	}));

	function checkRegister() {
		if (!vm.userInfo.teacher_number) {
			http.alert({
				parent: $element, content: "请输入用户名"
			});
			return false;
		}
		vm.userInfo.teacher_number = vm.userInfo.teacher_number.trim();
		if (vm.userInfo.teacher_number === "") {
			http.alert({
				parent: $element, content: "请输入用户名"
			});
			return false;
		}
		if (!vm.userInfo.realName) {
			http.alert({
				parent: $element, content: "请输入真实姓名"
			});
			return false;
		}
		vm.userInfo.realName = vm.userInfo.realName.trim();
		if (vm.userInfo.realName === "") {
			http.alert({
				parent: $element, content: "请输入真实姓名"
			});
			return false;
		}

		if (!vm.userInfo.password) {
			http.alert({
				parent: $element, content: "请输入密码"
			});
			return false;
		}
		vm.userInfo.password = vm.userInfo.password.trim();
		if (vm.userInfo.password === "") {
			http.alert({
				parent: $element, content: "请输入密码"
			});
			return false;
		}

		if (vm.userInfo.password !== vm.userInfo.rePassword) {
			http.alert({
				parent: $element, content: "两次输入密码不一致"
			});
			return false;
		}
		return true;
	}
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "root";
function root(app) {
  app.component(name, {
    templateUrl: "./component/root/root.html",
    controller: ["$scope", "$rootScope", "$element", "$state", "$transitions", controller]
  });
}
function controller($scope, $rootScope, $element, $state, $transitions) {
  var vm = this;
  vm.$onInit = function () {
    $rootScope.teacherActive = [true, false, false, false];
    $rootScope.studentActive = [true, false, false, false];
    //$state.go("login");
  };
  $scope.$on("request_back", function () {
    $scope.$broadcast("ready_back");
  });
  $scope.$on("test", function () {
    $scope.$broadcast("testpaper");
  });
  $scope.$on("homepage_back", function () {
    $scope.$broadcast("home_back");
  });

  // $transitions.onBefore({ to: 'student.studentTestPaperList',from:'student.studentTestPaper' },function(trans){
  //     console.log(trans);
  //     let from = trans.from();
  //     let to = trans.to();
  //     if( to.params === undefined || to.params.SubjectID === null ){
  //       let url = window.location.origin + window.location.pathname + "#!/student/studentTestPaper";
  //       window.history.pushState("","student.studentTestPaper",url);
  //       $scope.$broadcast("ready_back");
  //       return false;
  //     }
  //     return true;
  //  });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "schoolNewsDetail";
function root(app) {
	app.component(name, {
		templateUrl: "./component/schoolNewsDetail/schoolNewsDetail.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
	var vm = this;
	vm.msg = "";
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						try {
							vm.currentPage = $stateParams.currentPage;
							vm.pageItems = $stateParams.pageItems;
							vm.totalpage = $stateParams.totalpage;
							vm.newsDetail = $stateParams.newsDetail;
						} catch (error) {
							http.alert({
								parent: $element, content: "获取校园动态详情异常"
							});
						}

					case 1:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	$scope.$on("ready_back", function () {

		$state.go("student.news", {
			currentPage: vm.currentPage,
			pageItems: vm.pageItems,
			totalpage: vm.totalpage
		});
	});
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "schoolNews";
function root(app) {
	app.component(name, {
		templateUrl: "./component/schoolNews/schoolNews.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
	var getNews = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return http.get("GetNews", {
								currentPage: vm.currentPage,
								pageItems: vm.pageItems
							});

						case 2:
							vm.newsList = _context3.sent;

							vm.newsList.forEach(function () {
								var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
									return _regenerator2.default.wrap(function _callee2$(_context2) {
										while (1) {
											switch (_context2.prev = _context2.next) {
												case 0:
													item.creatTime = new Date(item.creatTime.time);

												case 1:
												case "end":
													return _context2.stop();
											}
										}
									}, _callee2, _this);
								}));

								return function (_x) {
									return _ref3.apply(this, arguments);
								};
							}());
							if (vm.newsList.length === 0) {
								vm.newsList.totalpage = 0;
							}
							if (vm.newsList.length !== 0) {
								vm.newsList.totalpage = Math.ceil(vm.newsList[0].count / vm.pageItems);
							}

						case 6:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function getNews() {
			return _ref2.apply(this, arguments);
		};
	}();

	$scope.$on("ready_back", function () {
		$state.go("student.studentIndex");
	});
	var vm = this;
	vm.newsList = null;
	vm.currentPage = 1;
	vm.pageItems = 5;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;
	vm.getNews = getNews;
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if ($stateParams.currentPage != null) {
							vm.currentPage = $stateParams.currentPage;
							vm.pageItems = $stateParams.pageItems;
							vm.totalpage = $stateParams.totalpage;
						}
						getNews();

					case 2:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));
	function previousPage() {
		vm.currentPage--;
		getNews();
	}
	function nextPage() {
		vm.currentPage++;
		getNews();
	}
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentCenter";
function root(app) {
	app.component(name, {
		templateUrl: "./component/studentCenter/studentCenter.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
	});
}
function controller($scope, $element, $state, $cookies, http) {
	var vm = this;
	vm.userinfo = {
		school_number: "",
		realName: "",
		password: "",
		school: "",
		telephone: "",
		studentID: ""
	};
	vm.classList = [];
	var classListCopy = [];
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
		var _this = this;

		var user, userinfo, classes;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						user = $cookies.getObject("userInfo");
						_context2.next = 4;
						return http.get("GetUserInfoByName", { user_number: user.school_number, type: user.type });

					case 4:
						userinfo = _context2.sent;

						vm.userinfo = userinfo;
						_context2.next = 8;
						return http.get("GetAllSubject");

					case 8:
						classes = _context2.sent;

						vm.classes = classes;
						vm.classes.forEach(function () {
							var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(item) {
								var result;
								return _regenerator2.default.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.next = 2;
												return http.get("GetClassNameByClassId", { "classID": item.classId });

											case 2:
												result = _context.sent;

												if (result != null) item.className = result.className;

											case 4:
											case "end":
												return _context.stop();
										}
									}
								}, _callee, _this);
							}));

							return function (_x) {
								return _ref2.apply(this, arguments);
							};
						}());
						_context2.next = 13;
						return http.get("GetClasses");

					case 13:
						vm.classList = _context2.sent;

						vm.classList.forEach(function (itemClass) {
							var find = vm.classes.find(function (ele) {
								return ele.classId == itemClass.classId;
							});
							if (find) {
								itemClass.isCheck = true;
							} else {
								itemClass.isCheck = false;
							}
						});
						angular.copy(vm.classList, classListCopy);
						_context2.next = 21;
						break;

					case 18:
						_context2.prev = 18;
						_context2.t0 = _context2["catch"](0);

						http.alert({
							parent: $element, content: "加载个人信息异常"
						});

					case 21:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[0, 18]]);
	}));
	vm.updateinfo = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
		var data, i, oldItem, item, updateClassdata, _result, result;

		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						data = {
							"school_number": vm.userinfo.school_number,
							"realName": vm.userinfo.realName,
							"password": vm.userinfo.password,
							"school": vm.userinfo.school,
							"telephone": vm.userinfo.telephone,
							"studentID": vm.userinfo.userID
						};
						//1.先更新班级信息

						i = 0;

					case 3:
						if (!(i < classListCopy.length)) {
							_context3.next = 26;
							break;
						}

						oldItem = classListCopy[i];
						item = vm.classList[i];

						if (!(oldItem.isCheck === item.isCheck)) {
							_context3.next = 8;
							break;
						}

						return _context3.abrupt("continue", 23);

					case 8:
						updateClassdata = {
							typeId: null, studentId: vm.userinfo.userID, classId: item.classId
						};

						if (oldItem.isCheck === true && item.isCheck === false) {
							updateClassdata.typeId = 0;
						} else {
							updateClassdata.typeId = 1;
						}
						_context3.prev = 10;
						_context3.next = 13;
						return http.get("updateStudentClass", updateClassdata);

					case 13:
						_result = _context3.sent;

						if (!(_result === false)) {
							_context3.next = 17;
							break;
						}

						http.alert({
							parent: $element, content: "更新班级信息失败"
						});
						return _context3.abrupt("return");

					case 17:
						_context3.next = 23;
						break;

					case 19:
						_context3.prev = 19;
						_context3.t0 = _context3["catch"](10);

						http.alert({
							parent: $element, content: "更新班级信息失败"
						});
						return _context3.abrupt("return");

					case 23:
						++i;
						_context3.next = 3;
						break;

					case 26:
						_context3.next = 28;
						return http.post("UpdateStudent", data);

					case 28:
						result = _context3.sent;

						if (result == true) {
							http.alert({
								parent: $element, content: "修改成功"
							});
						} else {
							http.alert({
								parent: $element, content: "修改失败"
							});
						}
						_context3.next = 35;
						break;

					case 32:
						_context3.prev = 32;
						_context3.t1 = _context3["catch"](0);

						http.alert({
							parent: $element, content: "修改失败"
						});

					case 35:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this, [[0, 32], [10, 19]]);
	}));

	$scope.$on("ready_back", function () {
		$state.go("student.studentIndex");
	});
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentHomeworkDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentHomeworkDetail/studentHomeworkDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  var index = 0;
  vm.currIndex = 0;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.homework = {
              homeWorkName: $stateParams.homeWorkName,
              homeId: $stateParams.homeworkId
            };
            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID

            };
            vm.currentUnfinishPage = $stateParams.currentUnfinishPage;
            vm.pageItems = $stateParams.pageItems;
            _context.next = 7;
            return http.get("GetHomeworkDetail", {
              homeworkID: vm.homework.homeId
            });

          case 7:
            vm.homeDetail = _context.sent;

            vm.curr = vm.homeDetail[index];
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));
  vm.upOrNext = function (type) {
    if (type === "up") {
      --index;
      index = index >= 0 ? index : 0;
    } else {
      ++index;
      index = index < vm.homeDetail.length ? index : --index;
    }
    vm.curr = vm.homeDetail[index];
    vm.currIndex = index;
  };

  vm.submit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var data, result, dialog;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              homeworkID: vm.homework.homeId,
              evaluation: "",
              homeworkResult: []
            };

            vm.homeDetail.forEach(function (item) {
              data.homeworkResult.push({
                questionID: item.itemId,
                answer: item.studentAnswer
              });
            });
            _context2.prev = 2;
            _context2.next = 5;
            return http.post("SubmitHomework", data);

          case 5:
            result = _context2.sent;

            if (result === true) {
              dialog = http.alert({
                parent: $element, content: "提交作业成功"
              });

              dialog.then(function () {
                $state.go('student.homework');
              }, function () {
                $state.go('student.homework');
              });
            } else {
              http.alert({
                parent: $element, content: "提交作业失败"
              });
            }
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);

            http.alert({
              parent: $element, content: "提交作业失败"
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  $scope.$on("ready_back", function () {
    var dialog = http.confirm({
      parent: $element, content: "您当前正在做作业，如果离开本页面，作业将不会被保留，请先提交！"
    });
    dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              $state.go("student.studentHomeworkList", {
                SubjectName: vm.subject.SubjectName,
                SubjectID: vm.subject.SubjectID,
                currentUnfinishPage: vm.currentUnfinishPage,
                pageItems: vm.pageItems
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })), function () {});
  });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentHomeworkList";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentHomeworkList/studentHomeworkList.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var getHomeWork = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return http.get("GetHomework", {
                subjectId: vm.subject.SubjectID
              });

            case 2:
              vm.homeworkList = _context2.sent;

              vm.homeworkList.forEach(function (item) {
                item.finishTime = new Date(item.finishTime.time);
              });
              _context2.next = 6;
              return http.get("GetHomeworkResult");

            case 6:
              vm.homeworkResults = _context2.sent;

              vm.homeworkList.forEach(function (homework) {
                var find = vm.homeworkResults.find(function (result) {
                  return homework.homeId === result.homework.homeworkId;
                });
                if (find) {
                  vm.homeworkListFinish.push(homework);
                } else {
                  vm.homeworkListUnFinish.push(homework);
                }
              });
              if (vm.homeworkListFinish.length === 0) {
                vm.homeworkFinishTemp = vm.homeworkListFinish;
                vm.homeworkFinishTemp.totalpage = 0;
              } else {

                vm.homeworkFinishTemp = vm.homeworkListFinish;
                vm.homeworkFinishTemp.totalpage = Math.ceil(vm.homeworkFinishTemp.length / vm.pageItems);
                getFinishData();
              }
              if (vm.homeworkListUnFinish.length === 0) {
                vm.homeworkUnfinishTemp = vm.homeworkListUnFinish;
                vm.homeworkUnfinishTemp.totalpage = 0;
              } else {
                vm.homeworkUnfinishTemp = vm.homeworkListUnFinish;
                vm.homeworkUnfinishTemp.totalpage = Math.ceil(vm.homeworkUnfinishTemp.length / vm.pageItems);
                getUnFinishData();
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function getHomeWork() {
      return _ref2.apply(this, arguments);
    };
  }();

  var vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.homeworkListUnFinish = [];
  vm.homeworkListFinish = [];
  vm.currentUnfinishPage = 1;
  vm.pageItems = 5;
  vm.currentFinishPage = 1;
  vm.previousFinishPage = previousFinishPage;
  vm.nextFinishPage = nextFinishPage;
  vm.previousUnfinishPage = previousUnfinishPage;
  vm.nextUnfinishPage = nextUnfinishPage;
  vm.homeworkFinishTemp = [];
  vm.homeworkUnfinishTemp = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var rs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID
            };

            if ($stateParams.currentUnfinishPage != null) {
              vm.currentUnfinishPage = $stateParams.currentUnfinishPage;
              vm.pageItems = $stateParams.pageItems;
            }
            if ($stateParams.currentFinishPage != null) {
              vm.currentFinishPage = $stateParams.currentFinishPage;
              vm.pageItems = $stateParams.pageItems;
              vm.selectedIndex = 1;
            }
            _context.next = 6;
            return getHomeWork();

          case 6:
            rs = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));
  function previousFinishPage() {
    vm.currentFinishPage--;
    getFinishData();
  }
  function nextFinishPage() {
    vm.currentFinishPage++;
    getFinishData();
  }
  function previousUnfinishPage() {
    vm.currentUnfinishPage--;
    getUnFinishData();
  }
  function nextUnfinishPage() {
    vm.currentUnfinishPage++;
    getUnFinishData();
  }

  function getFinishData() {
    var newData = [];
    var start = (vm.currentFinishPage - 1) * vm.pageItems;
    console.log("start" + start);
    for (var i = start; i < start + vm.pageItems; ++i) {
      if (i >= vm.homeworkFinishTemp.length) {
        vm.homeworkListFinish = newData;
        return;
      }
      newData.push(vm.homeworkFinishTemp[i]);
    }
    vm.homeworkListFinish = newData;
  }
  function getUnFinishData() {
    var newData = [];
    var start = (vm.currentUnfinishPage - 1) * vm.pageItems;
    for (var i = start; i < start + vm.pageItems; ++i) {
      if (i >= vm.homeworkUnfinishTemp.length) {
        vm.homeworkListUnFinish = newData;
        return;
      }
      newData.push(vm.homeworkUnfinishTemp[i]);
    }
    vm.homeworkListUnFinish = newData;
  }
  $scope.$on("ready_back", function () {
    $state.go("student.homework");
  });
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentHomeworkResultDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentHomeworkResultDetail/studentHomeworkResultDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.msg = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID
            };
            vm.currentFinishPage = $stateParams.currentFinishPage;
            vm.pageItems = $stateParams.pageItems;
            vm.homework = {
              homeId: parseInt($stateParams.homeworkId)
            };
            _context.next = 7;
            return http.get("GetHomeworkResult");

          case 7:
            vm.homeworkResults = _context.sent;

            vm.homeworkResult = vm.homeworkResults.find(function (item) {
              return item.homework.homeworkId === vm.homework.homeId;
            });
            _context.next = 11;
            return http.get("GetHomeworkResultDetail", {
              homeworkResultID: vm.homeworkResult.homework.id
            });

          case 11:
            vm.homeworkResultDetail = _context.sent;
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取学生作业结果详情异常"
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 14]]);
  }));

  $scope.$on("ready_back", function () {

    $state.go("student.studentHomeworkList", {
      SubjectName: $stateParams.SubjectName,
      SubjectID: $stateParams.SubjectID,
      currentFinishPage: vm.currentFinishPage,
      pageItems: vm.pageItems
    });
  });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentHomework";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentHomework/studentHomework.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.msg = "";
  vm.subjects = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var result, i, flag, j;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return http.get("GetAllSubject");

          case 3:
            vm.subjects = _context.sent;
            result = [];

            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID

            };
            i = 0;

          case 7:
            if (!(i < vm.subjects.length)) {
              _context.next = 21;
              break;
            }

            flag = 0;
            j = 0;

          case 10:
            if (!(j < result.length)) {
              _context.next = 17;
              break;
            }

            if (!(result[j].SubjectID === vm.subjects[i].SubjectID)) {
              _context.next = 14;
              break;
            }

            flag = 1;
            return _context.abrupt("break", 17);

          case 14:
            j++;
            _context.next = 10;
            break;

          case 17:
            if (flag === 0) {
              result.push(vm.subjects[i]);
            }

          case 18:
            i++;
            _context.next = 7;
            break;

          case 21:
            vm.subjects = result;
            setColor();
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 25]]);
  }));
  $scope.$on("ready_back", function () {
    $state.go("student.studentIndex");
  });
  function setColor() {
    vm.subjects.forEach(function (item) {
      item.color = http.getColor();
    });
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "studentIndexHead";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentIndexHead/studentIndexHead.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var vm = this;

  vm.$onInit = function () {
    vm.userInfo = $cookies.getObject("userInfo");
  };

  vm.logout = function () {
    //$cookies.remove("userInfo");
    $state.go("login");
  };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "studentIndex";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentIndex/studentIndex.html",
    controller: ["$scope", "$rootScope", "$element", "$state", controller]
  });
}
function controller($scope, $rootScope, $element, $state) {
  var vm = this;
  vm.$onInit = function () {};
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentOnlineAnswerDetail";
function root(app) {
	app.component(name, {
		templateUrl: "./component/studentOnlineAnswerDetail/studentOnlineAnswerDetail.html",
		controller: ["$scope", "$cookies", "$element", "$state", "http", "$stateParams", "$mdDialog", controller]
	});
}
function controller($scope, $cookies, $element, $state, http, $stateParams, $mdDialog) {
	var reply = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var userInfo, content, data, imgInput, formData, imgResult, result;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							userInfo = $cookies.getObject("userInfo");
							content = vm.answerContent;

							if (!(content === null || content === "" || content === undefined)) {
								_context.next = 5;
								break;
							}

							http.alert({
								parent: $element, content: "请输入内容"
							});
							return _context.abrupt("return");

						case 5:
							http.wait();
							data = {
								answer: vm.answerContent,
								questionID: $stateParams.onlineQuestionsDetail.id,
								img: "",
								answerID: userInfo.id,
								type: userInfo.type
							};
							imgInput = document.getElementsByClassName("js_reply_imgs")[0];

							if (!(imgInput.files.length > 0)) {
								_context.next = 23;
								break;
							}

							_context.prev = 9;
							formData = new FormData();

							formData.append("img", imgInput.files[0]);
							_context.next = 14;
							return http.submitForm("UploadImage", formData);

						case 14:
							imgResult = _context.sent;

							data.img = imgResult;
							_context.next = 23;
							break;

						case 18:
							_context.prev = 18;
							_context.t0 = _context["catch"](9);

							$mdDialog.hide();
							http.alert({
								parent: $element, content: "图片上传失败"
							});
							return _context.abrupt("return");

						case 23:
							_context.prev = 23;
							_context.next = 26;
							return http.post('ReplyStudentQuestion', data);

						case 26:
							result = _context.sent;

							if (result === true) {
								$mdDialog.hide();
								http.alert({
									parent: $element, content: "回复成功"
								}).then(function () {
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
							_context.next = 34;
							break;

						case 30:
							_context.prev = 30;
							_context.t1 = _context["catch"](23);

							$mdDialog.hide();
							http.alert({
								parent: $element, content: "回复失败"
							});

						case 34:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this, [[9, 18], [23, 30]]);
		}));

		return function reply() {
			return _ref.apply(this, arguments);
		};
	}();

	var getQuestionReply = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			var result;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return http.get('getQuestionAnswer', {
								questionID: vm.onlineQuesionsDetail.id,
								currentPage: vm.currentReplyPage,
								pageItems: vm.replyPageItem
							});

						case 3:
							result = _context3.sent;

							vm.replyList = result;
							if (result.length === 0) {
								vm.replyList.totalReplypage = 0;
							}
							if (result.length !== 0) {
								vm.replyList.totalReplypage = Math.ceil(result[0].count / vm.replyPageItem);
								vm.replyList.forEach(function () {
									var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
										var studentInfo, teacherInfo;
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														item.answerTime = new Date(item.answerTime.time);

														if (!(item.type === 0)) {
															_context2.next = 8;
															break;
														}

														_context2.next = 4;
														return http.get("GetStudents", {
															userID: item.answerId
														});

													case 4:
														studentInfo = _context2.sent;

														if (studentInfo.length !== 0) item.realName = studentInfo[0].realName;
														_context2.next = 12;
														break;

													case 8:
														_context2.next = 10;
														return http.get("GetTeachers", {
															userID: item.answerId
														});

													case 10:
														teacherInfo = _context2.sent;

														if (teacherInfo.length !== 0) item.realName = teacherInfo[0].realName;

													case 12:
													case "end":
														return _context2.stop();
												}
											}
										}, _callee2, _this);
									}));

									return function (_x) {
										return _ref3.apply(this, arguments);
									};
								}());
							}

							_context3.next = 13;
							break;

						case 9:
							_context3.prev = 9;
							_context3.t0 = _context3["catch"](0);

							http.alert({
								parent: $element, content: "获取回复失败," + _context3.t0
							});
							return _context3.abrupt("return");

						case 13:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 9]]);
		}));

		return function getQuestionReply() {
			return _ref2.apply(this, arguments);
		};
	}();

	var vm = this;
	vm.$onInit = init;
	vm.isShow = false;
	vm.replyList = null;
	vm.onlineQuesionsDetail = null;
	vm.currentClass = null;
	vm.isHistroy = null;
	vm.imgUrl = null;
	vm.userinfo = null;
	vm.reply = reply;
	vm.currentReplyPage = 1;
	vm.replyPageItem = 7;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;

	function init() {
		vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail;
		vm.currentClass = $stateParams.currentClass;
		vm.isHistroy = $stateParams.isHistroy;
		vm.currentPage = $stateParams.currentPage;
		vm.pageItems = $stateParams.pageItems;
		vm.totalpage = $stateParams.totalpage;
		vm.userinfo = $cookies.getObject("userInfo");
		vm.userinfoId = parseInt(vm.userinfo.id);
		getQuestionReply();
		var imgInput = document.getElementsByClassName("js_reply_imgs")[0];
		angular.element(imgInput).bind("change", onSelectImg);
	}
	function previousPage() {
		vm.currentReplyPage--;
		getQuestionReply();
	}
	function nextPage() {
		vm.currentReplyPage++;
		getQuestionReply();
	}
	vm.showReply = function () {
		vm.isShow = !vm.isShow;
		vm.msg = "";
	};
	function onSelectImg(event) {
		var img = document.getElementsByClassName("js_reply_img_preview")[0];
		var files = event.target.files;
		if (files.length === 0) {
			img.src = "";
			return;
		}
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			img.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
	vm.goToImgUrl = function (img) {
		//window.open(img);
		http.imgDialog(img);
	};

	vm.deleleReply = function () {
		var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(replyId, answerId) {
			var userinfo, dialog;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							userinfo = $cookies.getObject("userInfo");

							if (parseInt(userinfo.id) === answerId) {
								dialog = http.confirm({
									parent: $element, content: "是否删除?"
								});

								dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
									var result;
									return _regenerator2.default.wrap(function _callee4$(_context4) {
										while (1) {
											switch (_context4.prev = _context4.next) {
												case 0:
													_context4.next = 2;
													return http.get('DeleteReply', { ReplyID: replyId });

												case 2:
													result = _context4.sent;

													if (result === true) {

														getQuestionReply();
													} else {

														http.alert({
															parent: $element, content: "删除失败"
														});
													}

												case 4:
												case "end":
													return _context4.stop();
											}
										}
									}, _callee4, this);
								})), function () {});
							}

						case 2:
						case "end":
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		return function (_x2, _x3) {
			return _ref4.apply(this, arguments);
		};
	}();
	$scope.$on("ready_back", function () {
		if (vm.isHistroy === true) {
			$state.go("student.studentQuestionHistory", {
				currentPage: vm.currentPage,
				pageItems: vm.pageItems,
				totalpage: vm.totalpage
			});
		} else {
			$state.go("student.onlineQuestion", {
				currentClass: vm.currentClass,
				currentPage: vm.currentPage,
				pageItems: vm.pageItems,
				totalpage: vm.totalpage
			});
		}
	});
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "studentOnlineNavigation";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentOnlineNavigation/studentOnlineNavigation.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var vm = this;
  $scope.$on("ready_back", function () {
    $state.go("student.studentIndex");
  });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentPostQuestion";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentPostQuestion/studentPostQuestion.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$mdDialog", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $mdDialog) {
  var init = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var userInfo, subjectTeacherData, fileInput;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = $cookies.getObject("userInfo");
              _context.next = 3;
              return http.get("GetAllSubject");

            case 3:
              subjectTeacherData = _context.sent;

              vm.subjectList = dataGroup(subjectTeacherData);
              if (vm.subjectList.length !== 0) {
                vm.currSubject = vm.subjectList[0];
                vm.currSubjectId = vm.currSubject.SubjectID;
                vm.currTeacher = vm.currSubject.teacherList[0].teacherId;
              }
              $scope.$watch("$ctrl.currSubject", function () {
                vm.currSubject = vm.subjectList.find(function (item) {
                  return item.SubjectID === vm.currSubject.SubjectID;
                });
                if (vm.currSubject != null) vm.currTeacher = vm.currSubject.teacherList[0].teacherId;;
              });
              fileInput = document.getElementsByClassName("js_question_imgs")[0];

              angular.element(fileInput).bind("change", onSelectImg);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function init() {
      return _ref.apply(this, arguments);
    };
  }();

  var postQuestion = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var userInfo, question, imgFile, formData, imgResult, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(checkQuestion() === false)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              http.wait();
              userInfo = $cookies.getObject("userInfo");
              question = {
                title: vm.title,
                content: vm.content,
                img: "",
                studentId: userInfo.id,
                teacherID: vm.currTeacher,
                subjectID: vm.currSubjectId
              };
              imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];

              if (!imgFile) {
                _context2.next = 21;
                break;
              }

              _context2.prev = 7;
              formData = new FormData();

              formData.append("img", imgFile);
              _context2.next = 12;
              return http.submitForm("UploadImage", formData);

            case 12:
              imgResult = _context2.sent;

              question.img = imgResult;
              _context2.next = 21;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](7);

              http.alert({
                parent: $element, content: "图片上传失败"
              });
              $mdDialog.hide();
              return _context2.abrupt("return");

            case 21:
              _context2.prev = 21;
              _context2.next = 24;
              return http.post("PostStudentQuestion", question);

            case 24:
              result = _context2.sent;

              $mdDialog.hide();
              http.alert({
                parent: $element, content: "提交成功"
              }).then(function () {
                $state.go("student.studentQuestionHistory");
              });
              _context2.next = 33;
              break;

            case 29:
              _context2.prev = 29;
              _context2.t1 = _context2["catch"](21);

              $mdDialog.hide();
              http.alert({
                parent: $element, content: "提交问题失败"
              });

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[7, 16], [21, 29]]);
    }));

    return function postQuestion() {
      return _ref2.apply(this, arguments);
    };
  }();

  var vm = this;
  vm.$onInit = init;
  vm.title = "";
  vm.content = "";
  vm.subjectList = [];
  vm.currSubject = null;
  vm.currSubjectId = null;
  vm.currTeacher = null;
  vm.imgUrl = null;
  vm.postQuestion = postQuestion;


  function checkQuestion() {
    try {
      vm.title = vm.title.trim();
      vm.content = vm.content.trim();
      if (vm.title === "") {
        http.alert({
          parent: $element, content: "请输入标题"
        });
        return false;
      }
      if (vm.title.length < 5) {

        http.alert({
          parent: $element, content: "标题不能少于五个字"
        });
        return false;
      }
      if (vm.content === "") {
        http.alert({
          parent: $element, content: "请输入内容"
        });
        return false;
      }
      if (vm.content.length < 5) {
        http.alert({
          parent: $element, content: "内容不能少于五个字"
        });
        return false;
      }
      //let imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];
      return true;
    } catch (error) {
      http.alert({
        parent: $element, content: "数据检查异常" + error
      });
      return false;
    }
  }

  /**
   * 按科目，对老师进行分组
   */
  function dataGroup(data) {
    var groupList = [];
    data.forEach(function (item) {
      var findGroup = groupList.find(function (group) {
        return item.SubjectID === group.SubjectID;
      });
      if (!findGroup) {
        findGroup = {
          SubjectID: item.SubjectID,
          SubjectName: item.SubjectName,
          teacherList: []
        };
        groupList.push(findGroup);
      }
      findGroup.teacherList.push({
        teacherId: item.teacherId, teacherName: item.realName
      });
    });
    return groupList;
  }

  function onSelectImg(event) {
    var img = document.getElementsByClassName("js_question_img_preview")[0];
    var imgFile = document.getElementsByClassName("js_question_imgs")[0].files[0];
    if (!imgFile) {
      img.src = "";
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(imgFile);
  }

  $scope.$on("ready_back", function () {
    $state.go("student.question");
  });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentQuestionHistory";
function root(app) {
	app.component(name, {
		templateUrl: "./component/studentQuestionHistory/studentQuestionHistory.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
	var getTeacherQuestion = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			var result;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return http.get("GetStudentQuestion", {
								currentPage: vm.currentPage,
								pageItems: vm.pageItems
							});

						case 3:
							result = _context3.sent;

							vm.questionsList = result;
							if (result.length !== 0) {
								vm.questionsList.totalpage = Math.ceil(result[0].count / vm.pageItems);
								vm.questionsList.forEach(function () {
									var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
										var studentInfo;
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														item.createTime = new Date(item.createTime.time);
														_context2.next = 3;
														return http.get("GetStudents", {
															userID: item.studentId
														});

													case 3:
														studentInfo = _context2.sent;

														if (studentInfo.length !== 0) {
															item.studentName = studentInfo[0].realName;
														}

													case 5:
													case "end":
														return _context2.stop();
												}
											}
										}, _callee2, _this);
									}));

									return function (_x) {
										return _ref3.apply(this, arguments);
									};
								}());
							}

							_context3.next = 11;
							break;

						case 8:
							_context3.prev = 8;
							_context3.t0 = _context3["catch"](0);

							http.alert({
								parent: $element, content: "获取历史数据失败"
							});

						case 11:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 8]]);
		}));

		return function getTeacherQuestion() {
			return _ref2.apply(this, arguments);
		};
	}();

	var vm = this;
	vm.questionsList = null;
	vm.currentPage = 1;
	vm.pageItems = 7;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if ($stateParams.currentPage !== null) {
							vm.currentPage = $stateParams.currentPage;
							vm.pageItems = $stateParams.pageItems;
							vm.totalpage = $stateParams.totalpage;
						}
						getTeacherQuestion();

					case 2:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function previousPage() {
		vm.currentPage--;
		getTeacherQuestion();
	}
	function nextPage() {
		vm.currentPage++;
		getTeacherQuestion();
	}
	$scope.$on("ready_back", function () {
		$state.go("student.question");
	});
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "studentSidebar";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentSidebar/studentSidebar.html",
    controller: ["$scope", "$rootScope", "$element", "$state", '$cookies', '$transitions', "http", controller]
  });
}
function controller($scope, $rootScope, $element, $state, $cookies, $transitions, http) {
  var vm = this;
  vm.isActive = null;
  vm.$onInit = function () {
    changeActive($state.current.name);
    vm.isActive = $rootScope.studentActive;
    $transitions.onEnter({ entering: '*.*' }, function (transition, state) {
      changeActive(state.name);
    });
  };

  function changeActive(stateName) {
    switch (stateName) {
      case "student.test":
        $rootScope.studentActive = [false, false, false, false];
        $rootScope.studentActive[0] = true;
        break;
      case "student.homework":
        $rootScope.studentActive = [false, false, false, false];
        $rootScope.studentActive[1] = true;
        break;
      case "student.question":
        $rootScope.studentActive = [false, false, false, false];
        $rootScope.studentActive[2] = true;
        break;
      case "student.center":
        $rootScope.studentActive = [false, false, false, false];
        $rootScope.studentActive[3] = true;
        break;
    }
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentTestPaperList";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentTestPaperList/studentTestPaperList.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var getPaper = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var paperResult;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return http.get("GetPaper", {
                subjectId: vm.subject.SubjectID
              });

            case 2:
              vm.papers = _context2.sent;

              vm.papers.forEach(function (paper) {
                paper.createTime = new Date(paper.createTime.time);
              });
              _context2.next = 6;
              return http.get("GetPaperResult");

            case 6:
              paperResult = _context2.sent;

              vm.papers.forEach(function (paper) {
                var findResult = paperResult.find(function (result) {
                  if (result.paper.paperId === paper.testpaperID) {
                    paper.resultObj = result;
                    return true;
                  }
                });
                if (findResult !== undefined) {
                  vm.paperFinish.push(paper);
                } else {
                  vm.paperUnfinish.push(paper);
                }
              });
              if (vm.paperFinish.length === 0) {
                vm.paperFinishTemp = vm.paperFinish;
                vm.paperFinishTemp.totalpage = 0;
              } else {

                vm.paperFinishTemp = vm.paperFinish;
                vm.paperFinishTemp.totalpage = Math.ceil(vm.paperFinishTemp.length / vm.pageItems);
                getFinishData();
              }
              if (vm.paperUnfinish.length === 0) {
                vm.paperUnfinishTemp = vm.paperUnfinish;
                vm.paperUnfinishTemp.totalpage = 0;
              } else {
                vm.paperUnfinishTemp = vm.paperUnfinish;
                vm.paperUnfinishTemp.totalpage = Math.ceil(vm.paperUnfinishTemp.length / vm.pageItems);
                getUnFinishData();
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function getPaper() {
      return _ref2.apply(this, arguments);
    };
  }();

  var vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.paperUnfinish = [];
  vm.paperFinish = [];
  vm.paperLink = null;
  vm.isDownload = false;
  vm.currentUnfinishPage = 1;
  vm.pageItems = 5;
  vm.currentFinishPage = 1;
  vm.previousFinishPage = previousFinishPage;
  vm.nextFinishPage = nextFinishPage;
  vm.previousUnfinishPage = previousUnfinishPage;
  vm.nextUnfinishPage = nextUnfinishPage;
  vm.paperFinishTemp = [];
  vm.paperUnfinishTemp = [];

  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var rs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if ($stateParams.SubjectName !== null) {
              vm.subject = {
                SubjectName: $stateParams.SubjectName,
                SubjectID: $stateParams.SubjectID,
                teacherID: $stateParams.teacherID
              };
            }
            if ($stateParams.currentUnfinishPage != null) {
              vm.currentUnfinishPage = $stateParams.currentUnfinishPage;
              vm.pageItems = $stateParams.pageItems;
            }
            if ($stateParams.currentFinishPage != null) {
              vm.currentFinishPage = $stateParams.currentFinishPage;
              vm.pageItems = $stateParams.pageItems;
              vm.selectedIndex = 1;
            }
            _context.next = 6;
            return getPaper();

          case 6:
            rs = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));
  function previousFinishPage() {
    vm.currentFinishPage--;
    getFinishData();
  }
  function nextFinishPage() {
    vm.currentFinishPage++;
    getFinishData();
  }
  function previousUnfinishPage() {
    vm.currentUnfinishPage--;
    getUnFinishData();
  }
  function nextUnfinishPage() {
    vm.currentUnfinishPage++;
    getUnFinishData();
  }

  function getFinishData() {
    var newData = [];
    var start = (vm.currentFinishPage - 1) * vm.pageItems;
    console.log("start" + start);
    for (var i = start; i < start + vm.pageItems; ++i) {
      if (i >= vm.paperFinishTemp.length) {
        vm.paperFinish = newData;
        return;
      }
      newData.push(vm.paperFinishTemp[i]);
    }
    vm.paperFinish = newData;
    console.log("newData" + newData);
    console.log("newData" + newData.length);
    console.log("paperFinish" + vm.paperFinish.length);
  }
  function getUnFinishData() {
    var newData = [];
    var start = (vm.currentUnfinishPage - 1) * vm.pageItems;
    for (var i = start; i < start + vm.pageItems; ++i) {
      if (i >= vm.paperUnfinishTemp.length) {
        vm.paperUnfinish = newData;
        return;
      }
      newData.push(vm.paperUnfinishTemp[i]);
    }
    vm.paperUnfinish = newData;
    console.log("newData" + newData.length);
    console.log("paperUnfinish" + vm.paperUnfinish.length);
  }
  vm.downloadPaper = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(paperId) {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return http.get("DownLoadPaper", { paperID: paperId });

            case 3:
              result = _context3.sent;

              vm.paperLink = result;
              http.alert({
                parent: $element, content: "试卷生成成功，文件路径如下：\n" + vm.paperLink + "\n"
              }).then(function () {
                var downLink = document.getElementById("download_paper");
                var event = document.createEvent("MouseEvents");
                event.initEvent("click", false, false);
                downLink.dispatchEvent(event);
              });
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);

              http.alert({
                parent: $element, content: "生成试卷异常"
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 8]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  $scope.$on("ready_back", function () {
    $state.go("student.test");
  });

  vm.openMenu = function ($mdMenu, ev) {
    $mdMenu.open(ev);
  };
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentTestPaperResultDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentTestPaperResultDetail/studentTestPaperResultDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "$stateParams", "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, $stateParams, http) {
  var vm = this;
  vm.paper = null;
  vm.resultDetail = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var paperResultList;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            $stateParams.testpaperID = parseInt($stateParams.testpaperID);
            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID,
              teacherID: $stateParams.teacherID
            };
            vm.currentFinishPage = $stateParams.currentFinishPage;
            vm.pageItems = $stateParams.pageItems;

            //    let paperList = await http.get("GetPaper",{subjectId:vm.subject.SubjectID});
            //    vm.paper = paperList.find((item)=>{
            //      return item.testpaperID === $stateParams.testpaperID
            //    });
            _context.next = 7;
            return http.get("GetPaperResult");

          case 7:
            paperResultList = _context.sent;

            vm.paperResult = paperResultList.find(function (item) {
              return item.paper.paperId === $stateParams.testpaperID;
            });
            vm.paperResult.paper.time = new Date(vm.paperResult.paper.time.time);
            _context.next = 12;
            return http.get("GetPaperResultDetail", {
              paperResultID: $stateParams.paperResultID
            });

          case 12:
            vm.resultDetail = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 15]]);
  }));

  $scope.$on("ready_back", function () {
    $state.go("student.studentTestPaperList", {
      SubjectName: vm.subject.SubjectName,
      SubjectID: vm.subject.SubjectID,
      teacherID: vm.subject.teacherID,
      currentFinishPage: vm.currentFinishPage,
      pageItems: vm.pageItems
    });
  });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentTestPaper";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentTestPaper/studentTestPaper.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.msg = "";
  vm.subject = null;
  vm.paper = null;
  vm.paperDetail = null;
  vm.questionIndex = 0;
  vm.currQuestion = null;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var userInfo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $scope.$emit("test");
            _context.prev = 1;
            userInfo = $cookies.getObject("userInfo");

            vm.subject = {
              SubjectName: $stateParams.SubjectName,
              SubjectID: $stateParams.SubjectID,
              teacherID: $stateParams.teacherID
            };
            vm.paper = {
              testpaperID: $stateParams.testpaperID,
              testName: $stateParams.testName
            };
            vm.currentUnfinishPage = $stateParams.currentUnfinishPage;
            vm.pageItems = $stateParams.pageItems;

            _context.next = 9;
            return http.get("GetPaperDetail", {
              paperID: vm.paper.testpaperID
            });

          case 9:
            vm.paperDetail = _context.sent;

            vm.currQuestion = vm.paperDetail[0];
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 13]]);
  }));

  vm.changeIndex = function (upOrDown) {
    if (upOrDown === 'up') {
      --vm.questionIndex;
      vm.questionIndex = vm.questionIndex >= 0 ? vm.questionIndex : 0;
    } else {
      ++vm.questionIndex;
      if (vm.questionIndex >= vm.paperDetail.length) {
        vm.questionIndex -= 1;
      }
    }
    vm.currQuestion = vm.paperDetail[vm.questionIndex];
  };

  vm.submitResult = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var userInfo, result, correctAnswer, rs, correctPercent, infor, dialog;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            userInfo = $cookies.getObject("userInfo");
            result = {
              "paperID": vm.paper.testpaperID,
              "studentID": userInfo.id,
              "score": 0,
              "paperresult": []
            };
            correctAnswer = 0;

            vm.paperDetail.forEach(function (item) {
              var studentAnswer = item.studentAnswer;
              var answer = item.answer;
              if (studentAnswer === answer) {
                result.score += item.score;
                correctAnswer = correctAnswer + 1;
              }
              result.paperresult.push({
                "questionID": item.itemId,
                "answer": studentAnswer || ""
              });
            });
            _context2.next = 7;
            return http.post("SubmitPaper", result);

          case 7:
            rs = _context2.sent;
            correctPercent = Math.round(correctAnswer / vm.paperDetail.length * 100);
            infor = "";

            if (correctPercent < 20) {
              infor = "测试结果不妙，别灰心继续努力哦！";
            } else if (correctPercent < 60) {
              infor = "革命尚未成功！";
            } else if (correctPercent < 80) {
              infor = "还需更上一层楼！";
            } else if (correctPercent < 90) {
              infor = "good！";
            }
            if (rs === true) {
              dialog = http.alert({
                parent: $element, content: "提交答案成功! \n" + "正确率" + correctPercent + "% \n" + infor
              });

              dialog.then(function () {
                $state.go('student.studentTestPaperList', {
                  SubjectName: vm.subject.SubjectName,
                  SubjectID: vm.subject.SubjectID,
                  teacherID: vm.subject.teacherID,
                  currentUnfinishPage: vm.currentUnfinishPage,
                  pageItems: vm.pageItems

                });
              }, function () {
                $state.go('student.studentTestPaperList', {
                  SubjectName: vm.subject.SubjectName,
                  SubjectID: vm.subject.SubjectID,
                  teacherID: vm.subject.teacherID,
                  currentUnfinishPage: vm.currentUnfinishPage,
                  pageItems: vm.pageItems
                });
              });
            } else {
              http.alert({
                parent: $element, content: "提交答案失败"
              });
            }

            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);

            http.alert({
              parent: $element, content: "提交答案失败"
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 14]]);
  }));

  $scope.$on("ready_back", function () {
    var dialog = http.confirm({
      parent: $element, content: "您当前正在做试卷，如果离开本页面，测试将放弃！"
    });
    dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              $state.go("student.studentTestPaperList", {
                SubjectName: vm.subject.SubjectName,
                SubjectID: vm.subject.SubjectID,
                teacherID: vm.subject.teacherID,
                currentUnfinishPage: vm.currentUnfinishPage,
                pageItems: vm.pageItems
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })), function () {});
  });

  $scope.$on("home_back", function () {
    var dialog = http.confirm({
      parent: $element, content: "您当前正在做试卷，如果离开本页面，测试将放弃！"
    });
    dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              $state.go("student.studentIndex");

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })), function () {});
  });
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "studentTest";
function root(app) {
  app.component(name, {
    templateUrl: "./component/studentTest/studentTest.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.msg = "";
  vm.subjects = [];
  $scope.$on("ready_back", function () {
    $state.go("student.studentIndex");
  });
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var result, i, flag, j;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return http.get("GetAllSubject");

          case 3:
            vm.subjects = _context.sent;
            result = [];
            i = 0;

          case 6:
            if (!(i < vm.subjects.length)) {
              _context.next = 21;
              break;
            }

            flag = 0;
            j = 0;

          case 9:
            if (!(j < result.length)) {
              _context.next = 16;
              break;
            }

            if (!(result[j].SubjectID === vm.subjects[i].SubjectID)) {
              _context.next = 13;
              break;
            }

            flag = 1;
            return _context.abrupt("break", 16);

          case 13:
            j++;
            _context.next = 9;
            break;

          case 16:
            if (flag === 0) {
              result.push(vm.subjects[i]);
            }
            console.log(result);

          case 18:
            i++;
            _context.next = 6;
            break;

          case 21:
            vm.subjects = result;
            setColor();
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面失败"
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 25]]);
  }));

  function setColor() {
    vm.subjects.forEach(function (item) {
      item.color = http.getColor();
    });
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherAssignStudent";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherAssignStudent/teacherAssignStudent.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.center");
  });
  var vm = this;
  vm.msg = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.userInfo = $cookies.getObject("userInfo");
            _context.next = 4;
            return http.get("GetTeacherClasses");

          case 4:
            vm.classes = _context.sent;

            if (vm.classes.length > 0) {
              vm.currentClass = vm.classes[0].classes.classId;
            }
            _context.next = 8;
            return http.get("GetStudents");

          case 8:
            vm.students = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "加载数据异常"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));
  vm.toAssign = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var data, result, students;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            vm.msg = "";
            data = {
              classId: vm.currentClass,
              studentIds: []
            };

            vm.students.forEach(function (student) {
              if (student.isCheck === true) {
                data.studentIds.push(student.userID);
              }
            });
            _context2.next = 5;
            return http.post('AssignStudent', data);

          case 5:
            result = _context2.sent;

            if (result === true) {
              http.alert({
                parent: $element, content: "分配班级成功"
              });
            } else if (result === false) {
              http.alert({
                parent: $element, content: "分配班级失败"
              });
            } else {
              students = vm.students.find(function (item) {
                return result.userID === item.userID;
              });

              http.alert({
                parent: $element, content: students.realName + "已加入该班级"
              });
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherCenter";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherCenter/teacherCenter.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var vm = this;
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherIndex");
  });
  vm.$onInit = function () {
    vm.userInfo = $cookies.getObject("userInfo");
  };

  vm.logout = function () {};
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherClassStudent";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherClassStudent/teacherClassStudent.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  var vm = this;
  vm.classStudent = null;
  var classId = null;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            classId = $stateParams.classId;
            _context.prev = 1;
            _context.next = 4;
            return http.get("GetAllClassStudent", { classId: classId });

          case 4:
            vm.classStudent = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);

            http.alert({
              parent: $element, content: "加载数据异常异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherManagerClassCreate");
  });
  vm.deleteStudent = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userId) {
      var dialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dialog = http.confirm({
                parent: $element, content: "是否删除?"
              });

              dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var result;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return http.get("updateStudentClass", {
                          studentId: userId,
                          classId: classId,
                          typeId: 0

                        });

                      case 2:
                        result = _context2.sent;

                        if (!(result === true)) {
                          _context2.next = 10;
                          break;
                        }

                        http.alert({
                          parent: $element, content: "删除成功"
                        });
                        _context2.next = 7;
                        return http.get("GetAllClassStudent", { classId: classId });

                      case 7:
                        vm.classStudent = _context2.sent;
                        _context2.next = 11;
                        break;

                      case 10:
                        http.alert({
                          parent: $element, content: "删除失败"
                        });

                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              })), function () {});

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherHomeworkNavigation";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherHomeworkNavigation/teacherHomeworkNavigation.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherIndex");
  });
  var vm = this;

  vm.$onInit = function () {};
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherHomeworkResultDetail";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherHomeworkResultDetail/teacherHomeworkResultDetail.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherHomeworkResultList", {
      homeworkId: vm.homework.homeworkID,
      homeWorkName: vm.homework.homeWorkName
    });
  });
  var vm = this;
  vm.homework = null;
  vm.homeworkResultDetail = [];
  vm.evaluation = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.homework = {
              homeworkID: $stateParams.homeworkId,
              homeWorkName: $stateParams.homeWorkName,
              studentName: $stateParams.studentName,
              studentId: $stateParams.studentId
            };
            _context.next = 4;
            return http.get("GetHomeworkResultDetail", {
              homeworkResultID: $stateParams.homeworkResultID
            });

          case 4:
            vm.homeworkResultDetail = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取学生作业结果详情异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  vm.submitEvaluation = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var data, result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(!vm.evaluation || vm.evaluation.trim() === "")) {
              _context2.next = 4;
              break;
            }

            http.alert({
              parent: $element, content: "请输入评价信息"
            });
            return _context2.abrupt("return");

          case 4:
            vm.evaluation = vm.evaluation.trim();
            data = {
              studentId: vm.homework.studentId,
              homeWorkId: vm.homework.homeworkID,
              evaluation: vm.evaluation
            };
            _context2.next = 8;
            return http.get("TeacherEvaluation", data);

          case 8:
            result = _context2.sent;

            if (result === true) {
              http.alert({
                parent: $element, content: "提交评价成功"
              });
            } else {
              http.alert({
                parent: $element, content: "提交评价失败"
              });
            }
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);

            http.alert({
              parent: $element, content: "提交评价失败"
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 12]]);
  }));
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherHomeworkResultList";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherHomeworkResultList/teacherHomeworkResultList.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
  });
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.homeWorkHistory");
  });
  var vm = this;
  vm.homework = null;
  vm.homeworkResultList = [];
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.homework = {
              homeworkID: $stateParams.homeworkId,
              homeWorkName: $stateParams.homeWorkName
            };
            _context.next = 4;
            return http.get("GetHomeworkResult", {
              homeworkID: vm.homework.homeworkID
            });

          case 4:
            vm.homeworkResultList = _context.sent;

            vm.homeworkResultList.forEach(function (item) {
              item.homework.time = new Date(item.homework.time.time);
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "获取学生作业情况列表数据异常"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherIndexHead";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherIndexHead/teacherIndexHead.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var vm = this;

  vm.$onInit = function () {
    vm.userInfo = $cookies.getObject("userInfo");
  };

  vm.logout = function () {
    //$cookies.remove("userInfo");
    $state.go("login");
  };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherIndex";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherIndex/teacherIndex.html",
    controller: ["$scope", "$rootScope", "$element", "$state", controller]
  });
}
function controller($scope, $rootScope, $element, $state) {
  var vm = this;
  vm.$onInit = function () {};
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherManagerClassCreate";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherManagerClassCreate/teacherManagerClassCreate.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.center");
  });
  var vm = this;
  vm.classInfo = {
    className: ""
  };
  vm.msg = "";
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var classes;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            vm.userInfo = $cookies.getObject("userInfo");
            _context.next = 4;
            return http.get("GetAllSubject");

          case 4:
            vm.subjectlist = _context.sent;
            _context.next = 7;
            return http.get("GetTeacherClasses");

          case 7:
            classes = _context.sent;

            vm.classes = classes;
            if (vm.subjectlist.length > 0) {
              vm.currentSubject = vm.subjectlist[0].SubjectID;
            }
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "加载数据异常异常"
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 12]]);
  }));
  vm.create = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(checkClass(vm.classInfo.className) === true)) {
              _context2.next = 13;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return http.get("CreateClass", {
              className: vm.classInfo.className,
              subjectID: vm.currentSubject
            });

          case 4:
            result = _context2.sent;

            if (result === true) {
              http.alert({
                parent: $element, content: "班级创建成功"
              });
            } else {
              http.alert({
                parent: $element, content: "该班级已存在"
              });
            }
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);

            http.alert({
              parent: $element, content: "班级创建失败"
            });

          case 11:
            _context2.next = 14;
            break;

          case 13:
            http.alert({
              parent: $element, content: "班级名不能为空！"
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 8]]);
  }));
  vm.deleteClass = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(classId) {
      var dialog;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dialog = http.confirm({
                parent: $element, content: "是否删除?"
              });

              dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var userInfo, result, classes;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        userInfo = $cookies.getObject("userInfo");
                        _context3.next = 3;
                        return http.get("DeleteTeacherClass", {
                          teacherId: userInfo.id,
                          classId: classId
                        });

                      case 3:
                        result = _context3.sent;

                        if (!(result === true)) {
                          _context3.next = 12;
                          break;
                        }

                        http.alert({
                          parent: $element, content: "班级删除成功！"
                        });
                        _context3.next = 8;
                        return http.get("GetTeacherClasses");

                      case 8:
                        classes = _context3.sent;

                        vm.classes = classes;
                        _context3.next = 13;
                        break;

                      case 12:
                        http.alert({
                          parent: $element, content: "删除失败！"
                        });

                      case 13:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              })), function () {});

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  function checkClass(className) {
    if (className === null || className === undefined || className === "") {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherOnlineAnswerDetail";
function root(app) {
	app.component(name, {
		templateUrl: "./component/teacherOnlineAnswerDetail/teacherOnlineAnswerDetail.html",
		controller: ["$scope", "$cookies", "$element", "$state", "http", "$stateParams", "$mdDialog", controller]
	});
}
function controller($scope, $cookies, $element, $state, http, $stateParams, $mdDialog) {
	var postReply = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var content, userInfo, data, imgInput, formData, imgResult, result;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							content = vm.answerContent;

							if (!(content === null || content === "" || content === undefined)) {
								_context.next = 4;
								break;
							}

							http.alert({
								parent: $element, content: "请输入内容"
							});
							return _context.abrupt("return");

						case 4:
							http.wait();
							userInfo = $cookies.getObject("userInfo");
							data = {
								answer: vm.answerContent,
								questionID: $stateParams.onlineQuestionsDetail.id,
								img: "",
								answerID: userInfo.id,
								type: userInfo.type
							};
							imgInput = document.getElementsByClassName("js_reply_imgs")[0];

							if (!(imgInput.files.length > 0)) {
								_context.next = 23;
								break;
							}

							_context.prev = 9;
							formData = new FormData();

							formData.append("img", imgInput.files[0]);
							_context.next = 14;
							return http.submitForm("UploadImage", formData);

						case 14:
							imgResult = _context.sent;

							data.img = imgResult;
							_context.next = 23;
							break;

						case 18:
							_context.prev = 18;
							_context.t0 = _context["catch"](9);

							$mdDialog.hide();
							http.alert({
								parent: $element, content: "图片上传失败"
							});
							return _context.abrupt("return");

						case 23:
							_context.prev = 23;
							_context.next = 26;
							return http.post('ReplyStudentQuestion', data);

						case 26:
							result = _context.sent;

							if (result === true) {
								$mdDialog.hide();
								http.alert({
									parent: $element, content: "回复成功"
								}).then(function () {
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
							_context.next = 34;
							break;

						case 30:
							_context.prev = 30;
							_context.t1 = _context["catch"](23);

							$mdDialog.hide();
							http.alert({
								parent: $element, content: "回复失败"
							});

						case 34:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this, [[9, 18], [23, 30]]);
		}));

		return function postReply() {
			return _ref.apply(this, arguments);
		};
	}();

	var getQuestionReply = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			var result;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return http.get('getQuestionAnswer', {
								questionID: vm.onlineQuesionsDetail.id,
								currentPage: vm.currentReplyPage,
								pageItems: vm.replyPageItem
							});

						case 3:
							result = _context3.sent;

							vm.replyList = result;
							if (result.length === 0) {
								vm.replyList.totalReplypage = 0;
							}
							if (result.length !== 0) {
								vm.replyList.totalReplypage = Math.ceil(result[0].count / vm.replyPageItem);
								vm.replyList.forEach(function () {
									var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
										var studentInfo, teacherInfo;
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														item.answerTime = new Date(item.answerTime.time);

														if (!(item.type === 0)) {
															_context2.next = 8;
															break;
														}

														_context2.next = 4;
														return http.get("GetStudents", {
															userID: item.answerId
														});

													case 4:
														studentInfo = _context2.sent;

														if (studentInfo.length !== 0) item.realName = studentInfo[0].realName;
														_context2.next = 12;
														break;

													case 8:
														_context2.next = 10;
														return http.get("GetTeachers", {
															userID: item.answerId
														});

													case 10:
														teacherInfo = _context2.sent;

														if (teacherInfo.length !== 0) item.realName = teacherInfo[0].realName;

													case 12:
													case "end":
														return _context2.stop();
												}
											}
										}, _callee2, _this);
									}));

									return function (_x) {
										return _ref3.apply(this, arguments);
									};
								}());
							}

							_context3.next = 13;
							break;

						case 9:
							_context3.prev = 9;
							_context3.t0 = _context3["catch"](0);

							http.alert({
								parent: $element, content: "获取回复失败," + _context3.t0
							});
							return _context3.abrupt("return");

						case 13:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 9]]);
		}));

		return function getQuestionReply() {
			return _ref2.apply(this, arguments);
		};
	}();

	var vm = this;
	vm.$onInit = init;
	vm.isShow = false;
	vm.replyList = null;
	vm.onlineQuesionsDetail = null;
	vm.currentClass = null;
	vm.isHistroy = null;
	vm.imgUrl = null;
	vm.postReply = postReply;
	vm.currentReplyPage = 1;
	vm.replyPageItem = 7;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;
	function init() {
		vm.onlineQuesionsDetail = $stateParams.onlineQuestionsDetail;
		vm.currentClass = $stateParams.currentClass;
		vm.isHistroy = $stateParams.isHistroy;
		vm.currentPage = $stateParams.currentPage;
		vm.pageItems = $stateParams.pageItems;
		vm.totalpage = $stateParams.totalpage;
		vm.userinfo = $cookies.getObject("userInfo");
		vm.userinfoId = parseInt( vm.userinfo.id);
		getQuestionReply();
		var imgInput = document.getElementsByClassName("js_reply_imgs")[0];
		angular.element(imgInput).bind("change", onSelectImg);
	}
	vm.showReply = function () {
		vm.isShow = !vm.isShow;
		vm.msg = "";
	};
	vm.goToImgUrl = function (img) {
		http.imgDialog(img);
		//window.open(img);
	};
	function previousPage() {
		vm.currentReplyPage--;
		getQuestionReply();
	}
	function nextPage() {
		vm.currentReplyPage++;
		getQuestionReply();
	}

	vm.deleleReply = function () {
		var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(replyId, answerId) {
			var userinfo, dialog;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							userinfo = $cookies.getObject("userInfo");

							if (parseInt( userinfo.id) === answerId) {
								dialog = http.confirm({
									parent: $element, content: "是否删除?"
								});

								dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
									var result;
									return _regenerator2.default.wrap(function _callee4$(_context4) {
										while (1) {
											switch (_context4.prev = _context4.next) {
												case 0:
													_context4.next = 2;
													return http.get('DeleteReply', { ReplyID: replyId });

												case 2:
													result = _context4.sent;

													if (result === true) {

														getQuestionReply();
													} else {

														http.alert({
															parent: $element, content: "删除失败"
														});
													}

												case 4:
												case "end":
													return _context4.stop();
											}
										}
									}, _callee4, this);
								})), function () {});
							}

						case 2:
						case "end":
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		return function (_x2, _x3) {
			return _ref4.apply(this, arguments);
		};
	}();
	function onSelectImg(event) {
		var img = document.getElementsByClassName("js_reply_img_preview")[0];
		var files = event.target.files;
		if (files.length === 0) {
			img.src = "";
			return;
		}
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			img.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
	$scope.$on("ready_back", function () {
		if (vm.isHistroy === true) {
			$state.go("teacher.onlineHistoryAnswer", {
				currentPage: vm.currentPage,
				pageItems: vm.pageItems,
				totalpage: vm.totalpage
			});
		} else {
			$state.go("teacher.onlineanswer", {
				currentClass: vm.currentClass,
				currentPage: vm.currentPage,
				pageItems: vm.pageItems,
				totalpage: vm.totalpage
			});
		}
	});
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherOnlineAnswerNavigation";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherOnlineAnswerNavigation/teacherOnlineAnswerNavigation.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherIndex");
  });
  var vm = this;
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherPaperNavigation";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherPaperNavigation/teacherPaperNavigation.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  $scope.$on("ready_back", function () {
    $state.go("teacher.teacherIndex");
  });

  var vm = this;

  vm.$onInit = function () {};
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherPaper";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherPaper/teacherPaper.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var getQuestions = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(subjectId, value) {
      var result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              result = null;
              _context5.prev = 1;
              _context5.next = 4;
              return http.get("GetQuestions", {
                subjectId: subjectId,
                type: value
              });

            case 4:
              result = _context5.sent;

              vm.allQuestion = result;
              mergeData();
              vm.allQuestion.forEach(function (item) {
                if ("score" in item === false) {
                  item.score = 5;
                }
              });
              getData();

              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);

              http.alert({
                parent: $element, content: "获取题目数据异常"
              });

            case 14:
              return _context5.abrupt("return", result);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[1, 11]]);
    }));

    return function getQuestions(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  $scope.$on("ready_back", function () {
    $state.go("teacher.paper");
  });
  var vm = this;
  vm.types = [{ label: "选择题", value: 1 }, { label: "判断题", value: 2 }, { label: "简答题", value: 3 }];
  vm.currentType = 1;
  vm.questions = [];
  vm.allQuestion = [];
  vm.currentPage = 1;
  vm.pageItem = 5;
  vm.maxSize = 5;
  vm.msg = "";
  vm.currentSubject = null;
  vm.subjectlist = null;
  vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return http.get("GetTeacherSubject");

          case 3:
            vm.subjectlist = _context.sent;

            if (vm.subjectlist.length !== 0) {
              vm.currentSubject = vm.subjectlist[0].SubjectID;
              vm.getQuestionByType();
            }
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            http.alert({
              parent: $element, content: "初始化页面异常"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));
  vm.paper = {
    subjectId: null,
    papername: new Date().toLocaleString(),
    papertitles: []
  };
  vm.createPager = function () {
    vm.msg = "";
    var count = vm.paper.papertitles.length;
    var totalScore = 0;
    vm.paper.subjectId = vm.currentSubject;
    vm.paper.papertitles.forEach(function (item) {
      totalScore += item.score;
    });
    if (count === 0 || totalScore === 0) {
      http.alert({
        parent: $element, content: "请选择题目且合理配置试卷分数"
      });
      return;
    }
    var dialog = http.confirm({
      parent: $element, content: "确定创建试卷?共" + count + "道题,共" + totalScore + "分"
    });
    dialog.then((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return http.post("CreatePaper", vm.paper);

            case 3:
              result = _context2.sent;

              http.alert({
                parent: $element, content: "创建试卷成功"
              }).then(function () {
                $state.go("teacher.publishPaper");
              }, function () {
                $state.go("teacher.publishPaper");
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

              http.alert({
                parent: $element, content: "创建试卷失败"
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    })), function () {});
  };
  vm.getQuestionByType = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var rs;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(vm.subjectlist.length !== 0)) {
              _context3.next = 4;
              break;
            }

            _context3.next = 3;
            return getQuestions(vm.currentSubject, vm.currentType);

          case 3:
            rs = _context3.sent;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  vm.getQuestionBySubject = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var rs;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(vm.subjectlist.length !== 0)) {
              _context4.next = 4;
              break;
            }

            _context4.next = 3;
            return getQuestions(vm.currentSubject.SubjectID, vm.currentType.value);

          case 3:
            rs = _context4.sent;

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  vm.pageChanged = function (step) {
    var pageCount = Math.ceil(vm.allQuestion.length / vm.pageItem);
    if (vm.currentPage + step <= 0 || vm.currentPage + step > pageCount) {
      return;
    }
    vm.currentPage = vm.currentPage + step;
    getData();
  };

  vm.append = function (question) {
    if (question.isChecked === true) {
      vm.paper.papertitles.push({
        itemId: question.itemId,
        score: question.score
      });
    } else {
      vm.paper.papertitles = vm.paper.papertitles.filter(function (item) {
        return item.itemId !== question.itemId;
      });
    }
  };

  vm.questionScoreChange = function (question) {
    var find = vm.paper.papertitles.find(function (item) {
      return item.itemId === question.itemId;
    });
    if (find) {
      find.score = question.score;
    }
  };

  function mergeData() {
    vm.allQuestion.map(function (item) {
      var find = vm.paper.papertitles.find(function (tItem) {
        return tItem.itemId === item.itemId;
      });
      if (find) {
        item.isChecked = true;
        item.score = find.score;
      }
    });
  }

  function getData() {
    var newData = [];
    var start = (vm.currentPage - 1) * vm.pageItem;
    for (var i = start; i < start + vm.pageItem; ++i) {
      if (i >= vm.allQuestion.length) {
        vm.questions = newData;
        return;
      }
      newData.push(vm.allQuestion[i]);
    }
    vm.questions = newData;
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "teacherSidebar";
function root(app) {
  app.component(name, {
    templateUrl: "./component/teacherSidebar/teacherSidebar.html",
    controller: ["$scope", "$rootScope", "$element", "$state", '$cookies', '$transitions', "http", controller]
  });
}
function controller($scope, $rootScope, $element, $state, $cookies, $transitions, http) {
  var vm = this;
  vm.isActive = null;
  vm.$onInit = function () {
    changeActive($state.current.name);
    vm.isActive = $rootScope.teacherActive;
    $transitions.onEnter({ entering: '*.*' }, function (transition, state) {
      changeActive(state.name);
    });
  };

  function changeActive(stateName) {
    switch (stateName) {
      case "teacher.paper":
        $rootScope.teacherActive = [false, false, false, false];
        $rootScope.teacherActive[0] = true;
        break;
      case "teacher.homework":
        $rootScope.teacherActive = [false, false, false, false];
        $rootScope.teacherActive[1] = true;
        break;
      case "teacher.onlineanswer":
        $rootScope.teacherActive = [false, false, false, false];
        $rootScope.teacherActive[2] = true;
        break;
      case "teacher.center":
        $rootScope.teacherActive = [false, false, false, false];
        $rootScope.teacherActive[3] = true;
        break;
    }
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacherUserInfo";
function root(app) {
	app.component(name, {
		templateUrl: "./component/teacherUserInfo/teacherUserInfo.html",
		controller: ["$scope", "$element", "$state", "$cookies", "http", controller]
	});
}
function controller($scope, $element, $state, $cookies, http) {
	var init = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var user, userInfo, classes;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							user = $cookies.getObject("userInfo");
							_context.next = 4;
							return http.get("GetUserInfoByName", { user_number: user.teacher_number, type: user.type });

						case 4:
							userInfo = _context.sent;
							_context.next = 7;
							return http.get("GetTeacherClasses");

						case 7:
							classes = _context.sent;

							vm.userInfo = userInfo;
							vm.classes = classes;
							_context.next = 15;
							break;

						case 12:
							_context.prev = 12;
							_context.t0 = _context["catch"](0);

							http.alert({
								parent: $element, content: "加载个人信息异常"
							});

						case 15:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 12]]);
		}));

		return function init() {
			return _ref.apply(this, arguments);
		};
	}();

	$scope.$on("ready_back", function () {
		$state.go("teacher.center");
	});
	var vm = this;
	vm.$onInit = init();
	vm.classes = []; //教授的班级信息
	vm.userInfo = {
		teacher_number: "",
		realName: "",
		password: "",
		subjectID: "",
		teacherID: ""
	};


	vm.updateinfo = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
		var data, result;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						data = {
							"teacher_number": vm.userInfo.teacher_number,
							"realName": vm.userInfo.realName,
							"password": vm.userInfo.password,
							"teacherID": vm.userInfo.userID
						};
						_context2.next = 4;
						return http.post("UpdateTeacher", data);

					case 4:
						result = _context2.sent;

						if (result == true) {
							http.alert({
								parent: $element, content: "修改成功"
							});
						} else {
							http.alert({
								parent: $element, content: "修改失败"
							});
						}
						_context2.next = 11;
						break;

					case 8:
						_context2.prev = 8;
						_context2.t0 = _context2["catch"](0);

						http.alert({
							parent: $element, content: "更新信息异常"
						});

					case 11:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[0, 8]]);
	}));
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.name = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = root;

var _bootstrap = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = "teacheronlineHistoryAnswer";
function root(app) {
	app.component(name, {
		templateUrl: "./component/teacheronlineHistoryAnswer/teacheronlineHistoryAnswer.html",
		controller: ["$scope", "$element", "$state", '$cookies', "http", "$stateParams", controller]
	});
}
function controller($scope, $element, $state, $cookies, http, $stateParams) {
	var getTeacherQuestion = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
			var _this = this;

			var result;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return http.get("GetStudentQuestion", {
								currentPage: vm.currentPage,
								pageItems: vm.pageItems
							});

						case 3:
							result = _context3.sent;

							vm.questionsList = result;
							if (result.length !== 0) {
								vm.questionsList.totalpage = Math.ceil(result[0].count / vm.pageItems);
								vm.questionsList.forEach(function () {
									var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(item) {
										var studentInfo;
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														item.createTime = new Date(item.createTime.time);
														_context2.next = 3;
														return http.get("GetStudents", {
															userID: item.studentId
														});

													case 3:
														studentInfo = _context2.sent;

														if (studentInfo.length !== 0) {
															item.studentName = studentInfo[0].realName;
														}

													case 5:
													case "end":
														return _context2.stop();
												}
											}
										}, _callee2, _this);
									}));

									return function (_x) {
										return _ref3.apply(this, arguments);
									};
								}());
							}
							_context3.next = 11;
							break;

						case 8:
							_context3.prev = 8;
							_context3.t0 = _context3["catch"](0);

							http.alert({
								parent: $element, content: "获取历史数据失败"
							});

						case 11:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 8]]);
		}));

		return function getTeacherQuestion() {
			return _ref2.apply(this, arguments);
		};
	}();

	$scope.$on("ready_back", function () {
		$state.go("teacher.onlineanswerNavigation");
	});
	var vm = this;
	vm.currentPage = 1;
	vm.pageItems = 7;
	vm.previousPage = previousPage;
	vm.nextPage = nextPage;
	vm.questionsList = null;
	vm.$onInit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if ($stateParams.currentPage !== null) {
							vm.currentPage = $stateParams.currentPage;
							vm.pageItems = $stateParams.pageItems;
							vm.totalpage = $stateParams.totalpage;
						}
						getTeacherQuestion();

					case 2:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function previousPage() {
		vm.currentPage--;
		getTeacherQuestion();
	}
	function nextPage() {
		vm.currentPage++;
		getTeacherQuestion();
	}
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;
exports.default = root;

var _bootstrap = __webpack_require__(0);

var name = exports.name = "tophead";
function root(app) {
  app.component(name, {
    templateUrl: "./component/tophead/tophead.html",
    controller: ["$scope", "$element", "$state", '$cookies', "http", controller]
  });
}
function controller($scope, $element, $state, $cookies, http) {
  var vm = this;
  var isTest = false;
  vm.$onInit = function () {
    vm.userInfo = $cookies.getObject("userInfo");
  };

  vm.goBack = function () {
    $scope.$emit("request_back");
  };
  $scope.$on("testpaper", function () {
    isTest = true;
  });
  vm.goHomePage = function () {
    if (isTest === true) {
      $scope.$emit("homepage_back");
    } else {
      $state.go("student.studentIndex");
    }
  };
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routerConfig = routerConfig;
function routerConfig($stateProvider) {
	var states = [{
		name: 'login',
		url: '/login',
		views: {

			"content": {
				component: "login"
			}
		}
	}, {
		name: "student",
		url: '/student',
		abstract: true
	}, {
		name: "student.studentIndex",
		url: '/studentIndex',
		views: {
			"head@": {
				component: "studentIndexHead"
			},
			"content@": {
				component: "studentIndex"
			}
		}
	}, {
		name: "student.register",
		url: '/register',
		views: {
			"content@": {
				component: "registerStudent"
			}
		}
	}, {
		name: "student.test",
		url: '/test',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentTest"
			}
		}
	}, {
		name: "student.studentTestPaperList",
		url: '/studentTestPaperList/{SubjectName}/{SubjectID}/{teacherID}/{currentUnfinishPage}/{pageItems}/{currentFinishPage}',
		params: {
			SubjectName: null,
			SubjectID: null,
			teacherID: null,
			currentUnfinishPage: null,
			pageItems: null,
			currentFinishPage: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentTestPaperList"
			}
		}
	}, {
		name: "student.studentTestPaper",
		url: '/studentTestPaper/{SubjectName}/{SubjectID}/{teacherID}/{testpaperID}/{testName}/{currentUnfinishPage}/{pageItems}',
		params: {
			SubjectName: null,
			SubjectID: null,
			teacherID: null,
			testpaperID: null,
			testName: null,
			currentUnfinishPage: null,
			pageItems: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentTestPaper"
			}
		}
	}, {
		name: "student.studentTestPaperResultDetail",
		url: '/studentTestPaperResultDetail/{SubjectName}/{SubjectID}/{teacherID}/{testpaperID}/{paperResultID}/{pageItems}/{currentFinishPage}',
		params: {
			SubjectName: null,
			SubjectID: null,
			teacherID: null,
			testpaperID: null,
			paperResultID: null,
			pageItems: null,
			currentFinishPage: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentTestPaperResultDetail"
			}
		}
	}, {
		name: "student.homework",
		url: '/homework',
		params: {
			SubjectName: null,
			SubjectID: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentHomework"
			}
		}
	}, {
		name: "student.studentHomeworkList",
		url: '/studentHomeworkList/{SubjectName}/{SubjectID}',
		params: {
			SubjectName: null,
			SubjectID: null,
			currentUnfinishPage: null,
			pageItems: null,
			currentFinishPage: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentHomeworkList"
			}
		}
	}, {
		name: "student.studentHomeworkDetail",
		url: '/studentHomeworkDetail/{homeWorkName}/{homeworkId}/{SubjectID}/{SubjectName}/{currentUnfinishPage}/{pageItems}',
		params: {
			homeWorkName: null,
			homeworkId: null,
			SubjectID: null,
			SubjectName: null,
			currentUnfinishPage: null,
			pageItems: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentHomeworkDetail"
			}
		}
	}, {
		name: "student.studentHomeworkResultDetail",
		url: '/studentHomeworkResultDetail/{homeWorkName}/{homeworkId}/{SubjectID}/{SubjectName}/{currentFinishPage}/{pageItems}',
		params: {
			homeWorkName: null,
			homeworkId: null,
			SubjectID: null,
			SubjectName: null,
			currentFinishPage: null,
			pageItems: null

		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentHomeworkResultDetail"
			}
		}
	}, {

		name: "student.question",
		url: '/question',

		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentOnlineNavigation"

			}
		}
	}, {
		name: "student.onlineQuestion",
		url: '/onlineQuestion',
		params: {
			currentClass: null,
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "onlineQuestion"
			}
		}
	}, {
		name: "student.postQuestion",
		url: '/postQuestion',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentPostQuestion"
			}
		}
	}, {
		name: "student.studentOnlineAnswerDetail",
		url: '/studentOnlineAnswerDetail',
		params: {
			onlineQuestionsDetail: null,
			currentClass: null,
			isHistroy: null,
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentOnlineAnswerDetail"
			}
		}
	}, {
		name: "student.studentQuestionHistory",
		url: '/studentQuestionHistory',
		params: {
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentQuestionHistory"
			}
		}
	}, {

		name: "student.news",
		url: '/news',
		params: {
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "schoolNews"

			}
		}
	}, {

		name: "student.newsDetail",
		url: '/newsDetail',
		params: {
			newsDetail: null,
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "schoolNewsDetail"

			}
		}
	}, {
		name: "student.center",
		url: '/center',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "studentSidebar"
			},
			"content@": {
				component: "studentCenter"
			}
		}
	}, {
		name: "teacher",
		url: '/teacher',
		abstract: true
	}, {
		name: "teacher.teacherIndex",
		url: '/teacherIndex',
		views: {
			"head@": {
				component: "teacherIndexHead"
			},
			"content@": {
				component: "teacherIndex"
			}
		}
	}, {
		name: "teacher.register",
		url: '/register',
		views: {
			"content@": {
				component: "registerTeacher"
			}
		}
	}, {
		name: "teacher.paper",
		url: '/paper',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherPaperNavigation"
			}
		}
	}, {
		name: "teacher.paperCreate",
		url: '/paperCreate',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherPaper"
			}
		}
	}, {
		name: "teacher.publishPaper",
		url: '/publishPaper',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "publishPaper"
			}
		}
	}, {
		name: "teacher.paperDetail",
		url: '/paperDetail/{testpaperID}/{testName}',
		params: {
			testpaperID: null,
			testName: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "paperDetail"
			}
		}
	}, {
		name: "teacher.paperResult",
		url: '/paperResult/{testpaperID}/{testName}',
		params: {
			testpaperID: null,
			testName: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "paperResult"
			}
		}
	}, {
		name: "teacher.paperResultDetail",
		url: '/paperResultDetail/{resultId}/{testpaperID}/{testName}',
		params: {
			resultId: null,
			testpaperID: null,
			testName: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "paperResultDetail"
			}
		}
	}, {
		name: "teacher.center",
		url: '/center',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherCenter"
			}
		}
	}, {
		name: "teacher.homeworkDetail",
		url: '/homeworkDetail/{homeworkId}/{homeWorkName}',
		params: {
			homeWorkName: null,
			homeworkId: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "homeworkDetail"
			}
		}
	}, {
		name: "teacher.teacherManagerClassCreate",
		url: '/teacherManagerClassCreate',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherManagerClassCreate"
			}
		}
	}, {
		name: "teacher.teacherAssignStudent",
		url: '/teacherAssignStudent',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherAssignStudent"
			}
		}
	}, {
		name: "teacher.classStudent",
		url: '/classStudent/{classId}',
		params: {
			classId: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherClassStudent"
			}
		}
	}, {
		name: "teacher.homework",
		url: '/homework',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherHomeworkNavigation"
			}
		}
	}, {
		name: "teacher.homeworkCreate",
		url: '/homeworkCreate',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "homeworkCreate"
			}
		}
	}, {
		name: "teacher.homeWorkHistory",
		url: '/homeWorkHistory',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "homeWorkHistory"
			}
		}
	}, {
		name: "teacher.publishHomework",
		url: '/publishHomework/{homeworkId}/{subjectId}',
		params: {
			homeworkId: null,
			subjectId: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "publishHomework"
			}
		}
	}, {
		name: "teacher.teacherHomeworkResultList",
		url: '/teacherHomeworkResultList/{homeworkId}/{homeWorkName}',
		params: {
			homeworkId: null,
			homeWorkName: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherHomeworkResultList"
			}
		}
	}, {
		name: "teacher.teacherHomeworkResultDetail",
		url: '/teacherHomeworkResultDetail/{homeworkId}/{homeWorkName}/{homeworkResultID}/{studentName}/{studentId}',
		params: {
			homeworkId: null,
			homeWorkName: null,
			homeworkResultID: null,
			studentName: null,
			studentId: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherHomeworkResultDetail"
			}
		}
	}, {
		name: "teacher.onlineanswerNavigation",
		url: '/onlineanswerNavigation',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherOnlineAnswerNavigation"
			}
		}
	}, {
		name: "teacher.onlineanswer",
		url: '/onlineanswer',
		params: {
			currentClass: null,
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "onlineAnswer"
			}
		}
	}, {
		name: "teacher.onlineAnswerDetail",
		url: '/onlineAnswerDetail',
		params: {
			onlineQuestionsDetail: null,
			currentClass: null,
			isHistroy: null,
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherOnlineAnswerDetail"
			}
		}
	}, {
		name: "teacher.onlineHistoryAnswer",
		url: '/onlineHistoryAnswer',
		params: {
			currentPage: null,
			pageItems: null,
			totalpage: null
		},
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacheronlineHistoryAnswer"
			}
		}
	}, {
		name: "teacher.UserInfo",
		url: '/UserInfo',
		views: {
			"head@": {
				component: "tophead"
			},
			"sidebar@": {
				component: "teacherSidebar"
			},
			"content@": {
				component: "teacherUserInfo"
			}
		}
	}, {
		name: "admin",
		url: '/admin',
		abstract: true
	}, {
		name: "admin.center",
		url: '/center',
		views: {
			"head@": {
				component: "tophead"
			},
			"content@": {
				component: "adminCenter"
			}
		}
	}];
	states.forEach(function (state) {
		$stateProvider.state(state);
	});
}

/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = httpService;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function httpService(app) {
  app.factory("http", ["$q", "$http", "$httpParamSerializerJQLike", "$rootScope", "$mdDialog", serviceFunc]);
}

function serviceFunc($q, $http, $httpParamSerializerJQLike, $rootScope, $mdDialog) {
  var submitForm = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url, data) {
      var deferred, response, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = baseUrl + url;
              deferred = $q.defer();
              response = null;
              _context.prev = 3;
              _context.next = 6;
              return $http({
                method: 'POST',
                url: url,
                data: data,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
              });

            case 6:
              response = _context.sent;
              result = response.data;

              if (result.code === 0) {
                deferred.resolve(result.data);
              } else {
                deferred.reject(result.message);
              }
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);

              console.log(_context.t0);
              deferred.reject("操作失败");

            case 15:
              _context.prev = 15;

              window.setTimeout(function () {
                $rootScope.$applyAsync(null);
              }, 0);
              return _context.finish(15);

            case 18:
              return _context.abrupt("return", deferred.promise);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 11, 15, 18]]);
    }));

    return function submitForm(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var post = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(url, data, headers) {
      var deferred, response, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = baseUrl + url;
              headers = headers || {};
              deferred = $q.defer();
              response = null;
              _context2.prev = 4;
              _context2.next = 7;
              return $http({
                method: 'POST',
                url: url,
                data: data,
                headers: headers
              });

            case 7:
              response = _context2.sent;
              result = response.data;

              if (result.code === 0) {
                deferred.resolve(result.data);
              } else {
                deferred.reject(result.message);
              }
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);

              console.log(_context2.t0);
              deferred.reject("操作失败");

            case 16:
              _context2.prev = 16;

              window.setTimeout(function () {
                $rootScope.$applyAsync(null);
              }, 0);
              return _context2.finish(16);

            case 19:
              return _context2.abrupt("return", deferred.promise);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 12, 16, 19]]);
    }));

    return function post(_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var get = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(url, data) {
      var deferred, response, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = baseUrl + url;
              deferred = $q.defer();
              response = null;
              _context3.prev = 3;
              _context3.next = 6;
              return $http({
                method: 'GET',
                url: url,
                params: data
              });

            case 6:
              response = _context3.sent;
              result = response.data;

              if (result.code === 0) {
                deferred.resolve(result.data);
              } else {
                deferred.reject(result.message);
              }
              _context3.next = 15;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](3);

              console.log(_context3.t0);
              deferred.reject("操作失败");

            case 15:
              _context3.prev = 15;

              window.setTimeout(function () {
                $rootScope.$applyAsync(null);
              }, 0);
              return _context3.finish(15);

            case 18:
              return _context3.abrupt("return", deferred.promise);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 11, 15, 18]]);
    }));

    return function get(_x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();

  var baseUrl = "http://192.168.1.101:8080/XUEXI/";
  var service = {
    post: post,
    get: get,
    alert: alert,
    confirm: confirm,
    wait: wait,
    submitForm: submitForm,
    imgDialog: imgDialog
  };

  ;

  ;

  function alert(config) {
    var parentEle = config.parent;
    var title = config.title || "提示信息";
    var content = config.content;
    var okBtn = config.okBtn || "确定";
    var event = config.event || null;
    var alertDialog = $mdDialog.alert().parent(parentEle).clickOutsideToClose(false).title(title).textContent(content).ok(okBtn).targetEvent(event);
    return $mdDialog.show(alertDialog);
  }

  function confirm(config) {
    var parentEle = config.parent;
    var title = config.title || "确认信息";
    var content = config.content;
    var okBtn = config.okBtn || "确定";
    var event = config.event || null;
    var confirmDialog = $mdDialog.confirm().parent(parentEle).clickOutsideToClose(false).title(title).textContent(content).ok(okBtn).cancel("取消").targetEvent(event);
    return $mdDialog.show(confirmDialog);
  }

  function wait(parent) {
    return $mdDialog.show({
      controller: [function () {}],
      template: '<div layout="column" style="width:100px;"><md-progress-circular md-mode="indeterminate"></md-progress-circular><div>',
      parent: angular.element(document.body)
    });
  }

  function imgDialog(imgUrl) {
    return $mdDialog.show({
      controller: ["$scope", "$mdDialog", "imgUrl", imgDialogCtrler],
      templateUrl: "./component/ImgDialog/ImgDialog.html",
      parent: angular.element(document.body),
      locals: { imgUrl: imgUrl }
    });
  }

  function imgDialogCtrler($scope, $mdDialog, imgUrl) {
    $scope.imgUrl = imgUrl;
    $scope.ok = function () {
      $mdDialog.hide();
    };
  }
  return service;
}

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(208);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ })
],[0]);