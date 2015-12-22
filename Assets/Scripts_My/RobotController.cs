using UnityEngine;
using System.Collections;

public class RobotController : MonoBehaviour
{
	public GameObject spawnObj;
	public float maxSpeed = 10f;
	bool facingRight = true;

	bool grounded = false;
	public Transform groundCheck;
	float groundRadius = 0.2f;
	public LayerMask whatIsGround;
	public float jumpForce = 700;

	//Commerce Spawner variables
	
	public GameObject spawnObj_build;
	public GameObject cloud;

	void FixedUpdate()
	{
		grounded = Physics2D.OverlapCircle (groundCheck.position, groundRadius, whatIsGround);

		float move = Input.GetAxis("Horizontal");
		
		GetComponent<Rigidbody2D>().velocity = new Vector2(move* maxSpeed, GetComponent<Rigidbody2D>().velocity.y);

		if (move > 0 &&!facingRight)
		{
			Flip();
		}else if(move < 0 && facingRight)
		{
			Flip();
		}
	}

	void Update()
	{
		if (grounded && Input.GetKeyDown (KeyCode.Space)) {
			GetComponent<Rigidbody2D>().AddForce(new Vector2(0, jumpForce)); 
		}
		if (Input.GetKeyDown (KeyCode.R)) {
			Instantiate(cloud, new Vector2(spawnObj_build.transform.position.x,spawnObj_build.transform.position.y), Quaternion.identity);
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