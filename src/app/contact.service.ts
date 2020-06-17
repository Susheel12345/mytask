import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
 
import { map ,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { Model } from './model'



@Injectable({
  providedIn: 'root'
})

export class ContactService {
  url = 'http://localhost:3001/test/data';
  database = "mongodb"
  dbname = "youcan"
  dbfunction = ['bulkWrite','find','findoneid','updateone','deletebyid']
  collectionname = "susheelnew"
  contacts : Model[] ;
  constructor( private http : HttpClient ) {

  }

  // get the contactslist from the database
  get(){
    return this.http.post(`${this.url}`,
    {
      "database" : this.database, 
      "database_function" : this.dbfunction[1] ,
      "dbname" : this.dbname,
      "collectionName" : this.collectionname,
      "data" : {} 
    })
    .pipe(catchError(this.handleError))
  }

  //creating contact and inserting to the database
  add(contacts:Model) {
    return this.http.post(`${this.url}`,
    {
      "database" : this.database,
      "database_function" : this.dbfunction[0] , 
      "dbname" : this.dbname,        	
      "collectionName" : this.collectionname, 
      "take" : {"insertOne" : {"document" : contacts }}
    })
    .pipe(catchError(this.handleError))
    .subscribe( res => {
      console.log("done",res)
    })
  }
    
   // get contact by id from the database 
  getContact( _id : string ){
    return this.http.post(`${this.url}`,
    { 
      "database" : this.database, 
      "database_function" : this.dbfunction[2], 
      "dbname" : this.dbname,
      "collectionName" : this.collectionname,
      "data" : { "_id": _id}
    })
  }

  // put( data:ContactDetails) {
    
  //   let index=this.contacts.findIndex(i => i.id === data.id);
  //   this.contacts[index] = data;
  //   this.put(data)
  // }

  // delete the contact
  delete( _id : string ) {
    return this.http.post(`${this.url}`,
    { "database" : this.database,
      "database_function" : this.dbfunction[4] , 	
      "dbname" : this.dbname,        	
      "collectionName" : this.collectionname, 
      "data" : { "_id" : _id}
    })
  }

  //updating the data
  update( contacts : Model ) {
    return this.http.post(`${this.url}`,
    {
      "database" : this.database,
      "database_function" : this.dbfunction[3] , 
      "dbname" : this.dbname,        	
      "collectionName" : this.collectionname, 
      "filter" : { "_id" : contacts._id },
      "update" : {"Name" : contacts.Name,"Email" : contacts.Email,"Phnumber" : contacts.Phnumber}
    })
  }


 //error handling
  private handleError( error : HttpErrorResponse ) {
      console.log(error.message);
      return throwError('A data error occurred, please try again ')
  }
}






