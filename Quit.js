var guiskin : GUISkin;
var level = 0;
var text = "";
var x1 = 10.0;
var x2 = 10.0;
var y1 = 10.0;
var y2 = 10.0;

 function OnGUI(){
GUI.skin = guiskin;
if(GUI.Button(Rect(Screen.width/x1,Screen.height/y1,x2,y2),text))
Application.Quit();
}