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
  selectedServicesArray: string[] = [];
  selectedServices: string = '';
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
    });
  }

  public sendEmail() {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'marcodumbleton1@gmail.com',
      Password: 'Ocrampolo12!',
      To: 'marco.dumbleton@fostermelliar.co.za',
      From: 'From Field',
      Subject: 'New Website Contact Form Enquiry',
      Body: 'And this is the body',
    }).then((message: any) => window.alert(message));

    //reset
  }

  toggleSelection(service: string): void {
    const index = this.selectedServicesArray.indexOf(service);
    if (index === -1) {
      this.selectedServicesArray.push(service);
    } else {
      this.selectedServicesArray.splice(index, 1);
    }

    this.selectedServices = this.selectedServicesArray.join(', ');
  }

  isSelected(service: string): boolean {
    return this.selectedServicesArray.includes(service);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Put here your email sending logic
      console.log(this.contactForm.value);
    } else {
      Object.keys(this.contactForm.controls).forEach((field) => {
        const control = this.contactForm.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }
}
