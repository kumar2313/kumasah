let mypromise = new Promise(

    function (myres, myrej) {

        setTimeout(() => {
            let a = { name: "santosh", age: 50 }
            console.log("Inside promise")
            myres(a)
            // myrej(new Error("promise failed"))
        }, 10000)

    }
);

mypromise.then(
    function (value) {
        console.log(value.name)
        console.log(value.age)
    },
    function (error) {
        console.log(error)
    }
)

console.log(mypromise)