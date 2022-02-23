import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'BillerAutoweighter',
    pathMatch: 'full'
  },


  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPagePageModule)
  },
  {
    path: 'center-weight-auto-record',
    loadChildren: () => import('./CenterWeight/CenterWeightAuto/center-weight-auto-record/center-weight-auto-record.module').then(m => m.CenterWeightAutoRecordPageModule)
  },
  {
    path: 'centerweight-auto-dashboard',
    loadChildren: () => import('./CenterWeight/CenterWeightAuto/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'centerweight-auto-weighter',
    loadChildren: () => import('./CenterWeight/CenterWeightAuto/weighter/weighter.module').then(m => m.WeighterPageModule)
  },

  {
    path: 'weighter-report',
    loadChildren: () => import('./CenterWeight/weighter-report/weighter-report.module').then(m => m.WeighterReportPageModule)
  },
  {
    path: 'centerweight-manual-weighter',
    loadChildren: () => import('./CenterWeight/CenterWeightManual/center-manual-weighter/center-manual-weighter.module').then(m => m.CenterManualWeighterPageModule)
  },
  {
    path: 'center-weight-manual-record',
    loadChildren: () => import('./CenterWeight/CenterWeightManual/center-weight-manual-record/center-weight-manual-record.module').then(m => m.CenterWeightManualRecordPageModule)
  },
  {
    path: 'BillerAutobill',
    loadChildren: () => import('./BillerWeight/BillerWeightAuto/bill/bill.module').then(m => m.BillPageModule)
  },
  {
    path: 'biller-auto-record',
    loadChildren: () => import('./BillerWeight/BillerWeightAuto/biller-auto-record/biller-auto-record.module').then(m => m.BillerAutoRecordPageModule)
  },
  {
    path: 'BillerAutodashboard',
    loadChildren: () => import('./BillerWeight/BillerWeightAuto/biller-auto-dashboard/biller-auto-dashboard.module').then(m => m.BillerAutoDashboardPageModule)
  },
  {
    path: 'BillerAutoweighter',
    loadChildren: () => import('./BillerWeight/BillerWeightAuto/biller-auto-weighter/biller-auto-weighter.module').then(m => m.BillerAutoWeighterPageModule)
  },
  {
    path: 'BillerManualbill',
    loadChildren: () => import('./BillerWeight/BillerWeightManual/biller-weight-manual-bill/biller-weight-manual-bill.module').then(m => m.BillerWeightManualBillPageModule)
  },
  {
    path: 'biller-weight-manual-record',
    loadChildren: () => import('./BillerWeight/BillerWeightManual/biller-weight-manual-record/biller-weight-manual-record.module').then(m => m.BillerWeightManualRecordPageModule)
  },
  {
    path: 'BillerManualdashboard',
    loadChildren: () => import('./BillerWeight/BillerWeightManual/biller-weight-manual-dashboard/biller-weight-manual-dashboard.module').then(m => m.BillerWeightManualDashboardPageModule)
  },
  {
    path: 'biller-report',
    loadChildren: () => import('./BillerWeight/biller-report/biller-report.module').then(m => m.BillerReportPageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admin/admindashboard/admindashboard.module').then(m => m.AdmindashboardPageModule)
  },
  {
    path: 'user-creation',
    loadChildren: () => import('./admin/user-creation/user-creation.module').then(m => m.UserCreationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },













];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
