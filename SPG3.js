var script1 : GameObject;
var script2 : GameObject;
var position : Transform[];
var objectEasy :  GameObject[]; 
var numbers = 100000000;
var numbers2 = 8;
var time = 2.0;

var k=0;
var n=0;

var s : boolean = false;

var vrema_mezdu_volnami = 30;

function Start(){
Spawn1();
}

function Update(){
if(k==numbers2){
s=true;
}
if(s){
k=0;

//script1 .active = false;
//script2 .active = true;
//numbers2+=2;
//s=false;
}
}

function Spawn1 () {
if(!s){
for (i=0; i<numbers; i++){

yield WaitForSeconds(time);  

var obj : GameObject = objectEasy[Random.Range(0, objectEasy.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);

k+=1;
}
}
}