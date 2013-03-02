function Start () {
gameObject.guiText.material.color.a=0;
}

function ChangeText(text : String){
gameObject.guiText.text=text;
ShowText();
}

function ShowText(){
while(gameObject.guiText.material.color.a<1){
gameObject.guiText.material.color.a+=0.01;
yield WaitForSeconds(0.01);
}
Waiting();
}

function Waiting(){
yield WaitForSeconds(3);
HideText();
}

function HideText(){
while(gameObject.guiText.material.color.a>0){
gameObject.guiText.material.color.a-=0.01;
yield WaitForSeconds(0.01);
}
}