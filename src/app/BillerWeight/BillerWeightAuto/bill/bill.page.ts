import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
//import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.GetBillDataFromLocalStorage();

    });

  }

  ngOnInit() {
    this.name = localStorage.getItem("Fishery-username",)
    this.location = localStorage.getItem("orgid",)
  }
  currentDate = new Date();

  name: any;
  location: any;
  price: any = [];
  totalsum: any = "";
  backToPrivious() {
    this.router.navigate(['/BillerManualdashboard'])
  }



  purchaseddate: any;
  counter: any;
  userid: any;
  passBillItems: any = []
  printBill() {
    this.billWeight();
    const data = {
      billitems: this.passBillItems,
      totalamount: this.totalsum,
      counter: this.counter,
      userid: this.userid,
      isDeleted: "0",
      purchaseddate: this.purchaseddate,
    }

    this.http.post('/manual_bill', data).subscribe((response: any) => {
      console.log(response);
      // if (response.success == "true") {
      //   this.printer.isAvailable().then(this.onSuccess, this.onError);

      //   let options: PrintOptions = {
      //     name: 'MyDocument',
      //     duplex: true,
      //     orientation: 'landscape',
      //     monochrome: true
      //   }
      //   let content = document.getElementById('print-section').innerHTML;
      //   this.printer.print(content, options).then(this.onSuccess, this.onError);


      // }
    }, (error: any) => {
      console.log(error);
    }
    );
    localStorage.removeItem("SetBillerAddItem");
    this.router.navigate(['/BillerAutoweighter'])
  }

  onSuccess() {
    alert("Successfully Printed");
  }

  onError(error) {
    alert(error + "Print Failed")
  }
  GetBillDataFromLocalStorageData: any = [];

  GetBillDataFromLocalStorage() {
    var GetBillerAddItem = localStorage.getItem("SetBillerAddItem");
    console.log(GetBillerAddItem);
    var DecodeBillerData = (JSON.parse((GetBillerAddItem)));
    console.log(DecodeBillerData);
    for (var i = 0; i < DecodeBillerData.length; i++) {
      var localcategory = DecodeBillerData[i].category
      var localcounter = DecodeBillerData[i].counter
      var localid = DecodeBillerData[i].id;
      var localisDeleted = DecodeBillerData[i].isDeleted;
      var localprice = DecodeBillerData[i].cost;
      var localpurchaseddate = DecodeBillerData[i].purchaseddate;
      var localquality = DecodeBillerData[i].quality;
      var localuserid = DecodeBillerData[i].userid;
      var localweight = DecodeBillerData[i].weight;

      const SendData = {
        category: localcategory,
        counter: localcounter,
        id: localid,
        isDeleted: localisDeleted,
        purchaseddate: localpurchaseddate,
        price: localprice,
        quality: localquality,
        userid: localuserid,
        weight: localweight,
        totalcost: localprice * localweight,
      }
      const SendPushData = {
        id: localid,
        price: localprice,
        quality: localquality,
        weight: localweight,
      }

      this.billWeightData = {
        id: localid,
        price: localprice,
        weight: localweight,
        quality: localquality,
        totalamount: localprice * localweight,
        counter: localcounter,
        userid: localid,
        isDeleted: localisDeleted,
        purchaseddate: localpurchaseddate,
      }

      this.price.push(SendData.totalcost);
      var sum = this.price.reduce((a, b) => {
        return a + b;
      });



      console.log(sum);
      this.totalsum = sum;
      this.userid = SendData.id;
      this.purchaseddate = SendData.purchaseddate;
      this.counter = SendData.counter;
      this.passBillItems.push(SendPushData);
      this.GetBillDataFromLocalStorageData.push(SendData);
      console.log(this.GetBillDataFromLocalStorageData);
    }
  }


  billWeightData: any = {}
  billWeight() {
    this.http.post('/bill_weight', this.billWeightData).subscribe((response: any) => {
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );
  }


}