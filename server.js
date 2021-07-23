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
        removeEmployee();
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
      return inquirer.prompt([
        {
          name: "department",
          type: "list",
          message:"Which department?",
          choices: 
          [
            "Sales",
            "Engineering",
            "Finance",
            "Legal"
          ]
        }
    ]).then((answer) =>{
      let choice = 0;
      if(answer.department === "Sales"){
        choice = 1;
      }else if(answer.department === "Engineering"){
        choice = 2;
      }else if(answer.department === "Finance"){
        choice = 3;
      }else{
        choice = 4;
      };
      const query = 'SELECT employee.first_name, employee.last_name FROM employee WHERE employee.role_id = ?';
      
      connection.query(query, choice, (err, res) => {
        if (err) throw err;

        console.table(res);
        menu()
        })
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
      .prompt([
        {
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
        message: 'What is employees role?',
        choices: [
          'Sales Lead',
          'Salesperson',
          'Lead Engineer',
          'Software Engineer',
          'Accountant',
          'Legal Team Lead',
          'Lawyer',
        ]
      },
      {
        name: 'manager',
        type: 'list',
        message: 'Who is employees Manager?',
        choices: [
          'John Doe',
          'Mike Chan',
          'Ashely Rodriguez',
          'Kevin Tupik',
          'Malia Brown',
          'Sarah Lourd',
          'Tom Allen',
        ]
      }])
      .then((answers) =>{
        let role = 0;
      if(answers.role === "Sales Lead"){
        role = 1;
      }else if(answers.role === "Salesperson"){
        role = 2;
      }else if(answers.role === "Lead Engineer"){
        role = 3;
      }else if(answers.role === "Software Engineer"){
        role = 4;
      }else if(answers.role === "Accountant"){
        role = 5;
      }else if(answers.role === "Legal Team Lead"){
        role = 6;
      }else if(answers.role === "Lawyer"){
        role = 7;
      }else{
        role = 8;
      };

      let manager = 0;
      if(answers.manager === "John Doe"){
        manager = 1;
      }else if(answers.manager === "Mike Chan"){
        manager = 2;
      }else if(answers.manager === "Lead Engineer"){
        manager = 3;
      }else if(answers.manager === "Ashely Rodriguez"){
        manager = 4;
      }else if(answers.manager === "Kevin Tupik"){
        manager = 5;
      }else if(answers.manager === "Malia Brown"){
        manager = 6;
      }else if(answers.manager === "Sarah Lourd"){
        manager = 7;
      }else{
        manager = 8;
      };
        // console.log(answers);
        
        const query = `INSERT INTO employee SET ?`
        connection.query(query, 
          {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: role || 0,
          manager_id: manager || 0,
        },
        (err) => {
          if(err) throw err;
          console.log("===The employee was successfully created.===");
          menu();
        }
        )
      })
    };



const removeEmployee = () => {
  return inquirer
      .prompt([
        {
          name: 'employee',
          type: 'list',
          message: 'Which employee do you want to delete?',
          choices: [
            'John',
            'Mike',
            'Ashely',
            'Kevin',
            'Malia',
            'Sarah',
            'Tom',
            'Christian',
          ]
        }])
        .then((answers) =>{
          console.log(answers);
          const query = `DELETE FROM employee WHERE ?`;
          connection.query(query, 
          {
            first_name: answers.employee,
          },
          (err) => {
            if(err) throw err;
            console.log("The employee was successfully deleted.");
            menu();
          }
          )
        })


}   
                  
                  
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

