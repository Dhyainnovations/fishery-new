import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../weighter/./../../../shared/http.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { commands } from '../../../providers/printcommand/printcommand'
import { vsprintf } from 'sprintf-js'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-biller-auto-record',
  templateUrl: './biller-auto-record.page.html',
  styleUrls: ['./biller-auto-record.page.scss'],
})
export class BillerAutoRecordPage implements OnInit {

  constructor(public datepipe: DatePipe, public navCtrl: NavController, private alertController: AlertController, private bluetoothSerial: BluetoothSerial, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.printerBluetoothId = localStorage.getItem("printerBluetoothId",);

      this.totalAmount()
      this.records();
      this.list_manual_bill();
      this.connectedBluetoothID = localStorage.getItem('connectedBluetoothID',);
      this.user = localStorage.getItem("Fishery-username",)
      console.log(this.user);
      this.currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd hh:mm:ss');
      this.todayBillList()
      this.tableRecords()
      this.CheckPrinterAvailabilty();
    });
  }

  ngOnInit() {

  }
  printerBluetoothId: any;
  user: any;
  currentDateTime: any;
  buttonDisabled: boolean;
  currentDate: any;
  connectedBluetoothID: any;
  totalweight: number = 0;
  tableRecodrs: any = []
  cardRecords: any = []
  isVisible: any = false
  lastEntryisVisible: any = false
  totalCost: any;
  displayCardDetails = [];
  jsonData = [];
  price: any = [];
  totalsum: any;
  printerAvailable: any = false;
  logout() {
    localStorage.clear();
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/loginpage'])

  }

  dosomething(event) {
    setTimeout(() => {
      event.target.complete();

    }, 1500);
  }


  onSuccess() { }

  onError() { }


  print() {
    this.printData();
    this.bluetoothSerial.connect(this.printerBluetoothId).subscribe(this.onSuccess, this.onError);
    const items = item => ({
      quality: item.quality,
      weight: item.weight,
      price: item.price,
      totalcost: item.totalcost,
    })
    let product = this.jsonData.map(items)

    //Calculate the total price of the items in an object
    let totalPrice = this.totalCost

    let company = "Sakthi & Co"
    let biller = this.user
    let time = this.currentDateTime;
    let receipt = ""
    receipt += commands.TEXT_FORMAT.TXT_WIDTH[2]
    receipt += "\x1b\x45\x01 \x00" + company + "\x1b\x45\x00"
    receipt += "\x1b\x45\x01 \x00" + "Today's Sales" + "\x1b\x45\x00"
    receipt += '\n'
    receipt += "\x00" + time + "\x00"

    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += commands.HORIZONTAL_LINE.HR_58MM
    receipt += '\n'
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE
    receipt += '\x1B' + '\x61' + '\x30'// left align
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
  }

  printText(receipt) {
    alert(receipt)
    this.bluetoothSerial.write(receipt);
  }





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

  CheckPrinterAvailabilty() {
    if (this.printerBluetoothId != null) {
      this.printerAvailable = false;
    } else {
      this.printerAvailable = true;
    }
  }


  navigateToSettings() {
    this.bluetoothSerial.disconnect();
    this.router.navigate(['/settings'])
  }

  list_manual_bill() {
    this.http.get('/list_manual_bill',).subscribe((response: any) => {
      console.log(response.message);
      this.lastEntryisVisible = true
      this.displayCardDetails = response.records;
      console.log(response.records.length);
      this.lastEntryisVisible = true
      this.isVisible = false
    }, (error: any) => {
      console.log(error);
      this.lastEntryisVisible = false;
      this.isVisible = true;
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

  tableRec = [];
  printBtn: any;
  tableRecords() {
    this.currentDate = this.datepipe.transform((new Date), 'yyyy-MM-dd');
    const data = {
      "from_date": this.currentDate,
      "to_date": this.currentDate,
      "userid": this.user
    }

    console.log(data);
    this.http.post('/list_localsale_date_manual_bill', data).subscribe((response: any) => {
      this.tableRec = response.records;
      console.log(response.records);
      this.totalweight = 0;
      for (var i = 0; i <= response.records.length; i++) {
        console.log(response.records[i].weight);
        this.totalweight += parseInt(response.records[i].weight);
      }
      if (this.tableRec.length < 0) {
        this.printBtn = true;
      } else {
        this.printBtn = false;
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  async deleterecord(id: any) {

    const alert = await this.alertController.create({
      header: 'Connect',
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

  printData() {
    this.jsonData = [];
    for (var i = 0; i < this.tableRec.length; i++) {
      var localquality = this.tableRec[i].quality;
      var localweight = this.tableRec[i].weight;
      var localTotalCost = this.tableRec[i].totalamount;
      var pricekg = this.tableRec[i].price;
      const printData = {
        quality: localquality,
        weight: localweight,
        price: pricekg,
        totalcost: localTotalCost,
      }
      this.jsonData.push(printData);
    }
  }

  async printConfirmation() {

    const alert = await this.alertController.create({
      header: 'Print',
      message: 'Are You Sure Want To Print It?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Print',
          handler: () => {
            this.printData();
          }
        }
      ]
    });
    await alert.present();
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

    if (this.connectedBluetoothID != null) {
      this.router.navigate(['/BillerAutoweighter'])
    } else {
      this.router.navigate(['/BillerAutodashboard'])
    }

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
        this.totalweight = 0;
        this.list_manual_bill();
        this.tableRecords();
        this.totalAmount();
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