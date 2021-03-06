
// executes the given code and handles the result
var run = function(code) {
    var result = {
        input: code,
        output: null,
        error: null,
        type: null
    };

    try {
        var codeExec = runHidden(code);
        result.type = typeof codeExec;
        result.output = stringify(codeExec);
    } catch(e) {
        result.error = e.message;
    }

    application.remote.output(result);
};


// protects even the worker scope from being accessed
var runHidden = function(code) {
    var indexedDB = null;
    var location = null;
    var navigator = null;
    var onerror = null;
    var onmessage = null;
    var performance = null;
    var self = null;
    var webkitIndexedDB = null;
    var postMessage = null;
    var close = null;
    var openDatabase = null;
    var openDatabaseSync = null;
    var webkitRequestFileSystem = null;
    var webkitRequestFileSystemSync = null;
    var webkitResolveLocalFileSystemSyncURL = null;
    var webkitResolveLocalFileSystemURL = null;
    var addEventListener = null;
    var dispatchEvent = null;
    var removeEventListener = null;
    var dump = null;
    var onoffline = null;
    var ononline = null;
    var importScripts = null;

    return eval(code);
}


// converts the output into a string
var stringify = function(output) {
    var result;

    if (typeof output == 'undefined') {
        result = 'undefined';
    } else if (output === null) {
        result = 'null';
    } else {
        result = JSON.stringify(output) || output.toString();
    }

    return result;
}


application.setInterface({run:run});
