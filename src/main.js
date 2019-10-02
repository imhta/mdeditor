$("textarea").after(`<div class="mdeditor-toolbar"></div>`);

var ele = `<button name="bold">B</button>
           <button name="italic"><i>I</i></button>
           <button name="strike"><s>S</s></button>
           <button name="h1">H1</button>
           <button name="h2">H2</button>
           <button name="h3">H3</button>
           <button name="unorderedlist">⚫</button>
           <button name="orderedlist">1.</button>
           <button name="checklist">✔</button>
           <button name="blockquote">""</button>
           <button name="inlinecode">I<></button>
           <button name="blockcode"><>B</button>
           <button name="link">A</button>
           `
$('.mdeditor-toolbar').append(ele)

$('.mdeditor-toolbar button').click(function () {
    alert($(this).attr('name'))
})