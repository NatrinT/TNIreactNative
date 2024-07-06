interface Person{
    name:string;
    age:number;
}

const people:Person[] = [
    {name:"John Doe",age:30},
    {name:"Alice Point",age:37},
    {name:"Dorson Rolk",age:25},
]

function filterAdults(props:Person[]):Person[] {
    return props.filter(element=>element.age>=30);
}

const adults = filterAdults(people);
console.log(adults.map(data=>"Name : "+data.name+" Age : "+data.age));


