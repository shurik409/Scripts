var camerak : GameObject;
var time = 3.0;


function OnTriggerEnter (other : Collider){
if(other.tag =="Player"){
camerak.GetComponent(Camera).enabled=true;
yield WaitForSeconds(time);
camerak.GetComponent(Camera).enabled=false;
}
}