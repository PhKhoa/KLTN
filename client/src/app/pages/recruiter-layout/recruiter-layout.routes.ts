import { RecruiterLayoutComponent } from './recruiter-layout.component';
import { Routes } from '@angular/router';

export const RECRUITERLAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: RecruiterLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      // {
      //   path:'**',
      //   redirectTo: 'login',
      //   pathMatch: 'full',
      // },
      {
        path: 'job-posting',
        loadChildren: () =>
          import('./job-posting/job-posting.routes').then((m) => m.JOBPOSTING_ROUTERS),
      },
      {
        path: 'job-detail',
        loadChildren: () =>
          import('./job-detail/job-detail.routes').then((m) => m.JOBDETAIL_ROUTERS),
      },
      {
        path:'choice-service',
        loadChildren: () =>
          import('./choice-service/choice-service.routes').then((m) => m.CHOICESERVICE_ROUTERS),
      },
      {
        path:'application-list',
        loadChildren: () =>
          import('./application-list/application-list.routes').then((m) => m.APPLICATIONLIST_ROUTERS),
      },
      {
        path:'login',
        loadChildren: () =>
          import('./login/login.routes').then((m) => m.LOGIN_ROUTERS),
      },
      {
        path:'register',
        loadChildren: () =>
          import('./register/register.routes').then((m) => m.REGISTER_ROUTERS),
      },
      {
        path:'create-company',
        loadChildren: () =>
          import('./create-company/create-company.routes').then((m) => m.CREATECOMPANY_ROUTERS),
      },
      {
        path:'basic-information',
        loadChildren: () =>
          import('./basic-information/basic-information.routes').then((m) => m.BASICINFORMATION_ROUTERS),
      },
      {
        path:'statistical',
        loadChildren: () =>
          import('./statistical/statistical.routes').then((m) => m.STATISTICAL_ROUTERS),
      },
      {
        path:'payment',
        loadChildren: () =>
          import('./payment/payment.routes').then((m) => m.PAYMENT_ROUTERS),
      },
      {
        path:'payment-success',
        loadChildren: () =>
          import('./payment-success/payment-success.routes').then((m) => m.PAYMENTSUCCESS_ROUTERS),
      },
      {
        path:'forgot-pass',
        loadChildren: () =>
          import('./forgot-pass/forgot-pass.routes').then((m) => m.FORGOTPASS_ROUTERS),
      },
      {
        path:'account-management',
        loadChildren: () =>
          import('./account-management/account-management.routes').then((m) => m.ACCOUNTMANAGEMENT_ROUTERS),
      },
      {
        path:'confirm-mail',
        loadChildren: () =>
          import('./confirm-mail/confirm-mail.routes').then((m) => m.CONFIRMMAIL_ROUTERS),
      },
      {
        path:'profile',
        loadChildren: () =>
          import('./profile/profile.routes').then((m) => m.PROFILE_ROUTERS),
      }
    ],
  },

];