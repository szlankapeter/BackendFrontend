import DataService from "../Model/DataService.js";
import adatView from "../View/adatView.js";

class Controller{

    constructor(){
        const DS = new DataService();
        DS.getAxiusData("http://localhost:8000/api/writers", this.megjelenit);
        //DS.postAxiusData("http://localhost:8000/api/writers");
    }

    megjelenit(lista){
        console.log(lista);
        new adatView(lista, $(".tabla"));
    }

}export default Controller;