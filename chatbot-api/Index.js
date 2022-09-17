const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

const port = 3000;

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  authenticator: new IamAuthenticator({
    apikey: 'yGTxnnbT7NvCPa5Lgqk8u-IqC0rCnq3l3vTvv3yETTlO',
  }),
  version:'2021-06-14',
  serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/a074197a-e80c-4620-9195-6d2b5b782227',
  disableSslVerification: true,
});

app.get('/conversation/', () => {
  var session = assistant.createSession({
    assistantId: 'd70c9818-00c2-4966-9370-cc2b36841fa3'
  })
    .then(res => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch(err => {
      console.log(err);
    });
  
    var sessionId = JSON.stringify(session)
  
    var x = sessionId.replace(/{}/, '')
  
    var y = session["session_id"]

    console.log(x)
    console.log(y)
  
  });

var session = assistant.createSession({
  assistantId: 'd70c9818-00c2-4966-9370-cc2b36841fa3'
})
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });

  var sessionId = JSON.stringify(session)

  var x = sessionId.replace(/{}/, '')

  var y = session.session_id
app.post('/conversation/', (req, res) => {

  console.log(session)

    const { text, context = {} } = req.body;

    const params = {
      input: { text },
      assistantId: 'd70c9818-00c2-4966-9370-cc2b36841fa3',
      sessionId: session.sessionId,
      context,
    };
  
    assistant.message(params, (err, response) => {
      if (err) {
        console.error(err);
        res.status(500).json(err);
      } else {
        res.json(response);
      }
    });

});
app.listen(port, () => console.log(`Running on port ${port}`));

//    apikey: 'yGTxnnbT7NvCPa5Lgqk8u-IqC0rCnq3l3vTvv3yETTlO',
/**   
 * 
 * const params = {
input: { text },
assistantId:'d70c9818-00c2-4966-9370-cc2b36841fa3',
sessionId: 'd70c9818-00c2-4966-9370-cc2b36841fa3',
context,
};
 * 
 * f075a4bf-1e5e-41e4-9a69-2c0d3ff2319a
 *  assistantId: 'd70c9818-00c2-4966-9370-cc2b36841fa3',
    sessionId: 'elVy_7PRe9y4eoZQNiSps8DrurqYIplmUwYBmzsTO_zh', */

