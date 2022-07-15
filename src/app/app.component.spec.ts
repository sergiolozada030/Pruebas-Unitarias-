import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('debe crear la aplicación', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.form.controls['email'];
    email.setValue('sergiolozada030@gmail.com');

    expect(app.form.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.form.controls['email'];
    const password = app.form.controls['password'];

    email.setValue('sergiolozada030@gmail.com');
    password.setValue('12345');

    expect(app.form.valid).toBeTrue();
  });

  it('Debe Actualizar datos de usuario', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.form.controls['email'];
    const password = app.form.controls['password'];

    email.setValue('sergiolozada030@gmail.com');
    password.setValue('12345');

    const btnElement = fixture.debugElement.query(By.css('button.btn'));
    btnElement.nativeElement.click();

    const dataSession = { user: 1 };

    expect(app.isCheck).toEqual(dataSession);
  });
});
