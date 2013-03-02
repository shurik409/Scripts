var buttonRect1 : Rect =Rect(100,100,100,100);
var buttonRect2 : Rect =Rect(100,100,100,100);
var buttonRect3 : Rect =Rect(100,100,100,100);
var buttonRect4 : Rect =Rect(100,100,100,100);

var buttonRect5 : Rect =Rect(100,100,100,100);
var buttonRect6 : Rect =Rect(100,100,100,100);
var buttonRect7 : Rect =Rect(100,100,100,100);
var buttonRect8 : Rect =Rect(100,100,100,100);

var buttonRect5s : Rect =Rect(100,100,100,100);
var buttonRect6s : Rect =Rect(100,100,100,100);
var buttonRect7s : Rect =Rect(100,100,100,100);
var buttonRect8s : Rect =Rect(100,100,100,100);

var boxRect : Rect =Rect(100,100,400,400);

var text1="";
var text2="";
var text3="";
var text4="";


var k=0;

var i=0;


var d=0;

var h=0;
var q=0;
var w=0;
var e=0;

var c = true;

function OnGUI(){
if(!c){
if(h==1){
GUI.Label(Rect(100,100,100,100),"h1");
}
if(h==2){
GUI.Label(Rect(100,100,100,100),"h2");
}
if(h==3){
GUI.Label(Rect(100,100,100,100),"h3");
}
if(h==4){
GUI.Label(Rect(100,100,100,100),"h4");
}
if(q==1){
GUI.Label(Rect(200,100,100,100),"q1");
}
if(q==2){
GUI.Label(Rect(200,100,100,100),"q2");
}
if(q==3){
GUI.Label(Rect(200,100,100,100),"q3");
}
if(q==4){
GUI.Label(Rect(200,100,100,100),"q4");
}
if(w==1){
GUI.Label(Rect(300,100,100,100),"w1");
}
if(w==2){
GUI.Label(Rect(300,100,100,100),"w2");
}
if(w==3){
GUI.Label(Rect(300,100,100,100),"w3");
}
if(w==4){
GUI.Label(Rect(300,100,100,100),"w4");
}
if(e==1){
GUI.Label(Rect(400,100,100,100),"e1");
}
if(e==2){
GUI.Label(Rect(400,100,100,100),"e2");
}
if(e==3){
GUI.Label(Rect(400,100,100,100),"e3");
}
if(e==4){
GUI.Label(Rect(400,100,100,100),"e4");
}
}
if(c){
if(GUI.Button(buttonRect1,"")){
if(buttonRect5.y==buttonRect5s.y && buttonRect6.y==buttonRect6s.y && buttonRect7.y==buttonRect7s.y && buttonRect8.y==buttonRect8s.y){
buttonRect5.y-=50;
buttonRect6.y-=50;
buttonRect7.y-=50;
buttonRect8.y-=50;
k=1;
}
}

if(GUI.Button(buttonRect2,"")){
if(buttonRect5.y==buttonRect5s.y && buttonRect6.y==buttonRect6s.y && buttonRect7.y==buttonRect7s.y && buttonRect8.y==buttonRect8s.y){
buttonRect5.y-=50;
buttonRect6.y-=50;
buttonRect7.y-=50;
buttonRect8.y-=50;
k=2;
}
}

if(GUI.Button(buttonRect3,"")){
if(buttonRect5.y==buttonRect5s.y && buttonRect6.y==buttonRect6s.y && buttonRect7.y==buttonRect7s.y && buttonRect8.y==buttonRect8s.y){
buttonRect5.y-=50;
buttonRect6.y-=50;
buttonRect7.y-=50;
buttonRect8.y-=50;
k=3;
}
}

if(GUI.Button(buttonRect4,"")){
if(buttonRect5.y==buttonRect5s.y && buttonRect6.y==buttonRect6s.y && buttonRect7.y==buttonRect7s.y && buttonRect8.y==buttonRect8s.y){
buttonRect5.y-=50;
buttonRect6.y-=50;
buttonRect7.y-=50;
buttonRect8.y-=50;
k=4;
}
}



if(GUI.Button(buttonRect5,text1)){
if(buttonRect5.y==buttonRect5s.y-50 && buttonRect6.y==buttonRect6s.y-50 && buttonRect7.y==buttonRect7s.y-50 && buttonRect8.y==buttonRect8s.y-50){
buttonRect5.y+=50;
buttonRect6.y+=50;
buttonRect7.y+=50;
buttonRect8.y+=50;
if(k==1){
text1="ты выбрал 1";
i=1;
d=1;
c=false;
}
if(k==2){
text1="ты выбрал 2";
i=2;
d=1;
c=false;
}
if(k==3){
text1="ты выбрал 3";
i=3;
d=1;
c=false;
}
if(k==4){
text1="ты выбрал 4";
i=4;
d=1;
c=false;
}
}
}
if(GUI.Button(buttonRect6,text2)){
if(buttonRect5.y==buttonRect5s.y-50 && buttonRect6.y==buttonRect6s.y-50 && buttonRect7.y==buttonRect7s.y-50 && buttonRect8.y==buttonRect8s.y-50){
buttonRect5.y+=50;
buttonRect6.y+=50;
buttonRect7.y+=50;
buttonRect8.y+=50;
if(k==1){
text2="ты выбрал 1";
i=1;
d=2;
c=false;
}
if(k==2){
text2="ты выбрал 2";
i=2;
d=2;
c=false;
}
if(k==3){
text2="ты выбрал 3";
i=3;
d=2;
c=false;
}
if(k==4){
text2="ты выбрал 4";
i=4;
d=2;
c=false;
}
}
}
if(GUI.Button(buttonRect7,text3)){
if(buttonRect5.y==buttonRect5s.y-50 && buttonRect6.y==buttonRect6s.y-50 && buttonRect7.y==buttonRect7s.y-50 && buttonRect8.y==buttonRect8s.y-50){
buttonRect5.y+=50;
buttonRect6.y+=50;
buttonRect7.y+=50;
buttonRect8.y+=50;
if(k==1){
text3="ты выбрал 1";
i=1;
d=3;
c=false;
}
if(k==2){
text3="ты выбрал 2";
i=2;
d=3;
c=false;
}
if(k==3){
text3="ты выбрал 3";
i=3;
d=3;
c=false;
}
if(k==4){
text3="ты выбрал 4";
i=4;
d=3;
c=false;
}
}
}
if(GUI.Button(buttonRect8,text4)){
if(buttonRect5.y==buttonRect5s.y-50 && buttonRect6.y==buttonRect6s.y-50 && buttonRect7.y==buttonRect7s.y-50 && buttonRect8.y==buttonRect8s.y-50){
buttonRect5.y+=50;
buttonRect6.y+=50;
buttonRect7.y+=50;
buttonRect8.y+=50;
if(k==1){
text4="ты выбрал 1";
i=1;
d=4;
c=false;
}
if(k==2){
text4="ты выбрал 2";
i=2;
d=4;
c=false;
}
if(k==3){
text4="ты выбрал 3";
i=3;
d=4;
}
if(k==4){
text4="ты выбрал 4";
i=4;
d=4;
c=false;
}
}
}
GUI.Box(boxRect,"");
}
}


