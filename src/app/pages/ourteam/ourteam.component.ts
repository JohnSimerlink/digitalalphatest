import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',

  styles: [`
    .dark-modal .modal-content {
      background-color: #000000;
      color: white;
      border-radius : 10px;
    }
    .dark-modal .modal-header {
      border : none
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class OurteamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
