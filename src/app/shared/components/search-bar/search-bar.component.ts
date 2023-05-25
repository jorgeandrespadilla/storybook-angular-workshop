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

  /**
   * Placeholder a mostrar en el campo de búsqueda
   */
  @Input()
  public placeholder: string = '';

  /**
   * Evento que se emite cuando se escribe en el campo de búsqueda
   */
  @Output()
  public onSearch = new EventEmitter<string>();

  private debouncer = new Subject<string>();

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