function Update(){
if(i==1 && d==1){
if(Input.GetKey("1")){
h=1;
}
}

if(i==2 && d==1){
if(Input.GetKey("1")){
h=2;
}
}

if(i==3 && d==1){
if(Input.GetKey("1")){
h=3;
}
}

if(i==4 && d==1){
if(Input.GetKey("1")){
h=4;
}
}
if(i==1 && d==2){
if(Input.GetKey("2")){
q=1;
}
}

if(i==2 && d==2){
if(Input.GetKey("2")){
q=2;
}
}

if(i==3 && d==2){
if(Input.GetKey("2")){
q=3;
}
}

if(i==4 && d==2){
if(Input.GetKey("2")){
q=4;
}
}
if(i==1 && d==3){
if(Input.GetKey("3")){
w=1;
}
}

if(i==2 && d==3){
if(Input.GetKey("3")){
w=2;
}
}

if(i==3 && d==3){
if(Input.GetKey("3")){
w=3;
}
}

if(i==4 && d==3){
if(Input.GetKey("3")){
w=4;
}
}
if(i==1 && d==4){
if(Input.GetKey("4")){
e=1;
}
}

if(i==2 && d==4){
if(Input.GetKey("4")){
e=2;
}
}

if(i==3 && d==4){
if(Input.GetKey("4")){
e=3;
}
}

if(i==4 && d==4){
if(Input.GetKey("4")){
e=4;
}
}
if(Input.GetKeyDown(KeyCode.E)){
c=true;
}
}