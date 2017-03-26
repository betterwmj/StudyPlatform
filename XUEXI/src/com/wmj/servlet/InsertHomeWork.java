package com.wmj.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.wmj.bean.ApiResult;
import com.wmj.bean.Classes;
import com.wmj.bean.HomeWork;
import com.wmj.bean.HomeWorkDetail;
import com.wmj.dao.OperatorClass;
import com.wmj.dao.OperatorHomeWork;


import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**老师提交作业api
 * Servlet implementation class InsertHomeWork
 */
@WebServlet("/InsertHomeWork")
public class InsertHomeWork extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertHomeWork() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String acceptjson="";
		
		BufferedReader br = new BufferedReader(new InputStreamReader(  (ServletInputStream) request.getInputStream(), "utf-8"));  
        StringBuffer sb = new StringBuffer("");  
        String temp;  
        while ((temp = br.readLine()) != null) {  
            sb.append(temp);  
        }  
        br.close();  
        acceptjson = sb.toString();
        HttpSession session = request.getSession();
        Map<String,String> userInfo=(Map<String, String>) session.getAttribute("userInfo");	
        String id= userInfo.get("id");
        String suId=userInfo.get("subjectId");
        int userId=Integer.parseInt(id);
        int subjectId=Integer.parseInt(suId);
        HomeWork home=new HomeWork(); 
        JSONObject jo = JSONObject.fromObject(acceptjson);
        JSONArray array=jo.getJSONArray("homeworktitles");
        List<HomeWorkDetail> list = new ArrayList<>();
        for(int i=0;i<array.size();i++){
        	JSONObject t = JSONObject.fromObject( array.get(i));
        	HomeWorkDetail p = new HomeWorkDetail();
        	p.setItemId(Integer.parseInt(t.get("itemId").toString()));
        	p.setItemType((String) t.get("type"));
        	list.add(p);
        }
        home.setHomeWorkName(jo.getString("homeworkname"));
        home.setTime(jo.getString("time"));
        home.setFinishTime(jo.getString("finishtime"));
        home.setSubjectId(subjectId);
        home.setTeacherId(userId);
        try {
        	 boolean resultCode=OperatorHomeWork.insertHomeWork(list,home);
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(resultCode);
			response.getWriter().append(JSONArray.fromObject(result).toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONArray.fromObject(result).toString());
		}
       
  
        
              
	
	}

}
