/*
    process-file.js - template script to process a filename received as a command line argument 

    usage examples: 
        node process-file.js my_file.js
        node process-file.js c:\my\folder\my_file.js # windows
        node process-file.js c:/my/folder/my_file.js # windows
        node process-file.js ~/my/folder/my_file.js  # linux

        # batch process via powershell to process a whole bunch of files!
        Get-ChildItem c:\my\folder\ -Include *.xml -File -Recurse | foreach { node .\process-file.js $_.FullName }

        # via Linux find tool
        find ~/my/folder/ -name *.xml -exec node ./process-file.js {} \;
*/

const fs = require('fs');

const myArgs = process.argv.slice(2); 

if (myArgs.length == 0) {
    console.error("Error: I need atleast one argument!");
    process.exit(1);
}
else if ( myArgs.length>1 ) { // Warn if we're not processing anything
    console.warn("Warning: Ignoring all but the first input");
    // continue after the warn
}

var inputFileName = myArgs[0];

fs.readFile(inputFileName, (err, data) => {
    if (err) {
        console.error('Error reading the file %s', err.path);
        process.exit(1);
    }
    //otherwise handle data
    console.log("TODO: Execute code to process data in file =>", inputFileName);  
});
