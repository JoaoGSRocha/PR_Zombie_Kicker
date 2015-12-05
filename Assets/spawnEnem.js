#pragma strict
var spawnObj: GameObject;
function Start()
{
	InvokeRepeating("Spawn",  5, 5);
}

function Spawn()
{
	Instantiate(spawnObj, new Vector2(7.58f, -0.49f), Quaternion.identity);
}

function Update () {

}
