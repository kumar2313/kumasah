function Student(name, age) {
    this.name = name;
    this.age = age;
    // console.log(this.name)
    // let xyz = () => {
    //     console.log("calling function")
    // }
    // xyz()

}

Student.prototype.xyz=function(){
    console.log('AVN')
}
Student.prototype.brand="ggg"

//    Student("John", 50);

var stu1 = new Student("John", 50);
var stu2 = new Student("2", 50);
var stu3 = new Student("3", 50);
var stu4 = new Student("4", 50);
var stu5 = new Student("5", 50);
console.log(stu1)
console.log(stu2)
console.log(stu3)
console.log(stu4)
console.log(stu5)






// console.log(stu1)
// stu1.car="Hyundai"
// console.log(stu1)
// console.log(stu1.prototype)
// --> prototype
//     Point
//         --> prototype
//             --> window
        

function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();
var myPoint1 = new Point();

// the following are all true
console.log(myPoint.__proto__ === myPoint1.__proto__)
console.log(myPoint.__proto__ === Point.prototype)
console.log(myPoint.__proto__.__proto__ === Object.prototype)
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);