import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {MenageService} from '../../../shared/services/menage.service';
import {DialogNoteComponent} from '../../../shared/components/dialog-note/dialog-note.component';

@Component({
  selector: 'app-dialog-menage',
  templateUrl: './dialog-menage.component.html',
  styleUrls: ['./dialog-menage.component.css']
})
export class DialogMenageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(maid) {
    this.dialog.open(DialogNoteComponent, {
      data:  maid,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
