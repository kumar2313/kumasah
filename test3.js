// {"web_pages": ["http://www.marywood.edu"], "state-province": null, "alpha_two_code": "US", "name": "Marywood University", "country": "United States", "domains": ["marywood.edu"]}

let tabdata= "<table>  <tr>    <th>University Name</th>    <th>country</th>    <th>Domain</th>    <th>Website</th>    <th>state</th>  </tr>"
let dataUrl="http://universities.hipolabs.com/search?country=United+States"

let parseData=fetch(dataUrl)

parseData.then((response)=>{
    return response.json()

}).then((value)=>{

        for ( let key in value)
        {
            // console.log(prakash[key]["name"])
            // console.log(prakash[key]["country"])
            tabdata=tabdata+"<tr>"
            tabdata=tabdata+"<td>"+value[key]["name"]+"</td>"
            tabdata=tabdata+"<td>"+value[key]["country"]+"</td>"
            tabdata=tabdata+"<td>"+value[key]["domains"]+"</td>"
            tabdata=tabdata+"<td>"+value[key]["web_pages"]+"</td>"
            tabdata=tabdata+"<td>"+value[key]["state-province"]+"</td>"
            tabdata=tabdata+"</tr>"
        }
        console.log("finished")
        tabdata=tabdata+"</table>"

        document.getElementById("deepak").innerHTML=tabdata

})


let dataUrldog="https://dog.ceo/api/breeds/image/random"

// {"status":"success","message":"https://images.dog.ceo/breeds/spaniel-irish/n02102973_911.jpg"}

let parseDatadog=fetch(dataUrldog)

parseDatadog.then((response1)=>{
    return response1.json()

}).then((value1)=>{
    console.log(value1["message"])
    let img1=value1["message"]
    document.getElementById("dogimg").src=img1
})