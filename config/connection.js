var mysql = require("mysql");
// Set up MySQL connection.

var connection = mysql.createConnection({
  port: 3306,
  host: "jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "opcngnqvr976qqtu",
  password: "vjd1dibgxcgx4t1u",
  database: "wdp0kxhyojj1n14b"
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
