const express = require('express');
const app = express();
const port = 3000;

const dssv = require('./dssv.json');

app.get('/', (req, res) => {
    res.send('Xin chào đến với EXPRESS backend !!!!');

});
app.listen(port, ()=>console.log('App is running at port ${port}'));

///GET
app.get('/students', (req,res) => {
    res.send(Object.values(dssv));
});
app.get('/students/:mssv', (req,res) => {
    console.log(req.params.MaSV);
    let i = 0;
    for( i = 0;i<dssv.length;i++){
        if(dssv[i].MaSV == req.params.mssv)
        break;
    }
    if(i,dsssv.length){
        res.send(dssv[i]);
    }
    else{
        res.send("Not fount");
    }
    // res.send(dssv.find(sv=>sv.MaSV==req.params.mssv));
})
///POST
app.post('/students', (req,res)=>{
    res.send('POST students !!!');
});
app.put('/students', (req,res)=>{
    res.send('PUT students !!!');
});
app.delete('/students', (req,res)=>{
    res.send('DELETE students !!!');
});

app.listen(port,()=>console.log('App is running at port ${port} '));