import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartaComponent } from './app.component';

describe('CartaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CartaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CartaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'carta-restorant'`, () => {
    const fixture = TestBed.createComponent(CartaComponent);
    const app = fixture.componentInstance;
    expect(app.cartas).toEqual('carta-restorant');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CartaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('carta-restorant app is running!');
  });
});
