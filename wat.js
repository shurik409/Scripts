var kamera : Camera;

function OnTriggerStay (col : Collider){
if(col.tag=="Water"){
kamera.GetComponent(ColorCorrectionCurves).enabled=true;
}
}

function OnTriggerExit (col : Collider){
if(col.tag=="Water"){
kamera.GetComponent(ColorCorrectionCurves).enabled=false;
}
}