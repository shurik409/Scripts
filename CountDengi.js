var LevelCount : GUIText;
var LevelText = "";
var LevelInt = 0;

function Start(){
PlayerPrefs.SetInt("CountD",LevelInt);
}

function Update(){
LevelInt = PlayerPrefs.GetInt("CountD");
LevelText = LevelInt.ToString();
LevelCount.text=LevelText;
}
