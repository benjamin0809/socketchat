var QrCode = require('qrcode-reader');

var qr = new QrCode();

qr.callback = function(error, result) {
    if(error) {
      console.log(error)
      return;
    }
    console.log(result)
  }

  qr.decode('https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js')