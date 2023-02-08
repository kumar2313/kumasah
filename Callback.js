function loadsrc(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Script Loaded Successfully");
        callback(null,src)
    }
    script.onerror=function(){
        console.log("Script Loading Failed");
        let errstring= new Error("File Not found");
        callback(errstring,src)
    }
    document.body.appendChild(script);
   
}

function hellowworld(err,src){
    console.log("Source: "+src);
    console.log("Error: "+err);
}

loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hellowworld);


//javascript -> runtime load