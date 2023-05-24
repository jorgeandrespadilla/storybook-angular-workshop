import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-bar',
  template: `
    <input
      type="text"
      class="form-control"
      [placeholder]="placeholder"
      [ariaLabel]="placeholder"
      (keyup)="handleKeyPress(searchInput.value)"
      #searchInput
    />
  `
})
export class SearchBarComponent implements OnInit {

  private debouncer = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onSearch = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(query => this.onSearch.emit(query));
  }

  public handleKeyPress(query: string) {
    this.debouncer.next(query);
  }

}
