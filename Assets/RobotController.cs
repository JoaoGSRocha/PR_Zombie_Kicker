using UnityEngine;
using System.Collections;

public class RobotController : MonoBehaviour
{
	public float maxSpeed = 10f;
	bool facingRight = true;

	bool grounded = false;

	void Start()
	{}
	
	void FixedUpdate()
	{
		float move = Input.GetAxis("Horizontal");
		
		rigidbody2D.velocity = new Vector2(move* maxSpeed, rigidbody2D.velocity.y);
		if (move > 0 &&!facingRight)
		{
			Flip();
		}else if(move < 0 && facingRight)
		{
			Flip();
		}
	}
	void Flip()
	{
		facingRight = !facingRight;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
	
	
}