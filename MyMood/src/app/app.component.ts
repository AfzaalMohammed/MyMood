import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {MyInfo} from './entity'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.object('moods/afzaal_ahbar').valueChanges();
  }
}

