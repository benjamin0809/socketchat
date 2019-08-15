var xss = require("xss");
var html = xss('v');
console.log(html);


function escapeHtml(html) {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
 
escapeHtml(html)

console.log(escapeHtml(html)); 