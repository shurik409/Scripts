var text: GameObject;
var text2: GameObject;
function OnTriggerStay(other : Collider){
if(other.tag=="Player"){
text.active=true;
text2.active=true;

}
}

function OnTriggerExit(other : Collider){
if(other.tag=="Player"){
text.active=false;
text2.active=false;

}
}