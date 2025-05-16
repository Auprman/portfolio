import { Component, HostListener,NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';  
  constructor(private global: GlobalService) {
    this.global.onResize(); 
  }
  /**
   * Listens to the window resize event and triggers the global resize handler.
   * This is used to update the layout or styles based on the new window size.
   * @param event The resize event from the window.
   */
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.global.onResize();
  }

}


