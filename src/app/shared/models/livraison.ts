import { User } from 'src/app/connexion/shared/models/user';
import { Livreur } from 'src/app/mes-livraisons/shared/models/livreur';
import { Commande } from 'src/app/shared/models/commande';

export interface Livraison {
    id?: number
    livreur?: Livreur,
    commandes?: Commande[],
    etat? : string,
    client?: User,
    montantTotal?: number
}
