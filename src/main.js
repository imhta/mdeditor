$("textarea").after(`<div class="mdeditor-toolbar"></div>`)
var ele = ` <a name="bold">B</ a>
            <a name="italic"><i>I</i></ a>
            <a name="strike"><s>S</s></ a>
            <a name="h1">H1</ a>
            <a name="h2">H2</ a>
            <a name="h3">H3</ a>
            <a name="ul">⚫</ a>
            <a name="ol">1.</ a>
            <a name="check">✔</ a>
            <a name="bq">" "</ a>
            <a name="ic">I<></ a>
            <a name="bc"><>B</ a>
            <a name="link">A</ a>
            <a name="image">I</ a>
            <a name="hr">——</ a>
            <a name="table">⚏</ a>
           `
$('.mdeditor-toolbar').append(ele)

$('.mdeditor-toolbar a').click(function (e) {
   e.preventDefault()
    let $myField = $('textarea')
    let myValueBefore
    let myValueAfter

    switch($(this).attr('name')) {
        case 'bold':
          myValueBefore = '**'
          myValueAfter = '**'
          break
        case 'italic':
          myValueBefore = '*'
          myValueAfter = '*'
          break
        case 'strike':
          myValueBefore = '~'
          myValueAfter = '~'
          break
        case 'h1':
          myValueBefore = '# '
          myValueAfter = ''
          break
        case 'h2':
          myValueBefore = '## '
          myValueAfter = ''
          break
        case 'h3':
          myValueBefore = '### '
          myValueAfter = ''
          break
        case 'bq':
          myValueBefore = '> '
          myValueAfter = ''
          break
        case 'ol':
          myValueBefore = '1. '
          myValueAfter = ''
          break
        case 'ul':
          myValueBefore = '- '
          myValueAfter = ''
          break
        case 'code':
          myValueBefore = '```'
          myValueAfter = '```'
          break
        case 'link':
          myValueBefore = '['
          myValueAfter = ']()'
          break
        case 'check':
          myValueBefore = '- [x] '
          myValueAfter = ''
          break
        case 'image':
          myValueBefore = '![alt text](image.jpg)'
          myValueAfter = ''
          break
        case 'hr':
          myValueBefore = '---\n'
          myValueAfter = ''
          break
        case 'table':
          myValueBefore = '| Header | Title |\n| ----------- | ----------- |\n| Paragraph | Text |\n'
          myValueAfter = ''
          break
    }

    if (document.selection) {
      $myField.focus()
      document.selection.createRange().text = myValueBefore + document.selection.createRange().text + myValueAfter
    } else if ($myField[0].selectionStart || $myField[0].selectionStart == '0') {
      let startPos = $myField[0].selectionStart
      let endPos = $myField[0].selectionEnd
      $myField[0].value = $myField[0].value.substring(0, startPos) + myValueBefore + $myField[0].value.substring(startPos, endPos) + myValueAfter + $myField[0].value.substring(endPos, $myField[0].value.length)
      $myField[0].selectionStart = startPos + myValueBefore.length
      $myField[0].selectionEnd = endPos + myValueBefore.length
      $myField.focus()
    }
})