const fs = require('fs')

fs.writeFile("hey.txt", "hello wsup how's your Coding life going", function(err){
    if(err) console.log(err);
    else console.log("Done!");
})

fs.appendFile("hey.txt", "Hi, mai badiya hu, and My coding is going well", function(err){
    if(err) console.log(err);
    else console.log("Done Appending!..")
})

fs.copyFile("hey.txt", "./copy/hello.txt", function(err){
    if (err) console.log(err.message);
    else console.log("Done Copying");
})


// This unlink is used to remove file from the directory
fs.unlink("hey.txt", function(err){
    if (err) console.log(err.message);
    else console.log(" removed File Successfully...")
})

// This will remove the whole directory 
fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.log(err.message);
    else console.log("Removed Directory");
})

// to create a folder using fs
fs.mkdir("New Folder", function(err){
    if(err) console.log(err.message);
    else console.log("Folder created successfully");
})