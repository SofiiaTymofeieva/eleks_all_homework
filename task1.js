import randomstring from 'randomstring';

let student1 = {
    name: randomstring.generate({length: 7, charset: 'alphabetic', capitalization: 'lowercase'}),
    surname: randomstring.generate({length: 10, charset: 'alphabetic', capitalization: 'lowercase'}),
    rate: Math.floor(Math.random() * 101),
}

let student1Json = JSON.stringify(student1);
console.log(student1Json);

let student2 = JSON.parse(student1Json);
console.log(student2);

student2.name = randomstring.generate({length: 4, charset: 'alphabetic', capitalization: 'uppercase'});

let mergeStudent = Object.assign(student1, student2);
console.log(mergeStudent)

let mergeStudentJson = JSON.stringify(mergeStudent);
console.log(mergeStudentJson);