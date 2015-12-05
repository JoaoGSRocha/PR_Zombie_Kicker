#pragma strict
public var lifes = 6;
var toLeft = false;
var enemy: GameObject;
private var moveSpeed : Vector2;
var rb: Rigidbody2D;
function Start()
{
	rb=	GetComponent.<Rigidbody2D>();
	moveSpeed = new Vector2(3.0f,0.0f);
}
function FixedUpdate()
{
	if(toLeft)	
		rb.MovePosition(rb.position + moveSpeed * Time.fixedDeltaTime);
	else
		rb.MovePosition(rb.position - moveSpeed * Time.fixedDeltaTime);
}

	