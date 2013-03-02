var i = 1;
var score = 10;
var min =0;
var max= 100;

function Start(){}
function Update(){
i = PlayerPrefs.GetInt("CountK");
}

function OnTriggerEnter(col : Collider) {
if(col.tag =="Kristal"){
if(i<=max-score){
i+=score;
if(i>max){
i=max;
}
PlayerPrefs.SetInt("CountK",i);
col.tag ="Kristal1";
Destroy( GameObject.FindGameObjectWithTag("Kristal1"));
}
}
if(col.tag =="KristalR"){
if(i>=min+score){
i-=score;
if(i<min){
i=min;
}
PlayerPrefs.SetInt("CountK",i);
col.tag ="Kristal1";
Destroy( GameObject.FindGameObjectWithTag("Kristal1"));
}
}
}
