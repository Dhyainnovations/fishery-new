import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DatePipe } from '@angular/common';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-biller-auto-weighter',
  templateUrl: './biller-auto-weighter.page.html',
  styleUrls: ['./biller-auto-weighter.page.scss'],
})
export class BillerAutoWeighterPage implements OnInit {

  constructor(public datepipe: DatePipe, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, private network: Network, private bluetoothSerial: BluetoothSerial, private cdr: ChangeDetectorRef,) {
    route.params.subscribe(val => {
      this.bluetoothSerial.disconnect();
      this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
      this.myDate = new Date();
      this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
      this.connectedBluetoothID = localStorage.getItem('connectedBluetoothID',);
      this.printerBluetoothId = localStorage.getItem("printerBluetoothId",);
      this.dropdownVisible = false
      this.deviceConnected();
      this.generateId();
      this.CheckPrinterAvailabilty();

    });

  }


  ngOnInit() {
    this.userId = localStorage.getItem("orgid",)
    this.user = localStorage.getItem("Fishery-username",)
    this.http.get('/list_type_manual').subscribe((response: any) => {

      if (response.success == "true") {
      }
    }, (error: any) => {
      console.log(error);
    }
    );
    this.getList();
    this.getCategoryList();
  }

  myDate;
  tdyDate: any;
  hr: any;
  updateTime: any;
  currentDate;
  connectedBluetoothID: any;
  currentDateTime: any;
  user: any;
  isDisabled: boolean = true;
  userId: any;
  checkoffline: any;
  checkonline: any;
  setpushdata: any = [];
  category: any;
  quality: any;
  price: any;
  weight: any;
  counter: any;
  ID: any;
  counterNo: any
  type: any;
  value: any;
  StoreTypeBasedOnCategory = [];
  StoreTypeData = [];
  typelist: any = []
  qualityList = [];
  tableRecodrs: any = []
  buttonDisabled: boolean;
  dropdownVisible: any = false
  cost: any = "";
  printerBluetoothId: any;
  listQualityCategory = [];
  printerAvailable: any = false;
  recivedWeightValue: any;
  deleteID = [];
  DisplayAfterDelete = [];
  showWeight: any = 0;


  backToPrivios() {
    this.router.navigate(['/biller-auto-record'])
  }

  generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.ID = '_' + Math.random().toString(36).substr(2, 25);
  };

  deviceConnected() {
    this.bluetoothSerial.connect(this.connectedBluetoothID).subscribe(this.onSuccess, this.onError);
    this.bluetoothSerial.subscribeRawData().subscribe((dt) => {
      this.bluetoothSerial.read().then((dd) => {
        this.onDataReceive(dd);
      });
    });
  }

  onSuccess() {

  }

  onError() {

  }

  onDataReceive(val) {
    var data = JSON.stringify(val)
    this.recivedWeightValue = Math.round(val * 100) / 100;
  }

  reciveWeight() {
    if (this.recivedWeightValue != 0) {
      this.showWeight = this.recivedWeightValue
    }

  }

  SelectCounter(data) {
    const formdata = new FormData();
    formdata.append("price", data.price);
    this.counterNo = data.price;

  }

  CheckPrinterAvailabilty() {
    if (this.printerBluetoothId != null) {
      this.printerAvailable = false;
    } else {
      this.printerAvailable = true;
    }
  }



  SelectCategory(data) {
    this.StoreTypeData = [];
    const formdata = new FormData();
    formdata.append("category", data.category);
    data = {
      category: data.category
    }
    this.http.post('/read_type', data).subscribe((response: any) => {
      this.qualityList = response.records;
    }, (error: any) => {
      console.log(error);
      this.qualityList = [];
    }
    )
  }



  SelectType(data) {
    const formdata = new FormData();
    formdata.append("type", data.type);
    const getPrice = {
      category: this.category,
      quality: data.type,
    }
    this.http.post('/price', getPrice).subscribe((response: any) => {
      this.cost = (response.records.price);
    }, (error: any) => {
      console.log(error);
    }
    );
  }






  getList() {
    this.http.get('/list_price').subscribe((response: any) => {
      this.listQualityCategory = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  categorylist = [];
  getCategoryList() {
    this.http.get('/list_category',).subscribe((response: any) => {
      this.categorylist = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }


  navigateToNextPage() {
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/settings'])
  }

  CheckGenerateBillButton = true;
  SetBillerAddItem = [];


  addItem() {

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.hr = hours + 12;
    this.currentDate = this.myDate;
    this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    this.CheckGenerateBillButton = false;
    this.generateId();
    var totalcostroundoff = this.cost * this.showWeight;
    const data = {
      category: this.category,
      id: this.user,
      quality: this.type,
      weight: Math.round(this.showWeight * 100) / 100,
      counter: this.counter,
      userid: this.ID,
      isDeleted: "0",
      purchaseddate: this.updateTime,
      cost: Math.round(this.cost * 100) / 100,
      totalcost: Math.round(totalcostroundoff * 100) / 100
    }
    this.SetBillerAddItem.push(data);
    var SetBillerAddItem = (JSON.stringify(this.SetBillerAddItem));
    localStorage.setItem('SetBillerAddItem', SetBillerAddItem);


    //toast
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Item Added Successfully'
    })

    this.showWeight = 0;

  }

  generateBill() {
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/BillerAutobill'])
  }


  navigateToSettings() {
    this.router.navigate(['/settings'])

  }

  logout() {
    localStorage.clear();
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/loginpage'])
  }



  delete(id) {
    this.deleteID = JSON.parse(localStorage.getItem("SetBillerAddItem"));
    for (var i = 0; i <= this.deleteID.length; i++) {
      if (this.deleteID[i].id == id) {
        this.deleteID.splice(this.deleteID.findIndex(a => this.deleteID[i] === id), 1)
        localStorage.removeItem("SetBillerAddItem");
        var SetBillerAddItem = (JSON.stringify(this.deleteID));
        localStorage.setItem('SetBillerAddItem', SetBillerAddItem);
        this.SetBillerAddItem = this.deleteID;
      }
    }
  }
}