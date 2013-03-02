var LevelCount : GUIText;
var LevelText = "";
var LevelInt = 0;

function Start(){
PlayerPrefs.SetInt("CountN",LevelInt);
}

function Update(){
LevelInt = PlayerPrefs.GetInt("CountN");
LevelText = LevelInt.ToString();
LevelCount.text=LevelText;
}
