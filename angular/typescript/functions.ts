
//NOTE:declaration
let tab1 :number[];
tab1 = [2,3,4,5];

//generic function
function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}



function add(num1:number,num2:number):number{
    return  num1+num2;
}

function optional(str:string,str0:string,strz?:string):string{
    return strz?str+str0+strz:str+str0;
}

function addD(num0:number,num1:number,...numT:number[]):number{
    return num0+num1+numT.reduce((a,b) => a+b,0);
}

const sub = (num1:number,num3:number) :number => num1-num3;
const multi = function (num1:number,num2:number,num3=10) {
    return num1*num2*num3;
}

console.log(add(2,4));
console.log(sub(2,198));
console.log(optional("KPIDIBA ","David"));
console.log(addD(2,3,56,75,43,23,456,6,77,54,44,2344,5,667));
console.log(addD(0,0,...tab1));
console.log(getItems(tab1));
