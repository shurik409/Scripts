var guiskin : GUISkin;
var level = 0;
var text = "";
var text2 = "";
var guiButonX1=10.0;
var guiButonY1=10.0;
var guiButonX2=10.0;
var guiButonY2=10.0;
 var dengi = 0;
 var undengi=10;

function Start(){
PlayerPrefs.SetInt("CountD",dengi);
}

 function OnGUI(){
GUI.skin = guiskin;
if(GUI.Button(Rect(Screen.width/3,Screen.height/8,36,36),text)){
dengi=PlayerPrefs.GetInt("CountD");
dengi-=undengi;
PlayerPrefs.SetInt("CountD",dengi);
}
GUI.Button(Rect(Screen.width/3,Screen.height/2.38,36,36),text);
GUI.Button(Rect(Screen.width/2.5,Screen.height/8,36,36),text);
GUI.Button(Rect(Screen.width/2.1,Screen.height/8,36,36),text);
GUI.Button(Rect(Screen.width/2.5,Screen.height/3.07,36,36),text);
GUI.Button(Rect(Screen.width/2.1,Screen.height/3.07,36,36),text);
GUI.Button(Rect(Screen.width/3,Screen.height/3.07,36,36),text);
GUI.Button(Rect(Screen.width/3,Screen.height/4.5,36,36),text);
GUI.Button(Rect(Screen.width/2.5,Screen.height/4.5,36,36),text);
GUI.Button(Rect(Screen.width/2.1,Screen.height/4.5,36,36),text);

GUI.Box(Rect(Screen.width/3.17,Screen.height/10,187.4,256.3),text2);
}