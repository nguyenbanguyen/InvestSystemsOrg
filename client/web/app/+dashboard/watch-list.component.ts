import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { WatchListService } from './watch-list.service'
import { Company } from '../+companies/company'; // TODO: move to shared?
import { CompaniesListComponent } from '../+companies/companies-list.component'

@Component({
    moduleId: module.id,
    selector: 'watch-list',
    templateUrl: 'watch-list.component.html',
    directives: [CompaniesListComponent]
})
export class WatchListComponent implements OnInit {
    companies: FirebaseListObservable<any[]>;
    user: string = 'jacek-kosciesza'; // TOOD: get it from identidy service
    constructor(private watchListService: WatchListService) { }

    ngOnInit() {
        this.companies = this.watchListService.getCompanies(this.user);
    }
}