import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginpage',
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
