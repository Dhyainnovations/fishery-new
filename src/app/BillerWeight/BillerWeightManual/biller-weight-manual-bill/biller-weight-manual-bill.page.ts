import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { DatePipe } from '@angular/common';
import { commands } from '../../../providers/printcommand/printcommand'
import { vsprintf } from 'sprintf-js'


declare var bluetoothSerial: any
@Component({
  selector: 'app-biller-weight-manual-bill',
  templateUrl: './biller-weight-manual-bill.page.html',
  styleUrls: ['./biller-weight-manual-bill.page.scss'],
})
export class BillerWeightManualBillPage implements OnInit {


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, private alertController: AlertController, private bluetoothSerial: BluetoothSerial, public datepipe: DatePipe) {
    route.params.subscribe(val => {
      this.GetBillDataFromLocalStorage();
      this.printerBluetoothId = localStorage.getItem("printerBluetoothId",);
      this.myDate = new Date();
      this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');

    });

  }


  ngOnInit() {
    this.name = localStorage.getItem("Fishery-username",)
    this.location = localStorage.getItem("orgid",)
  }
  currentDate = new Date();

  printerBluetoothId: any;
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
  passBillItems: any = [];
  hr: any;
  updateTime: any;
  myDate: any;

  printBill() {
    this.bluetoothSerial.connect(this.printerBluetoothId).subscribe(this.onSuccess, this.onError);
    const items = item => ({
      quality: item.quality,
      weight: item.weight,
      price: item.price,
      totalcost: item.totalcost,
    })
    let product = this.jsonData.map(items)

    //Calculate the total price of the items in an object
    let totalPrice = this.totalsum

    let company = "Sakthi & Co"
    let counter = this.billWeightData.counter
    let biller = this.name
    let time = this.purchaseddate;
    let receipt = ""
    receipt += commands.TEXT_FORMAT.TXT_WIDTH[2]
    receipt += "\x1b\x45\x01 \x00" + company + "\x1b\x45\x00"
    receipt += '\n'
    receipt += "\x00" + time + "\x00"

    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += commands.HORIZONTAL_LINE.HR_58MM
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += '\x1B' + '\x61' + '\x30'// left align
    receipt += vsprintf("%-17s %3s %10s\n", ["Counter", "", counter])
    receipt += vsprintf("%-17s %3s %10s\n", ["Biller", "", biller])
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_RT
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += commands.HORIZONTAL_LINE.HR2_58MM
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT
    receipt += '\x1b\x45\x01' + vsprintf("%-17s %3s %10s \n", ["Item", "", "Price(Rs.)"])

    for (var pro in product) {
      if (product.hasOwnProperty(pro)) {
        var item = product[pro]
        var itemquality = item.quality
        var itemweight = item.weight
        var itemperkg = item.price
        var itemtotal = item.totalcost
        receipt += vsprintf("%-17s %3s %10.2f\n", [this.formatTextWrap(itemquality, 16), "", itemtotal])
        receipt += '\x1b\x61\x00' + "-" + " " + itemweight + " Kgs"
        receipt += '\n'
        receipt += '\x1b\x61\x00' + "-" + " " + "Rs." + itemperkg + " /kg"
        receipt += '\n'

      }
      receipt += '\n'
    }
    // receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT
    // receipt += commands.TEXT_FORMAT.TXT_FONT_A
    // receipt += commands.HORIZONTAL_LINE.HR2_58MM
    // receipt += vsprintf("%-17s %3s %10.2f\n", ["Total Price", "", totalPrice])
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += '\x1B' + '\x61' + '\x30'// left align
    receipt += commands.HORIZONTAL_LINE.HR2_58MM
    receipt += '\n'
    receipt += '\x1b\x45\x01' + vsprintf("%-17s %3s %10s\n", ["Total Amount(Rs)", "", totalPrice])
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_RT
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_FONT_A
    receipt += commands.HORIZONTAL_LINE.HR2_58MM
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_FONT_B
    receipt += '\x1b\x61\x01' + 'Thank you, visit again!' + '\x0a\x0a\x0a\x0a' //The unicode symbols are for centering the text
     this.printText(receipt)


    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.hr = hours + 12;

    this.updateTime = this.myDate + ' ' + hours + ":" + minutes + ":" + seconds


    this.billWeight();
    const data = {
      billitems: this.passBillItems,
      totalamount: this.totalsum,
      counter: this.counter,
      userid: this.userid,
      isDeleted: "0",
      purchaseddate: this.updateTime,
    }

    this.http.post('/manual_bill', data).subscribe((response: any) => { 
      if (response.success == "true") {
        localStorage.removeItem("SetBillerAddItem");
        this.router.navigate(['/biller-weight-manual-record'])
      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }


  printText(receipt) {
    alert(receipt)
    this.bluetoothSerial.write(receipt);
  }




  jsonData = [];

  onSuccess() {
    alert("Successfully Printed");
  }

  onError(error) {
    alert(error + "Print Failed")
  }

  GetBillDataFromLocalStorageData: any = [];

  GetBillDataFromLocalStorage() {
    var GetBillerAddItem = localStorage.getItem("SetBillerAddItem");
    var DecodeBillerData = (JSON.parse((GetBillerAddItem)));

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
      var localTotalCost = DecodeBillerData[i].totalcost;
      const printData = {
        quality: localquality,
        weight: localweight,
        price: localprice,
        totalcost: localTotalCost,
        purchaseddate: localpurchaseddate,
      }

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
        totalcost: localTotalCost,
      }
      const SendPushData = {
        id: localuserid,
        price: localprice,
        quality: localquality,
        weight: localweight,
      }

      this.billWeightData = {
        id: localuserid,
        price: localprice,
        weight: localweight,
        quality: localquality,
        totalamount: localTotalCost,
        counter: localcounter,
        userid: localid,
        isDeleted: localisDeleted,
        purchaseddate: this.updateTime,
      }

      this.price.push(SendData.totalcost);
      var sum = this.price.reduce((a, b) => {
        return a + b;
      });




      this.totalsum = sum;
      this.userid = SendData.id;
      this.purchaseddate = SendData.purchaseddate;
      this.counter = SendData.counter;
      this.passBillItems.push(SendPushData);
      this.jsonData.push(printData);
      this.GetBillDataFromLocalStorageData.push(SendData);
    }
  }


  billWeightData: any = {}
  billWeight() {
    this.http.post('/bill_weight', this.billWeightData).subscribe((response: any) => {
 

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  //PrintFunction
  formatTextWrap(text, maxLineLength) {
    const words = text.replace(/[\r\n]+/g, ' ').split(' ');
    let lineLength = 0;

    // use functional reduce, instead of for loop 
    return words.reduce((result, word) => {
      if (lineLength + word.length >= maxLineLength) {
        lineLength = word.length;
        return result + `\n${word}`; // don't add spaces upfront
      } else {
        lineLength += word.length + (result ? 1 : 0);
        return result ? result + ` ${word}` : `${word}`; // add space only when needed
      }
    }, '');
  }



}