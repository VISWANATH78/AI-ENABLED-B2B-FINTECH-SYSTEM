package com.Sevelets;

import java.sql.Connection;

import java.sql.DriverManager; 
import java.sql.PreparedStatement; 
import java.sql.ResultSet; 
import java.sql.SQLException; 
import java.util.ArrayList; 
import java.util.Date; 
import java.time.Year; 
import com.highradius.jdbc; 
 
 
import com.Pojo.*; 
 
public class crud { 
 
 public ArrayList<pojo> getData() 
 { 
  ArrayList<pojo> ALLStudents =new ArrayList<pojo>(); 
  String a1,b1,c1,d1,e1,f1,g1,h1,i1,l1,k1,r1,t1,p1; 
  int a2,b2,c2,d2,e2,f2,g2,h2,i2; 
  Double a3,b3,c3,d3,e3,f3,g3,h3,i3; 

  Year a5,b5,c5,d5; 
   
  try { 
   Connection con = jdbc.initializeDatabase(); 
   String sql_query="SELECT * FROM winter_internship"; 
   PreparedStatement pst = con.prepareStatement(sql_query); 
   //System.out.println(pst); 
    
   ResultSet rs = pst.executeQuery(); 
   
   while(rs.next()) 
   { 
    pojo s = new pojo(); 
     a2=rs.getInt("sl_no"); 
     a1=rs.getString("business_code"); 
     b2=rs.getInt("cust_number"); 
     i1=rs.getString("clear_date"); 
     c2=rs.getInt("buisness_year"); 
     b1=rs.getString("doc_id"); 
     l1=rs.getString("posting_date"); 
     r1=rs.getString("document_create_date"); 
     t1=rs.getString("document_create_date1"); 
     k1=rs.getString("due_in_date"); 
     c1=rs.getString("invoice_currency"); 
     d1=rs.getString("document_type"); 
     d2=rs.getInt("posting_id"); 
     e1=rs.getString("area_business"); 
     a3=rs.getDouble("total_open_amount"); 
     p1=rs.getString("baseline_create_date"); 
     f1=rs.getString("cust_payment_terms"); 
     e2=rs.getInt("invoice_id"); 
     f2=rs.getInt("isOpen"); 
     g1=rs.getString("aging_bucket"); 
     g2=rs.getInt("is_deleted"); 
      
    
     
    //System.out.println("ID is "+id+" "+"Name is "+Name); 
     
    s.setSl_no(a2); 
    s.setBusiness_code(a1); 
    s.setCust_number(b2); 
    s.setClear_date(i1); 
    s.setBuisness_year(c2); 
    s.setDoc_id(b1); 
    s.setPosting_date(l1); 
    s.setDocument_create_date(r1); 
    s.setDocument_create_date1(t1); 
    s.setDue_in_date(k1); 
    s.setInvoice_currency(c1); 
    s.setDocument_type(d1); 
    s.setPosting_id(d2); 
    s.setArea_business(e1); 
    s.setTotal_open_amount(a3); 
    s.setBaseline_create_date(p1); 
    s.setCust_payment_terms(f1); 
    s.setInvoice_id(e2); 
    s.setIsOpen(f2); 
    s.setAging_bucket(g1); 
    s.setIs_deleted(g2); 
     
     
    ALLStudents.add(s); 
     
     
   } 
    
   for(pojo stud: ALLStudents) 
   { 
    System.out.println(stud.toString()); 
   } 
    
  } 
  catch (Exception e) { 
   e.printStackTrace(); 
   System.out.println("exception occur"); 
  } 
   
  return ALLStudents; 
   
  
 }
 }
