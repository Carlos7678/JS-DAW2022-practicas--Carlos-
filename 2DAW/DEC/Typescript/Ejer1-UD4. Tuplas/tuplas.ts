const DEC: [string, number, number] =  ['DEC',7,12];
const DAW: [string, number, number] =  ['DAW',6,12];
const DWS: [string, number, number] =  ['DWS',9,12];
const DIW: [string, number, number] =  ['IW',5,12];
const ING: [string, number, number] =  ['DWS',3,10];
const EIE: [string, number, number] =  ['IW',3,2];

let profesor = 'Antonio Camarena';

DEC.push(profesor);
DAW.push('Marcos');
DWS.push('Toni Cerezo');
DIW.push('Borja');
ING.push('Julio');
EIE.push('Mari Carmen');

console.log(DEC[0]);

console.log(DEC[DEC.indexOf(profesor)]);