var lift : GameObject;
var time = 1.0;

function OnTriggerStay(other : Collider){
if (other.tag=="Player"){

if (Input.GetKeyDown("1")){
yield WaitForSeconds(time);
lift.transform.Translate(Vector3.up*1);

}
}
if(Input.GetKeyDown("2")){
lift.transform.Translate(Vector3.down*1);
}
}


