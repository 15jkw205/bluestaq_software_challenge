import { Component } from '@angular/core';
import { PoetService } from './poet.service';

@Component({
  selector: 'app-poet',
  templateUrl: './poet.component.html',
  styleUrls: ['./poet.component.css']
})
export class PoetComponent {
  author: string = ''; 
  title: string = ''; 
  poems: any[] = []; 
  errorMessage: string = '';

  constructor(private poetService: PoetService) {}

  fetchPoems() { 
    console.log('Fetching poems for:', this.author, this.title);
    this.poetService.getPoems(this.author, this.title).subscribe(
      (data) => { 
        console.log('Response data:', data);
        this.poems = data; 
        this.errorMessage = ''; 
      }, 
      (error) => { 
        console.error('Error fetching poems:', error);
        this.errorMessage = error.error?.message || 'Failed to fetch poems. Please try again.'; 
        this.poems = [];
      }
    );
  }
}
