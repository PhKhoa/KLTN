import { Component, OnInit } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { Router,NavigationStart,RouterLink } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { Candidate } from '../../../models/candidate.model';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { Store } from '@ngrx/store';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaigaModule,RouterLink,ShareModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent implements OnInit{
  selectedTab!: string; // Thuộc tính để lưu trữ tên của tab hiện đang được chọn
  activeItemIndex = 0;
  isLogin = false;
  userLogged : Candidate = <Candidate>{};
  //ngrx of candidate
  isChangeState$ = this.store.select('candidate','isChangeState');

  constructor (
    private router: Router,
    private store: Store<{ candidate: candidateState }>,
  ) {
    if (this.router.url.includes('/home')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/job')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/company')) {
      this.activeItemIndex = 2;
    } else if (this.router.url.includes('/profile')) {
      this.activeItemIndex = 3;
    } else if (this.router.url.includes('/apply-list')) {
      this.activeItemIndex = 4;
    } 

    this.isChangeState$.subscribe((state) => {
      if(state){
        let userLogged = sessionStorage.getItem('userLogged');
        if(userLogged){
          let userAfterParse = JSON.parse(userLogged);
          if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
            console.log('userLogged',userLogged);
            this.isLogin = true;
            this.userLogged = userAfterParse;
          }
        }
      }
    });

  }

  ngOnInit(): void {
    console.log('navigation');
    console.log(this.isLogin);
    
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged);
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
        console.log('userLogged',userLogged);
        this.isLogin = true;
        this.userLogged = userAfterParse;
      }
    }

    this.router.events.subscribe((event) => {
      ('navigation')
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url === '/home') {
          this.activeItemIndex = 0;
        } else if (url.startsWith('/job')) {
          this.activeItemIndex = 1;
        } else if (url.startsWith('/company')) {
          this.activeItemIndex = 2;
        } else if (url.startsWith('/profile')) {
          this.activeItemIndex = 3;
        } else if (url.startsWith('/apply-list')) {
          this.activeItemIndex = 4;
        }
      }
    });
  }

  onTabClick(tabName: string) {
    this.selectedTab = tabName; 
    switch (tabName) {
      case 'home':
        this.router.navigate(['/']); 
        break;
      case 'job':
        this.router.navigate(['/job']); 
        break;
      case 'company':
        this.router.navigate(['/company']); 
        break;
      case 'profile':
        this.router.navigate(['/profile']); 
        break;
      case'apply-list':
        this.router.navigate(['/apply-list']);
        break;
      default:
        console.warn('Invalid tab name:', tabName);
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  job_post(){
    this.router.navigate(['/recruiterLayout/choice-service']);
  }

}
