var kamera : GameObject;

function OnTriggerStay(other : Collider){
if(other.tag == "Player"){
kamera.GetComponent(ColorCorrectionCurves).enabled = true;
}
}

function OnTriggerExit(other : Collider){
if(other.tag == "Player"){
kamera.GetComponent(ColorCorrectionCurves).enabled = false;
}
}