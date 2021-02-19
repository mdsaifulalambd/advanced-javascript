
const students =[
    {id: 21, name: 'Omor Sany'},
    {id: 22, name: 'Kabir Miah'},
    {id: 31, name: 'Babu Khan'},
    {id: 41, name: 'Arif Hossain'}
];

const names = students.map(x =>x.name);
console.log(names);

// const names=[];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.id;
//     names.push (result);
    
// }

// console.log(names);