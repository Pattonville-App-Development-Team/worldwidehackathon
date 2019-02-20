import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';
import { ApiService } from '../api.service';
import { Item } from '../item';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})

export class CreationComponent implements OnInit {
  items;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public webcamImage: WebcamImage = null;

  constructor(private _formBuilder: FormBuilder, private api: ApiService) {}

  items;
  
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

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }



  sendData(title: string, size: string, category: string, barcode: string): void {
    var newItem = new Item();

    newItem.title = title;
    newItem.size = size;
    newItem.category = category;
    newItem.age = "42";
    newItem.imageData = this.webcamImage.imageAsDataUrl;
    newItem.barcode = barcode;

    console.log('Received stepper completion, sending data to server', newItem);
    this.api.createItem(newItem)
        .subscribe((res) => {
        console.log(res['data']);
        this.items = res['data'];
      }, (err) => {
        console.log(err);
      });
    return;
  }
}
