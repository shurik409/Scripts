var n =0.0;
var k=0.0;
var pos : Transform;
var lol : Transform;

function Start(){
n=pos.position.z;
k=pos.position.y;
l=pos.position.z;
}

function Update(){
k=lol.rotation.z;
if(pos.position.z>n){
n+=1;
lol.rotation.z+=0.1;
}
if(pos.position.z<n){
n-=1;
lol.rotation.z-=0.1;
}
}