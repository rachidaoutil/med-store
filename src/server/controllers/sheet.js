// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const creds = require('./client_secret.json');
// const {promisify} = require('util')

// // spreadsheet key is the long id in the sheets URL
// const doc = new GoogleSpreadsheet('1DWm-FZPJRf_Qtq-hX_R5H3oVqoYCZiBG2e9IkVHQ--M');

// async function accessSpreadsheet() {
//     await doc.useServiceAccountAuth({
//       client_email: creds.client_email,
//       private_key: creds.private_key,
//     });
  
//     await doc.loadInfo(); // loads document properties and worksheets
//     console.log(doc.title);
  
//     const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
//  // create a sheet and set the header row

// // append rows
// const larryRow = await sheet.addRow({ CODE_SUIVI: 'Larry Page',
//                                      DESTINATAIRE: 'larry@google.com',
//                                      TELEPHONE: 'larry@google.com',
//                                      ADRESSE: 'larry@google.com',
//                                      PRIX: 'larry@google.com',
//                                     VILLE:'XXXX'});

//     console.log(sheet.title);
//     console.log(sheet.rowCount);
  
//   }
  
//   accessSpreadsheet();