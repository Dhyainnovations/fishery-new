import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {

  constructor(public datepipe: DatePipe, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, private network: Network,) {
    route.params.subscribe(val => {
      window.addEventListener('offline', () => {
        this.checkoffline = true;
        this.offlineAlart = true
        this.onlineAlart = false;
      });
      window.addEventListener('online', () => {
        this.onlineAlart = true;
        this.offlineAlart = false
        this.checkonline = true;

      });


    this.user = localStorage.getItem("Fishery-username",)

    this.myDate = new Date();

    this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    this.fromdate = this.myDate;
    this.todate = this.myDate
    });

  }

  ngOnInit() {
    this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
  }

  myDate:any

  fromdate: any;
  todate: any;

  currentDateTime: any;


  user: any;

  currentDate = new Date();

  onlineAlart: any = true;
  offlineAlart: any = false;
  checkoffline: any;
  checkonline: any;

  dosomething(event) {
    setTimeout(() => {
      event.target.complete();

      
    }, 1500);
  }
  
  userCreationPage(){
    this.router.navigate(['/admin-usercreation'])
  }


  weighterReportPage(){
    this.router.navigate(['/weighter-report'])

  }

  billerReportPage(){
    this.router.navigate(['/biller-report'])

  }

  logout() {
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
  }

}