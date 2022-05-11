import { Component, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channels: any[] = [];
  privateChannels: any[] = [];

  constructor(private channel: ChannelService) { }

  ngOnInit(): void {
    this.channel.get().subscribe((data) => {
      console.log(data);
      for (const c of data.results) {
        if (!c.private)
          this.channels.push(c);
        else
          this.privateChannels.push(c);
      }

      console.log(this.channels)
    })
  }

}
