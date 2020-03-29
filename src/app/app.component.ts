import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Range,
  RdpOptions,
  PresetItem
} from './mat-rdp/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  range: Range = { fromDate: new Date(), toDate: new Date() };
  options: RdpOptions;
  presets: Array<PresetItem> = [];
  @ViewChild('pickerOne', { static: false }) pickerOne;

  ngOnInit() {
    const today = new Date();
    const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: { fromDate: today, toDate: today },
      fromMinMax: {fromDate:fromMin, toDate:fromMax},
      toMinMax: {fromDate:toMin, toDate:toMax},
    };
  }

  updateRange(range: Range) {
    this.range = range;
  }

  setupPresets() {
    const backDate = numOfDays => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    };

    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7);
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.presets = [
      {
        presetLabel: 'Yesterday',
        range: { fromDate: yesterday, toDate: today }
      },
      {
        presetLabel: 'Last 7 Days',
        range: { fromDate: minus7, toDate: today }
      },
      {
        presetLabel: 'Last 30 Days',
        range: { fromDate: minus30, toDate: today }
      },
      {
        presetLabel: 'This Month',
        range: { fromDate: currMonthStart, toDate: currMonthEnd }
      },
      {
        presetLabel: 'Last Month',
        range: { fromDate: lastMonthStart, toDate: lastMonthEnd }
      }
    ];
  }

  reset() {
    const today = new Date();
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.pickerOne.resetDates({ fromDate: currMonthStart, toDate: currMonthEnd });
  }
}
