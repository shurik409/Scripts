
 var windowRect : Rect = Rect (600, 50, 120, 50);

 var windowRect2 : Rect = Rect (600, 120, 120, 50);
 
 var windowRect3 : Rect = Rect (600, 190, 120, 50);

 var windowRect4 : Rect = Rect (600, 260, 120, 50);
 
  var windowRect5 : Rect = Rect (600, 330, 120, 50);
 
 var k1 =false;
 var k2 =false;
 var k3 =false;
 var k4 =false;

 
 var boxRect5s: Rect=Rect(600,50,120,50);// то место где будет находиться наша первая передвежная ячека
 var boxRect6s: Rect=Rect(600,120,120,50);
 var boxRect7s: Rect=Rect(600,190,120,50);
 var boxRect8s: Rect=Rect(600,260,120,50);// то место где будет находиться наша 4 передвежная ячека
 var boxRect9s: Rect=Rect(600,330,120,50);
 
 var boxRect: Rect=Rect(30,30,130,60);// те ячейки куда мы передвигаем наши ячейки
 var boxRect1: Rect=Rect(170,30,130,60);
 var boxRect2: Rect=Rect(310,30,130,60);
 var boxRect3: Rect=Rect(450,30,130,60);// 4 ячека куда мы передвигаем наши ячейки
 var boxRect4: Rect=Rect(600,30,300,400);// бокс в котором находятся наши ячейки (те которые мы передвигаем)-большой бокс
 
 var boxRect5: Rect=Rect(600,50,130,60);// места где находятся наши ячейки
 var boxRect6: Rect=Rect(600,120,130,60);
 var boxRect7: Rect=Rect(600,190,130,60);
 var boxRect8: Rect=Rect(600,260,130,60);
 var boxRect9: Rect=Rect(600,330,130,60);// 5 яместо в которой находится наша 5 передвижная ячека
  

function OnGUI () {
if(k1){
GUI.Button(Rect(300,400,100,100),"k1");// тут я думаю ты поймёшь
}



if(k2){
GUI.Button(Rect(300,400,100,100),"k2");
}
if(k3){
GUI.Button(Rect(300,400,100,100),"k3");

}
if(k4){
GUI.Button(Rect(300,400,100,100),"k4");

}


    windowRect = GUI.Window (0, windowRect, DoMyFirstWindow, "1");// наши передвижные окна

    windowRect2 = GUI.Window (1, windowRect2, DoMySecondWindow, "2" );
    
     windowRect3 = GUI.Window (2, windowRect3, DoMy3Window, "3");

    windowRect4 = GUI.Window (3, windowRect4, DoMy4Window, "4" );
    
     windowRect5 = GUI.Window (4, windowRect5, DoMy5Window, "5");

    
    
    GUI.Box(boxRect,"");// наши места куда мы вставляем xD
    GUI.Box(boxRect1,"");
    GUI.Box(boxRect2,"");
    GUI.Box(boxRect3,"");// вот до сюда
    GUI.Box(boxRect4,"");// большой бокс
    
    GUI.Box(boxRect5,"");//наши места ячеек
    GUI.Box(boxRect6,"");
    GUI.Box(boxRect7,"");
    GUI.Box(boxRect8,"");
    GUI.Box(boxRect9,"");
    
}

function DoMyFirstWindow (windowID : int) {// тут я тоже думаю ты поймёшь
   
    GUI.DragWindow(Rect (0,0, 10000, 60));
}

function DoMySecondWindow (windowID : int) {
      GUI.DragWindow(Rect (0,0, 10000, 60));
}

function DoMy3Window (windowID : int) {
      GUI.DragWindow(Rect (0,0, 10000, 60));
}

function DoMy4Window (windowID : int) {
      GUI.DragWindow(Rect (0,0, 10000, 60));
}

function DoMy5Window (windowID : int) {
      GUI.DragWindow(Rect (0,0, 10000, 60));
}

