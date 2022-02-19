import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'app-center-manual-weighter',
  templateUrl: './center-manual-weighter.page.html',
  styleUrls: ['./center-manual-weighter.page.scss'],
})
export class CenterManualWeighterPage implements OnInit {
  constructor(public datepipe: DatePipe, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, private network: Network,) {
    route.params.subscribe(val => {
      this.dropdownVisible = false
      this.getCategoryList()
      this.getTypeList()
      this.getLocationList()
      this.records();
      window.addEventListener('offline', () => {
        this.checkoffline = true;
        this.offlineAlart = true
        this.onlineAlart = false;
      });
      window.addEventListener('online', () => {
        this.refresh()
        this.onlineAlart = true;
        this.offlineAlart = false
        this.checkonline = true;
        this.offlineApiCall();

      });

      this.activeItem = ""
      this.type = "center";
  
      this.myDate = new Date();
      this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    });

    

  }

  activeItem: any;


  myDate;
  dateTime() {
    this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
  }

  ngOnInit() {

    this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
    const start = Date.now();
    console.log(start);

    this.user = localStorage.getItem("Fishery-username",)
    console.log(this.user);


  }

  user: any;
  dropdownVisible: any = false;

  // currentDate = new Date();
  tdyDate: any;
  formattedDate;
  today = new Date().toLocaleDateString()
  hr: any;
  updateTime: any;

  currentDateTime: any;
  checkoffline: any;
  checkonline: any;
  setpushdata: any = [];
  category: any;
  type: any;
  place: any;
  location: any;
  weight: any;
  fishQuality: any;
  mdy: any;
  categorylist: any = []
  locationlist: any = []
  typelist: any = []

  tableRecodrs: any = []
  buttonDisabled: boolean;
  onlineAlart: any = true;
  offlineAlart: any = false




  backToPrivios() {
    this.router.navigate(['/center-weight-manual-record'])
  }

