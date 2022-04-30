
module.exports = function (selection) {


  const text1 = selection;

  //const out9 = text1.split('').reverse().join('');
  const out9 = text1.replace(/a/gi,'oo')

  //var v=require('vscode')
  //v.window.activeTextEditor.selection.end
  ///////////x=v.env.clipboard.readText() MUSIS AWAIT?
  /////v.env.console.log(875454)
  //v.env.appName
  // selection is a string containing:
  // 1. the current text selection
  // 2. the entire contents of the active editor when nothing is selected
  ///console.log(4545)
  ///debugger;

  return out9
  //return selection+selection;
  //return v.env.appName
  //////////return x;


};