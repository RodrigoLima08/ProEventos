import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  //providers:[EventoService]
})
export class EventosComponent implements OnInit {
  modalRef?: BsModalRef;

  public eventos : Evento[] = [];
  public eventosFiltrados: Evento[] =[];
  public widthImg = 150;
  public marginImg = 2;
  public showImg = true;
  private _filtroListado = '';

  public get filtroLista(): string{

    return this._filtroListado;
  }

  public set filtroLista(value: string){

    this._filtroListado= value;
    this.eventosFiltrados = this.filtroLista? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any ) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
       evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { }

  public ngOnInit():void {
    this.getEventos()
    this.spinner.show();
    /** spinner starts on init */


  }

  public alterarImagem(): void{
    this.showImg = !this.showImg;
  }

  public getEventos() : void {
    this.eventoService.getEventos().subscribe({
      next:(eventos: Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
      },
      complete:() => this.spinner.hide()

  });


  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {

    this.modalRef?.hide();
    this.toastr.success('O evento foi deletado com sucesso.', 'Deletado!');
  }

  decline(): void {

    this.modalRef?.hide();
  }
}


