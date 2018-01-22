import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  information: any[];

 
  constructor(public navCtrl: NavController, private http: Http, public viewCtrl: ViewController, private afDB: AngularFireDatabase) {
    // let localData = http.get('assets/json/information.json').map(res => res.json().items);
    // localData.subscribe(data => {
    //   this.information = data;
    // })

    this.afDB.list('/NOTICE', ref => ref.orderByChild('name')).valueChanges().subscribe(Items => {
      this.information = Items;

    });
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
}