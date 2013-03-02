function OnTriggerEnter(col:Collider)
{
if(col.tag == "Player")
{
Application.LoadLevel(0);
}
}   