var nadpis :  GUIText;
var NText = "";
var anim : AnimationClip;
var objectanim : GameObject;
var samGui : GameObject;
var TimeDestroy = 10.0;

function OnTriggerStay(other : Collider){
if(other.tag=="Player"){
samGui.active=true;
nadpis.text = NText;
if( Input.GetKeyDown(KeyCode.E)){
objectanim.animation.clip=anim;
objectanim.animation.Play();
}
}
}
function OnTriggerExit(other : Collider){
if(other.tag=="Player"){
samGui.active=false;
nadpis.text = NText;
yield WaitForSeconds(TimeDestroy);
Destroy(GameObject.Find("A"));
}
}

                  