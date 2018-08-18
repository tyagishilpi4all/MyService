import {Injectable} from '@angular/core';

@Injectable()
export class PostService{
    add(a,b){
        return parseInt(a)+parseInt(b);
    }
    subtract(a, b){
        return a-b;
    }
}
