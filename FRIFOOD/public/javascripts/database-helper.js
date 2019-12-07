
function dropDatabase(key) {
    var data = {
        validation: key,
    };
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/database/drop');
    xhr.onload = function(data) {
        //console.log('loaded', this.responseText);
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}