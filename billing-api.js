//App instantiation with required dependenices
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//const port = 3002;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//existing medical bills in memory

let bills= [

    {
        patient_name:'Prachi Sabale',
        patient_address:'Canada',
        hospital_name:'Adhar',
        date_of_service:'10/02/2023',
        bill_amount:'120$'

    },
    {
        patient_name:'Gouri Sabale',
        patient_address:'US',
        hospital_name:'Lotus',
        date_of_service:'10/03/2022',
        bill_amount:'500$'
    }


];

//HTTP Post request to create new medical bill which accepts json data


    app.post('/create', function(req, res){
    
    if(req.body.forEach(element => {
        if(!element.patient_name)
    {
        res.status(400).json({result:'Pass patient_name while creating bill'});
        return;
    }
     }));

     if(req.body.forEach(element => {
        if(!element.patient_address)
    {
        res.status(400).json({result:'Pass patient_address while creating bill'});
        return;
    }
}));

if(req.body.forEach(element => {
    if(!element.hospital_name)
{
    res.status(400).json({result:'Pass hospital_name while creating bill'});
    return;
}
}));
if(req.body.forEach(element => {
    if(!element.date_of_service)
{
    res.status(400).json({result:'Pass date_of_service while creating bill'});
    return;
}
}));
if(req.body.forEach(element => {
    if(!element.bill_amount)
{
    res.status(400).json({result:'Pass bill_amount while creating bill'});
    return;
}
}));



    bills.push(req.body);
   console.log('request =' + req.body);
   // res.sendStatus(200);
    res.status(200).json({result:"Medical Bill is created sucessfully"});

});

//HTTP GET request to display medical bills in the form of json array of objects

app.get('/get' ,function(req, res)
 {
    return res.json( bills);
 })

 module.exports = app.listen(3004);
 //app.listen(port);
 