import { Component, EventEmitter, Input, Output } from '@angular/core';

const classesBySize = {
  small: 'btn-sm',
  medium: '',
  large: 'btn-lg'
};

@Component({
  selector: 'shared-button',
  template: `
    <button
      type="button"
      [ngClass]="classes"
      (click)="handleClick($event)"
    >
    {{ label }}
  </button>
  `
})
export class ButtonComponent {

  /**
   * Texto del botón
   */
  @Input()
  label = '';

  /**
   * Indica si el botón es primario o no
   */
  @Input()
  primary = true;

  /**
   * Tamaño del botón
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Evento que se emite cuando se hace click en el botón
   */
  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    const buttonSize = classesBySize[this.size];
    const buttonMode = this.primary
      ? 'btn-primary'
      : 'btn-outline-primary';
    return ['btn', buttonSize, buttonMode];
  }

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }

}


