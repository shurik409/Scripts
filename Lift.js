var lift : GameObject;
var time = 0.1;
var numbers = 300;

function OnTriggerEnter(other : Collider) {
if(other.tag =="Player"){
if(Input.GetKeyDown("1")){
for (i=0; i<numbers; i++){
yield WaitForSeconds(time);
 lift.transform.Translate(0, 0.1, 0 );
}
}
if(Input.GetKeyDown("2")){
for (i=0; i<numbers; i++){
yield WaitForSeconds(time);
 lift.transform.Translate(0, -0.1, 0 );
}
}
}
}