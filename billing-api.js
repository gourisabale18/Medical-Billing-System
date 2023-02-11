//App instantiation with required dependenices
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
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

    bills.push(req.body);
   console.log('request =' + req.body);
    res.sendStatus(200);

});

//HTTP GET request to display medical bills in the form of json array of objects

 app.get('/get' ,function(req, res)
 {
    return res.json( bills);
 });
 app.listen(3001);