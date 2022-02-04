import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchTerm: Observable<string>;

  private searchSubject: Subject<string>;

  constructor() {
    this.searchSubject = new Subject<string>();
    this.searchTerm = this.searchSubject.asObservable();
  }

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
