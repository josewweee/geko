#pragma strict
function Start () {

}

function OnCollisionEnter2D(coll : Collision2D) {
    //if the destroyer collide a food or a bomb
    if (coll.gameObject.tag == "Food" || coll.gameObject.tag == "Bad"){
        //it'll destroy it
        Destroy(coll.gameObject);
    }
}

function Update () {

}

