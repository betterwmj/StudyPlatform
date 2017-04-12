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
import com.wmj.bean.HomeWork;
import com.wmj.bean.HomeWorkDetail;
import com.wmj.bean.Paper;
import com.wmj.bean.PaperDetail;
import com.wmj.dao.OperatorHomeWork;
import com.wmj.dao.OperatorQuestion;
import com.wmj.dao.OperatorSubject;
import com.wmj.util.JSONUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class CreateHomework
 */
@WebServlet("/CreateHomework")
public class CreateHomework extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateHomework() {
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
        HomeWork home = new HomeWork();
        JSONArray array=json.getJSONArray("questions");
        List<HomeWorkDetail> list = new ArrayList<>();
        Timestamp time = new Timestamp(System.currentTimeMillis());
        for(int i=0;i<array.size();i++){
        	JSONObject t = JSONObject.fromObject( array.get(i));
        	HomeWorkDetail homeDetail = new HomeWorkDetail();
        	homeDetail.setItemId(Integer.parseInt(t.get("questionID").toString()));
        	list.add(homeDetail);
        }
        home.setHomeWorkName(json.getString("name"));
        home.setTime(time);
        home.setFinishTime(json.getString("finishTime"));
        home.setSubjectId(subjectId);
        home.setTeacherId(teacherId);
        boolean resultCode;
		try {
			resultCode = OperatorHomeWork.insertHomeWork(list, home);
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
