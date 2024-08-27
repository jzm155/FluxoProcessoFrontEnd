import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PessoasService } from './pessoas.service';
import { Pessoa } from '../models/Pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit, AfterViewInit {

  public pessoas!: Pessoa[];
  public paginaAtual: number;
  public ehPrimeiraPagina: Boolean;
  public ehUltimaPagina: Boolean;
  public alturaGrid: number = 0;
  public alturaPagina: number;
  public estaCarregando: Boolean;

  @ViewChild('target') targetElement: ElementRef | undefined;

  constructor(private pessoaService: PessoasService) {
    this.paginaAtual = 1
    this.ehPrimeiraPagina = true;
    this.ehUltimaPagina = false;
    this.estaCarregando = false;
    this.alturaPagina = window.innerHeight;
  }
  ngAfterViewInit(): void {
    this.alturaGrid = Math.floor(this.targetElement?.nativeElement.offsetHeight/52)
    this.CarregarGrid();
  }

  ngOnInit() {

  }

  onResizeHandler(event: any): void {
    if (event.target.innerHeight >= this.alturaPagina + 53 || event.target.innerHeight <= this.alturaPagina - 53) {
      //this.CarregarGrid();
      this.alturaPagina = event.target.innerHeight
    }
  }

  IrParaProximaPagina() {
    this.carregarPessoas(this.paginaAtual + 1, this.alturaGrid);
    this.paginaAtual = this.paginaAtual + 1;
  }
  IrParaPaginaAnterior() {
    this.carregarPessoas(this.paginaAtual - 1, this.alturaGrid);
    this.paginaAtual = this.paginaAtual - 1;
  }
  IrParaPrimeiraPagina() {
    this.carregarPessoas(1, this.alturaGrid);
    this.paginaAtual = 1;
  }
  CarregarGrid() {
    this.carregarPessoas(this.paginaAtual, this.alturaGrid);
  }

  carregarPessoas(page: number, limit: number) {
    this.ehPrimeiraPagina = page == 1;
    this.estaCarregando = true;
    this.pessoaService.GetAll(page, limit).subscribe(
      (pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
        this.ehUltimaPagina = pessoas.length < limit
        this.estaCarregando = false;
      },
      (erro: any) => {
        this.estaCarregando = false;
        console.log(erro)
      }
    );
  }
}
