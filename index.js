const dbConnect=require('./mongodb')
const express=require('express');
const { response }=require('express');
const app=express();
app.use(express.json())

//get API

app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

//post API
app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data inserted");
})
////////////////////////////////////////////////////////////////////////////////
//put API

app.put('/:Name',async(req,res)=>{
    let result=await dbConnect();
    result = await result.updateOne({Name:req.params.Name},{$set:req.body});
    res.send("Data Updates");
})
//delete API
app.delete('/:Name',async(req,res)=>{
    let result=await dbConnect();
    result = await result.deleteOne({Name:req.params.Name});
    res.send("Data deleted");
})

app.listen(1000);