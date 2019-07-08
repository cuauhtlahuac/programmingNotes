var myHeaders = new Headers();

myHeaders.append('authorization', 'Bearer 2TlKAVlfFCbEUAavdavqrMy34nBIkOLkSDSI7efwZISZGSqZoSw3yTuAHAFw');

var miInit = {
    method: 'GET',
    headers: myHeaders
}

fetch('http://localhost:8000/api/driver/search?searchtext=h&&', miInit).then(function(response) {
    return response.json();
}).then(function(myJson) {
    console.log(myJson);
});
