//this file isn't transpiled
//using babel

require('babel-register')();


//Disable webpack features that Mocha doesn't understand

require.extensions['.css'] = function() {};
