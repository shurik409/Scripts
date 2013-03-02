var moveSpeed : float = 10;
var smooth = 2.0;
var tiltAngle = 30.0;

function Update()
{
transform.Translate(Input.GetAxis("Horizontal") * Vector3.right * moveSpeed * Time.deltaTime);
transform.Translate(Input.GetAxis("Vertical") * Vector3.forward * moveSpeed * Time.deltaTime);
   var tiltAroundY = Input.GetAxis("Horizontal") * tiltAngle;
    var tiltAroundX = Input.GetAxis("Vertical") * tiltAngle;
    var target = Quaternion.Euler (0, tiltAroundY, 0);
    // Dampen towards the target rotation
    transform.rotation = Quaternion.Slerp(transform.rotation, target,Time.deltaTime * smooth);
}
