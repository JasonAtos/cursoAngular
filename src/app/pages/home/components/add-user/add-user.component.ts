import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public user: User
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
      name: this.user.name,
      email: [this.user.email, Validators.email],
      password: this.user.password,
    });
  }
  onSubmit = () => {
    console.log(this.formGroup.status);
    if (this.method === 'Add')
      this.store.dispatch(addUser({ user: this.formGroup.value }));
    else this.store.dispatch(updateUser({ user: this.formGroup.value }));
  };
}
