import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ContactComponent } from './contact.component';

@Injectable()
class MockSnackBar {
  open(){}
  dismiss(){}
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [{ provide: MatSnackBar, useClass: MockSnackBar }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should create contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should open success snackbar', () => {
    const spyOnOpen = spyOn(snackBar, "open");
    const snackBarMessage = "Email Sent";
    const successPanelClasses = ["btb-snackbar", "snackbar-success"];
    component.showSnackBar(true, snackBarMessage);
    const successSnackBarConfig = {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: successPanelClasses,
    } as MatSnackBarConfig<any>;
    expect(spyOnOpen).toHaveBeenCalledWith(snackBarMessage, "", successSnackBarConfig);
  });

  it('should open failure snackbar', () => {
    const spyOnOpen = spyOn(snackBar, "open");
    const snackBarMessage = "Error Sending Email";
    const failurePanelClasses = ["btb-snackbar", "snackbar-failure"];
    component.showSnackBar(false, snackBarMessage);
    const failureSnackBarConfig = {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: failurePanelClasses,
    } as MatSnackBarConfig<any>;
    expect(spyOnOpen).toHaveBeenCalledWith(snackBarMessage, "", failureSnackBarConfig);
  });

  it('should check validity of email form', () => {
    component.sendEmail({ preventDefault(){} } as Event);
    expect(component.emailForm.controls["from_name"].valid).toBe(false);
    expect(component.emailForm.controls["reply_to"].valid).toBe(false);
    expect(component.emailForm.controls["message"].valid).toBe(false);

    component.emailForm.controls["reply_to"].setValue("Incorrect Email Value");
    component.sendEmail({ preventDefault(){} } as Event);
    expect(component.emailForm.controls["reply_to"].valid).toBe(false);

    component.emailForm.controls["reply_to"].setValue("validEmailValue@gmail.com");
    component.sendEmail({ preventDefault(){} } as Event);
    expect(component.emailForm.controls["reply_to"].valid).toBe(true);
  });

  it('should fail to send email', () => {
    component.emailForm.controls["from_name"].setValue("John Smith");
    component.emailForm.controls["reply_to"].setValue("johnSmith@email.com");
    component.emailForm.controls["message"].setValue("This is my email body!");
    const spyOnShowSnackBar = spyOn(component, "showSnackBar");
    component.sendEmail({ preventDefault(){} } as Event);
    setTimeout(() => {
      expect(spyOnShowSnackBar).toHaveBeenCalledWith(false, "Error Sending Email");
    }, 100);
  });
});
