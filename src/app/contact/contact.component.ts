import { CommonModule } from '@angular/common';
import { Component, inject, SecurityContext } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'btb-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  emailForm: FormGroup = new FormGroup ({
    from_name: new FormControl<string>(""),
    reply_to: new FormControl<string>(""),
    message: new FormControl<string>(""),
  });

  private _requiredIfTouchedValidation: ValidatorFn = (control: AbstractControl) => {
    if (control.touched && !control.value.length) {
      return { error: true }
    }
    return null;
  }

  private _emailValidation: ValidatorFn = (control: AbstractControl) => {
    if (control.touched) {
      if (!control.value.length) {
        return { error: "Email is required" }
      }
      if (!/^([a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,})$/.test(control.value)) {
        return { error: "Invalid email format" }
      }
      return null;
    }
    return null;
  }

  private _sanitizer: DomSanitizer = inject(DomSanitizer);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  constructor() {
    this.setValidators();
  }

  setValidators(): void {
    this.emailForm.controls["from_name"].setValidators(this._requiredIfTouchedValidation);
    this.emailForm.controls["reply_to"].setValidators(this._emailValidation);
    this.emailForm.controls["message"].setValidators(this._requiredIfTouchedValidation);
  }

  sendEmail(e: Event) {
    this.emailForm.markAllAsTouched();
    this.emailForm.controls["message"].setValue(this._sanitizer.sanitize(SecurityContext.HTML, this.emailForm.controls["message"].value));
    (<any>Object).values(this.emailForm.controls).forEach((control: FormControl) => control.updateValueAndValidity());

    if (this.emailForm.valid) {
      e.preventDefault();

      let serviceId: string;
      let templateId: string;
      let userKeyId: string;

      console.log(import.meta.env);
      if (!import.meta.env.DEV) {
        serviceId = process.env.EMAIL_JS_SERVICE_ID ?? "";
        templateId = process.env.EMAIL_JS_TEMPLATE_ID ?? "";
        userKeyId = process.env.EMAIL_JS_USER_PUBLIC_KEY_ID ?? "";
      } else {
        serviceId = environment?.emailJsServiceId;
        templateId = environment?.emailJsTemplateId;
        userKeyId = environment?.emailJsUserPublicKeyId;
      }

      emailjs
        .sendForm(serviceId, templateId, e.target as HTMLFormElement, {
          publicKey: userKeyId,
        })
        .then(
          () => {
            this.showSnackBar(true, "Email Sent");
            this.emailForm.reset();
          },
          () => {
            this.showSnackBar(false, "Error Sending Email");
          },
        );
    }
  }
  
  showSnackBar(isSuccess: boolean, snackBarMessage: string): void {
    this._snackBar.open(snackBarMessage, "", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isSuccess ? ["btb-snackbar", "snackbar-success"] : ["btb-snackbar", "snackbar-failure"],
    })
  }
}
