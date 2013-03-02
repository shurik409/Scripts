var kristal : GameObject;
var i = 1;
var k = 1;
var d =0;
var maxLevel1 = 100;
var score = 10;
var dengi = 10;

function Start(){}
function Update(){
i = PlayerPrefs.GetInt("CountK");
k = PlayerPrefs.GetInt("CountL");
d=PlayerPrefs.GetInt("CountD");
if(k==0){
k+=1;
PlayerPrefs.SetInt("CountL",k);
}
}

function OnTriggerEnter(col : Collider) {
if(col.tag =="Kristal"){
i+=score;
PlayerPrefs.SetInt("CountK",i);
d+=dengi;
PlayerPrefs.SetInt("CountD",d);
col.tag ="Kristal1";
Destroy( GameObject.FindGameObjectWithTag("Kristal1"));
}
if(col.tag =="KristalR"){
i-=score;
PlayerPrefs.SetInt("CountK",i);
col.tag ="Kristal1";
Destroy( GameObject.FindGameObjectWithTag("Kristal1"));
}
if(i==maxLevel1&&maxLevel1==100){
k=k+1;
PlayerPrefs.SetInt("CountL",k);
maxLevel1=maxLevel1+200;
}
if(i==maxLevel1&&maxLevel1==300){
k=k+1;
PlayerPrefs.SetInt("CountL",k);
maxLevel1=maxLevel1+200;
}
if(i==maxLevel1&&maxLevel1==500){
k=k+1;
PlayerPrefs.SetInt("CountL",k);
maxLevel1=maxLevel1+500;
}
}
