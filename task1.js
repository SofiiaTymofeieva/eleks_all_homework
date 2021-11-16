import randomstring from 'randomstring';
import fs from 'fs';

let student1 = {
    name: randomstring.generate({length: 7, charset: 'alphabetic', capitalization: 'lowercase'}),
    surname: randomstring.generate({length: 10, charset: 'alphabetic', capitalization: 'lowercase'}),
    rate: Math.floor(Math.random() * 101),
}

fs.writeFile(
    'studentFile.json', 
    JSON.stringify(student1), 
    (err) => {
        if (err) throw err;
            fs.readFile(
            './studentFile.json',
            'utf8', 
            (err, data) => {
                if (err) throw err;
                const convertedFromJsonStudentObj =  JSON.parse(data);

                console.log(convertedFromJsonStudentObj);

                convertedFromJsonStudentObj.name = 'Jhon';
                convertedFromJsonStudentObj.surname = 'Doe';
                convertedFromJsonStudentObj.rate = 99;

                fs.appendFile(
                    './studentFile.json', 
                    JSON.stringify(convertedFromJsonStudentObj),
                    (err)=>{ 
                        if(err) throw err;
                        console.log('File updated successfully')
                    }
                );
            })
    }
);