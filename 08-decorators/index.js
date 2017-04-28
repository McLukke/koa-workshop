
var koa = require('koa');
var escape = require('escape-html');

var app = module.exports = koa();

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
 }

app.use(function* (next) {
  yield next;
  // add some logic here!

  this.body = escapeHtml(this.body);
})

app.use(function* body() {
  this.response.body = 'this following HTML should be escaped: <p>hi!</p>';
});
