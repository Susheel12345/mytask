import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from './../contact.service'
import { Router } from '@angular/router'
import { Model } from './../model'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form : FormGroup;
  constructor( private formBuilder : FormBuilder,
  private contactService : ContactService,
  private router : Router ){

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Phnumber: ['', Validators.required],
    });
  }

  //inserting data to database
  onSubmit( contacts : Model ) {
    console.log("service works",contacts);
    this.contactService.add(contacts)
  }


}
