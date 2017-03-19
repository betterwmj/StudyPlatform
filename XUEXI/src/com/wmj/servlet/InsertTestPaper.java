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

import com.wmj.bean.PaperTitle;
import com.wmj.bean.TestPaper;
import com.wmj.dao.OperatorSubject;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class InsertTestPaper
 */
@WebServlet("/InsertTestPaper")
public class InsertTestPaper extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertTestPaper() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
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
        TestPaper paper=new TestPaper(); 
        JSONObject jo = JSONObject.fromObject(acceptjson);
        JSONArray array=jo.getJSONArray("papertitles");
        List<PaperTitle> list = new ArrayList<>();
        for(int i=0;i<array.size();i++){
        	JSONObject t = JSONObject.fromObject( array.get(i));
        	PaperTitle p = new PaperTitle();
        	p.setTitleId((int) t.get("itemId"));
        	p.setType((String) t.get("type"));
        	list.add(p);
        }
        paper.setTestName(jo.getString("papername"));
        paper.setSubjectID(subjectId);
        paper.setUserId(userId);
        boolean result=OperatorSubject.insertTestPaper(list,paper);
    	response.getWriter().write(result+"");
        
              
	}

}
