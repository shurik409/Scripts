var sendText : String;

function OnTriggerEnter (unit : Collider) {
if(unit.gameObject.tag == "Player"){
GameObject.Find("Text").SendMessage("ChangeText",sendText);
}
}