// const util = require('util');
// const defaultConnection = require('./connection');

// class DB {
//     constructor(connection = defaultConnection) {
//       this.connection = connection;
//     }
  
//     init() {
//       return new Promise((resolve, reject) => {
//         this.connection.connect((error) => {
//           if (error) {
//             return reject(error);
//           }
//           // Setting up connection.query to use promises instead of callbacks
//           // This allows us to use the async/await syntax
//           this.connection.query = util.promisify(this.connection.query);
//           resolve();
//         });
//       });
//     }
//     close_connection(callback) {
//         return this.connection.end(callback);
//       }
      
//       viewAll() {
//         console.log()
//         const query_string = 'SELECT * FROM roles';
//         return this.connection.query(query_string);
//       }
      
      
      
      
//     };

//     module.exports = DB;