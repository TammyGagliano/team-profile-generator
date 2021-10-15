//Testing to make sure works

const Employee = require("../lib/Employee");

const e2 = new Employee("Jack", 1, "a@a.com");
console.log("name: ", e2.getName());
console.log("e2 id: ", e2.getId());
console.log("e2 email: ", e2.getEmail());