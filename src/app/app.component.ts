import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from "../sections/atf/atf.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AtfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
