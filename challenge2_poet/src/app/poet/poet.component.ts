import { Component } from '@angular/core';
import { PoetService } from './poet.service';

@Component({
  selector: 'app-poet',
  templateUrl: './poet.component.html',
  styleUrls: './poet.component.css'
})
export class PoetComponent {
  author: string = ''; 
  title: string = ''; 
  poems: any[] = []; 
  errorMessage: string = '';

  constructor(private poetService: PoetService) {}

  fetchPoems() { 
    this.poetService.getPoems(this.author, this.title).subscribe(
      (data) => { 
        this.poems = data; 
        this.errorMessage = ''; 
      }, 
      (error) => { 
        this.errorMessage = error.error?.message || 'Failed to fetch poems. Please try again.'; 
        this.poems = [];
      }
    );
  }
}
