
import * as admin from 'firebase-admin'
import * as serviceAccount from '../../admin.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true })

export{db,admin}