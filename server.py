from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)


@app.route("/")
def main():
    return "HELLO"

@app.route("/hello")
def hello():
    return "Hello From Server"

@app.route("/image_upload", methods=['GET', 'POST'])
def upload_image():
    print("Request Object: " + request.method)
    f = request.files['my_image']
    f.save(secure_filename(f.filename))
    return 'image route'


if __name__ == "__main__":
    app.run(ssl_context='adhoc')
