class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Brahmanbaria School'
    }
}

const student1 = new Student (12, 'Salam');
const student2 = new Student (23, 'Bappi');
const student3 = new Student (22, "Shuvo");

console.log(student1, student2, student3);