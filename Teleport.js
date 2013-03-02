var destination : Transform;

function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
        var startPosition = other.transform.position;
        other.transform.position = destination.position;
        var moveDelta = other.transform.position - startPosition;
        Camera.main.transform.position += moveDelta;
    }
}