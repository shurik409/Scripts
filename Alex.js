function OnTriggerStay(other : Collider){

if(Input.GetKeyDown(KeyCode.E)){
if(Screen.showCursor == false &&
Screen.lockCursor == true &&
GameObject.Find("Main Camera").GetComponent("MouseLook").enabled == true &&
GameObject.Find("Player").GetComponent("MouseLook").enabled == true){

mouse_on();

} else if(Input.GetKeyDown(KeyCode.E) ){

mouse_off();
}
}
}

function mouse_on(){
Screen.showCursor = true;
Screen.lockCursor = false;
GameObject.Find("Main Camera").GetComponent("MouseLook").enabled = false;
GameObject.Find("Player").GetComponent("MouseLook").enabled = false;
}

function mouse_off(){
Screen.showCursor = false;
Screen.lockCursor = true;
GameObject.Find("Main Camera").GetComponent("MouseLook").enabled = true;
GameObject.Find("Player").GetComponent("MouseLook").enabled = true;
}