
window.onload = main;

modules = [];


async function main() {
    let rawJSON = await fetch("./config.json").then(Response => Response.json());
    console.log(rawJSON);
    decodeJSON(rawJSON);

}