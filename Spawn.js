var position : Transform[];
var Textf : GUIText;
var object : GameObject;
var numbers = 0;
var time = 2.0;


function Update () {
 Spawn();
}
function Spawn () {

for (i=0; i<numbers; i++){
yield WaitForSeconds(time);
var obj1 =  Instantiate(object,position[0].position, Quaternion.identity);
var obj2 =  Instantiate(object,position[1].position, Quaternion.identity);
}
}

