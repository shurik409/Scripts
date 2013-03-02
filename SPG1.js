
var position : Transform[];

var objectEasy :  GameObject[]; 
var numbersEasy = 10;

var objectNormal :  GameObject[]; 
var numbersNormal = 10;

var objectHard :  GameObject[]; 
var numbersHard = 10;

var objectBoss :  GameObject[]; 
var numbersBoss = 1;


var time = 2;

var vrema_mezdu_volnami = 30;


function Start(){
Spawn1();
}


function Spawn1 () {

for (i=0; i<numbersEasy; i++){

yield WaitForSeconds(time);  

var obj : GameObject = objectEasy[Random.Range(0, objectEasy.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);

}
yield WaitForSeconds(vrema_mezdu_volnami);
Spawn2();
}

function Spawn2 () {

for (i=0; i<numbersNormal; i++){

yield WaitForSeconds(time);  

var obj : GameObject = objectNormal[Random.Range(0, objectNormal.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);

}
yield WaitForSeconds(vrema_mezdu_volnami);
Spawn3();
}

function Spawn3 () {

for (i=0; i<numbersHard; i++){

yield WaitForSeconds(time);  

var obj : GameObject = objectHard[Random.Range(0, objectHard.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);

}
yield WaitForSeconds(vrema_mezdu_volnami);
Spawn4();
}

function Spawn4 () {

for (i=0; i<numbersBoss; i++){

yield WaitForSeconds(time);  

var obj : GameObject = objectBoss[Random.Range(0, objectBoss.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);

}

}
