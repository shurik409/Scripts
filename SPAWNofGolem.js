var k=false;
var buttonRect : Rect = Rect(100,175,50,50);
var buttonRect2 : Rect = Rect(245,125,50,50);
var s=false;

var positios : Transform;
var object : GameObject;
var numbers = 0;
var time = 2.0;

var n =0;
var r = false;

function OnTriggerEnter(other : Collider){
if(other.tag =="Player"){
k=true;
}
}

function OnGUI(){
if(k){
GUI.Box(Rect(100,100,300,100),"");

if(GUI.Button(buttonRect,"Да")){
s=true;
}
if(GUI.Button(buttonRect2,"Нет")){
k=false;
}
}
}

function Update(){
if(n<1){
r=true;

}
if(n>9){
r=false;
}
}




function Spawn(){
if(r){

Debug.Log ("Hello");
  Instantiate(object,positios.position,positios.rotation);
 n+=1;
 
Spawn2();
   

}
}

function Spawn2(){
if(r){
Debug.Log ("Hello");
 Instantiate(object,positios.position,positios.rotation);
 n+=1;
 
Spawn();
}
}