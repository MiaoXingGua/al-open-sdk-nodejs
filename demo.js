import {
  YZClient,
  Sign,
  Token
} from "al-open-sdk-nodejs"

const client1 = new YZClient(new Token("token"))
const client2 = new YZClient(new Sign("key","secret"))

client2.invoke('kdt.shop.basic.get', '1.0.0', 'GET')
.then(function(resp) {
	console.log('resp: ' + resp.body);
	var data = JSON.parse(resp.body);
	console.log(data.response.item.num_iid);
}, function(err) {
	console.log('err: ' + err);
}, function(prog) {
	console.log('prog: ' + prog);
});
