package com.wmj.bean;
/*
 * 在线问答
 */
import java.util.Date;

public class OnlineAnswer {
  private int id;
  private int onlineQuestionId;
  private int answerId;
  private String answer;
  private Date answerTime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOnlineQuestionId() {
		return onlineQuestionId;
	}
	public void setOnlineQuestionId(int onlineQuestionId) {
		this.onlineQuestionId = onlineQuestionId;
	}
	public int getAnswerId() {
		return answerId;
	}
	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public Date getAnswerTime() {
		return answerTime;
	}
	public void setAnswerTime(Date answerTime) {
		this.answerTime = answerTime;
	}
	  
}
