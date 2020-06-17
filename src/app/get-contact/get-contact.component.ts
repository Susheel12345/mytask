import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { ContactService } from './../contact.service'
import { Model } from './../model'

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent implements OnInit {
  contacts : Model[];
  constructor( private contactService : ContactService,
    private router : Router ) {
     this.contacts = []
   }

  ngOnInit(){
    this.getAllContacts();
  }
//get all the contacts
  getAllContacts()
  {
    this.contactService.get()
   .subscribe(
   ( res:any ) => {
   this.contacts = res.odata;
   console.log(this.contacts)
   },
   (err) => { })
  }
  
  //delete contact
  onDelete( _id : string ){
    this.contactService.delete( _id )
     .subscribe( res => {
       // after the delete success
      this.getAllContacts();
    })
  }
    
//routing the edit button
  edit( contacts : Model ){
    this.router.navigate([ 'edit/',contacts._id ]);
  }


 
}
