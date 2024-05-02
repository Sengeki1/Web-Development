
const todosprodutos = [];

module.exports = class Produto {

  constructor(nome, imageURL, description, preco) {
    this.nome = nome;
    this.imageURL = imageURL
    this.description = description
    this.preco = preco
  }

  save() {
      todosprodutos.push(this);
  }

  static fetchAll() {
    return todosprodutos;
  }

}