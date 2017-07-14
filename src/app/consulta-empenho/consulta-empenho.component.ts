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
   meses: Array<string[]> = new Array;
   check_buttons: boolean[] = Array();
   total_parcelas: number = 0;
   fb: FormBuilder;
   passo4: boolean = false;
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
     let valor_ne: number;
     let num_subitens: string;
     let total_subitens: string;
     let restante: number;
     let codigo: string;
     let valor_subitens: string;
     let subitens: FormArray = new FormArray([]);
     let parcelas: FormArray = new FormArray([]);
     let total_parcelas: number;
     // 

     // Empenho>Discriminacao form fields
     let itens: FormArray = new FormArray([]);
     let item: number;
     let unidade_medida: string;
     let quantidade: string;
     let valor_unitario: number;
     let valor_total: string;
     let descricao: string;
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
      total_parcelas: [0],

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
        valor_ne: [0],
        num_subitens: [''],
        total_subitens: [''],
        valor: [''],
        codigo: [''],
        restante: [0],
        
      }),
      discriminacao: this.fb.group({
        item: [''],
        unidade_medida: [''],
        quantidade: [''],
        valor_unitario: [''],
        valor_total: [''],
        descricao: [''],
        itens: itens,
      }),
      subitens: subitens,
      parcelas: parcelas,
      
    });

    this.meses.push(
        ["Julho"],
        ["Agosto"],
        ["Setembro"],
        ["Outubro"],
        ["Novembro"],
        ["Dezembro"]);
    this.check_buttons=
        [false],
        [false],
        [false],
        [false],
        [false],
        [false];
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

  addItem(group: FormGroup) {
     let num_item: string = group.controls['item'].value;
     let unidade_medida: string = group.controls['unidade_medida'].value;
     let quantidade: string = group.controls['quantidade'].value;
     let valor_unitario: string = group.controls['valor_unitario'].value;
     let valor_total: string = group.controls['valor_total'].value;
     let descricao: string = group.controls['descricao'].value;
     

    (<FormArray>this.empenhoForm.get('discriminacao').get('itens')).push(
      new FormGroup({
        num_item: new FormControl(),
        unidade_medida: new FormControl(unidade_medida),
        quantidade: new FormControl(),
        valor_unitario: new FormControl(),
        valor_total: new FormControl(),
        descricao: new FormControl(),
      })
    )
  }

  addParcelas(){
    let mes: string;
    let valor: number;
 
    if (!this.passo4){
      for (var i = this.meses.length - 1; i >= 0; i--) {
        (<FormArray>this.empenhoForm.controls['parcelas']).push(
          new FormGroup({
            mes: new FormControl(''),
            valor: new FormControl({value: 0, disabled: true}),
          })
        )
      }
      this.passo4 = true;
    }
    console.log(<FormArray>this.empenhoForm.controls['parcelas']);
  }

  editaValor(pos: number, group: FormGroup){
    if (!this.check_buttons[pos]) {
      group.controls['valor'].enable();
      this.check_buttons[pos] = true;
      this.check_buttons[pos], group.controls['valor'];
      this.total_parcelas += 1;
    }else{
      group.controls['valor'].disable();
      this.diminuiTotalParcelas(group);
      group.controls['valor'].setValue(0);
      this.check_buttons[pos] = false;
      this.total_parcelas -= 1;
    }

    // this.atualizaValorNe()
    
  }

  atualizaValorNe(){
    var total_ne = this.empenhoForm.controls['item'].get('valor_ne').value;
    var total_parcelas = this.empenhoForm.controls['total_parcelas'].value;
    console.log(this.empenhoForm.controls['item'].get('valor_ne').setValue( +total_ne -total_parcelas ));
  }

  diminuiTotalParcelas(group: FormGroup){
    var valor = group.controls['valor'].value;
    var valor_atual = this.empenhoForm.controls['total_parcelas'].value;
    var valor_total = -(valor ) + (valor_atual);
    this.empenhoForm.controls['total_parcelas'].setValue(valor_total);
    
  }

  acrescentaTotalParcelas(group: FormGroup){
    var valor = group.controls['valor'].value;
    var valor_atual = this.empenhoForm.controls['total_parcelas'].value;
    var valor_total = +(valor as number) + (valor_atual as number);
    this.empenhoForm.controls['total_parcelas'].setValue(valor_total);
    
  }



  removeSubItem(pos: number):void{
       (<FormArray>this.empenhoForm.controls['subitens']).removeAt(pos)
  }

  removeItem(pos: number):void{
       (<FormArray>this.empenhoForm.get('discriminacao').get('itens')).removeAt(pos)
  }



  initStep2(){
    console.log('passo 2 iniciado');

    this.empenhoForm
  }

 
   limparEmpenho(){
   		this.empenho = new Empenho();
   }
   get formItens() { return <FormArray>this.empenhoForm.get('discriminacao').get('itens'); }

   get formSubitens() { return <FormArray>this.empenhoForm.get('subitens'); }

   get formParcelas() { return <FormArray>this.empenhoForm.get('parcelas'); }

   preencheEmpenho(){

   }

}
