import { Login, User } from "./interface";

interface Adress {
    street:string;
    city:string;
    state:string;
}

class Employe implements Login {

  //attributs
  //private = #
  #id: number;
  protected nom: string;
  private address: Adress;

  static getEmployeNumber():number{
    return 0;
  }

  

  //constructors
  constructor(id: number, name: string, address: Adress) {
    this.#id = id;
    this.nom = name;
    this.address = address;
  }
  
  Login() :User{
    return {
        name :'',
        age:1,
        id:1,
        email: "1@gmail.com"
    };
  }
  

  getNom(): string {
    return this.nom;
  }

  getAddress():Adress{
    return this.address;
  }

  setNom(nom:string){
    this.nom = nom;
  }

  setAdress(adress:Adress){
    this.address = adress;
  }

  getId() :number{
    return this.#id;
  }
  
}

let employe = new Employe(90337055, "David", {street:"beach",city
:"tv-all",state:"man-united"});
employe.setNom("Florento");
console.log(employe.getNom());
console.log(Employe.getEmployeNumber());
console.log(employe);
