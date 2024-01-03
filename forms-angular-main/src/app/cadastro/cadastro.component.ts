import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
      private router: Router,
      private consultaCepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      if(form.valid){
        this.router.navigate(['./sucesso'])
      }else{
        alert('Formulario invalido!')
      }
      console.log(form.controls)
  }

  consultaCEP(event: any, f: NgForm){
    const cep = event.target.value 
    if(cep !== ''){
      this.consultaCepService.getConsultCep(cep).subscribe((result) => {
        this.populandoEndereco(result, f)
      })
    }
  }

  populandoEndereco(result: any, f: NgForm){
    f.form.patchValue({
      endereco: result.logradouro,
      complemento: result.complemento,
      bairro: result.bairro,
      cidade: result.localidade,
      estado: result.uf
    })
  }

}
