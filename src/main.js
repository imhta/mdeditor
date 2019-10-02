
var $curFocusEle = ""
$( "textarea" ).focus(function () {
  $('#mdeditor-toolbar').remove()
  $(this).after(`<div id="mdeditor-toolbar"></div>`)
  });

