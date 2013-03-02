function FixedUpdate () {
if(Input.GetKeyDown(KeyCode.T)){
GameObject.Find("Text").SendMessage("ChangeText","Нажал на T");
}
}