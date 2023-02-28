async function myfunc(){
    let mypromise = new Promise(
        function (myres, myrej) {
            setTimeout(() => {
                let a = { name: "santosh", age: 50 }
                console.log("Inside promise")
                myres(a)
            }, 5000)
        }
    );

    let mypromise1 = new Promise(
        function (myres, myrej) {
            setTimeout(() => {
                let a = { name: "Kumar", age: 50 }
                console.log("Inside promise")
                myres(a)
            }, 5000)
        }
    );

let data;
 data=await mypromise;
    console.log('document value update')
    document.getElementById("tempdata").innerHTML=data.name
            // let a=await mypromise;
            // if(a){
            //     console.log("first promise completed")
            //     let b=await mypromise1;
            //     document.getElementById("tempdata").innerHTML=b.name
            // }
            // else{
            //     throw Error('I am not getting data')
            // }
            // document.getElementById("tempdata").innerHTML=a.name

}

myfunc()

