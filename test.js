const { json } = require('body-parser');
const fs = require('fs');
function jsonReader(filepath, cb){
    fs.readFile(filepath, (err, fileData)=>{
        if(err){
            return cb && cb(err);
        }
        try{
            const obj = JSON.parse(fileData);
            return cb && cb(null, obj);
        }catch(err){
            return cb && cb(err);
        }
    });
}
data = [];
jsonReader("students.json",(err,lst)=>{
    if(err){
        console.log(err);
        return;
    }

    t = {
        "mssv":"123456",
        "hoten":"Nguyễn XXXXX",
        "lop":"17CSI01",
        "tyleVang":24.67
    };
    lst.push(t);
    data = lst;
});


fs.writeFile('students.json',JSON.stringify(data),err=>{
    
})