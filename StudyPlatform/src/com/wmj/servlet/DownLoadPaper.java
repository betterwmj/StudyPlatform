package com.wmj.servlet;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.wmj.bean.ApiResult;
import com.wmj.bean.BaseUrl;
import com.wmj.bean.Title;
import com.wmj.dao.OperatorTestPaper;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class DownLoadPaper
 */
@WebServlet("/DownLoadPaper")
public class DownLoadPaper extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DownLoadPaper() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String paperID=request.getParameter("paperID");
		int paperId=Integer.parseInt(paperID);
		try {
			
			Calendar calendar = Calendar.getInstance();//此时打印它获取的是系统当前时间
			calendar.add(Calendar.DATE, -1);    //得到某一天
			String  yestedayDate= new SimpleDateFormat("yyyyMMddHHmmss").format(calendar.getTime());
			String path =BaseUrl.filePath; 
			String filePath = path+yestedayDate+".txt";
			String path1=BaseUrl.url;
			String urlPath = path1+yestedayDate+".txt";
			File file = new File(filePath);
			if (!file.exists()) {
			   try {
			     file.createNewFile();
			} catch (IOException e) {
			     e.printStackTrace();
			   }
			 }
			OutputStreamWriter write;
			String encoding = "UTF-8";
			List<Title> list = OperatorTestPaper.getPaperDetail(paperId);
			try {
				write = new OutputStreamWriter(new FileOutputStream(file),encoding);
				BufferedWriter writer = new BufferedWriter(write);
				for (int i=0;i<list.size();i++) {
					if(list.get(i).getType()==1){
						writer.write(" 题目 "+list.get(i).getTitle()+"\r\n");
						writer.write(" A "+list.get(i).getOptionA()+"\r\n");
						writer.write(" B "+list.get(i).getOptionB()+"\r\n");
						writer.write(" C "+list.get(i).getOptionC()+"\r\n");
						writer.write(" D "+list.get(i).getOptionD()+"\r\n");
						writer.write(" 答案  "+list.get(i).getAnswer()+"\r\n");// 输出流写入到文件中
					}else if(list.get(i).getType()==2){
						writer.write(" 题目 "+list.get(i).getTitle()+"\r\n");
						writer.write(" 答案  "+list.get(i).getAnswer()+"\r\n");// 输出流写入到文件中
					}else{
						writer.write(" 题目 "+list.get(i).getTitle()+"\r\n");
						writer.write(" 答案  "+list.get(i).getAnswer()+"\r\n");// 输出流写入到文件中
					}
					
			     }
			     writer.close();
			} catch (UnsupportedEncodingException e) {
			     e.printStackTrace();
			} catch (FileNotFoundException e) {
			     e.printStackTrace();
			} catch (IOException e) {
			   e.printStackTrace();
			}
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(urlPath);
			response.getWriter().append(JSONObject.fromObject(result).toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONObject.fromObject(result).toString());
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
