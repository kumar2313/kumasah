function loadsrc(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Script Loaded Successfully");
        callback(null, src)
    }
    script.onerror = function () {
        console.log("Script Loading Failed");
        let errstring = new Error("File Not found");
        callback(errstring, src)
    }
    document.body.appendChild(script);

}


loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", (err, src) => {
    if (err) {
        console.log("error occured loading bootstrap" + err)
    }
    else {
        loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", (err, src) => {
            if (err) {
                console.log("error occured loading bootstrap" + err)
            }
            else {
                loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", (err, src) => {
                    if (err) {
                        console.log("error occured loading bootstrap" + err)
                    }
                    else {
                        loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", (err, src) => {
                            if (err) {
                                console.log("error occured loading bootstrap" + err)
                            }
                            else {
                                loadsrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", (err, src) => {
                                    if (err) {
                                        console.log("error occured loading bootstrap" + err)
                                    }
                                    else {

                                    }
                                });
                            }
                        });
                    }
                });

            }
        });
    }
});


//javascript -> runtime load