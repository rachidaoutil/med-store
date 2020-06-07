const client = require('../models/client');
const creds = require('./store-d371f5e6839b.json');


const { GoogleSpreadsheet } = require('google-spreadsheet');
const {promisify} = require('util');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('137KDgpOGf_rJTlwvWUP-HH5UnZr2YOkHtIuhvUb0pJ8');


// Render home page
exports.index = (request, response) => {
  response.render('index', {
    env: process.env.NODE_ENV
  });
};


// Create a client
exports.create = async (request, response) => {
  console.log(request.body)
  
 // loads document properties and worksheets
  client.create({
    destinataire: request.body.Destinataire,
    ville:request.body.ville,
    telephone:request.body.telephone,
    adresse:request.body.Adresse,

  }).then((client) => {
    accessSpreadsheet({CODE_SUIVI:client.id, destinataire: request.body.Destinataire,
      email: request.body.email,
      ville:request.body.ville,
      telephone:request.body.telephone,
      adresse:request.body.Adresse});
    response.send(client);
  }).catch((error) => {
      console.log(error)
    response.status(500).send(error);
  });
};


async function accessSpreadsheet({CODE_SUIVI,
  destinataire,
  email,
  ville,
  telephone,
  adresse,

}) {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
// create a sheet and set the header row

// append rows
const larryRow = await sheet.addRow({ CODE_SUIVI: CODE_SUIVI,
                                   DESTINATAIRE: destinataire,
                                   TELEPHONE: telephone,
                                   ADRESSE: adresse,
                                   PRIX: 0,
                                  VILLE:ville});

  console.log(sheet.title);
  console.log(sheet.rowCount);

}


