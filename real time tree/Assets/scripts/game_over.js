#pragma strict
import UnityEngine.UI;

function Start () {}

var text : Text;

function Update () {
    //check the lifes in canvas
    text = GetComponent (Text);
    //if u have 0 or less
    if(text == "0" || text =="-1"){
        //create code for game over
    }
}
