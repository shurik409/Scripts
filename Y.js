var guiskin : GUISkin;
var min = 10;
var max = 50;
var priblijenie=1;

function OnGUI(){
GUI.skin = guiskin;
if(GUI.Button(Rect(100,100,100,100),"приближение")){
if(transform.position.y>min){
transform.position = Vector3(transform.position.x, transform.position.y-priblijenie, transform.position.z);
}
}
if(GUI.Button(Rect(100,200,100,100),"отдаление")){
if(transform.position.y<max){
transform.position = Vector3(transform.position.x, transform.position.y+priblijenie, transform.position.z);
}
}
}