function Update(){
//---------------------------------------------------------------------------------------------------------------------------------------------
if(windowRect.x>=boxRect.x && windowRect.x<=boxRect.x+boxRect.width && windowRect.y>=boxRect.y && windowRect.y<=boxRect.y+boxRect.height ){// тут идёт проверка на положение нашей ячеке(1)
windowRect.x=boxRect.x;
windowRect.y=boxRect.y;
if(windowRect2.x==boxRect.x && windowRect2.y==boxRect.y){//это я пока решил не удалять(тут если на этом мести находится кнопка то 2 кнопка возвращается на то место(2)
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect.x && windowRect.y==boxRect.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect.x && windowRect4.y==boxRect.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect.x && windowRect5.y==boxRect.y){
windowRect5=boxRect9s;
}

k1=true;
k2 =false;
k3 =false;
k4 =false;
windowRect=boxRect5s;
 }

if(windowRect.x>=boxRect1.x && windowRect.x<=boxRect1.x+boxRect1.width && windowRect.y>=boxRect1.y && windowRect.y<=boxRect1.y+boxRect1.height ){//(1)
windowRect.x=boxRect1.x;
windowRect.y=boxRect1.y;
if(windowRect2.x==boxRect1.x && windowRect2.y==boxRect1.y){//(2)
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect1.x && windowRect3.y==boxRect1.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect1.x && windowRect4.y==boxRect1.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect1.x && windowRect5.y==boxRect1.y){
windowRect5=boxRect9s;
}
k1=false;
k2 =true;
k3 =false;
k4 =false;
windowRect=boxRect5s;
}
if(windowRect.x>=boxRect2.x && windowRect.x<=boxRect2.x+boxRect2.width && windowRect.y>=boxRect2.y && windowRect.y<=boxRect2.y+boxRect2.height ){
windowRect.x=boxRect2.x;
windowRect.y=boxRect2.y;

if(windowRect2.x==boxRect2.x && windowRect2.y==boxRect2.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect2.x && windowRect3.y==boxRect2.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect2.x && windowRect4.y==boxRect2.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect2.x && windowRect5.y==boxRect2.y){
windowRect5=boxRect9s;
}

k1=false;
k2 =false;
k3 =true;
k4 =false;
windowRect=boxRect5s;
}
if(windowRect.x>=boxRect3.x && windowRect.x<=boxRect3.x+boxRect3.width && windowRect.y>=boxRect3.y && windowRect.y<=boxRect3.y+boxRect3.height ){// 1 слот
windowRect.x=boxRect3.x;
windowRect.y=boxRect3.y;
if(windowRect2.x==boxRect3.x && windowRect3.y==boxRect3.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect3.x && windowRect3.y==boxRect3.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect3.x && windowRect4.y==boxRect3.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect3.x && windowRect5.y==boxRect3.y){
windowRect5=boxRect9s;
}

k1=false;
k2 =false;
k3 =false;
k4 =true;
windowRect=boxRect5s;
}
if(windowRect.x>=boxRect5.x && windowRect.x<=boxRect5.x+boxRect5.width && windowRect.y>=boxRect5.y && windowRect.y<=boxRect5.y+boxRect5.height ){
windowRect.x=boxRect5.x;
windowRect.y=boxRect5.y;
}

//-------------------------------------------------------------------------------------------------------------------------------------------
if(windowRect2.x>=boxRect.x && windowRect2.x<=boxRect.x+boxRect.width && windowRect2.y>=boxRect.y && windowRect2.y<=boxRect.y+boxRect.height ){
windowRect2.x=boxRect.x;
windowRect2.y=boxRect.y;
if(windowRect.x==boxRect.x && windowRect.y==boxRect.y){
windowRect=boxRect5s;
}
if(windowRect3.x==boxRect.x && windowRect3.y==boxRect.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect.x && windowRect4.y==boxRect.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect.x && windowRect5.y==boxRect.y){
windowRect5=boxRect9s;
}

k1=true;
k2 =false;
k3 =false;
k4 =false;
windowRect2=boxRect6s;

}
if(windowRect2.x>=boxRect1.x && windowRect2.x<=boxRect1.x+boxRect1.width && windowRect2.y>=boxRect1.y && windowRect2.y<=boxRect1.y+boxRect1.height ){
windowRect2.x=boxRect1.x;
windowRect2.y=boxRect1.y;
if(windowRect.x==boxRect1.x && windowRect.y==boxRect1.y){
windowRect=boxRect5s;
}
if(windowRect3.x==boxRect1.x && windowRect3.y==boxRect1.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect1.x && windowRect4.y==boxRect1.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect1.x && windowRect5.y==boxRect1.y){
windowRect5=boxRect9s;

}k1=false;
k2 =true;
k3 =false;
k4 =false;
windowRect2=boxRect6s;
}
if(windowRect2.x>=boxRect2.x && windowRect2.x<=boxRect2.x+boxRect2.width && windowRect2.y>=boxRect2.y && windowRect2.y<=boxRect2.y+boxRect2.height ){
windowRect2.x=boxRect2.x;
windowRect2.y=boxRect2.y;
if(windowRect.x==boxRect2.x && windowRect.y==boxRect2.y){
windowRect=boxRect5s;
}
if(windowRect3.x==boxRect2.x && windowRect3.y==boxRect2.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect2.x && windowRect4.y==boxRect2.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect2.x && windowRect5.y==boxRect2.y){
windowRect5=boxRect9s;
}
k1=false;
k2 =false;
k3 =true;
k4 =false;
windowRect2=boxRect6s;
}
if(windowRect2.x>=boxRect3.x && windowRect2.x<=boxRect3.x+boxRect3.width && windowRect2.y>=boxRect3.y && windowRect2.y<=boxRect3.y+boxRect3.height ){//2 слот
windowRect2.x=boxRect3.x;
windowRect2.y=boxRect3.y;
if(windowRect.x==boxRect3.x && windowRect.y==boxRect3.y){
windowRect=boxRect5s;
}
if(windowRect3.x==boxRect3.x && windowRect3.y==boxRect3.y){
windowRect3=boxRect7s;
}
if(windowRect4.x==boxRect3.x && windowRect4.y==boxRect3.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect3.x && windowRect5.y==boxRect3.y){
windowRect5=boxRect9s;

}k1=false;
k2 =false;
k3 =false;
k4 =true;
windowRect2=boxRect6s;
}

if(windowRect2.x>=boxRect6.x && windowRect2.x<=boxRect6.x+boxRect6.width && windowRect2.y>=boxRect6.y && windowRect2.y<=boxRect6.y+boxRect6.height ){
windowRect2.x=boxRect6.x;
windowRect2.y=boxRect6.y;
}

//---------------------------------------------------------------------------------------------------------------------------------------------
if(windowRect3.x>=boxRect.x && windowRect3.x<=boxRect.x+boxRect.width && windowRect3.y>=boxRect.y && windowRect3.y<=boxRect.y+boxRect.height ){
windowRect3.x=boxRect.x;
windowRect3.y=boxRect.y;
if(windowRect.x==boxRect.x && windowRect.y==boxRect.y){
windowRect=boxRect5s;

}
if(windowRect2.x==boxRect.x && windowRect2.y==boxRect.y){
windowRect2=boxRect6s;
}
if(windowRect4.x==boxRect.x && windowRect4.y==boxRect.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect.x && windowRect5.y==boxRect.y){
windowRect5=boxRect9s;
}k1=true;
k2 =false;
k3 =false;
k4 =false;
windowRect3=boxRect7s;
}
if(windowRect3.x>=boxRect1.x && windowRect3.x<=boxRect1.x+boxRect1.width && windowRect3.y>=boxRect1.y && windowRect3.y<=boxRect1.y+boxRect1.height ){
windowRect3.x=boxRect1.x;
windowRect3.y=boxRect1.y;
if(windowRect.x==boxRect1.x && windowRect.y==boxRect1.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect1.x && windowRect2.y==boxRect1.y){
windowRect2=boxRect6s;
}
if(windowRect4.x==boxRect1.x && windowRect4.y==boxRect1.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect1.x && windowRect5.y==boxRect1.y){
windowRect5=boxRect9s;

}k1=false;
k2 =true;
k3 =false;
k4 =false;
windowRect3=boxRect7s;
}
if(windowRect3.x>=boxRect2.x && windowRect3.x<=boxRect2.x+boxRect2.width && windowRect3.y>=boxRect2.y && windowRect3.y<=boxRect2.y+boxRect2.height ){
windowRect3.x=boxRect2.x;
windowRect3.y=boxRect2.y;
if(windowRect.x==boxRect2.x && windowRect.y==boxRect2.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect2.x && windowRect2.y==boxRect2.y){
windowRect2=boxRect6s;
}
if(windowRect4.x==boxRect2.x && windowRect4.y==boxRect2.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect2.x && windowRect5.y==boxRect2.y){
windowRect5=boxRect9s;

}k1=false;
k2 =false;
k3 =true;
k4 =false;
windowRect3=boxRect7s;
}
if(windowRect3.x>=boxRect3.x && windowRect3.x<=boxRect3.x+boxRect3.width && windowRect3.y>=boxRect3.y && windowRect3.y<=boxRect3.y+boxRect3.height ){//3 слот
windowRect3.x=boxRect3.x;
windowRect3.y=boxRect3.y;
if(windowRect.x==boxRect3.x && windowRect.y==boxRect3.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect3.x && windowRect2.y==boxRect3.y){
windowRect2=boxRect6s;
}
if(windowRect4.x==boxRect3.x && windowRect4.y==boxRect3.y){
windowRect4=boxRect8s;
}
if(windowRect5.x==boxRect3.x && windowRect5.y==boxRect3.y){
windowRect5=boxRect9s;

}k1=false;
k2 =false;
k3 =false;
k4 =true;
windowRect3=boxRect7s;
}

if(windowRect3.x>=boxRect7.x && windowRect3.x<=boxRect7.x+boxRect7.width && windowRect3.y>=boxRect7.y && windowRect3.y<=boxRect7.y+boxRect7.height ){
windowRect3.x=boxRect7.x;
windowRect3.y=boxRect7.y;
}

//-------------------------------------------------------------------------------------------------------------------------------------------
if(windowRect4.x>=boxRect.x && windowRect4.x<=boxRect.x+boxRect.width && windowRect4.y>=boxRect.y && windowRect4.y<=boxRect.y+boxRect.height ){
windowRect4.x=boxRect.x;
windowRect4.y=boxRect.y;
if(windowRect.x==boxRect.x && windowRect.y==boxRect.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect.x && windowRect2.y==boxRect.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect.x && windowRect3.y==boxRect.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect.x && windowRect5.y==boxRect.y){
windowRect5=boxRect9s;

}k1=true;
k2 =false;
k3 =false;
k4 =false;
windowRect4=boxRect8s;
}
if(windowRect4.x>=boxRect1.x && windowRect4.x<=boxRect1.x+boxRect1.width && windowRect4.y>=boxRect1.y && windowRect4.y<=boxRect1.y+boxRect1.height ){
windowRect4.x=boxRect1.x;
windowRect4.y=boxRect1.y;
if(windowRect.x==boxRect1.x && windowRect.y==boxRect1.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect1.x && windowRect2.y==boxRect1.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect1.x && windowRect3.y==boxRect1.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect1.x && windowRect5.y==boxRect1.y){
windowRect5=boxRect9s;

}k1=false;
k2 =true;
k3 =false;
k4 =false;
windowRect4=boxRect8s;
}
if(windowRect4.x>=boxRect2.x && windowRect4.x<=boxRect2.x+boxRect2.width && windowRect4.y>=boxRect2.y && windowRect4.y<=boxRect2.y+boxRect2.height ){
windowRect4.x=boxRect2.x;
windowRect4.y=boxRect2.y;
if(windowRect.x==boxRect2.x && windowRect.y==boxRect2.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect2.x && windowRect2.y==boxRect2.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect2.x && windowRect3.y==boxRect2.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect2.x && windowRect5.y==boxRect2.y){
windowRect5=boxRect9s;

}k1=false;
k2 =false;
k3 =true;
k4 =false;
windowRect4=boxRect8s;
}
if(windowRect4.x>=boxRect3.x && windowRect4.x<=boxRect3.x+boxRect3.width && windowRect4.y>=boxRect3.y && windowRect4.y<=boxRect3.y+boxRect3.height ){//4 слот
windowRect4.x=boxRect3.x;
windowRect4.y=boxRect3.y;
if(windowRect.x==boxRect3.x && windowRect.y==boxRect3.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect3.x && windowRect2.y==boxRect3.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect3.x && windowRect3.y==boxRect3.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect3.x && windowRect5.y==boxRect3.y){
windowRect5=boxRect9s;

}k1=false;
k2 =false;
k3 =false;
k4 =true;
windowRect4=boxRect8s;
}


if(windowRect4.x>=boxRect8.x && windowRect4.x<=boxRect8.x+boxRect8.width && windowRect4.y>=boxRect8.y && windowRect4.y<=boxRect8.y+boxRect8.height ){
windowRect4.x=boxRect8.x;
windowRect4.y=boxRect8.y;
}

//---------------------------------------------------------------------------------------------------------------------------------------------
if(windowRect5.x>=boxRect.x && windowRect5.x<=boxRect.x+boxRect.width && windowRect5.y>=boxRect.y && windowRect5.y<=boxRect.y+boxRect.height ){
windowRect5.x=boxRect.x;
windowRect5.y=boxRect.y;
if(windowRect.x==boxRect.x && windowRect.y==boxRect.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect.x && windowRect2.y==boxRect.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect.x && windowRect3.y==boxRect.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect.x && windowRect5.y==boxRect.y){
windowRect4=boxRect8s;

}k1=true;
k2 =false;
k3 =false;
k4 =false;
windowRect5=boxRect9s;
}
if(windowRect5.x>=boxRect1.x && windowRect5.x<=boxRect1.x+boxRect1.width && windowRect5.y>=boxRect1.y && windowRect5.y<=boxRect1.y+boxRect1.height ){
windowRect5.x=boxRect1.x;
windowRect5.y=boxRect1.y;
if(windowRect.x==boxRect1.x && windowRect.y==boxRect1.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect1.x && windowRect2.y==boxRect1.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect1.x && windowRect3.y==boxRect1.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect1.x && windowRect5.y==boxRect1.y){
windowRect4=boxRect8s;

}k1=false;
k2 =true;
k3 =false;
k4 =false;
windowRect5=boxRect9s;
}
if(windowRect5.x>=boxRect2.x && windowRect5.x<=boxRect2.x+boxRect2.width && windowRect5.y>=boxRect2.y && windowRect5.y<=boxRect2.y+boxRect2.height ){//5 слот
windowRect5.x=boxRect2.x;
windowRect5.y=boxRect2.y;
if(windowRect.x==boxRect2.x && windowRect.y==boxRect.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect2.x && windowRect2.y==boxRect2.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect2.x && windowRect3.y==boxRect2.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect2.x && windowRect5.y==boxRect2.y){
windowRect4=boxRect8s;

}k1=false;
k2 =false;
k3 =true;
k4 =false;
windowRect5=boxRect9s;
}
if(windowRect5.x>=boxRect3.x && windowRect5.x<=boxRect3.x+boxRect3.width && windowRect5.y>=boxRect3.y && windowRect5.y<=boxRect3.y+boxRect3.height ){
windowRect5.x=boxRect3.x;
windowRect5.y=boxRect3.y;
if(windowRect.x==boxRect3.x && windowRect.y==boxRect3.y){
windowRect=boxRect5s;
}
if(windowRect2.x==boxRect3.x && windowRect2.y==boxRect3.y){
windowRect2=boxRect6s;
}
if(windowRect3.x==boxRect3.x && windowRect3.y==boxRect3.y){
windowRect3=boxRect7s;
}
if(windowRect5.x==boxRect3.x && windowRect5.y==boxRect3.y){
windowRect4=boxRect8s;

}k1=false;
k2 =false;
k3 =false;
k4 =true;
windowRect5=boxRect9s;
}

if(windowRect5.x>=boxRect9.x && windowRect5.x<=boxRect9.x+boxRect.width && windowRect5.y>=boxRect9.y && windowRect5.y<=boxRect9.y+boxRect9.height ){
windowRect5.x=boxRect9.x;
windowRect5.y=boxRect9.y;
}
//-------------------------------------------------------------------------------------------------------------------------------------------
}
