package com.wmj.bean;
import java.sql.Timestamp;
/*
 * 在线问答
 */

public class OnlineAnswer {
  private int id;
  private int onlineQuestionId;
  private int answerId;
  private String answer;
  private Timestamp answerTime;
  private String img;
  private int count;
  public int getCount() {
	return count;
}
public void setCount(int count) {
	this.count = count;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
private int type;
	public int getType() {
	return type;
}
public void setType(int type) {
	this.type = type;
}
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
	public Timestamp getAnswerTime() {
		return answerTime;
	}
	public void setAnswerTime(Timestamp answerTime) {
		this.answerTime = answerTime;
	}
	
	  
}
