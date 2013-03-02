var position : Transform[];
var obj : GameObject[];
var object : GameObject;
var time = 30.0;
var k=0;

 
function Start(){
spawn();
}

function spawn(){
while(k < 5){
lol();
}
}

function lol(){
var a = Random.Range(1,5);
switch(a){
case 1:
obj1 =  Instantiate(object,position[0].position, Quaternion.identity);
k+=1;
break;
case 2:
obj2 = Instantiate(object,position[1].position, Quaternion.identity);
k+=1;
break;
case 3: 
obj3 = Instantiate(object,position[2].position, Quaternion.identity);
k+=1;
break;
case 4:
obj4 = Instantiate(object,position[3].position, Quaternion.identity);
k+=1;
break;
case 5:
obj5 = Instantiate(object,position[4].position, Quaternion.identity);
k+=1;
break;
default :
break;
}
}