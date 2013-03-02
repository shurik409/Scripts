var i = 1;
var unscore = 10;

function Start(){}

function Update () {
i = PlayerPrefs.GetInt("CountK");
if(Input.GetKeyDown("1")){
i-=unscore;
}
PlayerPrefs.SetInt("CountK",i);
}