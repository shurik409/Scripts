var ship : GameObject;

function OnTriggerEnter(other : Collider){
if(other.tag=="Player"){
ship.destroy();
}
}