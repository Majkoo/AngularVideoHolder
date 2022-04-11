import {Component, Input, OnInit, Sanitizer} from '@angular/core';
import {ItemModel} from "../../models/ItemModel";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() item!: ItemModel;
  @Input() appOrigin!: string;
  isEmbedVideo = false;
  safeUrl!: SafeResourceUrl;
  showFullscreen: boolean = false;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    let fullUrl = `${this.item.src}?autoplay=0&paused=1&mute=0&origin=${this.appOrigin}`
    if(this.item.type === 'video') {
      if (!this.item.src.startsWith('./')) {
        this.isEmbedVideo = true;
      }
    }
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);

  }


}
