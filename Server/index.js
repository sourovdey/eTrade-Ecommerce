const express  = require("express");
const connect = require("./database/connection")
const cors  = require("cors");
const app = express();
const route = require("./router/route")
app.use(express.json());
app.use(cors());


// Get Request

app.get('/', (req,res)=>{
    res.status(200).send("Home get Request");
});

// productApp
app.use('/productapi', route);

const port = 8080;

// server Connection

connect().then(()=>{
    try{
        app.listen(port),
        ()=>{
            console.log(`Server Connect To ${port}`)
        }
    }
    catch(error){
        console.log('Cannot To Server!')
    }
})