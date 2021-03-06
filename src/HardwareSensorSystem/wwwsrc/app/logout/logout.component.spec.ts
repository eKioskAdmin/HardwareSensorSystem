import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { LogoutModule } from './logout.module';
import { AuthenticationService } from '../security/authentication.service';

const routerStub = {
  navigate: (commands: any[]) => { }
};

const authenticationServiceStub = {
  logout: () => { }
};

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LogoutModule
      ],
      providers: [
        {
          provide: Router,
          useValue: routerStub
        },
        {
          provide: AuthenticationService,
          useValue: authenticationServiceStub
        }
      ]
    });

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
