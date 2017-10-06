

// var connection;
// if (process.env.JAWSDB_URL){
//    connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//    connection = mysql.createConnection({
//       port: 3306,
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "day_planner_db "
//     });
// }
// connection.connect();
// connection.connect(function(err) {
//    if (err) {
//      console.error('error connecting: ' + err.stack);
//      return;
//    }
//    console.log('connected as id ' + connection.threadId);
//  });
// // connection.end();
// module.exports = connection;var mysql = require('mysql');

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);




connection.connect(function(err) {
   if (err) {
     console.error('error connecting: ' + err.stack);
     return;
   }
   console.log('connected as id ' + connection.threadId);
 });

connection.end();