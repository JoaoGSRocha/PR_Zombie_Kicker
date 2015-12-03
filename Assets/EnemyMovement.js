#pragma strict
var moveSpeed = 10f;
public var lifes = 6;
function Start()
{
}
function FixedUpdate()
{
	transform.position.x -= moveSpeed * Time.deltaTime;
}

	