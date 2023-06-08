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
  // successMsg: string;
  // emailForm: FormGroup;

  ngOnInit(): void {
    // this.emailForm = this.fb.group({
    //   Message: ['', Validators.required],
    // }); 

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
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

  // get Message(): AbstractControl {
  //   return this.emailForm.get('Message');
  // }

  // public async SendEmail(): Promise<void> {
  //   if (this.emailForm.valid) {
  //     this.emailSending = true;
  //     const success = await this.emailService.SendEmail(
  //       'subject',
  //       this.Message.value
  //     );
  //     this.emailSending = false;
  //     if (success) {
  //       this.emailSuccesful = true;
  //       this.error = undefined;
  //       this.ClearInput();
  //     } else {
  //       this.emailSuccesful = false;
  //       this.error = 'Something went wrong';
  //     }
  //   } else {
  //     this.emailSuccesful = false;
  //     this.error = 'Message is required';
  //   }
  // }

  // public ClearInput(): void {
  //   this.Message.patchValue('');
  // }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Put here your email sending logic
      console.log(this.contactForm.value);
    } else {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }
}