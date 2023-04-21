import { Component, OnInit,  ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('togg') toggler !: ElementRef ;
  currentUser: any;
  isLoggedIn: any;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    // location.reload()
  }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(this.currentUser);
    console.log(this.isLoggedIn);
    
    
    
  }
  
  //  nav toggle logic
isNavOpen :boolean = false;
ngAfterViewInit() {
  document.getElementById('togg')?.addEventListener('change', ()=>{
    this.isNavOpen = !this.isNavOpen;
   
    const element = this.el.nativeElement.querySelector('#toggle-icon');
    this.renderer.addClass(element, 'my-class');
   
  } );

  }
  navToggle(){
    // document.getElementById('togg')?.addEventListener('change', ()=>{
      this.isNavOpen = !this.isNavOpen;

    // } );
  }



  logout() {
    localStorage.clear();
  }

  loginCheck() {
    // console.log("clickkkedd")
    if (this.currentUser == null) {
      alert('Please login to Proceed!!');
    }
  }
}
