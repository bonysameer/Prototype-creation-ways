

//first method

function human(hands, legs, nose){
  this.hands = hands;
  this.legs = legs;
  this.nose = nose;
}
const animal = new human(2,2,1);
console.log(animal);

// second method
const grandparent = {
  name:"Mr. A",
  location:"west-singhbhum",
  area:"jharkhand",
  city:"khunti",

}
const parent = Object.create(grandparent);
  parent.name = "Mr. P bodra";
  parnet,area = "ranchi";

console.log(parent);




const grandparent = {
  name:"Mr. A",
  location:"west-singhbhum",
  area:"jharkhand",
  city:"khunti",

}
const parent = Object.create(grandparent);
  parent.name = "Mr. P bodra";
  parent.area = "ranchi";

console.log(parent);


//third method

const obj = new object();
obj.name = "sameer";
obj.area = "bangalore"
obj.loaction = "kumarswamy layout"
console.log(obj);

//fourth method

const animal = {
  name : "dog",
  breed:"german shephard",
  age: "8 months",
}
animal.location = "alaska";
animal.family ="husky";
console.log(animal);