var LightG : GameObject;
var check = 1;
var audiom : AudioClip; 

function OnTriggerEnter(other : Collider)
{
if (check == 1){
if (other.collider.tag == "Player")
{
audio.clip = audiom;
audio.Play();
}
}

}