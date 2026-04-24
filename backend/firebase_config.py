import os
import json
from firebase_admin import credentials, initialize_app

firebase_json = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS_JSON")

cred = credentials.Certificate(json.loads(firebase_json))
initialize_app(cred)
