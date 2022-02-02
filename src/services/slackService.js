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

function GetConversationHistory(data) {
  let SLACK_WORKSPACE = process.env.NEXT_PUBLIC_SLACK_WORKSPACE;
  let AUTH_TOKEN = process.env.NEXT_PUBLIC_SLACK_BOT_ACCESS_TOKEN; //NOTE - this expires automatically if made public
  console.log('AUTH TOKEN - ', AUTH_TOKEN);
  let CHANNEL = data.channel;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("channel", CHANNEL);
  urlencoded.append("token", AUTH_TOKEN);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  let url = `https://${SLACK_WORKSPACE}.slack.com/api/conversations.history`;
  return fetch(url, requestOptions);
}
