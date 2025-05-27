var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountBizhub.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const firebaseAdmin = admin;