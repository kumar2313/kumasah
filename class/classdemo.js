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
    constructor(name,age){
        this._name=name
        this._age=age
    }
    

    get newname(){
        return this._name
    }

    set newname(x){
        this._name=x
    }

    get newage(){
        return this._age
    }

    set newage(x){
        this._age=x
    }

    expiry(dt) {
        console.log('Expiry Date of product '+this.name+' is : '+dt);
    }

}

let parle = new biscuit('ParleG',20)
parle.expiry('1-Jan-2022')
console.log('This product is for : '+parle.newname)
console.log('This product is for : '+parle.newage)
parle.newname='Parle-G'
parle.newage=30
console.log('This product is for : '+parle.newname)
console.log('This product is for : '+parle.newage)


