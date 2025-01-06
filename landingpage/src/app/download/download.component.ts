import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {



 androidLink = 'https://play.google.com/store/apps/details?id=in.diamondbazzar&pcampaignid=web_share';
  iosLink = 'https://apps.apple.com/us/app/diamond-bazzar-your-gem-hub/id6670790184';
  webLink = 'https://play.google.com/store/apps/details?id=in.diamondbazzar&pcampaignid=web_share';

  ngOnInit(): void {
    // Automatically redirect when this component loads
    this.openPlatformLink();
  }

  openPlatformLink() {
    const platformLink = this.getPlatformLink();
    window.location.href = platformLink; 
  }

  getPlatformLink(): string {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      return this.androidLink;
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return this.iosLink;
    }
    return this.webLink;
  }

}
