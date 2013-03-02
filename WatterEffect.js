var watterLevel : float;
private var bellow= false;
function Update(){
if(watterLevel<transform.position.y && bellow){
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled=false;
bellow=false;
}
if(watterLevel>transform.position.y && !bellow){
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled=true;
bellow=true;
}
}