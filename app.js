// Topic: File System Module pt2 (folder)

const fs = require("fs");

 // created a folder containing file and data inside it
 fs.mkdir('tutorial', (err)=>{
  if(err)
  console.log(err)
  else{
   fs.writeFile('./tutorial/example.txt','welcome',(err)=>{
    if(err)
    console.log(err);
    else{
     console.log('successfully created file');
    }
   });
  }
 });

 
// to delete folder
// fs.unlink('./tutorial/example.txt',(err)=>{
//  if(err)
//  console.log(err);
//  else{
//   fs.rmdir('tutorial',(err)=>{
//  if(err)
//  console.log(err)
//  else{
//   console.log('deleted folder');
//  }
// });
//  }
// });
