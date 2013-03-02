var i = 1;
var score = 1;
var min =1;
var max= 100;
var LevelCount : GUIText;
var LevelText = "";
var LevelInt = 0;

function Start(){
PlayerPrefs.SetInt("CountN",LevelInt);
}
function Update(){
i = PlayerPrefs.GetInt("CountN");
if(Input.GetKeyDown(KeyCode.E)){
i+=score;
PlayerPrefs.SetInt("CountN",i);
}
if(Input.GetKeyDown(KeyCode.G)){
if(i==min || i>min){
i-=score;
PlayerPrefs.SetInt("CountN",i);
}
}
LevelInt = PlayerPrefs.GetInt("CountN");
LevelText = LevelInt.ToString();
LevelCount.text=LevelText;
}
