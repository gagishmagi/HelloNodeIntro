// Http Server module builtin
const http = require("http");

// Files System module builtin
const fs = require("fs");

// URL module builtin
const url = require("url");

const upper  =  require('upper-case')

const port = 8000;


http.createServer(function(req, res){
    // console.log(req.method)
    // console.log(req.url)

    // function back(res){
    //     res.write('<h1>Hello JS</h1>')
    //     res.end()
    // }

    // FS module uses cases

    // Read file content and send back to client

    fs.readFile('./public/data.txt',(err, data) => {

        let str = data.toString("utf-8")

        // console.log(str)

        str = upper.upperCase(str)

        // console.log(str)

        data = Buffer.from(str, "utf-8")

        if(err){
            // console.log(res)
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end()
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end()

    })

    // write file

    // fs.writeFile('mynewfile1.txt', "\nHello Yuri!\n", function (err) {
    //     if (err)
    //         throw err;
    //     console.log('Saved!!!!!');
    // });

    // append file

    // fs.appendFile('mynewfile1.txt', `\nHello content!\n`, function (err) {
    //     if (err)
    //         throw err;

    //     console.log('Saved!');
    // });

    // update file

    // fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
    //     if (err) throw err;
    //     console.log('Replaced!');
    // });

    // delete file

    // fs.unlink('mynewfile1.txt', function (err) {
    //     if (err)
    //         throw err

    //     console.log('File delete!')
    // })

    // const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    // const q = url.parse(adr, true);

    // console.log(q.host); //returns 'localhost:8080'
    // console.log(q.pathname); //returns '/default.htm'
    // console.log(q.search); //returns '?year=2017&month=february'

    // const qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    // console.log(qdata.month); //returns 'february'

}).listen(port)


// URL example
// http
//   .createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     const filename = "./public" + q.pathname;

//     // console.log(req.message)

//     if(req.method == 'GET'){
//         fs.readFile(filename, function (err, data) {
//             if (err) {
//               res.writeHead(404, { "Content-Type": "text/html" });
//               return res.end("404 Not Found");
//             }
      
//             const type = q.pathname.split(".")[1];
//             console.log(type);
//             switch (type) {
//               case "html":
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 break;
//               case "css":
//                 res.writeHead(200, { "Content-Type": "text/css" });
//                 break;
//               case "js":
//                 res.writeHead(200, { "Content-Type": "text/javascript" });
//                 break;
      
//               case "txt":
//                 res.writeHead(200, { "Content-Type": "text" });
//                 break;
      
//               case "json":
//                   res.writeHead(200, { "Content-Type": "application/json" });
//                 break;
      
//               default:
//                 break;
//             }
//             res.write(data);
//             return res.end();
//           });
//     }else if(req.method == 'POST'){
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify({message: "POSTED SUCCESSFULL!!!!"}))
//         return res.end()
//     }


    
//   })
//   .listen(port, () => {
//     console.log(`The server is running at port: ${port}`);
//   });

// Events explained

// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// //Create an event handler:
// const myEventHandler =  () => {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// NPM packages
// upper-case

// Upload Files

// const formidable = require('formidable');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         res.write('File uploaded');
//         res.end();
//       });
//     } else {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write('</form>');
//       return res.end();
//     }
//   }).listen(8080);

// Bonus: sending emails

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// const mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
