import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items = ["Assignment", "Game", "Study"]
   newItem = "";
   updatedItem ="";
   IsForUpdate: boolean = false;
 

  pushItem = function(){
   if(this.newItem != ""){
    this.items.push(this.newItem);
    this.newItem ="";
}
}

 removeItem = function(i){
	this.items.splice(i,1);
	
	}
	
editItem = function(i) {  
   this.newItem = this.items[i];  
   this.updatedItem = i;
   this.IsForUpdate = true;
  
   }
  
UpdateItem = function() {  
   let data = this.updatedItem;  
   for (let i = 0; i < this.items.length; i++) {  
    if (i == data) {  
      this.items[i] = this.newItem;  
    }  
   }  
   this.IsForUpdate = false; 
   this.newItem = "";  
}  
   
}

