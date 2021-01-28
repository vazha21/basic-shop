import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get username(): AbstractControl {
    return this.form.get('username');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  onRegister(): void {
    const newUser = new User(
      this.username.value,
      this.email.value,
      this.password.value
    );

    this.userService.addNewUser(newUser);
    this.form.reset();
    this.router.navigate(['/login']);
  }
}
