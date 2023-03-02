// class biscuit {
//     constructor(name){
//         this.name=name
//     }
//     expiry(dt) {
//         console.log('Expiry Date of product '+this.name+' is : '+dt);
//     }
// }

// let parle = new biscuit('Parle')
// parle.expiry('1-Jan-2022')
// console.log('This product is for : '+parle.name)


class biscuit {
    constructor(name, age) {
        this._name = name
        this._age = age
        console.log(name)
        console.log(age)
    }

    expiry() {
        let a = 'Expiry Date of product ' + this._name + ' is : ' + this._age;
        return a;
    }

}


class brand extends biscuit {
    constructor(brand, shareprice, yearofestab, name, age) {
        super(name, age);
        this.brand = brand;
        this.shareprice = shareprice;
        this.yearofestab = yearofestab;

    }

    show() {
        console.log(this.brand)
        console.log(this.shareprice)
        console.log(this.yearofestab)
        console.log(this.expiry())
    }

}

let britannia = new brand('britannia', 200, 1997, 'XYZ', 90)
britannia.show()


let sunfest = new brand('sunfeast', 2000, 2000, 'ABC', 98)
sunfest.show()


// let parle = new biscuit('ParleG',20)
// parle.expiry('1-Jan-2022')
// console.log('This product is for : '+parle.newname)
// console.log('This product is for : '+parle.newage)
// parle.newname='Parle-G'
// parle.newage=30
// console.log('This product is for : '+parle.newname)
// console.log('This product is for : '+parle.newage)


