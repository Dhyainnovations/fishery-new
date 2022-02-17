import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biller-auto-dashboard',
  templateUrl: './biller-auto-dashboard.page.html',
  styleUrls: ['./biller-auto-dashboard.page.scss'],
})
export class BillerAutoDashboardPage implements OnInit {


  constructor(private router: Router, private bluetoothSerial: BluetoothSerial, private alertController: AlertController, private cdr: ChangeDetectorRef, route: ActivatedRoute,) {
    route.params.subscribe(val => {

      this.user = localStorage.getItem("Fishery-username",)
      console.log(this.user);
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
    this.CheckBluetoothIsConnected();
  }

  ngOnInit() {
  }


  onlineAlart: any = true;
  checkonline: any;
  offlineAlart: any = false;
  checkoffline: any;


  backToPrivios() {
    this.router.navigate(['/biller-auto-record'])
  }


  //ScanBluetoothDevice
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: boolean;


  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    const unPair = [];
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      success.forEach((value, key) => {
        var exists = false;
        unPair.forEach((val2, i) => {
          if (value.id === val2.id) {
            exists = true;
          }
        });
        if (exists === false && value.id !== '') {
          unPair.push(value);
        }
      });
      this.unpairedDevices = unPair;
      this.gettingDevices = false;
    },
      (err) => {
        console.log(err);
      });

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      });
  }

  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    await alert.present();
  }



  async selectDevice(id: any) {

    const alert = await this.alertController.create({
      header: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    await alert.present();
  }


  success = (data) => {
    alert("Successfully Connected");
    this.router.navigate(['/centerweight-auto-weighter']);

  }
  fail = (error) => {
    alert(error);
  }


  CheckBluetoothIsConnected() {
    this.bluetoothSerial.isEnabled().then(
      () => {
        this.bluetoothtoggle = true;
      },
      () => {
        this.bluetoothtoggle = false;
      }
    )
  }

  bluetoothtoggle: any = false;

  enablebluetooth() {
    this.bluetoothSerial.enable().then(
      () => {
        alert("Bluetooth is enabled");
        this.startScanning();
      }, () => {
        alert("The user did not enable Bluetooth");
      }
    );
  }
  navigateToSettings() {
    this.router.navigate(['/settings'])
  }



  user: any = "";

  logout() {
    localStorage.removeItem("orgid",)
    localStorage.removeItem("Fishery-username",)
    localStorage.removeItem("logintype",)
    localStorage.removeItem("permission",)
    this.router.navigate(['/loginpage'])
  }
}