var ipc = require('electron').ipcRenderer;

ipc.on('test',function(e, v){
    console.log(v);
});

ipc.send('updateSettings', 'test-setting-updation');