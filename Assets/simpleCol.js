
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Enemy")
		Destroy(coll.gameObject);
}