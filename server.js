const mysql = require('mysql');
const inquirer = require("inquirer");

const menu = () =>{
    //display choices post,  bid, and exit 
    return inquirer.prompt([
        {
            name: "menu",
            message: "Test question 1c ",
            type: "list",
            choices: [
                "post",
                "bid",
                "exit"
            ]
        }
    ]).then((answers) =>{
        console.log(answers);
        switch(answers.menu){
            case "post":
            post();
            break;
            case "bid":
                bid();
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