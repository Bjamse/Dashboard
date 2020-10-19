// data decoder
function decodeJSON(raw){
    // make modules into objects
    for(let i = 0; i < raw.modules.length; i++){
        modules.push(new moduleObject(raw.modules[i]));
    }
}