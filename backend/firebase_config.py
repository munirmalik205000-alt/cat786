import firebase_admin
from firebase_admin import credentials, db
import os

cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': "https://ridabest786-default-rtdb.firebaseio.com"
})
