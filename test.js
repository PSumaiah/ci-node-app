const add = require('./app');
if(add(2,3)===5){
    console.log("test passed");
    process.exit(0);
}else{
    console.log("test failed");
    process.exit(1);
}