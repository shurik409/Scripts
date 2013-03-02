 private var InfoBox = false;
var image:Texture;

function Update()
{
if(Input.GetKey("1"))
{
InfoBox = true;
Screen.showCursor = true;
Screen.lockCursor = false; 
GameObject.Find("Main Camera").GetComponent("MouseLook").enabled = false;
GameObject.Find("Player").GetComponent("MouseLook").enabled = false;

}
else
{
InfoBox = false;
Screen.showCursor = false;
Screen.lockCursor = true; 
GameObject.Find("Main Camera").GetComponent("MouseLook").enabled = true;
GameObject.Find("Player").GetComponent("MouseLook").enabled = true;
}

}

function OnGUI() {
if(InfoBox){

GUI.Button(Rect(400,250,50,50),image);
}
}