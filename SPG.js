var position : Transform[];
var objectEasy :  GameObject[]; 
var objectNormal :  GameObject[]; 
var objectHard :  GameObject[]; 
var numbers = 0;
var time = 2.0;
var e=0;
var k=false; 
var n=false;

var max_Pri_s1_po5_volnu_CHETNOE_CHISLO = 20;
var max_Pri_s5_po10_volnu_CHETNOE_CHISLO = 30;
var max_Pri_s10_po15_volnu_CHETNOE_CHISLO = 40;

var buttonRect : Rect = Rect(100,175,50,50);
var buttonRect2 : Rect = Rect(245,125,50,50);

var vrema_mezdu_volnami = 30;

function Start(){
k=true;
}


function OnGUI () {
if(k){
GUI.Box(Rect(100,100,300,100),"Вы готовы?");

if(GUI.Button(buttonRect,"Да")){
k=false;
n=true;
}

if(n){
if(e<numbers || e<max_Pri_s10_po15_volnu_CHETNOE_CHISLO){
if(numbers<max_Pri_s1_po5_volnu_CHETNOE_CHISLO){
 Spawn1();
}
if(numbers<max_Pri_s5_po10_volnu_CHETNOE_CHISLO && numbers>=max_Pri_s1_po5_volnu_CHETNOE_CHISLO ){
 Spawn2();
}
if(numbers<max_Pri_s10_po15_volnu_CHETNOE_CHISLO && numbers>=max_Pri_s5_po10_volnu_CHETNOE_CHISLO ){
 Spawn3();
}
}
}
}
if(k){
if(GUI.Button(buttonRect2,"Нет")){
k=false;
}
}
}
function Spawn1 () {

for (i=0; i<numbers; i++){
if(e<numbers){
if(numbers<max_Pri_s1_po5_volnu_CHETNOE_CHISLO){
yield WaitForSeconds(time);  

      var obj : GameObject = objectEasy[Random.Range(0, objectEasy.length)];
      var pos: Transform = position[Random.Range(0, position.length)];  

      Instantiate(obj, pos.position, pos.rotation);
e+=1;

}
}
}
if(e==numbers){
 
numbers+=2;
e=0;

}
}

function Spawn2 () {

for (i=0; i<numbers; i++){
if(e<numbers){
if(numbers<max_Pri_s5_po10_volnu_CHETNOE_CHISLO){
yield WaitForSeconds(time);  

      var obj1 : GameObject = objectNormal[Random.Range(0, objectNormal.length)];
      var pos1: Transform = position[Random.Range(0, position.length)];  

      Instantiate(obj1, pos1.position, pos1.rotation);
e+=1;

}
}
}
yield WaitForSeconds(vrema_mezdu_volnami);  
numbers+=2;
e=0;

}

function Spawn3 () {

for (i=0; i<numbers; i++){
if(e<numbers){
if(numbers<max_Pri_s10_po15_volnu_CHETNOE_CHISLO){
yield WaitForSeconds(time);  

      var obj2 : GameObject = objectHard[Random.Range(0, objectHard.length)];
      var pos2: Transform = position[Random.Range(0, position.length)];  

      Instantiate(obj2, pos2.position, pos2.rotation);
e+=1;

}
}
}
yield WaitForSeconds(vrema_mezdu_volnami);  
numbers+=2;
e=0;

}

