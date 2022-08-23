import { BoissonTaille } from "src/app/catalogue/shared/models/boisson-taille";

export interface CommandeMenuBoissonTaille {
    quantite : number ;
    boissonTaille?: BoissonTaille ;
    prix?: number ;
}
