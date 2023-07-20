alert('hello Muwatok')

var blob = new Blob(["coba"],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, "static.txt");
