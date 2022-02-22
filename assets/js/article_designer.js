function makeTextFile( text ) {
  var textFile = null;
  var data = new Blob( [text], {type:'text/html'} );
  if (textFile !== null) window.URL.revokeObjectURL(textFile);
  textFile = window.URL.createObjectURL(data);
  return textFile;
}
function saveTxt() {
  var d = new Date();
  var n = d.getTime();
  var t = document.getElementById('title').value;
  var t = t.toLowerCase();
  var tconv = t.replace(/\s+/g, '-');
  var content = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">  <link rel="stylesheet" href="https://media-sgnews.vercel.app/article-designer/scripts/default-style.css"><title>SG-News | ' + document.getElementById('title').value + ' </title></head><body><nav>' + tinymce.activeEditor.getContent() + '</body></html>'
  $('<a/>',{
    hidden: true,
    download: 'sg-news_'+tconv+'.html',
    href: makeTextFile( content )
  }).appendTo("body")[0].click();
}


//text editor

tinymce.init({
selector: 'textarea',
mobile: {
menubar: true
},
height: 550,
menubar: false,
plugins: [
'advlist autolink lists link image charmap print preview anchor imagetools template',
'searchreplace visualblocks code codesample fullscreen pagebreak importcss noneditable',
'insertdatetime media table paste code help wordcount pageembed tinymcespellchecker tinydrive'
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
menubar: 'file edit view insert format tools table tc help',
toolbar: 'undo redo | fontselect fontsizeselect formatselect | ' +
'bold italic forecolor backcolor | alignleft aligncenter ' +
'alignright alignjustify | bullist numlist table outdent indent pagebreak | ' +
'link image media pageembed template | ' +
'removeformat | charmap | fullscreen',
content_css: 'https://media-sgnews.vercel.app/article-designer/scripts/default-style.css',
content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
noneditable_noneditable_class: 'mceNonEditable',
tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
templates: [
{title: 'Website Artikel', description: 'Website Artikel', url: 'templates/web_article.html'},
{title: 'Druckvorlage Artikel', description: 'Druckvorlage Artikel', url: 'templates/print_article.html'},
]
});



//closeStart Dialog

const body = document.querySelector("body");

function closeStart() {
  body.classList.add("rmstart");
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