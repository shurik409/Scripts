var level = 0;
var text = "";
var x1 = 10.0;
var x2 = 10.0;
var y1 = 10.0;
var y2 = 10.0;
function OnMouseUp(){
if(GUI.Button(Rect(Screen.height/x1,Screen.width/y1,x2,y2),text)){
lol();
}
}
function lol(){
Application.LoadLevel(0);
}
