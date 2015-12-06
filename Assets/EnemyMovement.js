#pragma strict
public var lifes = 6;
var enemy: GameObject;
public var toLeft = false;
private var moveSpeed : Vector2;
var rb: Rigidbody2D;

function Start()
{
	rb=	GetComponent.<Rigidbody2D>();
	moveSpeed = new Vector2(3.0f,0.0f);
	
}
function FixedUpdate()
{
	if(toLeft){
			//Debug.Log("a");	
		rb.MovePosition(rb.position - moveSpeed * Time.fixedDeltaTime);
	}
	else{	//Debug.Log("b");	
	
		rb.MovePosition(rb.position + moveSpeed * Time.fixedDeltaTime);
	}
}

	