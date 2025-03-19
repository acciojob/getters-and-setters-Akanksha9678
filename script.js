//complete this code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}
	get name(){
		return this.name
	}
	age(age){
		this.age=age
		return this.age;
	}
}

class Student extends Person {
	constructor(name){
		super(this.name)
	}
	study(){
		console.log(`${this.name} is studing`)
	}
}

class Teacher extends Person {
		constructor(name){
		super(this.name)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
