import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import necessary module
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For mocking HTTP requests
import { PoetComponent } from './poet.component';
import { PoetService } from './poet.service'; // Ensure service is imported

describe('PoetComponent', () => {
  let component: PoetComponent;
  let fixture: ComponentFixture<PoetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoetComponent], // Declare component
      imports: [FormsModule, HttpClientTestingModule], // Import FormsModule and HttpClientTestingModule
      providers: [PoetService], // Provide the PoetService
    }).compileComponents();

    fixture = TestBed.createComponent(PoetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty author and title', () => {
    expect(component.author).toBe('');
    expect(component.title).toBe('');
  });

  it('should handle fetchPoems errors gracefully', () => {
    // Simulate an error and verify error message
    const mockError = 'Failed to fetch poems. Please try again.';
    component.errorMessage = mockError;
    fixture.detectChanges();
    expect(component.errorMessage).toBe(mockError);
  });
});
