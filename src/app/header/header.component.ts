import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone:true,
  imports:[CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerHidden = false; // State to track header visibility
  lastScrollTop = 0; // Store the last scroll position

  // Listen to window scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // If scrolling down, hide the header; if scrolling up, show the header
    if (scrollTop > this.lastScrollTop) {
      this.headerHidden = true; // Scrolling down
    } else {
      this.headerHidden = false; // Scrolling up
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }
}
