import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Network } from '@awesome-cordova-plugins/network/ngx';
@Component({
  selector: 'app-biller-report',
  templateUrl: './biller-report.page.html',
  styleUrls: ['./biller-report.page.scss'],
})
export class BillerReportPage implements OnInit {

 
  constructor(private network: Network, public datepipe: DatePipe, public navCtrl: NavController, private http: HttpService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.records()
      this.LoadReadData();
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
    });


    this.LoadReadData()
    this.tableRecodrs = []




    console.log(this.locFromDate, this.locToDate);
  }

  LoadReadData() {
    this.route.queryParams.subscribe(params => {

      this.fromdate = params.fromdate;
      this.todate = params.todate;

      console.log(this.fromdate, this.todate);
    }
    );
  }


  ngOnInit() {

  }
  locLoginType = localStorage.getItem("logintype",)
  locPermission = localStorage.getItem("permission",)

  locFromDate = localStorage.getItem("fromDate",)
  locToDate = localStorage.getItem("toDate",)

  todayDate: any;
  fromdate: any;
  todate: any;

  disableSts: any = false;
  checkoffline: any;
  checkonline: any;
  buttonDisabled: boolean;
  onlineAlart: any = true;
  offlineAlart: any = false

  tableRecodrs: any = []
  totalQuantity;





  dosomething(event) {
    setTimeout(() => {
      event.target.complete();

    }, 1500);
  }


  backToPrivios() {

    console.log(this.locLoginType);
    console.log(this.locPermission);
    

    if (this.locLoginType == "ROLE_ADMIN"){
      
      this.router.navigate(['/admindashboard'])
    }

    if (this.locLoginType == "ROLE_WSHO"){
      if(this.locPermission == "AUTO"){
        this.router.navigate(['/center-weight-auto-record'])
      }
      if(this.locPermission == "MANUAL"){
        this.router.navigate(['/center-weight-manual-record'])
      }

    }


      
  }



  records() {
    const data = {
      from_date: this.locFromDate,
      to_date: this.locToDate
    }

    console.log(data);

    this.http.post('/list_date_manual_weight', data).subscribe((response: any) => {
      console.log(response);
      this.totalQuantity = response.total_quantity
      this.tableRecodrs = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );
  }


}