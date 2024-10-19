// contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  phoneNumber = '+254 705 980 006';
  email = 'info@vinlinkenterprises.com';
  address = '10100 Ronald Ngala Street, Nairobi, Kenya';
  whatsapp = '+254 700 000 000';
}
