import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, BoxComponent]
})
export class AppComponent {
  title = 'angulartest2';
}