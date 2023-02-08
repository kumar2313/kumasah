// Your API key is: aa6c03f22b44497cbbd02ec8ec9db0e1
// https://newsapi.org/
let dataUrl="https://newsapi.org/v2/everything?q=tesla&from=2022-12-23&sortBy=publishedAt&apiKey=aa6c03f22b44497cbbd02ec8ec9db0e1"

let parseData = fetch(dataUrl)

parseData.then((response) => {
    return response.json()

}).then((value) => {
    for (let key in value) {
        console.log(key)
        console.log(typeof value[key])
        if (key=="articles"){
            for (let key1 in value[key]){
                console.log(value[key][key1]["author"])
            }
        }

    }

})