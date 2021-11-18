import * as storage from './module.js'

window.onunload = function () {
    let inputs = document.getElementsByTagName('input');
    var cache = {};

    for (let index = 0; index < inputs.length; ++index) {
        cache[inputs[index].id] = (inputs[index].value);
    }

    storage.save('cache', JSON.stringify(cache));
}

loadCache();

function loadCache() {
    var cache = JSON.parse(storage.load('cache'));

    if (!cache) return;

    let inputs = document.getElementsByTagName('input');

    for (let index = 0; index < inputs.length; ++index) {
        if ( cache[inputs[index].id])
        {
            inputs[index].value = cache[inputs[index].id];
        }
    }
}