function OnTriggerStay(other : Collider){
if(other.tag == "Player"){
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled=true;
}
}
function OnTriggerExit(other : Collider){
if(other.tag == "Player"){
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled=false;
}
}