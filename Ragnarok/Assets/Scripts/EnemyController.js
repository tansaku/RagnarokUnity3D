#pragma strict


var eBullet : Rigidbody;
var ragScript : PlayerController;
var winText : GUIText;
var Score : GUIText;
var shoot;
var delay : double;
public var killed : int;
private var eHP : int;
private var win : int;
private var score : int;


function Start () {
	eHP = 6;
	win = 0;
	score = 0;
	killed = 0;
	enemyStat();
	winText.text = "";
	shoot = true;
	
}

function Update () {
		rigidbody.transform.position.z += -0.005;
				
			//var fire : Rigidbody = Instantiate(eBullet, GameObject.Find("eSpawn").transform.position, Quaternion.identity);
			//fire.rigidbody.AddForce(Vector3.back * 1000);
			//Debug.Log("Yup");
			//shoot = false;
			//shootAgain();
		
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Bullet"){
		other.gameObject.SetActive(false);
		eHP = eHP - 1;
		score = score + 5;
		enemyStat();
	}if(other.gameObject.tag == "Bounds"){
			winText.text = "Game Over";
			gameObject.SetActive(false);
			GameObject.Find("Ragnarok").SetActive(false);
			ragScript.done = true;
	}
}
function shootAgain(){
	yield WaitForSeconds(delay);
	shoot = true;
}
function enemyStat(){
	Score.text = "Score: " + score;
	 if(eHP == 0){
	  	Destroy(gameObject);
	 	killed++;
	 }
	 if(killed == 1 ){
	 		winText.text = "Victory!!!\n"
	 						+"Press up to go to the title screen";
	 						ragScript.done = true;
	 						
	 	}
}
function pause(){
	Time.timeScale = 0;
	
}

function unPause(){
	Time.timeScale = 1;
}
	

	