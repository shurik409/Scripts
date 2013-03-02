var maximumHitPoints = 100.0;
var hitPoints = 0;
var Level = 0;
var healthGUI : GUITexture;
private var healthGUIWidth = 0.0;

function Start(){
PlayerPrefs.SetInt("CountK",hitPoints);
PlayerPrefs.SetInt("CountL",Level);
}

function Update(){
Level = PlayerPrefs.GetInt("CountL");
hitPoints =PlayerPrefs.GetInt("CountK");
if(Level==2&&maximumHitPoints==100){
maximumHitPoints=maximumHitPoints+200;
}
if(Level==3&maximumHitPoints==300){
maximumHitPoints=maximumHitPoints+200;
}
if(Level==4&maximumHitPoints==500){
maximumHitPoints=maximumHitPoints+500;
}
}

function Awake () {
	healthGUIWidth = healthGUI.pixelInset.width;
}

function OnGUI () {
	var healthFraction = Mathf.Clamp01(hitPoints / maximumHitPoints);
	healthGUI.pixelInset.xMax = healthGUI.pixelInset.xMin + healthGUIWidth * healthFraction;
}