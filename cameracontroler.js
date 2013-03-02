var moveSpeed : float = 10;
var maxZ=100;
var minZ=0;
var maxX=100;
var minX=0;

function Update()
{
if(transform.position.x>=minX && transform.position.x<=maxX){
transform.Translate(Input.GetAxis("Horizontal") * Vector3.right * moveSpeed * Time.deltaTime);
if(transform.position.x>=maxX){
transform.position = Vector3(transform.position.x-0.1, transform.position.y, transform.position.z);
WaitForSeconds(0.1);
}
if(transform.position.x<=minX){
transform.position = Vector3(transform.position.x+0.1, transform.position.y, transform.position.z);
WaitForSeconds(0.1);
}




if(transform.position.z>=minZ && transform.position.z<=maxZ){

transform.Translate(Input.GetAxis("Vertical") * Vector3.up * moveSpeed * Time.deltaTime);

}
if(transform.position.z>=maxZ){
transform.position = Vector3(transform.position.x, transform.position.y, transform.position.z-0.1);
WaitForSeconds(0.1);
}
if(transform.position.z<=minZ){
transform.position = Vector3(transform.position.x, transform.position.y, transform.position.z+0.1);
WaitForSeconds(0.1);
}
}
}

