"use strict";
class User {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}
class AdminUser extends User {
    adminRole = 1;
    constructor(name, age, adminRole) {
        super(name, age);
        this.adminRole = adminRole;
    }
    sayAdminRole() {
        console.log(`My adminRole is ${this.adminRole}`);
    }
    isAdult() {
        return true;
    }
}
const emma = new AdminUser('Emma', 0, 2);
console.log(emma.name);
emma.sayAdminRole();
console.log(emma.isAdult());
