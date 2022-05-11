import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  setting: any[] = [];

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.settings.get().subscribe((data) => {
      for (const s of data.results) {
          this.setting.push(s);
      }
    })
  }

}
