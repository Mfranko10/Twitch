{
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://frasedeldia.azurewebsites.net/api/phrase');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
    else {
        console.log('Error');
    }
};
xhr.send();
}
