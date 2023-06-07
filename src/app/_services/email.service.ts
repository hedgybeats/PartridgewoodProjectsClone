import { Injectable } from '@angular/core';
declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  public async SendEmail(subject: string, body: string): Promise<boolean> {
    const message = await Email.send({
      SecureToken : '2b9627cb-daae-467d-b164-cd5caa4649c6',
      To: 'laytonhedges119@gmail.com',
      From: 'pallettruckrepairsnoreply@gmail.com',
      Subject: subject,
      Body: body,
    });
    if (message === 'OK') {
      return true;
    } else {
      return false;
    }
  }
}