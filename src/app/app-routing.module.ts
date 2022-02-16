import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },


  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
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
    loadChildren: () => import('./CenterWeight/weighter-report/weighter-report.module').then( m => m.WeighterReportPageModule)
  },
  {
    path: 'centerweight-manual-weighter',
    loadChildren: () => import('./CenterWeight/CenterWeightManual/center-manual-weighter/center-manual-weighter.module').then( m => m.CenterManualWeighterPageModule)
  },
  {
    path: 'center-weight-manual-record',
    loadChildren: () => import('./CenterWeight/CenterWeightManual/center-weight-manual-record/center-weight-manual-record.module').then( m => m.CenterWeightManualRecordPageModule)
  },








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
