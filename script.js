

var http = require("http");
http.createServer(function (req, res){
    res.write('Hello World');
    res.end();
}).listen(8080);


$("#but").click(function(){
    $.get('http//:localhost:8080')
});
