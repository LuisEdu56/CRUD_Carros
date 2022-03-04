import { Component } from '@angular/core';
import { Produto } from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public lista_produtos : Produto[] = [];
  public preco : number | undefined;
  public marca : string | undefined;
  public modelo : string | undefined;
  public ano : string | undefined;
  public versao : string | undefined;
  public combustivel : string | undefined;
  public cores : string | undefined;
  public cambio : string | undefined;
  public quilometragem : number | undefined;
  public blindagem : string | undefined;
  public edicao : boolean = false;
  public indice : number = -1;

  
  constructor(){
    let produto = new Produto(15000,"Fiat","Uno","1996"," Mile","Gasolina","Branco","Manual", 199698, "blindado");
    this.lista_produtos.push(produto);
  }

  public salvar() : void{

    if(!this.preco){
      alert("O preco é obrigatório!");
      return;
    }

    if(!this.marca){
      alert("A marca é obrigatória!");
      return;
    }

    if(!this.modelo){
      alert("O modelo é obrigatório!");
      return;
    }

    if(!this.ano){
      alert("O ano é obrigatório!");
      return;
    }

    if(!this.versao){
      alert("A versão é obrigatória!");
      return;
    }

    if(!this.combustivel){
      alert("O tipo de combustivél é obrigatório!");
      return;
    }

    if(!this.cores){
      alert("A cor é obrigatória!");
      return;
    }

    if(!this.cambio){
      alert("O tipo de cambio é obrigatório!");
      return;
    }

    if(!this.quilometragem){
      alert("A quilometragen é obrigatória!");
      return;
    }

    if(!this.blindagem){
      alert("Informar a blindagem é obrigatório!");
      return;
    }

    if(this.indice == -1){
      let produto = new Produto(this.preco, this.marca, this.modelo, this.ano, this.versao, this.combustivel, this.cores, this.cambio, this.quilometragem, this.blindagem);
      this.lista_produtos.push(produto);
      alert("Produto cadastrado!")  
    } else {
      this.lista_produtos[this.indice].setPreco(this.preco);
      this.lista_produtos[this.indice].setMarca(this.marca);
      this.lista_produtos[this.indice].setModelo(this.modelo);
      this.lista_produtos[this.indice].setAno(this.ano);
      this.lista_produtos[this.indice].setVersao(this.versao);
      this.lista_produtos[this.indice].setCombustivel(this.combustivel);
      this.lista_produtos[this.indice].setCores(this.cores);
      this.lista_produtos[this.indice].setCambio(this.cambio);
      this.lista_produtos[this.indice].setQuilometragem(this.quilometragem);
      this.lista_produtos[this.indice].setBlindagem(this.blindagem);

      alert("Produto editado com sucesso!")
      this.edicao = false;
      this.indice = -1;
    }
    
    this.preco = undefined;
    this.marca = undefined;
    this.modelo = undefined;
    this.ano = undefined;
    this.versao = undefined;
    this.combustivel = undefined;
    this.cores = undefined;
    this.cambio = undefined;
    this.quilometragem = undefined;
    this.blindagem = undefined;
  }

  public excluir(index : number) : void{
    this.lista_produtos.splice(index,1);
    alert("Produto excluido com sucesso!");
  }
  
  public editar(index : number) : void{
    this.edicao = true;
    this.indice = index;
    this.preco = this.lista_produtos[index].getPreco();
    this.marca = this.lista_produtos[index].getMarca();
    this.modelo = this.lista_produtos[index].getModelo();
    this.ano = this.lista_produtos[index].getAno();
    this.versao = this.lista_produtos[index].getVersao();
    this.combustivel = this.lista_produtos[index].getCombustivel();
    this.cores = this.lista_produtos[index].getCores();
    this.cambio = this.lista_produtos[index].getCambio();
    this.quilometragem = this.lista_produtos[index].getQuilometragem();
    this.blindagem = this.lista_produtos[index].getBlindagem();
  }

}