import { EmailService } from './../_services/email.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
declare let Email: any;

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

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }
  
  public sendEmail() {
    const formValue = this.contactForm.value;
    Email.send({
      SecureToken : "12cd6490-ad1c-4d6e-bd46-ae2af55a94f0",
      To: 'marcodumbleton1@gmail.com',
      From: 'marcodumbleton1@gmail.com',
      Subject: 'New Website Contact Form Enquiry',
      Body: `Name: ${formValue.name}<br>Email: ${formValue.email}<br>Phone: ${formValue.contactNumber}<br>Message: ${formValue.message}`,
    }).then((message: any) => window.alert(message));
  }
}
