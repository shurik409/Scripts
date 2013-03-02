var KristalCount : GUIText;
var KristalText = "";
var KristalInt = 0;

function Start(){
PlayerPrefs.SetInt("CountK",KristalInt);
}

function Update(){
KristalInt = PlayerPrefs.GetInt("CountK");
KristalText = KristalInt.ToString();
KristalCount.text=KristalText;
}
