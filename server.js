const mysql = require('mysql');
const inquirer = require("inquirer");

const menu = () =>{
    //display choices post,  bid, and exit 
    return inquirer.prompt([
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
        switch(answers.menu){
            case 'View all employees':
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
                connection.end();
            }
        
    })

    
    //if user chose post call post
    //else if user chose  bid  call bid 
    //else exit close connection , 

}



//FUNCTION POST, CALL MAIN AFTER
const post = () =>{
    console.log("post good")
    //get user input about item name
    return inquirer.prompt([
        {
            name: "name",
            message: "What is the item you would like to submit? ",
            type: "input",
          
        },
        {//get user input about item category
            name: "category",
            message: "What category would you like to place your auction in? ",
            type: "input",
          
        },
        {  //get user input about starting bid
            name: "bid",
            message: "What would you like your starting bid to be? ",
            type: "input",
          
        },
    ]).then((answers) =>{
        console.log(answers)
      //push item to db
      const query = connection.query(
        'INSERT INTO items SET ?',
        answers,
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`);
          
          menu();
        });
   
       }   
    )
}


const connection = mysql.createConnection({
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
      console.log(`connected as id ${connection.threadId}\n`);
      menu();
    
    });