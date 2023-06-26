import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private http:HttpClient)
{}

name: string ='';
file:any;
getName(name: string){
  this.name =name;
}
getFile(event:any){
  this.file =event.target.files[0];
  console.log("file",this.file)
}

submitData()
{
  
}



}
