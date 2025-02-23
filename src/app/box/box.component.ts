import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  imports: [CommonModule],
  providers: [ApiService]
})
export class BoxComponent implements OnInit {
  boxes: { isDifferent: boolean; title?: string; body?: string }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.createBoxes();
    this.fetchQuotes();
  }

  createBoxes() {
    this.boxes = [
      { isDifferent: false },
      { isDifferent: false },
      { isDifferent: false },
      { isDifferent: false },
      { isDifferent: true }
    ];
  }

  async fetchQuotes() {
    try {
      const quotes = await this.apiService.getQuotes();
      console.log('Fetched quotes:', quotes);
      for (let i = 0; i < this.boxes.length && i < quotes.length; i++) {
        this.boxes[i].title = quotes[i].title;
        this.boxes[i].body = quotes[i].body;
      }
      console.log('Boxes after fetching quotes:', this.boxes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  }
    
  getBoxClass(box: { isDifferent: boolean }): string {
    return box.isDifferent ? 'bg-red-500' : 'bg-blue-500';
  }
}
