import { Component, OnInit } from '@angular/core';
import {CommentaireService} from '../../services/commentaire.service';
import {Commentaire} from '../../model/commentaire.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../../model/utilisateur.model';
import {UtilisateurService} from '../../services/utilisateur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  commentaireForm: FormGroup;
  tabCommentaire: Commentaire[];
  tabUtilisateur: Utilisateur[];
  idUtilisateur = JSON.parse(localStorage.getItem('id')).id;
  idMaid;
  isDataAvailable = false;
  constructor(private commentaireService: CommentaireService, private router: Router, private route: ActivatedRoute, private utilisateurService: UtilisateurService, private fb: FormBuilder) { }

  ngOnInit() {
    this.idMaid = this.route.snapshot.paramMap.get('id');
    this.getAllCommentaire(this.idMaid);
    this.getUtilisateurMenageCommentaire(this.idMaid);
    this.commentaireForm = this.fb.group({
      message: ['', [Validators.required]]
    });
  }

  getAllCommentaire(idMaid) {
    this.commentaireService.getAllCommentaire(idMaid).subscribe(data => {
      this.tabCommentaire = data;
    });
  }

  getUtilisateurMenageCommentaire(idMenage) {
    this.utilisateurService.getUtilisateurMenageCommentaire(idMenage).subscribe(data => {
      this.tabUtilisateur = data;
      this.isDataAvailable = true;
    });
  }

  getUtilisateurbyIdCommentaire(idMessage) {
    for (let i = 0 ; i < this.tabUtilisateur.length; i++) {
      if (this.tabUtilisateur[i].idCommentaire === idMessage) {
        return this.tabUtilisateur[i];
      }
    }
  }

  postCommentaire(f) {
    const formValue = this.commentaireForm.value;
    const datePost = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    const commentaire = new Commentaire(
        formValue.message,
        datePost,
        this.idUtilisateur,
        this.idMaid
    );

    this.commentaireService.postCommentaire(commentaire).subscribe(
        next => {
          this.ngOnInit();
        }, error => {
          console.log(error);
        }
    );

  }



}
