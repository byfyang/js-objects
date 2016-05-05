function Monkey(name, species){
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
	this.eatSomething = function(food){
		this.foodsEaten.push(food);
	}
	this.introduce = function(){
		console.log("My name is "+ this.name +". I come from the "+ this.species + " family. I have eaten "+ this.foodsEaten.join(", ") + ".");
	}
	
}


var monkey = new Monkey ();
monkey.name = "Horace";
monkey.species = "Chimpanzees";
monkey.foodsEaten = "cherries";

var monkey2 = new Monkey ();
monkey.name = "Anubis";
monkey.species = "Gorilla";
monkey.foodsEaten = "banana";

var monkey3 = new Monkey ();
monkey.name = "Ra";
monkey.species = "Orangutan";
monkey.foodsEaten = "apple";


console.log(monkey1.name);
console.log(monkey1["name"]);