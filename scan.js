var qr = "https://api.qrserver.com/v1/create-qr-code/?data=" + localStorage.qr + "&amp;size=300x300";
$('#qr').attr('src', qr);
