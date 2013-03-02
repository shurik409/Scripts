function OnGUI(){

GUI.Label(Rect(400,10,400,400), "Нажмите G что-бы открыть меню");
if(Input.GetKey(KeyCode.G)){
GUI.Box(Rect(10,10,100,50), "");
Time.timeScale = 0;
GUI.Label(Rect(400,400,400,400), "Что-бы продолжить нажмите P");
if(Input.GetKey(KeyCode.P)){
Time.timeScale = 1;
}
if(GUI.Button(Rect(10,10,50,50), "RES")){
Application.LoadLevel(0);
}
if(GUI.Button(Rect(60,10,50,50), "EXIT")){
Application.Exit();
}
}
}