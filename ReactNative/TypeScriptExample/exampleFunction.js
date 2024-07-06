var people = [
    { name: "John Doe", age: 30 },
    { name: "Alice Point", age: 37 },
    { name: "Dorson Rolk", age: 25 },
];
function filterAdults(props) {
    return props.filter(function (element) { return element.age >= 30; });
}
var adults = filterAdults(people);
console.log(adults.map(function (data) { return "Name : " + data.name + " Age : " + data.age; }));
