#pragma strict


var speed : float;
var PlayerHP : GUIText;
var PlayerLives : GUIText;
var loseText : GUIText;
private var lives : int = 3;
private var hp : int;
var bulletPreFab : Rigidbody;
var spawnPoint : Transform;
var startPosition : Vector3;
var gamePaused : boolean = false;
var done : boolean;
var droodScript : EnemyController;


function Start() {
	hp = 5;
	loseText.text = "";
	SetStatus();
	done = false;
}


function Update () {
	
		
	if(Input.GetKey(KeyCode.LeftArrow)){
		gameObject.rigidbody.transform.position.x -= 0.005 * speed;
		}		
	if(Input.GetKey(KeyCode.RightArrow)){
		gameObject.rigidbody.transform.position.x += 0.005 * speed;
		}
	if(Input.GetButtonDown("Space")){
			fire();
		}
	if(Input.GetKeyDown("p")){
		isPaused();
	}if(Input.GetKeyDown("up") && done){
		Application.LoadLevel(0);
	}
}

function fire(){

		var bullet : Rigidbody = Instantiate(bulletPreFab, spawnPoint.position, spawnPoint.rotation);
		bullet.velocity =spawnPoint.forward * 100;


}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "eBullet"){
		other.gameObject.SetActive(false);
		hp = hp - 1;
		SetStatus();
	}
	if(hp == 0){
		Destroy(GameObject.Find("Ragnarok"));
		Application.LoadLevel(2);
		
		
		
	}
}		

function SetStatus(){
 	PlayerHP.text = "HP: " + hp;
	PlayerLives.text = "Lives: " + lives;
	if(lives < 0){
		loseText.text = "You lose";
		GameObject.Find("Drood").SetActive(false);
	}	
} 
function isPaused(){
	if(gamePaused == true){
		Time.timeScale = 1;
		loseText.text = "";
		gamePaused = false;
		droodScript.unPause();
	}else{
		Time.timeScale = 0;
		loseText.text = "PAUSED";
		gamePaused = true;
		droodScript.pause();
	}
}
