import { Component } from "@angular/core";
import {PostService} from '../../service/service';
@Component({
selector:'child-comp',
templateUrl:'./child.component.html',
styleUrls:['./child.component.scss'],
providers:[PostService]
})

export class Child{
    result:number;
    subRes:number;
    postservice:any;
      
    constructor(private post:PostService){

    } 

    add1( first , second){
    console.log("first number is" , first , second)
   this.result= this.post.add(first, second);
 }
}