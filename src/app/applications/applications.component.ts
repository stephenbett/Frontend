import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateComponent } from '../update/update.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})


export class ApplicationComponent implements  OnInit {

  users: any=[];
 applicants:any= [];
course: any=[]
  constructor(
              private applicantservice : DataService,
              private userservice :UserService,
              private dialog: MatDialog ,
              private route:Router
              )
  {}
  ngOnInit(): void {
    this.refreshAppliantList()
  }

  // updateClick(applicants:any):void{
  //   this.dialog.open(UpdateComponent, {
  //     width: '500px',
  //     disableClose: true,
  //     data:{
  //       coursesdata:this.course,
  //       applicantsdata:this.applicants
  //       }
  //     });
  // }   

  updateClick(users:any):void{
    this.dialog.open(UpdateComponent, {
      width: '500px',
      disableClose: true,
      data:users
      });
  }   

  sendApproval()
  {

  }

  deleteClick(item:any){
    this.applicantservice.deleteApplicant(item).subscribe((response) => {
      this.refreshAppliantList()

    })
    
   
  }

  refreshAppliantList(){
    this.applicantservice.getApplicants().subscribe(data=>{this.applicants=data});
    }

    register() {
      this.userservice.register(this.users).subscribe(info=>{this.users=info});
    }
    
  }

