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

      this.myDate = new Date();
      this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');

      this.dropdownVisible = false

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

      this.generateId();
      this.deviceConnected();

    });

  }

  ngOnInit() {
    this.userId = localStorage.getItem("orgid",)
    this.user = localStorage.getItem("Fishery-username",)
    this.http.get('/list_type_manual').subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
      }
    }, (error: any) => {
      console.log(error);
    }
    );
    this.getList();
    this.getCategoryList();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.hr = hours + 12;

    this.currentDateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    console.log(this.currentDateTime);
  }

  currentDateTime: any;

  currentDate: any = new Date()
  user: any;
  isDisabled: boolean = true;
  userId: any;
  checkoffline: any;
  checkonline: any;
  setpushdata: any = [];
  category: any;
  quality: any;
  price: any;

  counter: any;
  ID: any;
  counterNo: any
  type: any;
  hr: any;

  typelist: any = []
  qualityList = [];
  tableRecodrs: any = []
  buttonDisabled: boolean;
  onlineAlart: any = true;
  offlineAlart: any = false
  dropdownVisible: any = false

  backToPrivios() {
    this.router.navigate(['/biller-auto-record'])
  }

  generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.ID = '_' + Math.random().toString(36).substr(2, 25);
  };


  myDate: any;

  deviceConnected() {
    this.bluetoothSerial.subscribeRawData().subscribe((dt) => {
      this.bluetoothSerial.read().then((dd) => {
        this.onDataReceive(dd);
        this.cdr.detectChanges(); // either here
      });
    });
  }

  onDataReceive(val) {
    var data = JSON.stringify(val)
    this.recivedWeightValue = val;
    var data1 = data.replace('\\r\\n', '')
    this.cdr.detectChanges(); // or here
  }

  recivedWeightValue: any ;

  SelectCounter(data) {
    const formdata = new FormData();
    formdata.append("price", data.price);
    this.counterNo = data.price;

    // for (var i = 0; i <= this.StoreTypeBasedOnCategory.length; i++) {
    //   const listTypeBasedOnCategory = {
    //     Categorypush: this.StoreTypeBasedOnCategory[i].category,
    //     Typepush: this.StoreTypeBasedOnCategory[i].type
    //   }
    //   //console.log(listTypeBasedOnCategory);
    //   if (this.category == listTypeBasedOnCategory.Categorypush) {

    //     this.StoreTypeData.push(listTypeBasedOnCategory.Typepush);

    //   }

    // }
  }


  StoreTypeBasedOnCategory = [];
  StoreTypeData = [];


  SelectCategory(data) {
    this.StoreTypeData = [];
    const formdata = new FormData();
    formdata.append("category", data.category);
    data = {
      category: data.category
    }

    this.http.post('/read_type', data).subscribe((response: any) => {
      console.log(response);

      this.qualityList = response.records;


      // for (var i = 0; i < response.records.length; i++) {
      //   this.cost.push(response.records[i].price);
      //   console.log(this.cost);
      //   var LocalPrice = (JSON.stringify(this.cost));
      //   localStorage.setItem('LocalPrice', LocalPrice);
      // }

    }, (error: any) => {
      console.log(error);

      this.qualityList = [];

    }

    )
  }

  cost: any = "";

  SelectType(data) {
    const formdata = new FormData();
    formdata.append("type", data.type);
    const getPrice = {
      category: this.category,
      quality: data.type,
    }
    this.http.post('/price', getPrice).subscribe((response: any) => {
      this.cost = (response.records.price);
      // for (var i = 0; i < response.records.length; i++) {
      //   this.cost.push(response.records[i].price);
      //   console.log(this.cost);
      //   var LocalPrice = (JSON.stringify(this.cost));
      //   localStorage.setItem('LocalPrice', LocalPrice);
      // }

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  checkboxsts: any = false

  dropdownOpen() {
    this.checkboxsts = true

  }




  listQualityCategory = [];

  getList() {
    this.http.get('/list_price').subscribe((response: any) => {
      this.listQualityCategory = response.records;
      console.log(response);

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





  dosomething(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  value: any;

  NavigateTo() {
    if (this.value == "settings") {
      this.router.navigate(['/settings'])
    } else {
      this.logout()
    }


  }

  navigateToNextPage() {
    this.router.navigate(['/settings'])
  }

  CheckGenerateBillButton = true;
  SetBillerAddItem = [];
  addItem() {
    this.CheckGenerateBillButton = false;
    this.generateId();
    const data = {
      category: this.category,
      id: this.user,
      quality: this.type,
      weight: this.recivedWeightValue,
      counter: this.counter,
      userid: this.userId,
      isDeleted: "0",
      purchaseddate: this.currentDateTime,
      cost: this.cost,
      totalcost: this.cost * this.recivedWeightValue
    }


    console.log(data);
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



  }

  generateBill() {
    this.router.navigate(['/BillerAutobill'])
  }


  navigateToSettings() {
    this.router.navigate(['/settings'])

  }

  logout() {
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
    localStorage.removeItem("printerBluetoothId",)
  }


  deleteID = [];
  DisplayAfterDelete = [];
  delete(id) {
    console.log(id);
    this.deleteID = JSON.parse(localStorage.getItem("SetBillerAddItem"));
    console.log(this.deleteID);

    for (var i = 0; i <= this.deleteID.length; i++) {
      console.log(this.deleteID[i].id);
      if (this.deleteID[i].id == id) {
        console.log(this.deleteID[i]);
        this.deleteID.splice(this.deleteID.findIndex(a => this.deleteID[i] === id), 1)
        console.log(this.deleteID);
        localStorage.removeItem("SetBillerAddItem");
        var SetBillerAddItem = (JSON.stringify(this.deleteID));
        localStorage.setItem('SetBillerAddItem', SetBillerAddItem);
        this.SetBillerAddItem = this.deleteID;
      }

    }

  }
}