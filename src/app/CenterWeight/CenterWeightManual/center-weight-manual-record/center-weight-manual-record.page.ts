import { Component, OnInit,OnDestroy, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-center-weight-manual-record',
  templateUrl: './center-weight-manual-record.page.html',
  styleUrls: ['./center-weight-manual-record.page.scss'],
})
export class CenterWeightManualRecordPage implements OnInit {

  constructor(private platform: Platform,private network: Network, public datepipe: DatePipe, public navCtrl: NavController, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
      this.totalWeight()
      this.locationBasedWeightRecords()
      this.records()

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

      this.myDate = new Date();

    this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    this.fromdate = this.myDate;
    this.todate = this.myDate
    
    });

    
  }

  myDate:any

  fromdate: any;
  todate: any;
  disableSts: any = false;
  checkoffline: any;
  checkonline: any;
  buttonDisabled: boolean;
  onlineAlart: any = true;
  offlineAlart: any = false

  backButtonSubscription: any;
  ngOnInit() {
    this.user = localStorage.getItem("Fishery-username",)

    this.locationBasedWeightRecords()
  }

  user:any
  currentDateTime: any
  totalweight: any = '';
  tableRecodrs: any = []
  cardRecords: any = []

  isVisible: any = false
  lastEntryisVisible: any = false



  fromDate(val) {
    console.log(val);
    this.fromdate = val

  }

  toDate(val) {
    console.log(val);
    this.todate = val
  }

  dateBasedRecord() {
    this.router.navigate(['/weighter-report'],{ queryParams: { fromdate: this.fromdate, todate: this.todate } })
    localStorage.setItem("fromDate", this.fromdate)
    localStorage.setItem("toDate", this.todate)

  }

  dosomething(event) {
    setTimeout(() => {
      event.target.complete();
      this.totalWeight()
    }, 1500);
  }

  totalWeight() {
    this.http.get('/list_total_manual_weight',).subscribe((response: any) => {
      this.totalweight = response.records.total_weight;

      if (response.records.total_weight == null) {
        this.totalweight = 0;
      }

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  locationBasedWeightRecords() {
    this.http.get('/location_manual_weight',).subscribe((response: any) => {
      this.tableRecodrs = response.records;
      console.log(response);


    }, (error: any) => {
      console.log(error);
    }
    );
  }


  records() {
    this.http.get('/list_manual_weight',).subscribe((response: any) => {
      this.cardRecords = response.records;
      if (this.cardRecords == "No manual weight found.") {
        this.cardRecords = [];
        this.isVisible = true
        this.lastEntryisVisible = false
      } else {

        this.isVisible = false
        this.lastEntryisVisible = true
      }
    }, (error: any) => {
      console.log(error);
      this.cardRecords = [];
      this.isVisible = true
      this.lastEntryisVisible = false

    }
    );
  }


  navigateToNextPage() {
    this.router.navigate(['/centerweight-manual-weighter'])
  }


  delete(id) {
    console.log(id);

    const data = {
      boxid: id,
      isDeleted: "1"
    }

    this.http.post('/delete_manual_weight', data).subscribe((response: any) => {
      this.tableRecodrs = response.records;
      this.locationBasedWeightRecords()
      console.log(response);
      if (response.success == "true") {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Deleted successfully.'
        })

        this.records()
        this.totalWeight()

      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Something went Wrong.'
        })
      }

    }, (error: any) => {
      console.log(error);

    }
    );
  }


  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() { };


  logout() {
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
  }
}