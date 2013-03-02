var LevelCount : GUIText;
var LevelText = "";
var LevelInt = 0;

function Start(){
PlayerPrefs.SetInt("CountL",LevelInt);
}

function Update(){
LevelInt = PlayerPrefs.GetInt("CountL");
LevelText = LevelInt.ToString();
LevelCount.text=LevelText;
}
