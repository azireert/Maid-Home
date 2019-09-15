export class Commentaire {
    constructor(
        public message: string,
        public datePost: string,
        public idUtilisateur: string,
        public idMaid: string,
        public id?: string
    ) {}
}
