const mysql = require('mysql');
const inquirer = require("inquirer");
const { connect } = require('http2');
require('console.table')

  const menu = () =>{
    //display choices post,  bid, and exit 
    return inquirer
    .prompt([
      {
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all employees',
          'View all employees by Department',
          'View all employees by Manager',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          'Update Employee Manager',
          'Exit',
        ]
      }
    ]).then((answers) =>{
      console.log(answers);
      switch(answers.action){
      case 'View all employees':
          console.log("view all employees selected")
          viewAll();
          break;
          
      case 'View all employees by Department':
        viewByDepartment();
        break;
        
      case 'View all employees by Manager':
        viewByManager();
        break;
        
      case 'Add Employee':
        addEmployee();
        break;
        
      case 'Remove Employee':
        removeEmploye();
        break;
      
      case 'Update Employee Role':
        updateEmpRole();
        break;
        
      case 'Update Employee Manager':
        updateEmpManger();
        break;
        
      default:
          console.log("connection ended")
          connection.end();
        }
          
        }).catch((error) => {
          console.log(error);
         
        })
            
  }
          
                  
    viewAll = () => {
    const query = 'SELECT * FROM roles';
    console.log(query)
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      menu()
    });
    
  };
                  
                  
                  
connection = mysql.createConnection({
host: 'localhost',

// Your port; if not 3306
port: 3306,

// Your username
user: 'root',

// Be sure to update with your own MySQL password!
password: 'password',
database: 'employee_db',
});


connection.connect((err) => {
if (err) throw err;
console.log(`connected as id ${connection.threadId}\n`)
menu();
});

