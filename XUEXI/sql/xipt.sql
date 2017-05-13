/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : xipt

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-13 11:56:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for classes
-- ----------------------------
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `ClassID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`ClassID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classes
-- ----------------------------
INSERT INTO `classes` VALUES ('31', 'dsds');
INSERT INTO `classes` VALUES ('41', '软件三班');
INSERT INTO `classes` VALUES ('42', 'Edward');
INSERT INTO `classes` VALUES ('46', 'fvg');
INSERT INTO `classes` VALUES ('60', '哈哈哈');

-- ----------------------------
-- Table structure for homeworks
-- ----------------------------
DROP TABLE IF EXISTS `homeworks`;
CREATE TABLE `homeworks` (
  `HomeworkID` int(11) NOT NULL AUTO_INCREMENT,
  `homeworkname` varchar(50) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `teacherID` int(11) DEFAULT NULL,
  `SubjectID` int(11) DEFAULT NULL,
  `Finishtime` datetime DEFAULT NULL,
  `status` int(1) DEFAULT NULL COMMENT '作业发布状态',
  PRIMARY KEY (`HomeworkID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homeworks
-- ----------------------------
INSERT INTO `homeworks` VALUES ('11', '2017/5/6 下午5:41:38', '2017-05-06 17:41:52', '10', '3', '2017-05-06 09:41:38', '1');

-- ----------------------------
-- Table structure for homeworks_detail
-- ----------------------------
DROP TABLE IF EXISTS `homeworks_detail`;
CREATE TABLE `homeworks_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ItemID` int(11) NOT NULL,
  `HomeworkID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homeworks_detail
-- ----------------------------
INSERT INTO `homeworks_detail` VALUES ('24', '79', '11');

-- ----------------------------
-- Table structure for homework_class_relation
-- ----------------------------
DROP TABLE IF EXISTS `homework_class_relation`;
CREATE TABLE `homework_class_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `HomeworkID` int(11) DEFAULT NULL,
  `classID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homework_class_relation
-- ----------------------------
INSERT INTO `homework_class_relation` VALUES ('11', '11', '33');
INSERT INTO `homework_class_relation` VALUES ('12', '13', '41');
INSERT INTO `homework_class_relation` VALUES ('13', '14', '32');
INSERT INTO `homework_class_relation` VALUES ('14', '14', '37');
INSERT INTO `homework_class_relation` VALUES ('15', '14', '42');

-- ----------------------------
-- Table structure for homework_result
-- ----------------------------
DROP TABLE IF EXISTS `homework_result`;
CREATE TABLE `homework_result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `homeworkId` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `Evaluation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homework_result
-- ----------------------------
INSERT INTO `homework_result` VALUES ('3', '12', '2', '2017-05-06 17:29:35', 'dssdsd');
INSERT INTO `homework_result` VALUES ('4', '11', '2', '2017-05-06 17:42:12', '');
INSERT INTO `homework_result` VALUES ('5', '13', '14', '2017-05-11 17:54:13', null);
INSERT INTO `homework_result` VALUES ('6', '14', '14', '2017-05-11 22:57:07', '我的现在');

-- ----------------------------
-- Table structure for homework_result_detail
-- ----------------------------
DROP TABLE IF EXISTS `homework_result_detail`;
CREATE TABLE `homework_result_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `homework_result_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homework_result_detail
-- ----------------------------
INSERT INTO `homework_result_detail` VALUES ('9', '3', '74', 'C');
INSERT INTO `homework_result_detail` VALUES ('10', '3', '75', 'A');
INSERT INTO `homework_result_detail` VALUES ('11', '3', '76', '对');
INSERT INTO `homework_result_detail` VALUES ('12', '3', '77', '对');
INSERT INTO `homework_result_detail` VALUES ('13', '3', '78', '哈哈');
INSERT INTO `homework_result_detail` VALUES ('14', '4', '79', 'C');
INSERT INTO `homework_result_detail` VALUES ('15', '5', '81', '12');
INSERT INTO `homework_result_detail` VALUES ('16', '5', '82', '12');
INSERT INTO `homework_result_detail` VALUES ('17', '5', '83', '12');
INSERT INTO `homework_result_detail` VALUES ('18', '6', '84', 'D');

-- ----------------------------
-- Table structure for online_answer
-- ----------------------------
DROP TABLE IF EXISTS `online_answer`;
CREATE TABLE `online_answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `online_question_id` int(11) DEFAULT NULL,
  `answer_id` int(11) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  `answertime` datetime DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of online_answer
-- ----------------------------
INSERT INTO `online_answer` VALUES ('1', '1', '3', '43', '2017-05-08 23:21:30', '0');
INSERT INTO `online_answer` VALUES ('7', '1', '24', '23', '2017-05-09 00:52:04', '0');
INSERT INTO `online_answer` VALUES ('8', '1', '2', '43', '2017-05-09 00:54:15', null);
INSERT INTO `online_answer` VALUES ('9', '1', '3', 'ffzjfsj', '2017-05-09 14:36:48', '1');
INSERT INTO `online_answer` VALUES ('10', '1', '3', 'lallalalll', '2017-05-09 14:38:11', null);
INSERT INTO `online_answer` VALUES ('11', '8', '2', '哈哈哈', '2017-05-09 14:38:57', '0');
INSERT INTO `online_answer` VALUES ('12', '9', '3', '第三方', '2017-05-09 14:39:48', null);
INSERT INTO `online_answer` VALUES ('13', '9', '3', '分v', '2017-05-09 14:47:50', null);
INSERT INTO `online_answer` VALUES ('14', '1', '3', 'RERERT', '2017-05-09 16:41:55', '1');
INSERT INTO `online_answer` VALUES ('15', '5', '15', '风扇', '2017-05-09 20:18:52', '0');
INSERT INTO `online_answer` VALUES ('16', '5', '2', 'rfe', '2017-05-11 22:09:22', '1');
INSERT INTO `online_answer` VALUES ('18', '1', '14', 'dfzvfd', '2017-05-11 23:34:38', '0');
INSERT INTO `online_answer` VALUES ('19', '8', '14', 'edwc', '2017-05-11 23:53:13', '0');
INSERT INTO `online_answer` VALUES ('20', '1', '14', 'df', '2017-05-11 23:54:27', '0');
INSERT INTO `online_answer` VALUES ('21', '9', '3', '第三节课就的撒代码熟练度没了打什么啥都没打什么啥都没', '2017-05-12 11:35:41', '1');
INSERT INTO `online_answer` VALUES ('29', '5', '3', '发的', '2017-05-12 12:35:00', '1');
INSERT INTO `online_answer` VALUES ('31', '5', '15', 'fd', '2017-05-13 00:47:06', '0');
INSERT INTO `online_answer` VALUES ('32', '5', '3', 'f', '2017-05-13 11:13:35', '1');
INSERT INTO `online_answer` VALUES ('33', '5', '3', 'f', '2017-05-13 11:21:14', '1');

-- ----------------------------
-- Table structure for online_question
-- ----------------------------
DROP TABLE IF EXISTS `online_question`;
CREATE TABLE `online_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `questiontitle` varchar(200) DEFAULT NULL,
  `questioncontent` varchar(500) DEFAULT NULL,
  `answer_id` int(11) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of online_question
-- ----------------------------
INSERT INTO `online_question` VALUES ('1', '14', '关于Java的', 'java中的继承多态', '3', '2017-05-06 23:12:30', '2');
INSERT INTO `online_question` VALUES ('5', '15', '23', '23', '3', '2017-05-09 00:49:11', '3');
INSERT INTO `online_question` VALUES ('6', '16', '32', '2', '2', '2017-05-09 00:53:04', '2');
INSERT INTO `online_question` VALUES ('7', '17', '打算答复分分打算', '哈哈谁说的', '3', '2017-05-09 09:35:23', '1');
INSERT INTO `online_question` VALUES ('8', '14', '辅导班温柔范吧34', '大幅度无人分为', '3', '2017-05-09 09:39:04', '1');
INSERT INTO `online_question` VALUES ('9', '17', '34', '43', '3', '2017-05-09 09:44:19', '3');
INSERT INTO `online_question` VALUES ('16', '3', '121322314', '31224', '3', '2017-05-09 18:04:03', '0');
INSERT INTO `online_question` VALUES ('17', '2', '231234', '34343341', '3', '2017-05-09 18:07:42', '3');
INSERT INTO `online_question` VALUES ('18', '2', '123242543', '565464', '2', '2017-05-09 19:33:09', '3');

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `TestpaperID` int(11) NOT NULL AUTO_INCREMENT,
  `TestName` varchar(200) DEFAULT NULL,
  `SubjectID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`TestpaperID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper
-- ----------------------------
INSERT INTO `paper` VALUES ('35', '2017/5/6 下午5:38:45', '3', '10', '1', '2017-05-06 17:38:57');
INSERT INTO `paper` VALUES ('40', '2017/5/11 下午4:16:10', '2', '3', '1', '2017-05-11 16:16:17');

-- ----------------------------
-- Table structure for paper_detail
-- ----------------------------
DROP TABLE IF EXISTS `paper_detail`;
CREATE TABLE `paper_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TitleID` int(11) NOT NULL,
  `TestpaperID` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=219 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper_detail
-- ----------------------------
INSERT INTO `paper_detail` VALUES ('202', '69', '34', '5');
INSERT INTO `paper_detail` VALUES ('203', '1', '35', '5');
INSERT INTO `paper_detail` VALUES ('217', '69', '40', '5');
INSERT INTO `paper_detail` VALUES ('218', '70', '40', '5');

-- ----------------------------
-- Table structure for paper_result
-- ----------------------------
DROP TABLE IF EXISTS `paper_result`;
CREATE TABLE `paper_result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paper_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper_result
-- ----------------------------
INSERT INTO `paper_result` VALUES ('19', '38', '2', '2017-05-06 17:22:15', '30');
INSERT INTO `paper_result` VALUES ('20', '33', '2', '2017-05-06 17:34:34', '10');
INSERT INTO `paper_result` VALUES ('21', '34', '2', '2017-05-06 17:36:53', '0');
INSERT INTO `paper_result` VALUES ('22', '35', '2', '2017-05-06 17:39:40', '0');
INSERT INTO `paper_result` VALUES ('23', '35', '3', '2017-05-06 17:46:14', '10');
INSERT INTO `paper_result` VALUES ('25', '32', '2', '2017-05-11 00:21:40', '0');
INSERT INTO `paper_result` VALUES ('26', '32', '14', '2017-05-11 17:50:18', '40');
INSERT INTO `paper_result` VALUES ('27', '37', '14', '2017-05-11 22:27:26', '15');
INSERT INTO `paper_result` VALUES ('28', '40', '14', '2017-05-11 22:31:58', '0');
INSERT INTO `paper_result` VALUES ('29', '40', '15', '2017-05-13 00:41:20', '0');
INSERT INTO `paper_result` VALUES ('30', '41', '15', '2017-05-13 00:49:50', '0');
INSERT INTO `paper_result` VALUES ('31', '37', '15', '2017-05-13 00:51:26', '0');

-- ----------------------------
-- Table structure for paper_result_detail
-- ----------------------------
DROP TABLE IF EXISTS `paper_result_detail`;
CREATE TABLE `paper_result_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paper_result_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper_result_detail
-- ----------------------------
INSERT INTO `paper_result_detail` VALUES ('150', '19', '1', 'D');
INSERT INTO `paper_result_detail` VALUES ('151', '19', '2', 'C');
INSERT INTO `paper_result_detail` VALUES ('152', '19', '3', 'B');
INSERT INTO `paper_result_detail` VALUES ('153', '19', '4', 'B');
INSERT INTO `paper_result_detail` VALUES ('154', '19', '5', 'B');
INSERT INTO `paper_result_detail` VALUES ('155', '19', '15', 'B');
INSERT INTO `paper_result_detail` VALUES ('156', '19', '9', 'B');
INSERT INTO `paper_result_detail` VALUES ('157', '19', '8', 'B');
INSERT INTO `paper_result_detail` VALUES ('158', '19', '7', 'B');
INSERT INTO `paper_result_detail` VALUES ('159', '19', '6', 'B');
INSERT INTO `paper_result_detail` VALUES ('160', '19', '28', '错');
INSERT INTO `paper_result_detail` VALUES ('161', '19', '29', '对');
INSERT INTO `paper_result_detail` VALUES ('162', '19', '30', '对');
INSERT INTO `paper_result_detail` VALUES ('163', '19', '31', '对');
INSERT INTO `paper_result_detail` VALUES ('164', '19', '32', '错');
INSERT INTO `paper_result_detail` VALUES ('165', '19', '40', '对');
INSERT INTO `paper_result_detail` VALUES ('166', '19', '41', '对');
INSERT INTO `paper_result_detail` VALUES ('167', '19', '42', '对');
INSERT INTO `paper_result_detail` VALUES ('168', '19', '39', '错');
INSERT INTO `paper_result_detail` VALUES ('169', '19', '38', '对');
INSERT INTO `paper_result_detail` VALUES ('170', '20', '69', 'B');
INSERT INTO `paper_result_detail` VALUES ('171', '20', '70', 'B');
INSERT INTO `paper_result_detail` VALUES ('172', '21', '69', 'C');
INSERT INTO `paper_result_detail` VALUES ('173', '22', '1', 'C');
INSERT INTO `paper_result_detail` VALUES ('174', '22', '28', '');
INSERT INTO `paper_result_detail` VALUES ('175', '23', '1', 'B');
INSERT INTO `paper_result_detail` VALUES ('176', '23', '28', '错');
INSERT INTO `paper_result_detail` VALUES ('177', '25', '1', 'D');
INSERT INTO `paper_result_detail` VALUES ('178', '25', '2', '');
INSERT INTO `paper_result_detail` VALUES ('179', '25', '3', '');
INSERT INTO `paper_result_detail` VALUES ('180', '25', '4', '');
INSERT INTO `paper_result_detail` VALUES ('181', '25', '5', '');
INSERT INTO `paper_result_detail` VALUES ('182', '25', '15', '');
INSERT INTO `paper_result_detail` VALUES ('183', '25', '9', '');
INSERT INTO `paper_result_detail` VALUES ('184', '25', '8', '');
INSERT INTO `paper_result_detail` VALUES ('185', '25', '7', '');
INSERT INTO `paper_result_detail` VALUES ('186', '25', '6', '');
INSERT INTO `paper_result_detail` VALUES ('187', '25', '28', '');
INSERT INTO `paper_result_detail` VALUES ('188', '25', '29', '');
INSERT INTO `paper_result_detail` VALUES ('189', '25', '30', '');
INSERT INTO `paper_result_detail` VALUES ('190', '25', '31', '');
INSERT INTO `paper_result_detail` VALUES ('191', '25', '32', '');
INSERT INTO `paper_result_detail` VALUES ('192', '25', '40', '');
INSERT INTO `paper_result_detail` VALUES ('193', '25', '41', '');
INSERT INTO `paper_result_detail` VALUES ('194', '25', '42', '');
INSERT INTO `paper_result_detail` VALUES ('195', '25', '39', '');
INSERT INTO `paper_result_detail` VALUES ('196', '25', '38', '');
INSERT INTO `paper_result_detail` VALUES ('197', '26', '1', 'C');
INSERT INTO `paper_result_detail` VALUES ('198', '26', '2', 'C');
INSERT INTO `paper_result_detail` VALUES ('199', '26', '3', 'C');
INSERT INTO `paper_result_detail` VALUES ('200', '26', '4', 'C');
INSERT INTO `paper_result_detail` VALUES ('201', '26', '5', 'C');
INSERT INTO `paper_result_detail` VALUES ('202', '26', '15', 'C');
INSERT INTO `paper_result_detail` VALUES ('203', '26', '9', 'C');
INSERT INTO `paper_result_detail` VALUES ('204', '26', '8', 'C');
INSERT INTO `paper_result_detail` VALUES ('205', '26', '7', 'C');
INSERT INTO `paper_result_detail` VALUES ('206', '26', '6', 'C');
INSERT INTO `paper_result_detail` VALUES ('207', '26', '28', '错');
INSERT INTO `paper_result_detail` VALUES ('208', '26', '29', '错');
INSERT INTO `paper_result_detail` VALUES ('209', '26', '30', '错');
INSERT INTO `paper_result_detail` VALUES ('210', '26', '31', '错');
INSERT INTO `paper_result_detail` VALUES ('211', '26', '32', '错');
INSERT INTO `paper_result_detail` VALUES ('212', '26', '40', '错');
INSERT INTO `paper_result_detail` VALUES ('213', '26', '41', '错');
INSERT INTO `paper_result_detail` VALUES ('214', '26', '42', '错');
INSERT INTO `paper_result_detail` VALUES ('215', '26', '39', '错');
INSERT INTO `paper_result_detail` VALUES ('216', '26', '38', '错');
INSERT INTO `paper_result_detail` VALUES ('217', '27', '3', 'C');
INSERT INTO `paper_result_detail` VALUES ('218', '27', '1', 'C');
INSERT INTO `paper_result_detail` VALUES ('219', '27', '2', 'D');
INSERT INTO `paper_result_detail` VALUES ('220', '27', '4', 'D');
INSERT INTO `paper_result_detail` VALUES ('221', '27', '5', 'D');
INSERT INTO `paper_result_detail` VALUES ('222', '27', '15', 'D');
INSERT INTO `paper_result_detail` VALUES ('223', '27', '7', 'C');
INSERT INTO `paper_result_detail` VALUES ('224', '27', '33', '错');
INSERT INTO `paper_result_detail` VALUES ('225', '27', '34', '错');
INSERT INTO `paper_result_detail` VALUES ('226', '27', '35', '错');
INSERT INTO `paper_result_detail` VALUES ('227', '28', '69', 'C');
INSERT INTO `paper_result_detail` VALUES ('228', '28', '70', 'C');
INSERT INTO `paper_result_detail` VALUES ('229', '29', '69', '');
INSERT INTO `paper_result_detail` VALUES ('230', '29', '70', '');
INSERT INTO `paper_result_detail` VALUES ('231', '30', '16', 'D');
INSERT INTO `paper_result_detail` VALUES ('232', '30', '15', 'D');
INSERT INTO `paper_result_detail` VALUES ('233', '30', '17', '');
INSERT INTO `paper_result_detail` VALUES ('234', '30', '21', '');
INSERT INTO `paper_result_detail` VALUES ('235', '30', '22', '');
INSERT INTO `paper_result_detail` VALUES ('236', '30', '23', '');
INSERT INTO `paper_result_detail` VALUES ('237', '30', '25', '');
INSERT INTO `paper_result_detail` VALUES ('238', '30', '26', '');
INSERT INTO `paper_result_detail` VALUES ('239', '31', '3', 'D');
INSERT INTO `paper_result_detail` VALUES ('240', '31', '1', '');
INSERT INTO `paper_result_detail` VALUES ('241', '31', '2', '');
INSERT INTO `paper_result_detail` VALUES ('242', '31', '4', '');
INSERT INTO `paper_result_detail` VALUES ('243', '31', '5', '');
INSERT INTO `paper_result_detail` VALUES ('244', '31', '15', '');
INSERT INTO `paper_result_detail` VALUES ('245', '31', '7', '');
INSERT INTO `paper_result_detail` VALUES ('246', '31', '33', '');
INSERT INTO `paper_result_detail` VALUES ('247', '31', '34', '');
INSERT INTO `paper_result_detail` VALUES ('248', '31', '35', '');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `school_number` varchar(255) DEFAULT NULL,
  `realName` varchar(50) DEFAULT NULL,
  `school` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('3', 'sfdfs', '34', null, '12', null);
INSERT INTO `students` VALUES ('15', '20134333', '刘佳琦', null, '12', null);
INSERT INTO `students` VALUES ('16', '20134334', '鸿涛', null, '12', null);
INSERT INTO `students` VALUES ('17', '20134336', '哈哈', '', '12', '18390938042');
INSERT INTO `students` VALUES ('19', '20134336', 'sa', null, '12', null);
INSERT INTO `students` VALUES ('20', '20134337', 'sasa', null, '12', null);
INSERT INTO `students` VALUES ('21', '20134338', 'sasafrev', null, '12', null);

-- ----------------------------
-- Table structure for student_class_relationship
-- ----------------------------
DROP TABLE IF EXISTS `student_class_relationship`;
CREATE TABLE `student_class_relationship` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studentid` int(255) DEFAULT NULL,
  `classid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of student_class_relationship
-- ----------------------------
INSERT INTO `student_class_relationship` VALUES ('36', '15', '31');
INSERT INTO `student_class_relationship` VALUES ('38', '16', '33');
INSERT INTO `student_class_relationship` VALUES ('39', '17', '34');
INSERT INTO `student_class_relationship` VALUES ('41', '3', '35');
INSERT INTO `student_class_relationship` VALUES ('42', '4', '31');
INSERT INTO `student_class_relationship` VALUES ('43', '16', '35');
INSERT INTO `student_class_relationship` VALUES ('44', '17', '35');
INSERT INTO `student_class_relationship` VALUES ('45', '20', '35');
INSERT INTO `student_class_relationship` VALUES ('46', '8', '35');
INSERT INTO `student_class_relationship` VALUES ('63', '14', '41');
INSERT INTO `student_class_relationship` VALUES ('64', '15', '41');
INSERT INTO `student_class_relationship` VALUES ('66', '14', '32');
INSERT INTO `student_class_relationship` VALUES ('68', '14', '37');
INSERT INTO `student_class_relationship` VALUES ('69', '17', '32');

-- ----------------------------
-- Table structure for subjects
-- ----------------------------
DROP TABLE IF EXISTS `subjects`;
CREATE TABLE `subjects` (
  `SubjectID` int(11) NOT NULL AUTO_INCREMENT,
  `SubjectName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`SubjectID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subjects
-- ----------------------------
INSERT INTO `subjects` VALUES ('1', '高等数学');
INSERT INTO `subjects` VALUES ('2', '英语');
INSERT INTO `subjects` VALUES ('3', '计算机');
INSERT INTO `subjects` VALUES ('4', 'java');
INSERT INTO `subjects` VALUES ('5', '操作系统');
INSERT INTO `subjects` VALUES ('6', 'javascript');
INSERT INTO `subjects` VALUES ('7', 'c++');
INSERT INTO `subjects` VALUES ('8', 'android');
INSERT INTO `subjects` VALUES ('9', '编译原理');
INSERT INTO `subjects` VALUES ('10', 'Linux');

-- ----------------------------
-- Table structure for teacherclass_relation
-- ----------------------------
DROP TABLE IF EXISTS `teacherclass_relation`;
CREATE TABLE `teacherclass_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classID` int(11) DEFAULT NULL,
  `teacherId` int(11) DEFAULT NULL,
  `subjectid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacherclass_relation
-- ----------------------------
INSERT INTO `teacherclass_relation` VALUES ('35', '33', '3', '2');
INSERT INTO `teacherclass_relation` VALUES ('36', '34', '10', '3');
INSERT INTO `teacherclass_relation` VALUES ('37', '35', '2', '3');
INSERT INTO `teacherclass_relation` VALUES ('38', '36', '3', '3');
INSERT INTO `teacherclass_relation` VALUES ('46', '31', '3', '2');
INSERT INTO `teacherclass_relation` VALUES ('47', '38', '3', '6');
INSERT INTO `teacherclass_relation` VALUES ('50', '41', '3', '3');
INSERT INTO `teacherclass_relation` VALUES ('51', '42', '3', '2');
INSERT INTO `teacherclass_relation` VALUES ('55', '46', '3', '1');
INSERT INTO `teacherclass_relation` VALUES ('57', '48', '3', '1');
INSERT INTO `teacherclass_relation` VALUES ('58', '49', '3', '1');
INSERT INTO `teacherclass_relation` VALUES ('69', '60', '3', '5');

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_number` varchar(50) DEFAULT NULL,
  `realName` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userID`,`realName`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES ('3', '哈哈', '刘军', '12');

-- ----------------------------
-- Table structure for teacher_subject_relation
-- ----------------------------
DROP TABLE IF EXISTS `teacher_subject_relation`;
CREATE TABLE `teacher_subject_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacherid` int(11) DEFAULT NULL,
  `subjectid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of teacher_subject_relation
-- ----------------------------
INSERT INTO `teacher_subject_relation` VALUES ('14', '2', '2');
INSERT INTO `teacher_subject_relation` VALUES ('16', '1', '3');
INSERT INTO `teacher_subject_relation` VALUES ('17', '1', '1');
INSERT INTO `teacher_subject_relation` VALUES ('21', '3', '3');
INSERT INTO `teacher_subject_relation` VALUES ('22', '3', '2');
INSERT INTO `teacher_subject_relation` VALUES ('23', '3', '6');
INSERT INTO `teacher_subject_relation` VALUES ('24', '3', '1');
INSERT INTO `teacher_subject_relation` VALUES ('25', '3', '5');

-- ----------------------------
-- Table structure for title
-- ----------------------------
DROP TABLE IF EXISTS `title`;
CREATE TABLE `title` (
  `ItemID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL,
  `type` varchar(1) DEFAULT NULL,
  `optionA` varchar(100) DEFAULT NULL,
  `optionB` varchar(100) DEFAULT NULL,
  `optionC` varchar(100) DEFAULT NULL,
  `optionD` varchar(100) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  `SubjectID` int(11) DEFAULT NULL,
  `teacherid` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemID`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of title
-- ----------------------------
INSERT INTO `title` VALUES ('1', '计算机是一种能快速、高效、自动地完成( )的电子设备', '1', '科学计算', ' 信息处理', ' 文字处理 ', '辅助教学 ', 'B', '3', null);
INSERT INTO `title` VALUES ('2', '国家信息高速公路的英文简称为( )。', '1', ' CNII', 'GNU', 'NII', 'ANII', 'C', '3', '2');
INSERT INTO `title` VALUES ('3', '计算机从其诞生至今已经经历了四个时代，这种对计算机划代的原则是根据( )', '1', '计算机所采用的电子器件(即逻辑元件) ', ' 计算机的运算速度', '程序设计语言 ', '计算机的存储量 ', ' A', '3', null);
INSERT INTO `title` VALUES ('4', '最先实现存储程序的计算机是( )', '1', 'ENIAC', ' EDSAC', ' EDVAC', 'UNTVAC ', 'C ', '3', null);
INSERT INTO `title` VALUES ('5', 'CAM是( )的英文简称', '1', '计算机辅助科学 ', '计算机辅助设计', ' 计算机辅助工程', ' 计算机辅助制造  ', 'D', '3', null);
INSERT INTO `title` VALUES ('6', '微型计算机存储器系统中的Cache是( )。', '1', ' 只读存储器 ', '高速缓冲存储器 ', '可编程只读存储器 ', '可擦除可再编程只读存储器  ', ' B', '3', null);
INSERT INTO `title` VALUES ('7', '操作系统的主要作用是( )', '1', '方便用户使用计算机', '统一管理计算机系统的全部资源', 'A和B', '处理财务会计业务问题 ', 'C ', '3', null);
INSERT INTO `title` VALUES ('8', '.高级程序设计语言的优点是( )', '1', '通用性好', '大大提高编程效率', ' 大大提高程序的易读性 ', ' A、B和C', 'D ', '3', null);
INSERT INTO `title` VALUES ('9', '计算机的存储单元中存储的内容( )', '1', ' 只能是数据', ' 只能是程序 ', ' 可以是数据和指令', '只能是指令   ', 'C ', '3', null);
INSERT INTO `title` VALUES ('10', '下列不可作为java语言修饰符的是（）', '1', 'a1 ', '$1', ' _1      ', '11', 'D', '4', null);
INSERT INTO `title` VALUES ('11', '有一段java 应用程序，它的主类名是a1，那么保存它的源文件名可以是', '1', 'a1.java  ', 'a1.class ', 'a1', ' 都对', 'A', '4', null);
INSERT INTO `title` VALUES ('12', '.整型数据类型中，需要内存空间最少的是', '1', 'short', ' long ', ' int  ', 'byte', 'D', '4', null);
INSERT INTO `title` VALUES ('13', 'Java 类可以作为', '1', '类型定义机制', '数据封装机制 ', '类型定义机制和数据封装机制 ', '上述都不对 ', 'C', '4', null);
INSERT INTO `title` VALUES ('14', '在创建对象时必须', '1', '先声明对象，然后才能使用对象', '先声明对象，为对象分配内存空间，然后才能使用对象 ', '先声明对象，为对象分配内存空间，对对象初始化，然后才能使用对象', ' 上述说法都对 ', 'C', '4', null);
INSERT INTO `title` VALUES ('15', '.在调用方法时，若要使方法改变实参的值，可以', '1', '用基本数据类型作为参数', '用对象作为参数', 'A和B都对', ' A和B都不对 ', 'B', '3', null);
INSERT INTO `title` VALUES ('16', '下列哪些语句关于内存回收的说明是正确的?', '1', ' 程序员必须创建一个线程来释放内存', '内存回收程序负责释放无用内存 ', '内存回收程序允许程序员直接释放内存 ', '内存回收程序可以在指定的时间释放内存对象 ', 'B', '3', null);
INSERT INTO `title` VALUES ('17', 'Math.round(11.5)等于多少().', '1', '11 ,-11', '11 ,-12', '12 ,-11', '12 ,-12', 'C', '3', null);
INSERT INTO `title` VALUES ('18', '下列程序段的输出结果是: void complicatedexpression_r(){\r\n     int x=20, y=30;\r\n     boolean b;\r\n     b=x>50&&y>60||x>50&&y<-60||x<-50&&y>60||x<-50&&y<-60;\r\n     System.out.println(b);\r\n     }', '1', 'true  ', 'false  ', '1', '011.activity', 'B', '3', null);
INSERT INTO `title` VALUES ('19', '对一些资源以及状态的操作保存，最好是保存在生命周期的哪个函数中进行', '1', 'onPause()  ', 'onCreate()', ' onResume()', 'onStart()', 'D', '3', null);
INSERT INTO `title` VALUES ('20', 'WebView中可以用来处理js中警示，确认等对话框的是', '1', 'WebSettings', 'WebViewClient', 'WebChromeClient', 'WebViewChrome ', 'C', '3', null);
INSERT INTO `title` VALUES ('21', '使用HttpUrlConnection实现移动互联时,设置读取超时属性的方法是', '1', 'setTimeout() ', 'setReadTimeout() ', 'setConnectTimeout() ', 'setRequestMethod() ', 'B', '3', null);
INSERT INTO `title` VALUES ('22', '下列属于SAX解析xml文件的优点的是', '1', '将整个文档树在内存中，便于操作，支持删除，修改，重新排列等多种功能', '不用事先调入整个文档，占用资源少', '、整个文档调入内存，浪费时间和空间', '不是长久驻留在内存，数据不是持久的，事件过后，若没有保存数据，数据就会\r\n  消失', 'B', '3', null);
INSERT INTO `title` VALUES ('23', '使用Android系统进行拍照用到的类有', '1', 'SurfaceView', ' SurfaceHolder', 'Callback', 'Camera', 'D', '3', null);
INSERT INTO `title` VALUES ('24', '当按键盘A时，使用onKeyDown事件打印event.keyCode的结果是', '1', '65', '13', '97', '37', 'A', '3', null);
INSERT INTO `title` VALUES ('25', ' 在javascript里，下列选项中不属于数组方法的是', '1', 'sort() ', 'length()', 'concat()', 'reverse() ', 'B', '3', null);
INSERT INTO `title` VALUES ('26', '下列哪一个选项可以用来检索被选定的选项的索引号?', '1', 'disabled', 'selectedIndex', 'option ', 'multiple ', 'B', '3', null);
INSERT INTO `title` VALUES ('27', ' br标签在XHTML中语义为', '1', '.换行', '强调', '.段落', '标题', 'A', '3', null);
INSERT INTO `title` VALUES ('28', '冯诺依曼原理是计算机的唯一工作原理', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('29', ' 计算机能直接识别汇编语言程序', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('30', ' 计算机能直接执行高级语言源程序', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('31', ' 计算机掉电后，ROM中的信息会丢失', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('32', '计算机掉电后，外存中的信息会丢失', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('33', ' 应用软件的作用是扩大计算机的存储容量', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('34', '操作系统的功能之一是提高计算机的运行速度', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('35', '一个完整的计算机系统通常是由硬件系统和软件系统两大部分组成的', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('36', '第三代计算机的逻辑部件采用的是小规模集成电路。', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('37', ' 字节是计算机中常用的数据单位之一，它的英文名字是byte。', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('38', ' 利用equals()方法判定Date类时，判断的是对象的值而不是对象的地址。  ', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('39', '类加载器加载程序运行所需要的所有类，它通过区分本机文件系统的类和网络系统导入的类增加安全性。', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('40', ' CSS属性font-style 用于设置字体的粗细', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('41', ' CSS属性overflow用于设置元素超过宽度时是否隐藏或显示滚动条', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('42', '在不涉及样式情况下,页面元素的优先显示与结构摆放顺序无关', '2', '', '', '', '', '错', '3', null);
INSERT INTO `title` VALUES ('43', ' 在不涉及样式情况下,页面元素的优先显示与标签选用无关。', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('44', ' display:inline兼容所有的浏览器', '2', '', '', '', '', '对', '3', null);
INSERT INTO `title` VALUES ('45', 'input属于窗体元素,层级显示比flash、其它元素都高', '2', '', '', '', '', '错', '6', null);
INSERT INTO `title` VALUES ('69', 'I’ve never seen ______ match before', '1', 'such an exciting', 'so an exciting', 'such an excited', 'so an excited', 'B', '2', '3');
INSERT INTO `title` VALUES ('70', 'There _____ a great number of students over there. The number of the students ____ five thousand', '1', 'are, is', 'are, are', 'is, are', 'is, is', 'B', '2', '3');
INSERT INTO `title` VALUES ('71', '1+1=?', '1', '1', '2', '3', '4', 'B', '1', '3');
INSERT INTO `title` VALUES ('74', '计算机软件系统可分为(   )', '1', '操作系统和语言处理程序', '程序和数据', '系统软件和应用软件', '程序、数据和文档', 'C', '3', '3');
INSERT INTO `title` VALUES ('75', '以下语言中属于高级语言的是(  ).', '1', 'Delphi', '机器语言', '汇编语言', 'CAD', 'A', '3', '3');
INSERT INTO `title` VALUES ('76', '国际互联网（Internet）是广域网的一种形式', '2', '', '', '', '', '对', '3', '3');
INSERT INTO `title` VALUES ('77', '网络传输介质可以是有形的，也可以是无形的。', '2', '', '', '', '', '对', '3', '3');
INSERT INTO `title` VALUES ('78', '计算机软件系统可分为', '3', '', '', '', '', '系统软件和应用软件', '3', '3');
INSERT INTO `title` VALUES ('79', '1212', '1', '1', '2', '3', '4', 'A', '3', '10');
INSERT INTO `title` VALUES ('80', '121', '1', '12', '1212', '12121', '1212', 'C', '3', '3');
INSERT INTO `title` VALUES ('81', '324', '1', '43', '4334', '4334', '4334', 'C', '3', '3');
INSERT INTO `title` VALUES ('82', '3饿', '2', '', '', '', '', '错', '3', '3');
INSERT INTO `title` VALUES ('83', 'の2', '3', '', '', '', '', '23饿', '3', '3');
INSERT INTO `title` VALUES ('84', '1', '1', '1', '1', '1', '1', 'C', '2', '3');
