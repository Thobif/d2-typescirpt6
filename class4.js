var Person = /** @class */ (function () {
    function Person() {
    }
    //Method
    Person.birthday = function () {
        this.age;
        console.log(this.age + " " + this.fullName);
    };
    return Person;
}());
//  let p1 = new Person();
//  p1.fullName = "Mark Sakaberg";
//  p1.birthday();
Person.birthday();
