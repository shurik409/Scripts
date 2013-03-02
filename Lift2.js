
var svet : GameObject;
var objd : GameObject;

function OnTriggerStay(other : Collider){
if(other.tag=="Player"){
svet.GetComponent(Light).enabled=true;
objd.active = true;
lol();
}
}

function lol(){
GetComponent(AudioSource).enabled = true;
}

