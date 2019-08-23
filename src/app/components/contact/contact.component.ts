import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted: boolean;
  contact: Contact = {
    firstname: 'First Name',
    lastname: 'Last Name',
    email: 'example@email.com'
  };

  onSubmit(contactForm) {
    console.log(contactForm.value);
    this.submitted = true;
    this.contact = contactForm.value;
  }
}

class Contact {
  firstname: string;
  lastname: string;
  email: string;
}
