public var lifes = 6;

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Enemy")
		Destroy(coll.gameObject);
		getHit();
}

function getHit() {
	InvokeRepeating("", 0, 3);
}

function TakeLife() {
	lifes--;
}