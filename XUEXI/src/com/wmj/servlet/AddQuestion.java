package com.wmj.servlet;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.wmj.bean.ApiResult;
import com.wmj.bean.Paper;
import com.wmj.bean.PaperDetail;
import com.wmj.bean.Title;
import com.wmj.dao.OperatorQuestion;
import com.wmj.dao.OperatorSubject;
import com.wmj.util.JSONUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class AddQuestion
 */
@WebServlet("/AddQuestion")
public class AddQuestion extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddQuestion() {
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
		JSONObject json = null;
		try {
			json = JSONUtil.parse(request);
		} catch (Exception e1) {
			e1.printStackTrace();
			response.getWriter().append( JSONObject.fromObject(ApiResult.fail("无效的参数")).toString());
		}
        HttpSession session = request.getSession();
        Map<String,String> userInfo=(Map<String, String>) session.getAttribute("userInfo");	
        String id= userInfo.get("id");
        String suId=userInfo.get("subjectId");
        int teacherId=Integer.parseInt(id);
        int subjectId=Integer.parseInt(suId);
        JSONArray array=json.getJSONArray("options");
        String titles = json.getString("title");
		String answer = json.getString("answer");
		int type=json.getInt("type");
        Title title=new Title();
        for(int i=0;i<array.size();i++){
        	JSONObject t = JSONObject.fromObject( array.get(i));
        	title.setOptionA(t.get("optionA").toString());
        	title.setOptionB(t.get("optionB").toString());
        	title.setOptionC(t.get("optionC").toString());
        	title.setOptionD(t.get("optionD").toString());
        }
        title.setTitle(titles);
        title.setType(type);
        title.setSubjectId(subjectId);
        title.setTeacherId(teacherId);
        title.setAnswer(answer);
        boolean resultCode;
		try {
			resultCode = OperatorQuestion.AddQuestion(title);
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(resultCode);
			response.getWriter().append(JSONArray.fromObject(result).toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONArray.fromObject(result).toString());
		}
    	
        
	}

}
