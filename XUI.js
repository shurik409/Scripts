var positions : Transform;
var object : GameObject;
var time = 2.0;
var n : float =0;
var nl: boolean;
var SpawnN:float;





function Start(){
if(n<9){
SpawnN=1;

}
if(n>8){
SpawnN=0;
}
if(SpawnN>0){
for (i=0; i> -1; i++){
yield WaitForSeconds(time);
var obj1 =  Instantiate(object,positions.position,positions.rotation);
n+=1;

}
}
}