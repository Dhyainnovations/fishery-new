import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DatePipe } from '@angular/common';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-biller-weight-manual-dashboard',
  templateUrl: './biller-weight-manual-dashboard.page.html',
  styleUrls: ['./biller-weight-manual-dashboard.page.scss'],
})
export class BillerWeightManualDashboardPage implements OnInit {


  constructor(public datepipe: DatePipe, private bluetoothSerial: BluetoothSerial, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, private network: Network, private alertController: AlertController,) {
    route.params.subscribe(val => {
      this.myDate = new Date();
      this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
      this.todaysDate = this.datepipe.transform(this.myDate, 'dd-MM-yyyy');
      this.dropdownVisible = false
      this.generateId();
      this.printerBluetoothId = localStorage.getItem("printerBluetoothId",);
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


  //VariableDeclaration
  myDate;
  deleteID = [];
  DisplayAfterDelete = [];
  tdyDate: any;
  hr: any;
  updateTime: any;
  currentDate;
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
  counter: any = "1";
  ID: any;
  counterNo: any
  type: any;
  mdy: any;
  typelist: any = []
  qualityList = [];
  tableRecodrs: any = []
  buttonDisabled: boolean;
  onlineAlart: any = true;
  offlineAlart: any = false
  dropdownVisible: any = false
  StoreTypeBasedOnCategory = [];
  StoreTypeData = [];
  cost: any = "";
  categorylist = [];
  value: any;
  listQualityCategory = [];
  CheckGenerateBillButton = true;
  SetBillerAddItem = [];
  printerBluetoothId: any;
  printerAvailable: boolean;
  todaysDate: any;

  //Navigation
  backToPrivios() {
    this.router.navigate(['/biller-weight-manual-record'])
  }


  generateBill() {
    this.router.navigate(['/BillerManualbill'])
  }


  navigateToSettings() {
    this.router.navigate(['/settings'])

  }



  //GenerateUserID
  generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.ID = '_' + Math.random().toString(36).substr(2, 25);
  };

  //CounterSelection
  SelectCounter(data) {
    this.counterNo = data.price;
  }

  //CategorySelection
  SelectCategory(data) {
    this.StoreTypeData = [];
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

  //QualitySelection
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


  getCategoryList() {
    this.http.get('/list_category',).subscribe((response: any) => {
      this.categorylist = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  CheckPrinterAvailabilty() {
    if (this.printerBluetoothId != null) {
      this.printerAvailable = false;
    } else {
      this.printerAvailable = true;
    }
  }

  //AddedItemToStoreInLocalStorage
  addItem() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.hr = hours + 12;
    this.currentDate = this.myDate;
    if (hours < 10) {
      this.updateTime = this.myDate + ' ' + ("0" + hours) + ":" + minutes + ":" + seconds
    } else {
      this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    }

    if (seconds < 10) {
      this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + ("0" + seconds)
    } else {
      this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    }

    if (minutes < 10) {
      this.updateTime = this.myDate + ' ' + hours + ":" + ("0" + minutes) + ":" + ("0" + seconds)
    } else {
      this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    }
    console.log(this.updateTime);

    this.CheckGenerateBillButton = false;
    var totalcostroundoff = this.cost * this.weight;
    this.generateId();

    const data = {
      category: this.category,
      id: this.user,
      quality: this.type,
      weight: Math.round(this.weight * 100) / 100,
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
    //Toast
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
    this.weight = ''
    
  }


  //Logout
  logout() {
    localStorage.clear();
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/loginpage'])
  }

  //DeleteSeparateItem
  delete(id) {
    this.deleteID = JSON.parse(localStorage.getItem("SetBillerAddItem"));
    console.log( this.deleteID);
    console.log(id);
    
    for (var i = 0; i < this.deleteID.length; i++) {
      if (this.deleteID[i].userid == id) {
        this.deleteID.splice(this.deleteID.findIndex(a => this.deleteID[i] === id), 1)
        localStorage.removeItem("SetBillerAddItem");
        var SetBillerAddItem = (JSON.stringify(this.deleteID));
        localStorage.setItem('SetBillerAddItem', SetBillerAddItem);
        this.SetBillerAddItem = this.deleteID;
      }
    }
  }
  async deleterecord(id: any) {

    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are You Sure Want To Delete It?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.delete(id);
          }
        }
      ]
    });
    await alert.present();
  }
}