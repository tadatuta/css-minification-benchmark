module.exports = function(options) {
  var head = options.head;
  var rows = [];

  var lineBreak = require('os').EOL;

  var tableRow = function(columns, tag) {

    var endTag = tag.replace(/^</, '</');
    var body = [];
    body.push('<tr>');
    columns.forEach(function(value) {
      if (typeof value == 'string') {
        body.push(tag + value + endTag);
      } else {
        if (value.value) {
          body.push(tag.replace('>', ' class="' + value.class + '">') + value.value + endTag);
        } else {
          var size = '<span class="label label-' + value.sizeClass + '">' + value.size + '</span>';
          var time = '<span class="label label-' + value.timeClass + '">' + value.time + '</span>';
          body.push(tag + size + '<br>' + time + endTag);
        }
      }
    });
    body.push('</tr>');
    return body.join(lineBreak);
  };

  var buildPage = function() {
    var page = [];
    page.push('<!doctype html>');
    page.push('<html lang="en">');
    page.push('<head>');
    page.push('<meta charset="utf-8">');
    page.push('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    page.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
    page.push('<title>css-minification-benchmark results</title>');
    page.push('<style>html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}a{background-color:transparent}a:active,a:hover{outline:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}thead{display:table-header-group}tr{page-break-inside:avoid}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}table{background-color:transparent}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>thead:first-child>tr:first-child>th{border-top:0}.table-condensed>tbody>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td{border-bottom:0}}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}.label-default{background-color:#777}.label-success{background-color:#5cb85c}.label-danger{background-color:#d9534f}@-ms-viewport{width:device-width}</style>');
    page.push('</head>');
    page.push('<body>');
    page.push('<div class="table-responsive">');
    page.push('<table class="table table-bordered table-condensed table-hover table-striped">');
    page.push('<thead>' + tableRow(head, '<th>') + '</thead>');
    page.push('<tbody>');
    rows.forEach(function(row) {
      page.push(tableRow(row, '<td>'));
    });
    page.push('</tbody>');
    page.push('</table>');
    page.push('</div>');
    page.push('</body>');
    page.push('</html>');
    return page.join(lineBreak);
  };

  return {
    push: function(row) {
      rows.push(row);
    },

    toString: function() {
      return buildPage();
    }
  };
};
