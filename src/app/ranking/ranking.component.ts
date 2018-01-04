import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseObjectObservable } from 'angularfire2';

import _ from 'lodash';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  collection: Observable<any>;
  items: Observable<any[]>;
  itemsFiltered = [];

  // collection: string = '';

  constructor(public db: AngularFireDatabase) {
    this.collection = this.db.object('quiz_active').valueChanges();
  }

  ngOnInit() {
    this.collection.subscribe(collection => {
      console.log(collection)
      if (collection != undefined && collection != null && collection != '' && collection.hasOwnProperty('respostas')) {
        this.items = this.db.list(collection.respostas).valueChanges();
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

    })

  }

  // getActiveQuiz() {
  //   return new Promise((resolve, reject) => {
  //     this.db.list('quiz_active').valueChanges()
  //       .subscribe(quiz => {
  //         resolve(quiz.respostas);
  //       })
  //   })
  // }

}
