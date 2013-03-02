var player : Transform;
var visable = false;
var old_x;
var old_y;
var old_z;
var target : Transform;
var movespeed = .1;
var doors : Transform[];
var door_data :int[];
var door_active : boolean[];
var number_doors=0;
var check_door = 0;
var done_checking = false;
var current_door =0;
var just_spawned = true;
var current_waypoint : Transform;
var waypoint_1 : Transform;
var waypoint_2 : Transform;
var jump_in_room = false;
var activating = false;
var hit = false;
var layerMask = 1 <<8;

function Start(){
layerMask = ~layerMask;
player = GameObject.Find("Player").transform;
number_doors = doors.length;
gameObject.layer = LayerMask.NameToLayer("Zombies");
}

function Update(){
Physics.IgnoreCollision(doors[0].collider, collider);
Physics.IgnoreCollision(doors[1].collider, collider);
Physics.IgnoreCollision(doors[2].collider, collider);
Physics.IgnoreCollision(doors[3].collider, collider);
if(just_spawned){
if(!activating){
if(!jump_in_room){
get_to_room();
}
if(jump_in_room){
jump_in();
}
}
if(activating){
activate();
}
}
if(!just_spawned){
check_for_player();
if(visable){
target=player;
}
if(!visable){
check_door =0;
done_cheking = false;
find_door();
done_checking=false;
check_door = 0;
pick_door();
target = doors[current_door];
}
}
move();
}

function pick_door(){
if(door_active[check_door]){
if(door_data[check_door]<=door_data[current_door]){
current_door= check_door;
}
}
if(check_door == (number_doors - 1)){
done_checking = true;
}
if(!done_checking){
check_door +=1;
pick_door();
}
}

function find_door()
{
old_x = transform.eulerAngles.x;
old_y = transform.eulerAngles.y;
old_z = transform.eulerAngles.z;
door_active[check_door]=false;
transform.LookAt(doors[check_door]);
var door_hit : RaycastHit;

Debug.DrawRay(transform.position, transform.forward*100,Color.green);
if(Physics.Raycast(transform.position, transform.forward, door_hit,Mathf.Infinity,layerMask)){

if(door_hit.transform == doors[check_door]){
door_data[check_door]=Mathf.Abs(player.position.x - transform.localPosition.x)+Mathf.Abs(player.position.z-transform.position.z)+Mathf.Abs(player.position.x-doors[check_door].position.x)+Mathf.Abs(player.position.z-doors[check_door].position.z);
door_active[check_door]=true;

}
}
transform.eulerAngles.x=old_x;
transform.eulerAngles.y=old_y;
transform.eulerAngles.z=old_z;
if(check_door == (number_doors - 1)){
done_checking = true;
}
if(!done_checking){
check_door +=1;
find_door();
}
}

function move()
{
old_x = transform.eulerAngles.x;
old_z = transform.eulerAngles.z;
transform.LookAt(target);
transform.eulerAngles.x = old_x;
transform.eulerAngles.z = old_y;
transform.position -= transform.up*movespeed;
}

function check_for_player()
{
visiable = false;
old_x = transform.eulerAngles.x;
old_y = transform.eulerAngles.y;
old_z = transform.eulerAngles.z;
transform.LookAt(player);
var hit : RaycastHit;
if(Physics.Raycast(transform.position, transform.forward, hit, Mathf.Infinity,layerMask)){
if(hit.transform == player){
visiable = true;
}
}
transform.eulerAngles.x=old_x;
transform.eulerAngles.y=old_y;
transform.eulerAngles.z=old_z;
}

function activate(){}
function get_to_room(){}
function jump_in(){}