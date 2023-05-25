import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  template: `
    <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  `
})
export class LoadingSpinnerComponent { }
