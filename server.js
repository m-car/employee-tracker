const mysql = require('mysql');
const inquirer = require("inquirer");
require('console.table')

const start = () => {
  console.log(`
  |-------------------------------------|
  |                                     |
  |                                     |
  |                                     |
  |           EMPLOYEE TRACKER          |
  |                                     |
  |                                     |
  |                                     |
  |                                     |
  |-------------------------------------|
   
   
   `);
  menu();

}
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
      const query = 'SELECT * FROM employee';
      console.log(query)
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        menu()
      });
};

viewByDepartment = () => {
      const query = 'SELECT * FROM roles';
      console.log(query)
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        menu()
      });
};

viewByManager = () => {
     
      const query = 'SELECT * FROM roles';
      console.log(query)
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        menu()
      });
};

addEmployee = () =>{
      return inquirer
      .prompt([{
        name: 'first_name',
        type: 'input',
        message: 'What is employees first name?',
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'What is employees last name?',
      },
      {
        name: 'role',
        type: 'list',
        message: `'What is employees role?
1.Sales Lead,
2.Salesperson,
3.Lead Engineer,
4.Software Engineer,
5.Accountant,
6.Legal Team Lead,
7.Lawyer`,
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
        ]
      },
      {
        name: 'manager',
        type: 'list',
        message: `'Who is employees Manager?',
        'John Doe',
        'Mike Chan',
        'Ashely Rodriguez',
        'Kevin Tupik',
        'Malia Brown',
        'Sarah Lourd',
        'Tom Allen',
        '0'`,
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '0'
        ]
      }])
      .then((answers) =>{
        console.log(answers);
        const query = `INSERT INTO employee SET ?`
        connection.query(query, 
          {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role || 0,
          manager_id: answers.manager || 0,
        },
        (err) => {
          if(err) throw err;
          console.log("The employee was successfully created.");
          menu();
        }
        )
      })
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
start();
});

