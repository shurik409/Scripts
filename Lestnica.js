function OnTriggerEnter (other : Collider) {
if(other.gameObject.tag == "Player"){
var player = other;
Press(player);

}
}

function Press(player : Collider) {
while(player.transform.position.y < transform.position.y){
yield WaitForSeconds(0.1);
player.transform.position.y += 0.6f;

}
}