var object : GameObject[];
var position : Transform[];
var numbers = 10;
var time=2;

function Start(){
Spawn();
}

function Spawn(){
for(i=0;i<numbers;i++){
yield WaitForSeconds(time);
var obj : GameObject=object[Random.Range(0,object.length)];
var pos : Transform=position[Random.Range(0,position.length)];
Instantiate(obj,pos.position,pos.rotation);
}
}