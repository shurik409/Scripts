var fonarik : GameObject;
function Start(){}
function OnTriggerEnter(other : Collider)
{
if (other.collider.tag == "Player")
{
fonarik.GetComponent(Light).enabled = false;
}
}