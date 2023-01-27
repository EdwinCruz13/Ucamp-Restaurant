const path = require("path"); 

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    ouput: {
        path: path.resolve(__dirname, ''),
        filename:''
    },
    watch:''
}