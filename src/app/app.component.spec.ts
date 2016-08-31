import { TestBed, async } from '@angular/core/testing';
import { REBIRTH_STORAGE_PROVIDERS } from 'rebirth-storage';
import { ViewContainerRef } from '@angular/core';
import { AppComponent } from './app.component';
import { RebirthHttpProvider } from 'rebirth-http';
import { LoadService } from './shared';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: [
        { provide: ViewContainerRef, useValue: {} },
        RebirthHttpProvider,
        LoadService,
        ...REBIRTH_STORAGE_PROVIDERS
      ]
    });

  });

  it('should init http interceptors', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      let element = fixture.nativeElement;
      fixture.detectChanges();

      expect(element.querySelectorAll('router-outlet').length).toEqual(1);
      expect(fixture.componentInstance.rebirthHttpProvider.getInterceptors().length).toEqual(4);
    });
  }));

});
