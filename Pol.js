var pol : GameObject;
var lest : GameObject;
var time = 0.1;

function OnTriggerStay(other : Collider){
if(other.tag=="Player"){
if(Input.GetKey(KeyCode.H)){
if(Input.GetKeyDown(KeyCode.H)){

pol.active=true;

lest.active=true;
}
}
}
}