import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@models/user';
import { Store } from '@ngrx/store';
import { addUser, updateUser } from '@state/actions/users.actions';
import { AppState } from '@state/app.state';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private snackBar: MatSnackBar
  ) {}
  public method: string = 'Add';
  ngOnInit(): void {
    this.buildForm();
    if (this.user.id) {
      this.method = 'Update';
    }
    console.log(this.method);
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      id: this.user.id,
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.email],
      password: [this.user.password, Validators.required],
      role: [this.user.role, Validators.required],
    });
  }
  onSubmit = () => {
    console.log(this.formGroup.status);
    if (this.formGroup.status === 'VALID') {
      if (this.method === 'Add')
        this.store.dispatch(addUser({ user: this.formGroup.value }));
      else this.store.dispatch(updateUser({ user: this.formGroup.value }));

      this.snackBar.open(`${this.method} Successfull`, '', { duration: 2000 });
      this.dialogRef.close();
    } else {
      this.snackBar.open(`Fill the data correctly`, '', {
        duration: 2000,
      });
    }
  };
}
