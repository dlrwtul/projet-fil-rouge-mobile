import { CommandeBoissonTaille } from "./commande-boisson-taille";
import { CommandeProduit } from "./commande-produit"
import { Quartier } from "./quartier";
import { Ticket } from "./ticket";
import { Zone } from "./zone";

export interface Commande {
    id?: number;
    numero?: string;
    createdAt?: string;
    montant?: number;
    telephone?:string;
    adresse?:string
    zone?: Zone;
    quartier?: Quartier;
    commandeBoissonTailles?: CommandeBoissonTaille[];
    commandeMenus?: CommandeProduit[];
    commandeBurgers?: CommandeProduit[];
    commandePortionFrites?: CommandeProduit[];
    commandeProduits?: Array<CommandeProduit|CommandeBoissonTaille>;
    etat?: string,
    ticket? : Ticket 
}
