ace.require("ace/ext/language_tools");

var htmlEditor = ace.edit("htmlEditor");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setTheme("ace/theme/cloud_editor_dark");
htmlEditor.setShowPrintMargin(false);
htmlEditor.session.setTabSize(2);
htmlEditor.setOptions({
  fontSize: "10pt",
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});

var cssEditor = ace.edit("cssEditor");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setTheme("ace/theme/cloud_editor_dark");
cssEditor.setShowPrintMargin(false);
cssEditor.session.setTabSize(2);
cssEditor.setOptions({
  fontSize: "10pt",
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});

var jsEditor = ace.edit("jsEditor");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setTheme("ace/theme/cloud_editor_dark");
jsEditor.setShowPrintMargin(false);
jsEditor.session.setTabSize(2);
jsEditor.setOptions({
  fontSize: "10pt",
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});

function run() {
  document.querySelector('#outputWindow').innerHTML = '<iframe id="output"></iframe>';
  let output = document.getElementById("output").contentWindow.document;
  output.open();
  output.writeln(
    htmlEditor.getValue() +
    "<style>" +
    cssEditor.getValue() +
    "</style>" +
    "<script>" +
    jsEditor.getValue() +
    "</script>"
  );
  output.close();
}

function changeEditor(type) {
  if (type == 'html') {
    document.querySelector('#htmlEditorBtn').classList.add('selectedEditor');
    document.querySelector('#htmlEditor').style.display = 'block';
    document.querySelector('#cssEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#cssEditor').style.display = 'none';
    document.querySelector('#jsEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#jsEditor').style.display = 'none';
  }
  if (type == 'css') {
    document.querySelector('#htmlEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#htmlEditor').style.display = 'none';
    document.querySelector('#cssEditorBtn').classList.add('selectedEditor');
    document.querySelector('#cssEditor').style.display = 'block';
    document.querySelector('#jsEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#jsEditor').style.display = 'none';
  }
  if (type == 'js') {
    document.querySelector('#htmlEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#htmlEditor').style.display = 'none';
    document.querySelector('#cssEditorBtn').classList.remove('selectedEditor');
    document.querySelector('#cssEditor').style.display = 'none';
    document.querySelector('#jsEditorBtn').classList.add('selectedEditor');
    document.querySelector('#jsEditor').style.display = 'block';
  }
}