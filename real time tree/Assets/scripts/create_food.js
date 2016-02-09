
function Start () {}
//variables of time to create items
var timerWatermelons : float = 0;
var timerDonuts : float = 0;
var timerBombs : float = 0;
//objects to create
var watermelon : GameObject;
var Donuts : GameObject;
var Bombs : GameObject;


function createWatermelon () {
    //coordenadas para la aparicion de comida en el mapa
    var pos = Vector3 (Random.Range(-7.62, 7.47), Random.Range(-0.96, 4.61), -5.15);
    //watermelon instantiantion
    var watermelonClone : GameObject = Instantiate(watermelon, pos, transform.rotation);
}


function createDonuts(){
    //coordenadas para la aparicion de comida en el mapa
    var pos = Vector3 (Random.Range(-7.62, 7.47), Random.Range(-0.96, 4.61), -5.15);
    //donuts intantiation
    var DonutsClone : GameObject = Instantiate(Donuts, pos, transform.rotation);
}
function createBombs(){
    //coordenadas para la aparicion de comida en el mapa
    var pos = Vector3 (Random.Range(-7.62, 7.47), Random.Range(-0.96, 4.61), -5.15);
    //bombs intantation
    var BombsClone : GameObject = Instantiate(Bombs,pos,transform.rotation);
}

function Update () {
    //increase time 1 per sec
    timerWatermelons += Time.deltaTime;
    timerDonuts += Time.deltaTime;
    timerBombs += Time.deltaTime;
    //create items in the time given
    if(timerWatermelons >= 1.4){
        createWatermelon();
        timerWatermelons = 0.0;
    }

    if(timerDonuts >= 1.2){
        createDonuts();
        timerDonuts = 0.0;
    }

    if(timerBombs >= 1.0){
        createBombs();
        timerBombs = 0.0;
    }
}

