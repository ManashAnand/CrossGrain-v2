const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');


const openai = new OpenAIApi(new Configuration({
    apiKey: "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"
}))




dotenv.config();

// middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Replace with your frontend domain
    credentials: true
  }));

// Universal constant
const PORT = process.env.PORT || 4000;

// Routes
const authRoute = require('./router/authRoute');

// Modals
// const UserModel = require('./models/userModal');



app.post('/ask', (req,res) => {
    // console.log(req.body)
    const {qns} = req.body;
    openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: qns}]
})
.then((ans) => {
    console.log(ans.data.choices)
    res.send(ans.data.choices);
})
console.log(process.env.AI_KEY)
    console.log(qns);
})


app.use('/uploads', express.static(__dirname + '/uploads'))
// app.use('/post-uploads', express.static(__dirname + '/'))
const url = process.env.MONGO_URI;

// sepearate thing to connect to database
mongoose.connect(url,{
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})

app.get('/',(req,res) => {
    try {
        res.json("Working")
        
    } catch (error) {
        console.log(error)
    }
})

app.use('/',authRoute);




app.listen(4000,() => {
    console.log("Database connected at port "+PORT);
});