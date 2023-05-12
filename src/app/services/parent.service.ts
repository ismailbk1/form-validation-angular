import { Injectable } from '@angular/core';
import { parent } from '../models/parent.model';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environement } from '../environement/environement';



@Injectable({
  providedIn: 'root'
})
export class ParentService {
item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
    this.item.subscribe(
    (it)=>{this.counter=it}  )
  }
 
  addParent(parents:any):Observable<parent>{
   return this.httpclt.post<parent>("http://localhost:8095/addUser",parents)}


  increment(){
   this.item.next(this.item.getValue()+1)}

   
  
}
