export class Visite {
    constructor(
        public heureArrivee: string,
        public idMaid: string,
        public idUtilisateur: string,
        public adresse: string,
        public cp: string,
        public ville: string,
        public description: string,
        public gratification: string,
        public id?: string,
        public statut?: string,
        public heureDepart?: string,
    ) {}
}
