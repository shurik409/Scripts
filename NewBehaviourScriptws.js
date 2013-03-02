var idle : AnimationClip;
var walk : AnimationClip;
var run : AnimationClip;
var jump : AnimationClip;

function Start() {
	animation.AddClip(idle, "idle");
	animation.AddClip(walk, "walk");
	animation.AddClip(run, "run");
	animation.AddClip(jump, "jump");
}
function Update() {
	if(!Input.GetAxis("Vertical") && !Input.GetAxis("Horisontal") && !animation.IsPlaying("jump")) {
	animation.CrossFade("idle");
	}
	if(!Input.GetAxis("Vertical") && !Input.GetAxis("Horisontal") && !animation.IsPlaying("jump")) {
	animation.CrossFade("walk");
	}
	if(!Input.GetAxis("Vertical") && !Input.GetAxis("Horisontal") && !animation.IsPlaying("jump")) {
	animation.CrossFade("run");
	}
	if(Input.GetButton("jump")) {
	animation.CrossFade("jump");
	}
}