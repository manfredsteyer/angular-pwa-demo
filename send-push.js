const webpush = require('web-push');

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

const pushSubscription =
//{"endpoint":"https://fcm.googleapis.com/fcm/send/frHwsnIsC2M:APA91bGBSKo1SNz_uChLq_e76nm3HcLPqbCOJCk79kfr9erwvXHM8oELDLhJr-Z5HNq19CyCn16HgeB573aOTGX1SZWkflAARtA-e5Vc9zFKb9Al7g3nuWKuFdB4fw3wqzb54B1c_0Qs","expirationTime":null,"keys":{"p256dh":"BAgwsaekT-tbLHxQEfRKBf5ikRFO-lO-w8MyuxDjsxaSi1L3pVjlvS9u4K7fV4yUxHRKvbt6VUmdIlpmv3ycV-Q","auth":"pVTIwJzcM4g0M0L0T6fScg"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/cr7CMuwYViE:APA91bFKhxlEKGts4SCtWac_n5Crocby5qsDK2lP5P1VKaP5WCZsW86WLILsE1HM4XEhE_-OCBeV0hbI36arohYnc4ibOTpxlo07I17wQOyQoD0mKHmXVF1_-2ZjzgaiCWq1BqCLvy7P","expirationTime":null,"keys":{"p256dh":"BMzu6t1HVpWR2DB2YZjs1tTLG1IqpgdPk6NbNP1RrERh7bNFVm_3Hp0FvWrZiuZHKRFgplK-nHRAZwgT0IaWQ2c","auth":"pA2o0w058O7OA_fsEomsxg"}};
{"endpoint":"https://fcm.googleapis.com/fcm/send/cQ1EBs24OwA:APA91bFyeYRmy2-Bz9M99_GAYtrusYq8VvxF1xm0fLJ75KHN2hqgCCQlSAeXnZ6HxluQvwiz80akKOGbxOaUnqBhAdn8PYx3iaCDiQPC2iis18or3kROScpG0u_H0aBIY8Elwjd50az8","expirationTime":null,"keys":{"p256dh":"BMRRdgsriDX0WQzzhqYMoWH4MwqMigEkDdOzojMFxj-_BTga_1ugD1SmMgP1O9l0OsusuGjfpXx5i98FFqEaUyA","auth":"u_G2ZZ2itrOXvZGdjN7iUg"}}

const payload = JSON.stringify({
  notification: {
    title: 'Your Gate Changed',
    body: 'Your Gate is now G62',
    icon: './assets/img/angular.png',
    data: 'additional data'
  }
});

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
