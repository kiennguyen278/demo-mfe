import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
// export class LoginComponent implements OnInit, CanComponentDeactivate {
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  form: FormGroup;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.buildForm();

  }

  buildForm() {
    this.form = this.fb.group({
      userName: [null],
      password: [null],
    });

  }

  onLogin() {

  }



  // canDeactivate() {
  //   // if (this.form.dirty){
  //     const modalRef = this.modal.create({
  //       nzContent: ModalConfirmNavigateComponent,
  //       nzFooter: null,
  //       nzMaskClosable: false,
  //     });
  //
  //     return modalRef.afterClose;
  //
  //   // } else {
  //   //   return true;
  //   // }
  //
  //
  //
  // }


}
