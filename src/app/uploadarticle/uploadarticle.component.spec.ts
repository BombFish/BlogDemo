import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadarticleComponent } from './uploadarticle.component';

describe('UploadarticleComponent', () => {
  let component: UploadarticleComponent;
  let fixture: ComponentFixture<UploadarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
