require('../css/main.css');

const bitsharesjs = require('../lib/bitsharesjs');

window.calculate = function(){
    var pkey = bitsharesjs.PrivateKey.fromWif(document.getElementById('wif').value);
    var message = document.getElementById('message').value;
    var result = bitsharesjs.Signature.signBuffer(new Buffer(message, 'utf8'), pkey);
    document.getElementById('result').innerHTML = result.toHex();
}
