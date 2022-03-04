export class Produto {
    private _preco : number;
    private _marca : string;
    private _modelo : string;
    private _ano : string;
    private _versao : string;
    private _combustivel : string;
    private _cores : string;
    private _cambio : string;
    private _quilometragem : number;
    private _blindagem : string;

    constructor(preco : number, marca : string, modelo : string, ano : string,
    versao : string, combustivel : string, cores : string, cambio : string, quilometragem : number, 
    blindagem : string){
        
        this._preco=preco;
        this._marca=marca;
        this._modelo=modelo;
        this._ano=ano;
        this._versao=versao;
        this._combustivel=combustivel;
        this._cores=cores;
        this._cambio=cambio;
        this._quilometragem=quilometragem;
        this._blindagem=blindagem;
    }

    public getPreco() : number{
        return this._preco;
    }
    
    public setPreco(preco : number) : void{
        this._preco = preco;
    }

    public getMarca() : string{
        return this._marca;
    }

    public setMarca(marca : string) : void{
        this._marca = marca;
    }

    public getModelo() : string{
        return this._modelo;
    }

    public setModelo(modelo : string) : void{
        this._modelo = modelo;
    }

    public getAno() : string{
        return this._ano;
    }

    public setAno(ano : string) : void{
        this._ano = ano;
    }

    public getVersao() : string{
        return this._versao;
    }

    public setVersao(versao : string) : void{
        this._versao = versao;
    }

    public getCombustivel() : string{
        return this._combustivel;
    }

    public setCombustivel(combustivel : string) : void{
        this._combustivel = combustivel;
    }

    public getCores() : string{
        return this._cores;
    }

    public setCores(cores : string) : void{
        this._cores = cores;
    }

    public getCambio() : string{
        return this._cambio;
    }

    public setCambio(cambio : string) : void{
        this._cambio = cambio;
    }

    public getQuilometragem() : number{
        return this._quilometragem;
    }

    public setQuilometragem(quilometragem : number) : void{
        this._quilometragem = quilometragem;
    }

    public getBlindagem() : string{
        return this._blindagem;
    }

    public setBlindagem(blindagem : string) : void{
        this._blindagem = blindagem;
    }


}
