
const StudentModel = require('../models/student')

exports.getStudent=(req,res,next)=>{
    res.render('student',{})
}

exports.postStudent=(req,res,next)=>{
    // console.log(req.body);
    // console.log(req.body.student);
    const reqStudent = req.body.student;
    const student = new StudentModel(reqStudent);
    student.save();
    console.log(StudentModel.fetchAll());
    res.redirect("/");
}