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
}