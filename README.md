## Instructions

You are required to build a single page application that allows user to add text and image into canvas. Below are the specification for the application:

- user can add, edit and remove text from canvas
- user can upload image to images list
- user can move image and text around canvas.

You will be given a HTML file with simple structure, and a server that allows you to upload and retrieve image. Instruction on how to run the server is included.

Feel free to create multiple JS files, to showcase your best design pattern of JS structure that is easy to understand for team collaboration. You are encouraged to use only pure JavaScript. If your design pattern needed a library, you are allowed to do so given a good reason. Try finishing this test in **one day** and send it back to us. If you are not able to finish, do send us whatever you have done, we will evaluate accordingly.

**Key Points**

- app should works as the specification required
- code and flow should be properly documented
- code present good structure, design pattern and modular

**Bonus Points**

- code written in functional and reactive way
- build automated test for the app

To submit your answer, kindly send us the private link to your version control repository (Github, Bitbucket, etc) and make sure it's only shared for us. It will be great for us to see your code changes. If you don't have one, please zip your working folder with the name `<your name>-piktojstest`. The folder should contain everything we sent to you, plus whatever file(s) you created (and .git folder if you use git locally).

In addition, you could provide a `readme.md` to describe your design pattern or anything you wish to let us know. Have fun programming 😊


## To set up the environment dependencies ( node version 5++ )
```
$ npm install
```

## To run the node server

```
$ npm run start
```

Server is listening to port `8000`

## Instruction on file upload

## routes

#### get uploaded images
```
/images
```

#### upload image to server
```
/uploads
```


Note:

1. To allow file uploaded to node server, your `httprequest content type` has to be `multipart/form-data`
2. The server only accepts `png` and `jpeg` file format
