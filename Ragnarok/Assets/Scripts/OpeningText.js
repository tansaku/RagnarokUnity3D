#pragma strict

var write : GUIText;
var prompt : GUIText;

function Start () {
	write.text ="Ragnarok Prototype 4: Use arrows to control ship and fire with space";
	prompt.text = "Press up to play";
}

function Update(){

	if(Input.GetKeyDown(KeyCode.UpArrow)){
		Application.LoadLevel(1);
	}
}
