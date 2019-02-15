import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';;

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public webcamImage: WebcamImage = null;

  constructor(private _formBuilder: FormBuilder) {}

  private trigger: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  // public get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image');
    this.webcamImage = webcamImage;
  }

}
