const inventors=[
    {first:'alhvud',last:'sdfew',year:'1',passed:'3'},
     {first:'alhvud',last:'sdfew',year:'2',passed:'8'},
    {first:'alhvud',last:'sdfew',year:'6',passed:'8'},
    {first:'alhvud',last:'sdfew',year:'0',passed:'3'},
    {first:'alhvud',last:'sdfew',year:'0',passed:'3'},
];
const pepole=['balajwdguyq,svdfuw','dhfuyew,hdvfqvw','djwgfuwtefuud,dhuuwdgyf'];
const zero=inventors.filter(inventor=>{
    if(inventor.year>0&& inventor.year<10){
        return true;
    }
});
console.table(zero);
const name=inventors.map(inventor=>inventor.first+inventor.last
    
);
console.log(name);
const oder=inventors.sort(function(a,b){
    if(a.year>b.year){
        return 1;
    }
    return-1
});
console.table(oder);
const live=inventors.reduce((total,inventor)=>{
    return total+(inventor.passed-inventor.year);
},0);
console.log(live);