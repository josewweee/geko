#pragma strict
import UnityEngine.UI;



function Start () {

}

//keep traking of score

var scoreAtTime : int = 0;
var text : Text;
var count : int = 0;

//keep traking of lifes
var LifesAtTime : int = 4;
var lifes : Text;

function awake(){
    //get the text at the begining of the game
    countText = GetComponent (Text);
    lifes = GetComponent(Text);
    Debug.Log(text);
}

function FixedUpdate () {
    //if i click
  if (Input.GetMouseButtonDown(0))
    {
        var hitm : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
        if(hitm.collider != null)   //hit no null object
        {
            // take u off 1 life if u hit a bomb
            if(hitm.collider.tag == "Bad"){
                LifesAtTime = LifesAtTime - 1;
                lifes.text = LifesAtTime.ToString();
                Debug.Log("tocamos una bomba");
            }else{
                //give u one point if u hit a no bomb
                count = count + 1;
                countText = GetComponent (Text);
            scoreAtTime = scoreAtTime + 1;
            text.text = scoreAtTime.ToString();
            Debug.Log("tocamos un dulce");
            }
            //destroy the object u hited
            Destroy (hitm.collider.gameObject);
        }
    }
}