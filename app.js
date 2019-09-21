const logModule = require('./module.js');
const fs = require('fs');
const http = require('http');

http.createServer((request, response)=> {
    if(request.url.indexOf('mecca')>0){
        response.write('mecca');
        response.end();
    }
    if(request.url.indexOf('.css')>0){
        const cssContent = fs.readFileSync('./style.css');
        response.write("cssContent");

    }
    const content = fs.readFileSync('./index.html');
    response.write(content);
    response.end();
    
}).listen(1234);
logModule.logMessage('server is running on 1234....');

// //use readFileSync to read the txt file.
// var fileContent = fs.readFileSync('./text.txt');

// logModule.logMessage(fileContent);
// //use readFile to read txt file, but use callback function, and terminal will execute later
// fs.readFile('./text.txt',(e, content)=> {
//     logModule.logMessage(content);
// }); 

// logModule.logMessage('test');