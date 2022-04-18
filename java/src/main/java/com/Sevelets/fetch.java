package com.Sevelets;
import java.io.IOException;
import java.util.ArrayList; 
import com.google.gson.*; 
import com.Sevelets.*; 
 
import com.Pojo.*; 
import javax.servlet.ServletException; 
import javax.servlet.annotation.WebServlet; 
import javax.servlet.http.HttpServlet; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 
 
@WebServlet("/fetch") 
 
public class fetch extends HttpServlet{ 
 private static final long serialVersionUID = 1L; 
 /*//
  * @viswanath
  */
     
    /** 
     * @see HttpServlet#HttpServlet() 
     */ 
    public fetch() { 
        super(); 
        // TODO Auto-generated constructor stub 
    } 
 
 /** 
  * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response) 
  */ 
 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { 
  // TODO Auto-generated method stub 
  //response.getWriter().append("Served at: ").append(request.getContextPath()); 
   
   crud fetchdata=new crud(); 
    
    ArrayList<pojo> data = fetchdata.getData(); 
    //System.out.println(data); 
      
     Gson gson = new Gson(); 
   String respData = gson.toJson(data); 
   response.addHeader("Access-Control-Allow-Origin", "*");
   response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
   response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
   response.addHeader("Access-Control-Max-Age", "1728000"); 
   response.getWriter().print(respData); 
   
 } 
 
 /** 
  * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response) 
  */ 
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { 
  // TODO Auto-generated method stub 
  //doGet(request, response); 
 } 
 
}
