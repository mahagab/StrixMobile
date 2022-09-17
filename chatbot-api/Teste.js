require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3000;

const assistant = new AssistantV1({
  username: '<lucasrpalinha@gmail.com>',
  password: '<Xuxuca123>',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2021-06-14',
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id:'<d70c9818-00c2-4966-9370-cc2b36841fa3>',
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