  center(val) {
    this.activeItem = "center"
    this.type = val;
    console.log(this.type);

    this.http.get('/list_center_place',).subscribe((response: any) => {
      this.locationlist = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );



  }

  localsale(val) {

    this.type = val;
    console.log(this.type);
    this.activeItem = "localsale"
    console.log(val);
    this.http.get('/list_localsale_place',).subscribe((response: any) => {
      this.locationlist = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );

  }

  

  cardType: any;
  mergesdLocationList: any = []
  market(val) {
    this.type = val;
    console.log(this.type);
    this.activeItem = "market"
    console.log(val);
    this.http.get('/list_market',).subscribe((response: any) => {
      this.locationlist = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );

  }
  merchant(val) {
    this.type = val;
    this.activeItem = "merchant"
    console.log(this.type);
    console.log(val);
    this.http.get('/list_merchant',).subscribe((response: any) => {
      this.locationlist = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );

  }

  offlineApiCall() {
    if (this.checkonline = true) {

      var Getdata = localStorage.getItem("added-items");
      var Decodedata = (JSON.parse((Getdata)));
      for (var i = 0; i < Decodedata.length; i++) {

        var localtype = Decodedata[i].type;
        var localcategory = Decodedata[i].category;
        var localplace = Decodedata[i].place;
        var localquantity = Decodedata[i].quantity;
        var localisDeleted = "0";
        var localboxname = "box"


        const data = {
          type: localtype,
          category: localcategory,
          place: localplace,
          quantity: localquantity,
          isDeleted: localisDeleted,
          boxname: localboxname
        }
        this.http.post('/manual_weight', data).subscribe((response: any) => {
          console.log(response);
          if (response.success == "true") {

          }
        }, (error: any) => {
          console.log(error);
        }
        );

      }
    }
  }



  onlineApiCal() {
    console.log(this.category, this.place, this.type);
    var date = new Date().toLocaleString('en-US', { hour12: true }).split(" ");
    this.tdyDate = date;
    console.log(this.tdyDate);


    // Now we can access our time at date[1], and monthdayyear @ date[0]
    var time = date[1];
    var time_status = date[2];
    console.log(time_status);



    this.mdy = date[0];

    // We then parse  the mdy into parts
    this.mdy = this.mdy.split('/');
    var month = parseInt(this.mdy[1]);
    var day = parseInt(this.mdy[1]);
    var year = parseInt(this.mdy[2]);
    console.log(time_status);

    // Putting it all together
    var formattedDate = year + '-' + month + '-' + day + ' ';
    console.log(formattedDate);

    //console.log(formattedDate);

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.hr = hours + 12;

    this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds
    console.log(this.updateTime);

    const data = {
      quality: this.fishQuality,
      type: this.type,
      category: this.category,
      place: this.place,
      location: this.location,
      quantity: this.weight,
      isDeleted: "0",
      boxname: "box",
      updatedAt: this.updateTime
    }

    console.log(data);


    //----------If Offline----------//
    if (this.checkoffline = true) {
      this.setpushdata.push(data);
      console.log(this.setpushdata);
      var setdata = (JSON.stringify(this.setpushdata));
      localStorage.setItem('added-items', setdata);
    }


    this.http.post('/manual_weight', data).subscribe((response: any) => {
      console.log(response);
      this.dateTime()
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
          title: 'Submited successfully.'
        })

        this.weight = "";

        this.records()
      }

    }, (error: any) => {
      console.log(error);
    }
    );


  }


  SelectType(data) {
    const formdata = new FormData();
    formdata.append("type", data.type);
    this.type = data.type;
  }

  SelectLocation(data) {

    const formdata = new FormData();
    formdata.append("place", data.place);
    let recivedVal = data.place;
    var splitted = recivedVal.split(" - ", 2);
    this.place = splitted[0];

    if (splitted[1] == undefined) {
      this.location = '';
    } else {
      this.location = splitted[1];
    }
    console.log(this.place);
    console.log(this.location);

  }

  StoreTypeBasedOnCategory = [];
  StoreTypeData = [];
  SelectCategory(data) {
    this.StoreTypeData = [];
    const formdata = new FormData();
    formdata.append("category", data.category);
    console.log(data.category);
    this.category = data.category;

    var GetTypeBasedOnCategory = localStorage.getItem('SetTypeBasedOnCategory');
    this.StoreTypeBasedOnCategory = (JSON.parse((GetTypeBasedOnCategory)));

    for (var i = 0; i <= this.StoreTypeBasedOnCategory.length; i++) {
      const listTypeBasedOnCategory = {
        Categorypush: this.StoreTypeBasedOnCategory[i].category,
        Typepush: this.StoreTypeBasedOnCategory[i].type
      }
      //console.log(listTypeBasedOnCategory);
      if (this.category == listTypeBasedOnCategory.Categorypush) {

        this.StoreTypeData.push(listTypeBasedOnCategory.Typepush);
        console.log(this.StoreTypeData);

      }

    }
    console.log(this.StoreTypeData);


  }

  delete(id) {
    console.log(id);

    const data = {
      boxid: id,
      isDeleted: "1"
    }

    this.http.post('/delete_manual_weight', data).subscribe((response: any) => {
      this.tableRecodrs = response.records;
      console.log(response);
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

        this.records()

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

  records() {
    this.http.get('/list_manual_weight',).subscribe((response: any) => {
      this.tableRecodrs = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );
  }



  getCategoryList() {
    var GetCategory = localStorage.getItem('SetCategory');
    this.categorylist = (JSON.parse((GetCategory)));
    //console.log(DisplayCategory);
  }

  getTypeList() {
    var GetType = localStorage.getItem('SetType');
    this.typelist = (JSON.parse((GetType)));

  }

  getLocationList() {
    var GetLocation = localStorage.getItem('SetLocation');
    this.locationlist = (JSON.parse((GetLocation)));
  }

  dosomething(event) {
    setTimeout(() => {
      event.target.complete();

      this.refresh()

    }, 1500);
  }



  checkboxsts: any = false

  dropdownOpen() {
    this.checkboxsts = true
    console.log(this.checkboxsts);

  }

  setting() {
    this.router.navigate(['/settings'])
  }



  refresh() {
    //----------- Category Local Storage --------------//
    this.http.get('/list_category',).subscribe((response: any) => {
      var SetCategory = (JSON.stringify(response.records));
      localStorage.setItem('SetCategory', SetCategory);
    }, (error: any) => {
      console.log(error);
    }
    );

    //----------- Type Local Storage --------------//
    this.http.get('/list_type',).subscribe((response: any) => {
      var SetType = (JSON.stringify(response.records));
      localStorage.setItem('SetType', SetType);
    }, (error: any) => {
      console.log(error);
    }
    );

    //----------- Location Local Storage --------------//
    this.http.get('/list_location',).subscribe((response: any) => {
      var SetLocation = (JSON.stringify(response.records));
      localStorage.setItem('SetLocation', SetLocation);
    }, (error: any) => {
      console.log(error);
    });

  }

  logout() {
    this.dropdownVisible = false
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
  }




}