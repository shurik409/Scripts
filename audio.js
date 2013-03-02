var LightG : GameObject;
var check = 1;
var audiom : AudioClip;
function OnTriggerStay(other : Collider)
{
if( check == 1){
if(other.collider.tag == "Player")
{
audio.clip = audiom;
audio.Source.Play();
}
}
}