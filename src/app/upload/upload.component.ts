import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private http:HttpClient, private userService:UserService)
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
   // Create a new FormData instance
   const formData = new FormData();

   // Append the file and name to the form data
   formData.append('file', this.file);
   formData.append('name', this.name);
 
   // Make an HTTP POST request to the upload endpoint
   this.userService.upload(formData).subscribe(
     (response) => {
       // Handle the response
       console.log('Upload successful:', response);
       // Reset the form
       this.name = '';
       this.file = null;
     },
     (error) => {
       // Handle any errors that occur during the request
       console.error('Upload failed:', error);
     }
   );
  
}



}
