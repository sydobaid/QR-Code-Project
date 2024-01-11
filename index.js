import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            message : "Enter the URL",
            name: "URL",
        }
    ])
    .then((answers)=>{
        const URL = answers.URL;
        var qr_png = qr.image(URL);
        qr_png.pipe(fs.createWriteStream('qr-image.png'));

        fs.writeFile("URL.txt", URL, (err)=>{
            if(err) throw err;
            console.log("The file has been saved!")
        })
    })