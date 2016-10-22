var express = require("express")
var app = express()

app.get("/", function(req, res) {
    var language = req.headers["accept-language"]
    var language = language.substring(0, language.search(","))
    
    var software = req.headers["user-agent"]
    var left = software.indexOf("(") + 1
    var right = software.indexOf(")")
    var software = software.substring(left, right)

    res.json({"ipaddress":req.headers["x-forwarded-for"],"language":language,"software":software})

    res.end()
})

app.listen(8080, function() {
    console.log("App listening on port 8080!")
})