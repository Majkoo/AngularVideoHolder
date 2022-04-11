import {Component, OnInit} from '@angular/core';
import {AppSettingsModel} from "./models/AppSettingsModel";

import AppSettings from "../assets/app-settings/settings.json";
import Items from "../assets/app-settings/items.json";
import UiContent from "../assets/app-settings/ui-content.json";
import {ItemModel} from "./models/ItemModel";
import {UiContentModel} from "./models/uiContent/UiContentModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appSettings: AppSettingsModel = AppSettings;
  items: ItemModel[] = Items;
  uiContent: UiContentModel = UiContent;

  constructor() {
    this.appSettings = AppSettings;
    this.items = Items;
    this.uiContent = UiContent;
  }

  filterItems(val: string) {
    this.items = Items.filter(i => i.title.toLowerCase().includes(val.toLowerCase()));
  }
  resetItems() {
    this.items = Items;
  }


}
