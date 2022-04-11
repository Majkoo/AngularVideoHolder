import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HeaderModel} from "../../../models/uiContent/HeaderModel";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerContent!: HeaderModel;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onHomeClick: EventEmitter<void> = new EventEmitter<void>();
  searchPhrase = "";

  onSearchSubmit(val: string) {
    this.searchPhrase = "";
    this.onSearch.emit(val);
  }
  onHomeClickSubmit() {
    this.searchPhrase = "";
    this.onHomeClick.emit();
  }
}
