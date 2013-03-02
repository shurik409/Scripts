var position : Transform[];
var objectEasy :  GameObject[]; 
var objectNormal :  GameObject[]; 
var objectHard :  GameObject[]; 
var numbers = 0;
var numbers2= 0;
var time = 2.0;
var e=0;
var k=false; 
var n=false;

var max_Pri_s1_po5_volnu_CHETNOE_CHISLO = 20;
var max_Pri_s5_po10_volnu_CHETNOE_CHISLO = 30;
var max_Pri_s10_po15_volnu_CHETNOE_CHISLO = 40;

var buttonRect : Rect = Rect(100,175,50,50);
var buttonRect2 : Rect = Rect(245,125,50,50);

var vrema_mezdu_volnami = 5;

function Start(){
k=true;
}


function OnGUI () {
numbers2=numbers;
if(k || n){
GUI.Box(Rect(100,100,300,100),"Вы готовы?");

if(GUI.Button(buttonRect,"Да")){
k=false;
n=true;
}
}

if(n && e<numbers){
if(e<numbers ){
if(numbers<max_Pri_s1_po5_volnu_CHETNOE_CHISLO){
 Spawn1();
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
if(n && e<numbers2){
for (i=0; i<numbers2; i++){
if(e<numbers){
yield WaitForSeconds(time);  

var obj : GameObject = objectEasy[Random.Range(0, objectEasy.length)];
var pos: Transform = position[Random.Range(0, position.length)];  

Instantiate(obj, pos.position, pos.rotation);
e+=1;

}
}
}
if(e>numbers ){
n=false;
 yield WaitForSeconds(vrema_mezdu_volnami);  
numbers+=2;
numbers2=0;
e=0;

}
if(e==0){
n=true;
}
if(numbers2==0){

}
}

