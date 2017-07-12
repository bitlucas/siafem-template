import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  
    version: string;
    isNavbarCollapsed: boolean;

    constructor(
        
        ) {
        
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
        
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

}
