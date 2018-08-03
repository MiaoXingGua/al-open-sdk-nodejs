var YZClient = require('yz-open-sdk-nodejs');
var Token = require('./node_modules/yz-open-sdk-nodejs/Token');

var YZClient = new YZClient(new Token('xx'));

var promise = YZClient.invoke('kdt.shop.basic.get', '1.0.0', 'GET');

promise.then(function(resp) {
	console.log('resp: ' + resp.body);
	var data = JSON.parse(resp.body);
	console.log(data.response.item.num_iid);
}, function(err) {
	console.log('err: ' + err);
}, function(prog) {
	console.log('prog: ' + prog);
});