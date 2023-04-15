import * as fs from 'fs'

function  helloWorld(name: string) {
    return  "Hello " + name;
   }
   
const helloName = helloWorld("Hawk");
fs.writeFileSync('hello.txt', helloName);