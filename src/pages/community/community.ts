import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {

  category: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public afDB: AngularFireDatabase) {

    this.afDB.list('/category_big', ref => ref).valueChanges().subscribe(categoryItems => {
      this.category = categoryItems;
    });
      
  }

  modalBase(categoryName) {
    let createModal = this.modalCtrl.create('CommunityPromotionPage', {categoryName: categoryName,
      enterAnimation: 'modal-slide-in',
      leaveAnimation: 'modal-slide-out'
    });
    createModal.onDidDismiss(data => {
      console.log(data);
    });
    createModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }

  openPromotion(categoryName){
    console.log(categoryName);
    this.navCtrl.push('CommunityPromotionPage',{categoryName: categoryName}); 
  }

  presentNoticeModal() {
    let createModal = this.modalCtrl.create('NoticePage', { userId: 8675309 }, {
      enterAnimation: 'modal-slide-in',
      leaveAnimation: 'modal-slide-out'
    });
    createModal.onDidDismiss(data => {
      console.log(data);
    });
    createModal.present();
  }

}


