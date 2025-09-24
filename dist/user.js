export class User {
    name = '';
    age = 0;
    isAdult() {
        return this.age >= 18;
    }
}
