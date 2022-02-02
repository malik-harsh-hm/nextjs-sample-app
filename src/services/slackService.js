// conversation:history

// GET https://akqa.slack.com/api/conversations.history?_x_id=c3820087-1643699205.165&_x_csid=_J1OjRDoCgI&slack_route=T026W4N31&_x_version_ts=1643694446&_x_gantry=true&fp=dc
// GET https://testdashboard-zl35140.slack.com/api/conversations.history?channel=C031234FVM0
// Form data-
//     channel: C027FTV3R55
//     limit: 28
//     ignore_replies: true
//     include_pin_count: true
//     inclusive: true
//     no_user_profile: true
//     include_stories: true
//     token: xoxc-2234158103-1153409824368-3038303683844-ada763b9770dc039f6b78ff779706df3b5d7a7f98a89366379da8b0a8811b1e4
//     _x_reason: requestOfflineHistory
//     _x_mode: online
//     _x_sonic: true
// Query string-
//     _x_id: c3820087-1643699205.165
//     _x_csid: _J1OjRDoCgI
//     slack_route: T026W4N31
//     _x_version_ts: 1643694446
//     _x_gantry: true
//     fp: dc

//bot token - xoxb-3029439725222-3059861872672-SMO0z5baJYvubZ266rwuMqeC (test workspace)
//workspace -
//channel -

export const slackService = {
  GetConversationHistory,
};

const dummy_conversation = {
  "ok": true,
  "messages": [
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643809179.574889",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643738628.707649",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643737863.294739",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643737556.129199",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643723031.277789",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "client_msg_id": "839d073b-154a-4343-b918-dc3f035187db",
          "type": "message",
          "text": ":thumbsup:",
          "user": "U030Z5S72G5",
          "ts": "1643713100.943569",
          "team": "T030VCXMB6J",
          "blocks": [
              {
                  "type": "rich_text",
                  "block_id": "uo/",
                  "elements": [
                      {
                          "type": "rich_text_section",
                          "elements": [
                              {
                                  "type": "emoji",
                                  "name": "thumbsup"
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "client_msg_id": "81550dda-3bc9-4ea9-ba82-033806b7d318",
          "type": "message",
          "text": "thread message",
          "user": "U030Z5S72G5",
          "ts": "1643713095.031869",
          "team": "T030VCXMB6J",
          "edited": {
              "user": "U030Z5S72G5",
              "ts": "1643714520.000000"
          },
          "blocks": [
              {
                  "type": "rich_text",
                  "block_id": "sbQnB",
                  "elements": [
                      {
                          "type": "rich_text_section",
                          "elements": [
                              {
                                  "type": "text",
                                  "text": "thread message"
                              }
                          ]
                      }
                  ]
              }
          ],
          "thread_ts": "1643713095.031869",
          "reply_count": 2,
          "reply_users_count": 1,
          "latest_reply": "1643714526.866729",
          "reply_users": [
              "U030Z5S72G5"
          ],
          "is_locked": false,
          "subscribed": false
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643700936.170069",
          "user": "U031RRBRNKS",
          "text": "<@U031RRBRNKS> has joined the channel",
          "inviter": "U030Z5S72G5"
      },
      {
          "client_msg_id": "62786fef-8786-4675-af68-ac272ffd5d48",
          "type": "message",
          "text": "Hi everyone!",
          "user": "U030Z5S72G5",
          "ts": "1643699897.710509",
          "team": "T030VCXMB6J",
          "blocks": [
              {
                  "type": "rich_text",
                  "block_id": "cjcIT",
                  "elements": [
                      {
                          "type": "rich_text_section",
                          "elements": [
                              {
                                  "type": "text",
                                  "text": "Hi everyone!"
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "type": "message",
          "subtype": "channel_join",
          "ts": "1643699805.671709",
          "user": "U030Z5S72G5",
          "text": "<@U030Z5S72G5> has joined the channel"
      }
  ],
  "has_more": false,
  "pin_count": 0,
  "channel_actions_ts": null,
  "channel_actions_count": 0
};
function GetConversationHistory(data) {

return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    return resolve(dummy_conversation);
  },1000);
});

  // let SLACK_WORKSPACE = process.env.NEXT_PUBLIC_SLACK_WORKSPACE;
  // let AUTH_TOKEN = process.env.NEXT_PUBLIC_SLACK_BOT_ACCESS_TOKEN; //NOTE - this expires automatically if made public
  // console.log('AUTH TOKEN - ', AUTH_TOKEN);
  // let CHANNEL = data.channel;

  // let myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  // let urlencoded = new URLSearchParams();
  // urlencoded.append("channel", CHANNEL);
  // urlencoded.append("token", AUTH_TOKEN);

  // let requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: urlencoded,
  //   redirect: 'follow'
  // };
  // let url = `https://${SLACK_WORKSPACE}.slack.com/api/conversations.history`;
  // return fetch(url, requestOptions);
}
