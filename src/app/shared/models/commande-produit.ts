import { Produit } from "src/app/catalogue/shared/models/produit";

export interface CommandeProduit {
    quantite: number ;
    prix?: number ;
    produit?: Produit ;
    burger?: Produit ;
    menu?: Produit ;
    portionFrites?: Produit ;
    type: 'CommandeProduit',
    '@type'? : 'CommandeProduit'
}
