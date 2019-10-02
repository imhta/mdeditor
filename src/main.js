$("textarea").after(`<div class="mdeditor-toolbar"></div>`);
var ele = `<button type="button" name="bold">B</button>
           <button type="button" name="italic"><i>I</i></button>
           <button type="button" name="strike"><s>S</s></button>
           <button type="button" name="h1">H1</button>
           <button type="button" name="h2">H2</button>
           <button type="button" name="h3">H3</button>
           <button type="button" name="unorderedlist">⚫</button>
           <button type="button" name="orderedlist">1.</button>
           <button type="button" name="checklist">✔</button>
           <button type="button" name="blockquote">" "</button>
           <button type="button" name="inlinecode">I<></button>
           <button type="button" name="blockcode"><>B</button>
           <button type="button" name="link">A</button>
           `
$('.mdeditor-toolbar').append(ele)

$('.mdeditor-toolbar button').click(function () {
    switch($(this).attr('name')) {
      case 'bold':
        $('textarea').val(function() {return this.value + "**"})
        break;
    }
})