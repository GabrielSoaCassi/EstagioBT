import { Component } from '@angular/core';
import {
  faTimes,
  faDivide,
  faSuperscript,
  faHome
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  inconHome = faHome;
  iconMultiplication = faTimes;
  inconDivision = faDivide;
  inconPow = faSuperscript;
}
