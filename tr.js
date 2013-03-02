var level = 0 ;
var schet = 470;


function OnTriggerEnter(col:Collider){
if(col.tag == "Player"){
if(schet == PlayerPrefs.GetInt("CountK")){
Application.LoadLevel(level);
}
}
}   