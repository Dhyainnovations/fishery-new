import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-biller-auto-record',
  templateUrl: './biller-auto-record.page.html',
  styleUrls: ['./biller-auto-record.page.scss'],
})
export class BillerAutoRecordPage implements OnInit {

  constructor(private network: Network, public datepipe: DatePipe, public navCtrl: NavController, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.totalWeight()
      this.totalAmount()
      this.records();
      this.list_manual_bill();
    
      this.user = localStorage.getItem("Fishery-username",)
      console.log(this.user);
      this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
      this.todayBillList()
    });
  }

  ngOnInit() {

  }
  user: any;
  currentDateTime:any;

  buttonDisabled: boolean;


  totalweight: any = '';
  tableRecodrs: any = []
  cardRecords: any = []

  isVisible: any = false
  lastEntryisVisible: any = false

  logout() {
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
    localStorage.removeItem("printerBluetoothId",)
  }

  dosomething(event) {
    setTimeout(() => {
      event.target.complete();

    }, 1500);
  }


  totalWeight() {
    this.http.get('/list_total_bill_weight',).subscribe((response: any) => {
      this.totalweight = response.records.total_weight;
     
      if (response.records.total_weight == null) {
        this.totalweight = 0;
      }


    }, (error: any) => {
      console.log(error);
    }
    );
  }

  totalCost: any;
  totalAmount() {
    this.http.get('/bill_total_amount',).subscribe((response: any) => {
      this.totalCost = response.records.total_amount;
    
      if (response.records.total_amount == null) {
        this.totalCost = 0;
      }


    }, (error: any) => {
      console.log(error);
    }
    );
  }


  displayCardDetails = [];

  navigateToSettings() {
    this.router.navigate(['/settings'])
  }

  list_manual_bill() {
    this.http.get('/list_manual_bill',).subscribe((response: any) => {
      this.lastEntryisVisible = true
      this.displayCardDetails = response.records
    


    }, (error: any) => {
      console.log(error);
      this.lastEntryisVisible = false
      this.isVisible = true

    }
    );
  }

  manualBillList: any = []

  todayBillList() {
    this.http.get('/total_quality_bill_weight',).subscribe((response: any) => {
      this.manualBillList = response.records;
     

    }, (error: any) => {
      console.log(error);
    }
    );
  }



  records() {
    this.http.get('/list_manual_weight',).subscribe((response: any) => {
      this.cardRecords = response.records;
     

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  navigateToNextPage() {
    this.router.navigate(['/BillerAutodashboard'])
  }


  delete(id) {
    const data = {
      bilid: id,
      isDeleted: "1"
    }

    this.http.post('/delete_manual_bill', data).subscribe((response: any) => {

      if (response.success == "true") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
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

        this.list_manual_bill()

      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
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

}