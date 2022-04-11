import {Component, Input, OnInit} from '@angular/core';
import {FooterModel} from "../../../models/uiContent/FooterModel";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerContent!: FooterModel;
}
