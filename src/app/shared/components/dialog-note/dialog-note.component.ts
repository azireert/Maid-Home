import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MenageService} from '../../services/menage.service';
import {Menage} from '../../model/menage.model';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.css']
})
export class DialogNoteComponent implements OnInit {
  noteForm: FormGroup;
  notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private menageService: MenageService, public dialogRef: MatDialogRef<DialogNoteComponent>) { }

  ngOnInit() {
    this.noteForm = this.fb.group({
      note: ['', [Validators.required]]
    });
  }

  postNote(f) {
    const formValue = this.noteForm.value;
    const menage = this.data;
    menage.note = formValue.note;

    this.menageService.updateNote(menage).subscribe(
        next => {
          console.log(next);
          this.dialogRef.close();
          window.location.reload();
        }, error => {
          console.log(error);
        }
    );
  }

}
