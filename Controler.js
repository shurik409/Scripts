
function Update(){
if(Input.GetKey(KeyCode.W)){
transform.position = Vector3(transform.position.x+0.1, transform.position.y, transform.position.z);
}
if(Input.GetKey(KeyCode.S)){
transform.position = Vector3(transform.position.x-0.1, transform.position.y, transform.position.z);
}
if(Input.GetKey(KeyCode.A)){
transform.rotation.y+=0.1; 
}
if(Input.GetKey(KeyCode.D)){
transform.rotation.y-=0.1; 
}
}
