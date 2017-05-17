import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [
    {
    title: "Мышцы брюшного пресса",
    image: "assets/cat/cat0_v4.png"
    },
    {
    title: "Спина",
    image: "assets/cat/cat1_v4.png"
    },
    {
    title: "Бицепс",
    image: "assets/cat/cat2_v4.png"
    },
    {
    title: "Ягодицы",
    image: "assets/cat/cat3_v4.png"
    },
    {
    title: "Грудь",
    image: "assets/cat/cat4_v4.png"
    },
    {
    title: "Ноги",
    image: "assets/cat/cat5_v4.png"
    },
    {
    title: "Плечи",
    image: "assets/cat/cat6_v4.png"
    },
    {
    title: "Трицепсы",
    image: "assets/cat/cat7_v4.png"
    }
    ];
  images: string[];


  constructor(public navCtrl: NavController) {

  }

  itemSelected(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }


}
