

const studentTemp = [];

module.exports = class Student{



    constructor(t){
        this.student = t;
    }

    save(){
        studentTemp.push(this);
    }

    static fetchAll(){
        return studentTemp;
    }

}