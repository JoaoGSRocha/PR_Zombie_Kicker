#pragma strict
var spawnObj: GameObject;
public var lifes = 6;
static var toLeft = false;
var enemy: GameObject;
private var moveSpeed : Vector2;
var rb: Rigidbody2D;

function Start()
{
	InvokeRepeating("Spawn",  5, 5);
}

function Spawn()
{
	if(spawnObj.name=="Spawner_02"){
		Instantiate(enemy, new Vector2(spawnObj.transform.position.x,spawnObj.transform.position.y), Quaternion.identity);
		toLeft=true;
	}else{
		toLeft=false;
		Instantiate(enemy, new Vector2(spawnObj.transform.position.x,spawnObj.transform.position.y), Quaternion.identity);
	}
}

function Update () {

}


	