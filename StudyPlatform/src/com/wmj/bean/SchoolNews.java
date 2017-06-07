package com.wmj.bean;

import java.sql.Timestamp;

public class SchoolNews {
    private int id;
    private String newsTitle;
    private String newsContent;
    private Timestamp creatTime;
    private String img;
    private int count;
    public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getNewsTitle() {
		return newsTitle;
	}
	public void setNewsTitle(String newsTitle) {
		this.newsTitle = newsTitle;
	}
	public String getNewsContent() {
		return newsContent;
	}
	public void setNewsContent(String newsContent) {
		this.newsContent = newsContent;
	}
	public Timestamp getCreatTime() {
		return creatTime;
	}
	public void setCreatTime(Timestamp creatTime) {
		this.creatTime = creatTime;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
}
