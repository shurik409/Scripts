 var Ground1 : GameObject;

var animom1 : AnimationClip;

function OnTriggerStay(other : Collider)
{
if(other.tag == "Player")
{

Ground1.animation.clip = animom1;
Ground1.animation.Play();

}
}