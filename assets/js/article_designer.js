function makeTextFile( text ) {
  var textFile = null;
  var data = new Blob( [text], {type:'text/html'} );
  if (textFile !== null) window.URL.revokeObjectURL(textFile);
  textFile = window.URL.createObjectURL(data);
  return textFile;
}
gzfuiedgfjergtuzrtggejktzerhtg = "juVgnE55AdJiWvZ";
function generateFileName(hametag) {
  var t = hametag.value;
  var t = t.toLowerCase();
  tconv = t.replace(/\s+/g, '-');
  tconv = 'sg-news_'+tconv+'.html';
}
function saveTxt() {
  generateFileName(document.getElementById('title'))
  var content = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">  <link rel="stylesheet" href="https://media-sgnews.vercel.app/article-designer/scripts/default-style.css"><title>SG-News | ' + document.getElementById('title').value + ' </title></head><body><nav>' + tinymce.activeEditor.getContent() + '</body></html>'
  $('<a/>',{
    hidden: true,
    download: tconv,
    href: makeTextFile( content )
  }).appendTo("body")[0].click();
}



//upload file

document.getElementById('inputFile').addEventListener('change', function() {
  var file = new FileReader();
  file.onload = () => {
    tinymce.get("editor").setContent(file.result);
  }
  file.readAsText(this.files[0]);
});




//Submit form

$(document).ready(function() {
  $("#tfoot").hide();
      $("select").change(function() {
          if ($("select option:nth(1)").is(":selected")) {
              $("#tfoot").show();
          } else {
              $("#tfoot").hide();
          }
      });
  });

  function submitArticle() {
    if (document.getElementById('titthsdfgskjfgs').value == gzfuiedgfjergtuzrtggejktzerhtg){
        document.getElementById('submitarticles').submit(); 
    } else {
      alert("Ooops! Something went wrong...")
      }
  }

function ChangeURL() {
  generateFileName(document.getElementById('tittlleee'))
  document.getElementById('FormURL').value = "http://www.stadtgymnasium-detmold.de/fileadmin/html/" + tconv
}




//text editor

tinymce.init({
selector: 'textarea#editor',
mobile: {
menubar: true
},
height: 550,
menubar: false,
plugins: [
'advlist autolink lists link image charmap print preview anchor imagetools template',
'searchreplace visualblocks code codesample fullscreen pagebreak importcss noneditable',
'insertdatetime media table paste code help wordcount'  //tinydrive -> irgendwann mal
],
codesample_languages: [
  {text: 'HTML/XML', value: 'markup'},
  {text: 'JavaScript', value: 'javascript'},
  {text: 'CSS', value: 'css'},
  {text: 'PHP', value: 'php'},
  {text: 'Ruby', value: 'ruby'},
  {text: 'Python', value: 'python'},
  {text: 'Java', value: 'java'},
  {text: 'C', value: 'c'},
  {text: 'C#', value: 'csharp'},
  {text: 'C++', value: 'cpp'}
],
menubar: 'file edit view insert format tools table tc help ',
toolbar: 'undo redo | fontselect fontsizeselect formatselect | ' +
'bold italic forecolor backcolor | alignleft aligncenter ' +
'alignright alignjustify | bullist numlist table outdent indent pagebreak | ' +
'link image media template | ' +
'removeformat | charmap | fullscreen ',
content_css: 'https://media-sgnews.vercel.app/article-designer/scripts/default-style.css',
content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
noneditable_noneditable_class: 'mceNonEditable',
templates: [
{title: 'Website Artikel', description: 'Website Artikel', url: 'templates/web_article.html'},
{title: 'Druckvorlage Artikel', description: 'Druckvorlage Artikel', url: 'templates/print_article.html'},
],
setup: function (editor) {
  var isAnchorElement = function (node) {
    return node.nodeName.toLowerCase() === 'a' && node.href;
  };

  var getAnchorElement = function () {
    var node = editor.selection.getNode();
    return isAnchorElement(node) ? node : null;
  };

  editor.ui.registry.addContextForm('link-form', {
    launch: {
      type: 'contextformtogglebutton',
      icon: 'link'
    },
    label: 'Link',
    predicate: isAnchorElement,
    initValue: function () {
      var elm = getAnchorElement();
      return !!elm ? elm.href : '';
    },
    commands: [
      {
        type: 'contextformtogglebutton',
        icon: 'link',
        tooltip: 'Link',
        primary: true,
        onSetup: function (buttonApi) {
          buttonApi.setActive(!!getAnchorElement());
          var nodeChangeHandler = function () {
            buttonApi.setActive(!editor.readonly && !!getAnchorElement());
          };
          editor.on('nodechange', nodeChangeHandler);
          return function () {
            editor.off('nodechange', nodeChangeHandler);
          }
        },
        onAction: function (formApi) {
          var value = formApi.getValue();
          console.log('Save link clicked with value: ' + value);
          formApi.hide();
        }
      },
      {
        type: 'contextformtogglebutton',
        icon: 'unlink',
        tooltip: 'Remove link',
        active: false,
        onAction: function (formApi) {
          console.log('Remove link clicked');
          formApi.hide();
        }
      }
    ]
  });
},
content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});



//closeStart Dialog

function closeStart() {
  document.querySelector("body").classList.add("rmstart");
}

function openRegister() {
  var textinput = tinymce.activeEditor.getContent()
  document.getElementById('titthsdfgskjfgs').value = textinput
  document.querySelector("body").classList.toggle("addRegister");
}





// import article
/*
let input = document.querySelector('input.fileupload')
let textarea = document.querySelector('textarea')

input.addEventListener('change', () => {
  let files = input.files;

  if (files.length == 0) return;
  const file = files[0];

  let reader = new FileReader();

  reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      textarea.value = lines.join('\n');
  };

  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});*/