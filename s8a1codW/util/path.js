const path = require('path');

//module.exports =  path.dirname(process.mainModule.filename);

// this is the same as the above and give the path to the root 
//folder of the project by gettting the path to the mainModule 
// or the folder where it is the file that started the application
module.exports = path.dirname(require.main.filename);