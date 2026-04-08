 const express = require("express");
 const mysql = require("mysql2");
 const app = express();
 const port = 8080;
 app.set("view engine", "ejs");
 app.use(express.urlencoded({extended : true}));
 const path = require("path");
 app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nikhil@72SQL",
    database: "paydayDB"
});
 app.get("/", (req, res)=>{
     res.render("home.ejs");
 })

 app.get("/userInfo", (req, res)=>{
     res.render("user.ejs");
 })

app.post("/userInfo/user", (req, res) => {

    const data = req.body;
    console.log(data);

    const sql = `
        INSERT INTO users 
        (user, email, phone, dob, employment, income, loan, repayment, bank, bankname)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        data.user,
        data.email,
        data.phone,
        data.dob,
        data.employment,
        data.income,
        data.loan,
        data.repayment,
        data.bank,
        data.bankname
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("error in database");
        }
        
         res.redirect("/");
      
    });
});
 
app.listen(port, ()=>{
  console.log("server is running of port 8080");
})