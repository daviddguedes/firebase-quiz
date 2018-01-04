import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   constructor() {}

   ngOnInit() {

   }
}

// [
//    {
//       '12312312': { 'first_name': 'David', 'id_question': 0, 'acertou': 1 },
//       '23423423': { 'first_name': 'Luis', 'id_question': 0, 'acertou': 1 },
//       '45645645': { 'first_name': 'José', 'id_question': 0, 'acertou': 1 }
//    },
//    {
//       '12312312': { 'first_name': 'David', 'id_question': 1, 'acertou': 1 },
//       '23423423': { 'first_name': 'Luis', 'id_question': 1, 'acertou': 0 },
//       '45645645': { 'first_name': 'José', 'id_question': 1, 'acertou': 1 }
//    },
//    {
//       '12312312': { 'first_name': 'David', 'id_question': 2, 'acertou': 1 },
//       '23423423': { 'first_name': 'Luis', 'id_question': 2, 'acertou': 1 },
//       '45645645': { 'first_name': 'José', 'id_question': 2, 'acertou': 0 }
//    }
// ]
