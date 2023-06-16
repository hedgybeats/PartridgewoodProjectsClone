import { EmailService } from './../_services/email.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  emailSending = false;
  emailSuccesful = false;
  error: any;

  // Added these so you can get the individual form controls and check their values and if they are valid
  get nameFc() {
    return this.contactForm.get('name');
  }

  get contactNumberFc() {
    return this.contactForm.get('contactNumber');
  }

  get emailFc() {
    return this.contactForm.get('email');
  }

  get messageFc() {
    return this.contactForm.get('message');
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      contactNumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null],
    });
  }

  // Calling email service
  public sendEmail() {
    this.emailService.sendEmail(
      'New Website Contact Form Enquiry',
      `Name: ${this.nameFc?.value}<br>Email: ${this.emailFc?.value}<br>Phone: ${this.contactNumberFc?.value}<br>Message: ${this.messageFc?.value}`
    );
  }
}
