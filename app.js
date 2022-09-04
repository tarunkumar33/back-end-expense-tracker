//express,cors
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
//DB
const sequelize=require('./utils/database');
//routes
const expenseRoutes=require('./routes/expense');

app=express();
app.use(cors());
//parsing json and form
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use(expenseRoutes);

//sync models with DB
sequelize.sync()
.then(result=>{
    console.log("synced with DB successfully");
    app.listen(3000);
})
.catch(err=>console.log(err));
