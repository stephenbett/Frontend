import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})


export class ApplicationComponent implements  OnInit {

  applicants:any= [];

  constructor(
              private applicantservice : DataService,
              private dialog: MatDialog ,
              private route:Router
              )
  {}
  ngOnInit(): void {
    this.refreshAppliantList()
  }
  updateClick(){}
  // :void{
  //   this.dialog.open(UpdateComponent, {
  //     width: '500px',
  //     disableClose: true
  //     });
  // }   

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
    
  }

