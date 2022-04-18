package com.Sevelets;

import java.io.IOException;


import java.sql.Connection; 
import java.sql.PreparedStatement; 
import javax.servlet.ServletException; 
import javax.servlet.annotation.WebServlet; 
import javax.servlet.http.HttpServlet; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 
import com.highradius.jdbc; 
 /*//
  * creating an webservelet for add
  */
@WebServlet("/add")
public class Add extends HttpServlet {
  private static final long serialVersionUID = 1L;
       
  
    public Add() {
        super();
        // TODO Auto-generated constructor stub
    }

  
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    response.getWriter().append("Served at: ").append(request.getContextPath());
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    
    try {
      String business_code =  request.getParameter("business_code");
      int  cust_number = Integer.valueOf(request.getParameter("cust_number"));
      String clear_date = request.getParameter("clear_date");
      int buisness_year = Integer.valueOf(request.getParameter("buisness_year"));
      String doc_id = request.getParameter("doc_id");
      String posting_date = request.getParameter("posting_date");
      String document_create_date = request.getParameter("document_create_date");
      String due_in_date = request.getParameter("due_in_date");


      String invoice_currency = request.getParameter("invoice_currency");
      String document_type = request.getParameter("document_type");
      int posting_id = Integer.valueOf(request.getParameter("posting_id"));

      int total_open_amount = Integer.valueOf(request.getParameter("total_open_amount"));

      String baseline_create_date = request.getParameter("baseline_create_date");
      String cust_payment_terms = request.getParameter("cust_payment_terms");
      int invoice_id = Integer.valueOf(request.getParameter("invoice_id"));

      Connection con = jdbc.initializeDatabase(); 
      String query = "INSERT INTO winter_internship (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?)";
      PreparedStatement st = con.prepareStatement(query);
      st.setString(1, business_code);
      st.setInt(2,cust_number);
      st.setString(3, clear_date);
      
      st.setInt(4,buisness_year);

      st.setString(5, doc_id);
      st.setString(6,  posting_date);
      st.setString(7, document_create_date);
      st.setString(8, due_in_date);

      st.setString(9, invoice_currency);
      
      st.setString(10, document_type);
      st.setInt(11,posting_id);
      st.setInt(12,total_open_amount);


      st.setString(13, baseline_create_date);
      st.setString(14, cust_payment_terms);
      st.setInt(15,invoice_id);

      
    
      st.executeUpdate();
      con.close();
      response.setHeader("Access-Control-Allow-Orgin","*");

    }
    catch (Exception e) {
      e.printStackTrace();
    }
  }

}
