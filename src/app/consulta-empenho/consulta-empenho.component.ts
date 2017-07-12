import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Empenho}    from '../empenho';
import { Router } from '@angular/router';
import { Form, FormGroup, FormBuilder, 
          FormArray, Validators, FormControl  } from '@angular/forms';
import { EmpenhoService } from './empenho.service';

@Component({
  selector: 'consulta-empenho',
  templateUrl: './consulta-empenho.component.html',
  styleUrls: ['./consulta-empenho.component.css']
})
export class ConsultaEmpenhoComponent implements OnInit { 
   service: EmpenhoService;
   active: Boolean = true;
   empenhoForm: FormGroup;
   fb: FormBuilder;
   editingStatus: boolean = false;
   empenho= new Empenho();
   empenhos: Empenho[] = [];
    submitted = false; 
    constructor( service: EmpenhoService){
      this.service = service;
      this.fb = new FormBuilder;
    
      
    }
  ngOnInit() {
      this.initForm()
      

      this.service.lista().subscribe(empenhos => {
      this.empenhos = empenhos
      console.log(empenhos);
    }, erro => console.log(erro));

  }

 
   onSubmit() {
    if( this.empenhoForm.valid ) {
      console.log('trip form is valid');
    }
  }

  initForm(empenho?: Empenho):void {
    // Empenho form fields
     let modalidade: string;
     let tipo: string;
     let evento: string;
     let unidade: string;
     let gestao_emp: string;

     // Empenho>Credor Form fields
     let tipo_id: string;
     let num_id: string;
     let favorecido: string;
     let gestao_cred: string;


     // Empenho>Orçamentario form fields
     let pt_resumido: string;
     let esfera: string;
     let programa_trabalho: string;
     let uo: string;
     let ug_responsavel: string;
     let plano_interno: string;
     let natureza_despesa: string;
     let fonte_recurso: string;
     let valor: string;

     // Empenho>Complementar form fields
     let acordo: string;
     let licitacao: string;
     let referencia_legal: string;
     let numero_convenio: string;
     let numero_contrato: string;
     let origen_material: string;
     let numero_processo: string;
     let aditivo_convenio: string;
     let aditivo_contrato: string;

     // Empenho>Local form fields
     let local: string;
     let data: string;
     
     // Empenho>Item form fields
     let valor_ne: string;
     let num_subitens: string;
     let total_subitens: string;
     let restante: string;
     let codigo: string;
     let valor_subitens: string;
     let subitens: FormArray = new FormArray([]);
     // 

     


    if(empenho) {
      modalidade = empenho.nr_empenho;
      tipo = empenho.start_at;
      evento = empenho.end_at;
      unidade = empenho.unidade;
      gestao_emp = empenho.gestao;

    } else {
      // Empenho Fields
      modalidade = '';
      tipo = '';
      evento = '';
      unidade = '';
      gestao_emp = '';
      // Credor Fields
      tipo_id = '';
      num_id = '';
      favorecido = '';
      gestao_cred = '';
    }
    // let name = 'Dubai Trip';
    

    this.empenhoForm = this.fb.group({
      evento: [''],
      modalidade: [''],
      tipo: [''],
      unidade_gestora: [''],
      gestao_emp: [''],

      credor: this.fb.group({
        tipo_id: [''],
        num_id: [''],
        favorecido: [''],
        unidade: [''],
        gestao_cred: ['']

      }),
      orcamentario: this.fb.group({
        pt_resumido: ['', Validators.required],
        esfera: [''],
        programa_trabalho: [''],
        uo: [''],
        ug_responsavel: [''],
        plano_interno: [''],
        natureza_despesa: [''],
        fonte_recurso: [''],
        valor: ['']
      }),
      complementar: this.fb.group({
        acordo: [''],
        licitacao: [''],
        referencia_legal: [''],
        numero_convenio: [''],
        numero_contrato: [''],
        origem_material: [''],
        numero_processo: [''],
        aditivo_convenio: [''],
        aditivo_contrato: ['']
      }),
      dados_entrega: this.fb.group({
        local: [''],
        data: ['']
      }),
      item: this.fb.group({
        valor_ne: [''],
        num_subitens: [''],
        total_subitens: [''],
        valor: [''],
        codigo: [''],
        restante: [''],
        
      }),
      subitens: subitens,
      
    });

  }

  addSubItem():void {
    let codigo_subitem: string;
     let descricao: string;
     let valor_subitem: string;
     

    (<FormArray>this.empenhoForm.controls['subitens']).push(
      new FormGroup({
        codigo_subitem: new FormControl(''),
        descricao: new FormControl(''),
        valor: new FormControl(''),
      })
    )
  }

  removeSubItem(pos: number):void{
       (<FormArray>this.empenhoForm.controls['subitens']).removeAt(pos)
   }

  initStep2(){
    console.log('passo 2 iniciado');

    this.empenhoForm
  }

   limparEmpenho(){
   		this.empenho = new Empenho();
   }

   preencheEmpenho(){

   }

}
