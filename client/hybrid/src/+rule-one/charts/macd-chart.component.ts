import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

//import { ChartsService } from './charts.service'
import { MACDData } from './macd-data.model'

declare var google: any;

@Component({
    selector: 'macd-chart',
    template: 
    `
        <div id="macd-chart"></div>
        <footer class="legend">
            <ion-icon name="square"></ion-icon> {{ '_rule.MACD' | translate}}
            <ion-icon name="square"></ion-icon> {{ '_rule.Signal' | translate}}
        </footer>
    `
})
export class MacdChartComponent implements OnInit, OnChanges {
    @Input() title: string;
    @Input() data: MACDData[];
    //chartsLoaded: boolean = false;

    constructor(/*private chartsService: ChartsService*/) {
        this.data = [];
    }

    ngOnInit() {
        //this.chartsService.load();
        // this.chartsService.chartsLoaded$.subscribe(loaded => {
        //     this.chartsLoaded = loaded;
        //     this.prepareDataAndDrawChart();
        // });
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (changes['data'].currentValue) {
            this.prepareDataAndDrawChart();
        }
    }

    prepareDataAndDrawChart() {
        if (/*this.chartsLoaded && */this.data && this.data.length) {
            let rows = this.data.filter(sp => (sp.macd != null && typeof sp.macd !== 'undefined') || (sp.signal != null && typeof sp.signal !== 'undefined')).map(sp => sp.toRow());
            this.drawChart(rows);
        }
    }

    drawChart(rows) {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'MACD');
        data.addColumn('number', 'Signal');

        data.addRows(rows);

        var options = {
            chart: {
                title: this.title
            },
            legend: {position: 'none'}, // TODO: bottom when it will be supported
            colors:['#4285F4','#F4B400']
        };

        var chart = new google.charts.Line(document.getElementById('macd-chart')); // TODO: some unique identifier?

        chart.draw(data, options);
    }
}