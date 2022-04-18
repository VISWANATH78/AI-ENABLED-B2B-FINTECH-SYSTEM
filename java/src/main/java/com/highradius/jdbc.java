package com.highradius;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/*//
 * creating an jdbc and calling all these values in upcoming api 
 */
public class jdbc {
 public static Connection initializeDatabase()

     throws SQLException, ClassNotFoundException
 {
     String dbDriver = "com.mysql.cj.jdbc.Driver";
     String dbURL = "jdbc:mysql:// localhost:3306/";
     String dbName = "grey_goose";
     String dbUsername = "root";
     String dbPassword = "Vichu!";

     Class.forName(dbDriver);
     Connection con = DriverManager.getConnection(dbURL + dbName,dbUsername, dbPassword);
    
     return con;
 }
 

public static void main(String[] args) {
}
}