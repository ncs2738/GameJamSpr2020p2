const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/login.html`);
const css = fs.readFileSync(`${__dirname}/../css/styles.css`);

const getResponse = (request, response, statusCode, contentType, content) => {
  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.write(content);
  response.end();
};

const getIndex = (request, response) => {
  getResponse(request, response, 200, 'text/html', index);
};

const getCSS = (request, response) => {
  getResponse(request, response, 200, 'text/css', css);
};

const notFound = (request, response, acceptedTypes) => {
  const responseObj = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  getResponse(request, response, acceptedTypes, responseObj, 404);
};

module.exports = {
  getIndex,
  getCSS,
  notFound,
};
