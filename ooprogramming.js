//kristapsba: Shot at OOP and creating classes, inheritance.

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep = function() {
        this.energy += 10;
        return;
    }
    doSomethingFun = function() {
        this.energy -= 10;
        return;
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    xp = 0;
    hourlyWage = 10;
    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork = function() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const intern1 = new Worker("Bob", 21, 110, 0, 10);
    intern1.goToWork();
    return intern1;
}

// Task 4: Code a manager object, methods
function manager() {
    const manager1 = new Worker("Alice", 30, 120, 100, 30);
    manager1.doSomethingFun();
    return manager1;
}
