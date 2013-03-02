var position : Transform[];
var object : GameObject;
public var numbers : float = 1;
var time = 2.0;
var time2 : float = 60.0;
private var Infobox : boolean = false;
public var dooble : float = 1;
public var mySkin : GUISkin;

function Start(){
Spawn();
}


function Update(){
if(numbers < 1) {
numbers=dooble;
Spawn();
}
}

function geros(g : float){
numbers -=g;
}

function caput(c : float){
dooble +=c;
if(dooble > 12){
dooble = 12;
}
}


function Spawn () {
Infobox = true;
yield WaitForSeconds(time2);
Infobox = false;
for (i=0; i<numbers; i++){
yield WaitForSeconds(time);
var obj =  Instantiate(object,position[0].position, Quaternion.identity);
}
}

function OnGUI(){
GUI.skin = mySkin;
if(Infobox){
GUI.Label(Rect(400,0,200,200),"Перерыв");
}
}




