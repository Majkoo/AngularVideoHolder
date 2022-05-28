import {Component} from '@angular/core';
import {AppSettingsModel} from "./models/AppSettingsModel";
import {ItemModel} from "./models/ItemModel";
import {UiContentModel} from "./models/uiContent/UiContentModel";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appSettings?: AppSettingsModel;
  items?: ItemModel[];
  uiContent?: UiContentModel;

  constructor(
    private http: HttpClient
  ) {
    this.http.get<AppSettingsModel>('../assets/app-settings/settings.json').subscribe({
      next: (val: AppSettingsModel) => {
        this.appSettings = val;
      }
    });
    this.http.get<ItemModel[]>('../assets/app-settings/items.json').subscribe({
      next: (val: ItemModel[]) => {
        this.items = val;
      }
    });
    this.http.get<UiContentModel>('../assets/app-settings/ui-content.json').subscribe({
      next: (val: UiContentModel) => {
        this.uiContent = val;
      }
    });
  }

  filterItems(searchPhrase: string) {
    this.http.get<ItemModel[]>('../assets/app-settings/items.json').subscribe({
      next: (val: ItemModel[]) => {
        this.items = val.filter(i => i.title.toLowerCase().includes(searchPhrase.toLowerCase()));
      }
    });
  }
  resetItems() {
    this.http.get<ItemModel[]>('../assets/app-settings/items.json').subscribe({
      next: (val: ItemModel[]) => {
        this.items = val;
      }
    });
  }


}
