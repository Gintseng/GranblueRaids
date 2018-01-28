const Twit = require('Twit');
const twitConfig = require('./config.js')

let T = new Twit(twitConfig);

// T.post('statuses/update', {status: 'test'}, function(err, data, response) {
//   console.log(data)
// })

var stream = T.stream('statuses/filter', { track: ['Lvl 75 Luminiera Omega',
'Lv75 シュヴァリエ・マグナ']})

stream.on('tweet', function (tweet) {
  //Grab Raid ID
  var text = tweet.text;
  var n = text.indexOf("Battle ID");
  if (n == -1) {
    var n = text.indexOf("参戦ID");
  }
  var raidID = text.substring(n-10, n-1);
  //console.log(raidID + '\n');
  console.log(raidID);
})
