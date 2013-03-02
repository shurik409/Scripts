var level = 0 ;



function OnTriggerEnter(col:Collider){
if(col.tag == "Player"){

Application.LoadLevel(level);
}
}
   