// Type : 1
// --------------------------------------------------------
// function dhaba(menu){
//     const dhabapromise=new Promise(function(resolve,reject){
//         resolve(`Here is your order details ${menu.join(' ')}`)
//     })
//     return dhabapromise
//     // return "Sumit"
// }

// const chadha=dhaba(['Roti']);
// const chawife=dhaba(['Roti','Dalmakhni','Raita']);
// console.log(chadha)
// console.log(chawife)

// chadha.then(function (value) {
//     console.log("Sumit Promise resolved")
// }).finally(() => {
//     console.log("1st finally")
//   })

// chawife.then(function (value) {
//     console.log("chawife Promise resolved")
// })

// Type2:
// --------------------------------------------------------
// function dhaba(menu){
//     const dhabapromise=new Promise(function(resolve,reject){
//         resolve(`Here is your order details ${menu.join(' ')}`)
//     })
//     return dhabapromise
// }


// dhaba(['Roti']).then(function (value) {
//     console.log("Sumit Promise resolved")
//     return dhaba(['Roti','Dalmakhni','Raita'])
// }).then(function (value) {
//     console.log("SumitWife Promise resolved")
//     return dhaba(['salad'])
// }).then(function (value) {
//     console.log("Prakash Promise resolved")
//     return dhaba(['pepsi'])
// }).then(function (value) {
//     console.log("Deepak Promise resolved")
// })

// Type2:
// --------------------------------------------------------
// function dhaba(menu){
//     const dhabapromise=new Promise(function(resolve,reject){
//         if(menu==="salad"){
//             reject("Salad is not available")

//         }else{
//             resolve(`Here is your order details ${menu}`)
//         }
        
//     })
//     return dhabapromise
// }

// dhaba(['Roti']).then(function (value) {
//     console.log("Sumit Promise resolved")
//     return dhaba('Raita')
// }).then(function (value) {
//     console.log("SumitWife Promise resolved")
//     return dhaba('salad')
// }).then(function (value) {
//     console.log("Prakash Promise resolved")
//     return dhaba('pepsi')
// }).then(function (value) {
//     console.log("Deepak Promise resolved")
// })


// Type : 1
// --------------------------------------------------------
// function dhaba(menu){
//     const dhabapromise=new Promise(function(resolve,reject){
//         if(menu==="Roti"){
//             reject(`${menu} is not available`)

//         }else{
//             resolve(`Here is your order details ${menu}`)
//         }
        
//     })
//     return dhabapromise
// }

// const chadha=dhaba('Roti');
// const chawife=dhaba('Dalmakhni');

// console.log(chadha)
// console.log(chawife)

// const menureceived=Promise.all([chadha,chawife])

// console.log(menureceived)

// menureceived.then(function (value) {
//         console.log("Food is served")
//     }).catch(
//         function (error) {
//             console.log("Food is not delivered "+error)
//         }
//     )

// TypeError-------------------------------------------------------


function dhaba(menu){
    const dhabapromise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(menu==="Roti"){
                reject(`${menu} is not available`)
    
            }else{
                console.log("DHABA")
                resolve(`Here is your order details ${menu}`)
            }
        },10000)        
    })
    return dhabapromise
}

function milansweet(menu){
    const dhabapromise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(menu==="Roti"){
                reject(`${menu} is not available`)
    
            }else{
                console.log("MILAN")
                resolve(`Here is your order details ${menu}`)
            }
        },2000)        
    })
    return dhabapromise
}

const chadha=dhaba('Roti');
const chawife=milansweet('Dalmakhni');


console.log(chadha)
console.log(chawife)

// const menureceived=Promise.race([chadha,chawife])
// const menureceived=Promise.any([chadha,chawife])
const menureceived=Promise.allSettled([chadha,chawife])

// console.log(menureceived)

menureceived.then(function (value) {
        console.log("Food is served")
    }).catch(
        function (error) {
            console.log("Food is not delivered "+error)
        }
    )


