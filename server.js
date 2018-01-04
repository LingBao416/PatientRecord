var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patients');
var Patient = mongoose.model('Patients', mongoose.Schema({
	firstname:String,
	lastname:String,
	age:String,
	sex:String,
	contact:String,
	doctor:String,
	bloodpressure:String,
	respiratoryrate:String,
	bloodoxygenlevel:String,
	heartbeatrate:String,
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/patients', function(req, res){
	Patient.find(function(err, patients){
		if(err)
			res.send(err);
		res.json(patients);
	});
});

app.get('/api/patients/:id', function(req, res){
	Patient.findOne({_id:req.params.id}, function(err, patient){
		if(err)
			res.send(err);
		res.json(patient);
	});
});
app.post('/api/patients', function(req, res){
	Patient.create( req.body, function(err, patients){
		if(err)
			res.send(err);
		res.json(patients);
	});
});

app.delete('/api/patients/:id', function(req, res){
	Patient.findOneAndRemove({_id:req.params.id}, function(err, patient){
		if(err)
			res.send(err);
		res.json(patient);
	});
});
app.put('/api/patients/:id', function(req, res){
	var query = {
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		age:req.body.age,
		sex:req.body.sex,
		contact:req.body.contact,
		doctor:req.body.doctor,
		bloodpressure:req.body.bloodpressure,
		respiratoryrate:req.body.respiratoryrate,
		bloodoxygenlevel:req.body.bloodoxygenlevel,
		heartbeatrate:req.body.heartbeatrate
	};
	Patient.findOneAndUpdate({_id:req.params.id}, query, function(err, patient){
		if(err)
			res.send(err);
		res.json(patient);
	});
});
app.listen(3000, function(){
	console.log('server is running on port 3000..');
});