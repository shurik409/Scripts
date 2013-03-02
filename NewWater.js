var waterLevel : float;
private var below = false;

function Update ()
{
if (waterLevel < transform.position.y && below)
{
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled = false;
below = false;
}
	
if (waterLevel > transform.position.y && !below)
{
GameObject.Find("Main Camera").GetComponent("BlurEffect").enabled = true;
below = true;
}
}