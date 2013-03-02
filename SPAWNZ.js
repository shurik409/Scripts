var position: Transform[];

var Zombi1 : GameObject;
var Zombi2 : GameObject;
var Zombi3 : GameObject;

var time = 30;
var time2 = 2;
var numbers =2;

function Start(){
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj =  Instantiate(Zombi1,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj15 =  Instantiate(Zombi1,position[0].position, Quaternion.identity);
}numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj1 =  Instantiate(Zombi1,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj2 =  Instantiate(Zombi1,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj3 =  Instantiate(Zombi1,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj4 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj5 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj6 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj7 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj8 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj9 =  Instantiate(Zombi2,position[0].position, Quaternion.identity);
}
numbers=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj10 =  Instantiate(Zombi3,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj11 =  Instantiate(Zombi3,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj12 =  Instantiate(Zombi3,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj13 =  Instantiate(Zombi3,position[0].position, Quaternion.identity);
}
numbers+=2;
yield WaitForSeconds(time);
for (i=0; i<numbers; i++){
yield WaitForSeconds(time2);
var obj14 =  Instantiate(Zombi3,position[0].position, Quaternion.identity);
}
} 


