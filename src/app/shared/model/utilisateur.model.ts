export class Utilisateur {
    constructor(
        public nom: string,
        public prenom: string,
        public tel: string,
        public email: string,
        public sexe: string,
        public ville: string,
        public rue: string,
        public cp: string,
        public region: string,
        public mdp?: string,
        public id?: string,
        public idVisite?: string,
        public idCommentaire?: string
    ) {}
}
