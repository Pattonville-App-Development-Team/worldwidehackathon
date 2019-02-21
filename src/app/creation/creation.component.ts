import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';
import {ApiService} from '../api.service';
import {Item} from '../item';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})

export class CreationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  items: Item[];

  public webcamImage: WebcamImage = null;

  constructor(private _formBuilder: FormBuilder, private api: ApiService) {}

  private trigger: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      age: ['', Validators.required],
      size: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      barcode: ['', Validators.required]
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

  sendData() {
    const newItem = new Item();

    newItem.title       = this.firstFormGroup.get('title').value;
    newItem.age         = this.firstFormGroup.get('age').value;
    newItem.size        = this.firstFormGroup.get('size').value;
    newItem.category    = this.firstFormGroup.get('category').value;
    newItem.imageData   = this.webcamImage.imageAsDataUrl;
    newItem.barcode     = this.thirdFormGroup.get('barcode').value;

    console.log('Received stepper completion, sending data to server', newItem);
    this.api.createItem(newItem)
        .subscribe((res) => {
          console.log('success');
          console.log(res['data']);
          this.items = res['data'];
      }, (err) => {
          console.log('failure');
          console.log(err);
      });
  }
}
