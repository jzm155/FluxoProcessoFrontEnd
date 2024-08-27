import { Component, OnInit } from '@angular/core';
import { CadastroPessoasService } from './cadastro-pessoas.service';
import { Combo } from '../models/Combo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Pessoa } from '../models/Pessoa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrl: './cadastro-pessoas.component.css'
})
export class CadastroPessoasComponent implements OnInit {

  public cargos!: Combo[];
  public niveis!: Combo[];
  public estaCarregando!: Boolean;
  public id: string | undefined;
  public valorNome!: string;
  public idCargo!: number;
  public idNivel!: number;
  public isRenderer: Boolean = false;

  nomeForm = this.fb.group({
    nome: ['', Validators.required]
  });

  cargoForm = this.fb.group({
    cargo: ['', Validators.required]
  });

  nivelForm = this.fb.group({
    nivel: ['', Validators.required]
  });

  dataAdmissaoForm = this.fb.group({
    dataAdmissao: ['', Validators.required]
  });

  dataDemissaoForm = this.fb.group({
    dataDemissao: ['', Validators.required]
  });

  pessoaForm: FormGroup = this.fb.group({
    nome: this.nomeForm,
    idCargo: [this.cargoForm, Validators.required],
    idNivel: [this.nivelForm, Validators.required],
    dataAdmissao: [this.dataAdmissaoForm, Validators.required],
    dataDemissao: [this.dataDemissaoForm, Validators.required]
  });

  constructor(private fb: FormBuilder,
    private cadastroPessoaService: CadastroPessoasService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.GetPessoa()

    if (this.id == "null")
        this.isRenderer = true
  }
  pessoaSubmit() {
    this.estaCarregando = true;
    this.pessoaForm.value.nome = this.pessoaForm.value.nome.nome
    this.pessoaForm.value.idCargo = this.pessoaForm.value.idCargo.value.cargo.id
    this.pessoaForm.value.idNivel = this.pessoaForm.value.idNivel.value.nivel.id
    this.pessoaForm.value.dataAdmissao = this.pessoaForm.value.dataAdmissao.value.dataAdmissao
    this.pessoaForm.value.dataDemissao = this.pessoaForm.value.dataDemissao.value.dataDemissao
    this.cadastroPessoaService.SalvarPessoa(this.pessoaForm.value)
    this.estaCarregando = false;
  }

  GetPessoa() {
    this.cadastroPessoaService.GetById(Number(this.id)).subscribe(
      (pessoa: Pessoa) => {
        this.nomeForm = this.fb.group({
          nome: [pessoa.nome, Validators.required]
        });

        this.idCargo = pessoa.idCargo

        this.idNivel = pessoa.idNivel

        this.dataAdmissaoForm = this.fb.group({
          dataAdmissao: [pessoa.dataAdmissaoFormatada, Validators.required]
        });

        this.dataDemissaoForm = this.fb.group({
          dataDemissao: [pessoa.dataDemissaoFormatada, Validators.required]
        });

        this.isRenderer = true
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  GetCargos() {
    this.cadastroPessoaService.GetCargos().subscribe(
      (cargos: Combo[]) => {
        this.cargos = cargos;
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  GetNiveis() {
    this.cadastroPessoaService.GetNiveis().subscribe(
      (niveis: Combo[]) => {
        this.niveis = niveis;
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }
}
