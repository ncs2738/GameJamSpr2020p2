const http = require('http');
const url = require('url');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': responseHandler.getIndex,
  '/styles.css': responseHandler.getCSS,
  '/notFound': responseHandler.notFound,
  index: responseHandler.getIndex,
  notFound: responseHandler.notFound,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const acceptedTypes = request.headers.accept.split(',');

  console.log(urlStruct[parsedUrl.pathname]);

  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, acceptedTypes, request.url);
  }
};
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
