import { BoissonTaille } from "src/app/catalogue/shared/models/boisson-taille";

export interface CommandeBoissonTaille {
    quantite :number;
    boissonTaille?: BoissonTaille;
    prix?: number;
    type: 'CommandeBoissonTaille',
    '@type'? : 'CommandeBoissonTaille'
}
