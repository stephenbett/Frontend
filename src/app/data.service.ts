import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private course_apiUrl = 'https://localhost:44395/api/';

  private  applicant_apiurl = 'https://localhost:44395/api/'
  
    constructor(private http: HttpClient) { }
  
    getCourses(): Observable<any> {
      return this.http.get(this.course_apiUrl + "Courses");
    }

    
    getApplicants(){
      return  this.http.get(this.applicant_apiurl +"applicant")
    }

    addApplicant(val:any){
      return this.http.post(this.applicant_apiurl +'applicant',val)
    }
    
    updateApplicant(val: any){
      return this.http.put(this.applicant_apiurl + 'updateApplicant',val)
    }
    
    deleteApplicant(val:any){
      return this.http.delete(this.applicant_apiurl+'applicant?key='+val);
    }
  
}
