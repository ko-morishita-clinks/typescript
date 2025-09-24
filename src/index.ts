class User {
  name: string = '';
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }

}

class AdminUser extends User {
  adminRole: number = 1;

  constructor(name: string, age: number, adminRole: number) {
    super(name, age);
    this.adminRole = adminRole
  }

  public sayAdminRole() {
    console.log(`My adminRole is ${this.adminRole}`);
  }

  public override isAdult(): boolean {
    return true;
  }
}

const emma = new AdminUser('Emma', 0, 2);
console.log(emma.name);
emma.sayAdminRole();
console.log(emma.isAdult());
