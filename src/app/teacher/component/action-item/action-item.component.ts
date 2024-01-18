import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrl: './action-item.component.scss'
})
export class ActionItemComponent {

  @Input()
  item: Item;

}

interface Item {
  firstElement: string,
  secondElement: string,
  thirdElement: string
  actionUrl: string
}