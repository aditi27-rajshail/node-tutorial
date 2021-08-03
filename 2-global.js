//Globals 
//__dirname- path to the current directory
//__filename- name of file
//require - function to use modules
//module - info about the current module
// process - info about the environment where the program is been executed
/* #The disadvantage of global scope is they might interfere with 
the other files hence for reliable application we need modularity
#Every file in Node Application is considered to be a module
#The variabes and functions of that module are scoped to that file
or simply they are private
#In order to use that file we need to explicitly call that file */
console.log(__dirname);
setInterval(()=>{
    console.log("Hello World")

},1000)