import express from 'express';

const app = express();

app.get('/',(req,res,next)=>{
    return res.status(200).send("Hurray! I have successfully deployed this application on AWS.");
})

app.listen(443,()=>{
 console.log('server is running on');
})

