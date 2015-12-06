#pragma strict
var spawnObj: GameObject;
public var lifes = 6;
static var toLeft = false;
var enemy: GameObject;
private var moveSpeed : Vector2;
var rb: Rigidbody2D;
public var en : EnemyMovement;

function Start()
{
	InvokeRepeating("Spawn",  5, 5);
}

function Spawn()
{
	if(name=="Spawner_02"){

		var clone : GameObject;
		clone =  Instantiate(enemy, new Vector2(spawnObj.transform.position.x,spawnObj.transform.position.y), Quaternion.identity);
        en = clone.GetComponent("EnemyMovement");
        en.toLeft = true;
        Debug.Log(en.toLeft);
	}else{
		toLeft=true;
		Instantiate(enemy, new Vector2(spawnObj.transform.position.x,spawnObj.transform.position.y), Quaternion.identity); 
		
	}
}

function Update () {

}


	