import imagemKaelis from "../assets/images/kaelis.png";
import imagemKaelisHero from "../assets/images/kaelis-hero.png";

import imagemGaren from "../assets/images/garen.jpg";

import imagemRiel from "../assets/images/riel.png";
import imagemRielHero from "../assets/images/riel-hero.png";

export const kaelis = {
    nome: "Kaelis",
    slug: "kaelis",
    descricao: "A druidesa de Becanlar",
    imagemCard: imagemKaelis,
    imagemHero: imagemKaelisHero,
    alt: "Kaelis partindo de Becanlar",
    frase: "Pelo menos eu tenho motivo para ter minhas orelhas assim. Pior é você com essas bolotinhas achatadas por aí. Tem certeza que sua mãe não te trouxe de Rook arrastado por um pé?",
    raca: "Meio-elfa",
    origem: "Becanlar",
    historia: "",
    idade: "16 anos"
}

export const garen = {
    nome: "Garen",
    slug: "garen",
    descricao: "O guardião de Vau dos Gansos",
    imagemCard: imagemGaren,
    alt: "Garen chegando em Vardis",
    frase: "Pouco me importa o ouro, que leve tudo. A informação que eu precisava ninguém irá me roubar.",
    idade: "19 anos"
}

export const riel = {
    nome: "Riel",
    slug: "riel",
    descricao: "O ladino de Vardis",
    imagemCard: imagemRiel,
    imagemHero: imagemRielHero,
    alt: "Riel em uma taverna de Vênia",
    frase: "Especialista não... Mestre.",
    idade: "11 anos"
}

export const personagens = [
    kaelis,
    garen,
    riel
];