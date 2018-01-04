import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import _ from 'lodash';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  items: Observable<any[]>;
  itemsFiltered = [];

  collection: string = 'respostas2';

  constructor(db: AngularFireDatabase) {
    this.items = db.list(this.collection).valueChanges();

  }

  ngOnInit() {
    this.items.subscribe(res => {
      let itt = [];
      res.map(re => {
        if (!re.hasOwnProperty('users')) {
          return false;
        }
        return itt.push(re.users);
      });

      let arr1 = [];

      for (let i = 0; i < itt.length; i++) {
        arr1.push(Object.values(itt[i]))
      }

      let arr2 = [];

      for (let j = 0; j < arr1.length; j++) {
        for (let z = 0; z < Object.values(arr1[j]).length; z++) {
          arr2.push(arr1[j][z])
        }
      }

      let arr3 = _.groupBy(arr2, 'first_name')

      let arr = []

      Object.keys(arr3).map(function (objectKey, index) {
        let value = arr3[objectKey];
        let val1 = {
          first_name: objectKey,
          respostas: value
        }
        arr.push(val1)
      });

      this.itemsFiltered = arr;
    })
  }

}