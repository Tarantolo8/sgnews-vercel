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
    var style = '*{ transition: .14s; } body{ padding: 10px; font-family: Arial, Helvetica, sans-serif; text-align: center; padding: 20px; color: #000; } a{color: #095fef;} a:hover{text-decoration: none;} nav button{ position: fixed; left: 60px; top: 30px; } nav iframe{ position: fixed; right: 60px; top: 10px; width: 150px; height: 150px; pointer-events: none; border: none; } nav button{ font-size: 20px; color: #fff; background-color: #000; padding: 10px; border-radius: 15px; text-decoration: none; cursor: pointer; border: none; } nav button:hover{ opacity: .8; } nav button:active{ opacity: .6; } div{ text-align: center; } p{ display: inline-block; width: 600px; min-width: 55vw; text-align: justify; max-width: 80vw; font-size: 14px; } img{width: auto; width: 600px; max-width: 80vw; min-width: 55vw; border-radius: 20px; } div.dia li{ margin: 10px 0; display: inline-block; max-width: 80vw; text-align: center;} div.dia div.line{  height: 3px; border-radius: 3px; background-color: #c4c4c4; }  canvas{ width: 40vw; } @media (max-width: 1173px) { nav iframe{ display: none; } nav button{ position: relative; top: 0px; left: 0; } canvas{ width: 80vw; } }'
    var content = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SG-News | ' + document.getElementById('title').value + ' </title><style>'+ style +'</style></head><body><nav>' + tinymce.activeEditor.getContent() + '</body></html>'
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
content_css: '/assets/css/article_designer_default.css',
content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
noneditable_noneditable_class: 'mceNonEditable',
tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
templates: [
  {title: 'Website Artikel', description: 'Website Artikel', url: 'templates/web_article.html'},
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