//test data

rawJSONdata = {};

function getData(){
    // start å lag en request etter data
    xmlhttp = new XMLHttpRequest();
    // gjør denne funksjonen når du får svar på en request etter data
    xmlhttp.onreadystatechange = statusforandring;
    // forklar hva requsten skal gjøre/hente og hvor
    xmlhttp.open("get", "config.json", true);
    // send request etter data
    xmlhttp.send();
}
function statusforandring(){
    // hvis requesten fikk en possitiv respons med statuskode 200 (alt ok)
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        // skriver ut resultatet på skjermen
         rawJSONdata = JSON.parse(xmlhttp.responseText);
    }
}