require("dotenv").config();


const express = require('express');
const app = express();
const path = require("path");

const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');
const projectRoutes = require('./routes/projects.js');
const taskRoutes = require('./routes/tasks.js');


const dbUrl = process.env.MONGO_URL;

//mongodb+srv://namratateshwer:J6gMKaci0Hxk2pgF@cluster0.mongodb.net/Task_Tracker?retryWrites=true&w=majority//

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);



main()
.then((res)=>{
    console.log(res);
    console.log('worrking db');
})
.catch((e)=>{
    console.log(e);
    console.log("db error");
})

async function main(){
    await mongoose.connect(dbUrl);
}

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server is listening to port 5000");
})