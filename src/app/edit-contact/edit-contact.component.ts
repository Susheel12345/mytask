import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from './../contact.service'
import { Model } from '../model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  form : FormGroup;

  //getting id from the router
  _id = this.route.snapshot.paramMap.get('_id')
  
 contacts : Model = { _id : "",Name : "",Email : "",Phnumber : null }
  
 constructor( private formBuilder : FormBuilder,
  private route : ActivatedRoute,
  private contactService : ContactService )
  {
    //validating form
    this.form = this.formBuilder.group({
      _id : [''],
      Name : ['', Validators.required],
      Email : ['', Validators.required],
      Phnumber : ['', Validators.required],
    })
  }
  ngOnInit() {
    this.getdetails( this._id )
  }
  
  //get contact details
  getdetails( _id : string ){
    this.contactService.getContact( this._id )
    .subscribe(
    (res : any) => {
      this.contacts = res.odata;
      console.log(this.contacts,"editcontacts")
      this.Formdata(); 
    },
    (err) => {

    }
    )
  }

  // fetching data from database

  private Formdata() {
    this.form = this.formBuilder.group({
      _id : this.contacts._id,
      Name : this.contacts.Name,
      Email : this.contacts.Email,
      Phnumber : this.contacts.Phnumber
    }); 
  }

  //updating data
  onSubmit( contacts : Model ) {
    console.log("service works",contacts);
    this.contactService.update(contacts)
    .subscribe((res:any) => {
      this.contacts = res.odata;
      console.log(this.contacts,"submit")
    },
    (err) => {})
  }
}





