const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccountKey.json'); // ⬅️ Download from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<YOUR_PROJECT>.firebaseio.com', // 🔁 Replace with your Firebase URL
});

const db = admin.database();
module.exports = db;
