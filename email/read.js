const fs = require('fs').promises;

const filename = process.argv[2]

fs.readFile("email_list.txt", "utf8") 
    .then(list =>  console.log(list)) 
    .catch(error => console.log(error));

// check input

if (!filename) {
    console.error("Please provide a filename");
    process.exit(1); 
}

// view the file
fs.readFile(filename, 'utf8')
    .then(list => {
        console.log(`File path: ${__filename}`);
        console.log(`Reading from file: ${filename}`);
        console.log(list);
    })
    .catch(error => {
        console.error(`Error reading file: ${error.message}`);
        process.exit(1); 
    });