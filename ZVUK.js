var i =1; //то чесло которого должно быть y
var b = 1; // там проверка будет 
var audiom : AudioClip; // аудио 

function Update(){
if(transform.position.y<i){ // если позиция меньше i
while(b==3){ // цикл если будет выполнять пока b не будет равно 3
b+=1; // в цикле указываем что он будет делать
}
if(b==3){ //если b=3 то включается наше аудио
audio.clip=audiom;
audio.Source.Play();
b=1;
}
}
}


//вроде бы всё правильно