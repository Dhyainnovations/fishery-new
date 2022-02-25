import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private platform: Platform, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute,) {
    route.params.subscribe(val => {
      this.Locallogintype = localStorage.getItem("logintype",)
      this.Localpermission = localStorage.getItem("permission",)
      setTimeout(() => {
        if (this.Locallogintype) {
          this.checkToNavigate()
        }
        else if (this.Locallogintype == null) {
          this.router.navigate(['/loginpage'])
        }

      }, 2500)

    });

  }

  ngOnInit() {

  }


  username: any;
  password: any;
  orgid: any;
  userName: any;
  logintype: any;
  permission: any;
  LocalOrgid: any;
  LocaluserName: any;
  Locallogintype: any;
  Localpermission: any;
  backButtonSubscription: any;

  login() {

    const Data = {
      id: this.username,
      password: this.password
    }


    this.http.post('/login', Data).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.orgid = response.orgid,
          this.username = response.id,
          this.logintype = response.loginType,
          this.permission = response.permission,
          console.log(this.orgid, this.logintype);
        localStorage.setItem("orgid", this.orgid)
        localStorage.setItem("Fishery-username", this.username)
        localStorage.setItem("logintype", this.logintype)
        localStorage.setItem("permission", this.permission)

        if (response.success == "true") {
          this.username = ""
          this.password = ""
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
            title: 'Signed in successfully'
          })


          this.LocalOrgid = (localStorage.getItem("orgid"));
          this.LocaluserName = (localStorage.getItem("Fishery-username"));
          this.Locallogintype = (localStorage.getItem("logintype"));
          this.Localpermission = (localStorage.getItem("permission"));
          console.log(this.Locallogintype);
          console.log(this.Localpermission);  
          this.checkToNavigate();
        }


      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: 'Please enter a valid email (or) password'
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


  checkToNavigate() {
    //-------biller login check----------//

    if (this.Locallogintype == "ROLE_LOCALSALE") {

      //---------- Auto or Manual Checking -----------//

      if (this.Localpermission == "MANUAL") {
        this.router.navigate(['/biller-weight-manual-record'])
      }

      if (this.Localpermission == "AUTO") {
        this.router.navigate(['/biller-auto-record'])
      }
    }

  }

}