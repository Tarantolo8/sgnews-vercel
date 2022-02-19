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
    var t = document.getElementById('title');
    var style = '*{ transition: .14s; } body{ padding: 10px; font-family: Arial, Helvetica, sans-serif; text-align: center; padding: 20px; } nav button{ position: fixed; left: 60px; top: 30px; } nav iframe{ position: fixed; right: 60px; top: 10px; width: 150px; height: 150px; pointer-events: none; border: none; } nav button{ font-size: 20px; color: #fff; background-color: #000; padding: 10px; border-radius: 15px; text-decoration: none; cursor: pointer; border: none; } nav button:hover{ opacity: .8; } nav button:active{ opacity: .6; } div{ text-align: center; } p{ display: inline-block; width: 600px; min-width: 55vw; text-align: justify; max-width: 80vw; } a{ color: #3598db } a:hover{ text-decoration: none; } img{ border-radius: 20px; width: auto; width: 600px; max-width: 80vw; min-width: 55vw; } div.dia li{ margin: 10px 0; display: inline-block; max-width: 80vw; text-align: center;} div.dia div.line{  height: 3px; border-radius: 3px; background-color: #c4c4c4; }  canvas{ width: 40vw; } @media (max-width: 1173px) { nav svg{ display: none; } nav button{ position: relative; top: 0px; left: 0; } canvas{ width: 80vw; } }'
    var content = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SG-News | ' + document.getElementById('title').value + ' </title><style>'+ style +'</style></head><body><nav><button onclick="window.history.back();">Zurück</button><iframe src="https://sgnews.vercel.app/assets/img/SG_News_logo_animated.svg"></iframe></nav><div class="title">' + tinymce.activeEditor.getContent() + '</body></html>'
    $('<a/>',{
      hidden: true,
      download: 'sg-news_'+t.value+'.html',
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
  'advlist autolink lists link image charmap print preview anchor imagetools',
  'searchreplace visualblocks code codesample fullscreen pagebreak',
  'insertdatetime media table paste code help wordcount pageembed tinymcespellchecker'
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
'link image media pageembed | ' +
'removeformat | charmap | fullscreen',
content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});



  //closeStart Dialog

  const body = document.querySelector("body");

  function closeStart() {
    body.classList.add("rmstart");
  }