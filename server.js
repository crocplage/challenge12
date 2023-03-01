const mysql = require('mysql2');
const inquirer = require('inquirer');
// require('console.table');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user:'root',
        password: '',
        database: 'employee_db',
        port: '3306'
    },
    );
    db.connect((err)=>{
        if (err) throw err;
        console.log("connected to the employee database")
});
getDepartment = () => {
    db.query('SELECT * from department', function (err, results) {
      if (err) throw err
        console.table(results)
      
     
   
    });
    
}
 const getROLE = () => {
    db.query("SELECT * from role", function (err, results) {
        if (err) throw err
        console.table(results)
    });
 }
 const getEmployee = () => {
    db.query("SELECT * from employee", function (err, results) {
if (err) throw err
console.table(results);
    })
 }

 const addDepartment = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'what is the department name'

        }
    ])
    .then(answer => {
        db.query(`insert into department(name) values(${answer.name})`, function (err, results){
            if (err) throw err
            console.log(results)
        })
    })
 }
inquirer.prompt([
    {
type:'list', 
message: 'What would you like to do',
name:'select',
choices:['view all departments','view all roles', 'view all employees', 'add departement', 'add arole', 'add employee', 'update an employee']
    }
])
.then (answer => {
    if (answer.select == 'view all departments') {
        getDepartment();
    }
    else if(answer.select == 'view all roles') {
        getROLE();
    }
    else if(answer.select == 'view all employees') {
        getEmployee();
    }
    else if(answer.select == 'add departement') {
        addDepartment();
    }
    else if(answer.select == 'add a role') {
     addRole();
    }
    else if(answer.select == 'add employee') {
        addEmployee();
    }
    else if(answer.select == 'update an employees') {
        updateEmployee();
    }
});



