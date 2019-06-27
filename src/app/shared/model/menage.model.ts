export class Menage {
    constructor(
    public nom: string,
    public prenom: string,
    public tel: string,
    public email: string,
    public description: string,
    public sexe: string,
    public ville: string,
    public rue: string,
    public cp: string,
    public region: string,
    public mdp?: string,
    public photo?: string,
    public avatar?: string,
    public note?: string,
    public estDispo?: string,
    public idVisite?: string,
    public id?: string,
    ) {}
}
