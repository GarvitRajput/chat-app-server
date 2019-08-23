import CONFIG from './config';
import config from './config';


var db = require('knex')({  
  client: config.DB_DIALECT,  
   connection: {  
    user: config.DB_USER,  
    password: config.DB_PASSWORD,  
    server: config.DB_HOST,  
    database: config.DB_NAME 
   }  
 }); 

export default db;
