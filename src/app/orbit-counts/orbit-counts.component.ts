import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
import { Counts } from '../counts';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[]
  counts: Counts;

  constructor() {
    this.counts = {total: 9, debris: 1, communication: 2, probe: 2, positioning: 1, station: 2, telescope: 1};
  }

  ngOnInit() {
  }

  updateCounts(): Counts {
    for (let prop in this.counts) {
      this.counts[prop] = 0;
    }
    this.counts.total = this.satellites.length;
    for(let i=0; i<this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space debris') this.counts.debris++;
      if (this.satellites[i].type.toLowerCase() === 'communication') this.counts.communication++;
      if (this.satellites[i].type.toLowerCase() === 'probe') this.counts.probe++;
      if (this.satellites[i].type.toLowerCase() === 'positioning') this.counts.positioning++;
      if (this.satellites[i].type.toLowerCase() === 'space station') this.counts.station++;
      if (this.satellites[i].type.toLowerCase() === 'telescope') this.counts.telescope++;
    }
    return this.counts;
  }
}