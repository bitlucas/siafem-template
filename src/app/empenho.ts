import {Input } from '@angular/core';

export class Empenho {
	 id: string;
	 @Input() nr_empenho: string;
  	 @Input() start_at: string;
     @Input() end_at: string;
     @Input() unidade: string;
     @Input() gestao: string;

  }

