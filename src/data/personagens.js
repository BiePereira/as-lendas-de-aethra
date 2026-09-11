import imagemKaelis from "../assets/images/kaelis.png";
import imagemKaelisHero from "../assets/images/kaelis-hero.png";
import imagemGaren from "../assets/images/garen.jpg";
import imagemRiel from "../assets/images/riel.png";

export const kaelis = {
    nome: "Kaelis",
    descricao: "A druidesa de Becanlar.",
    imagemCard: imagemKaelis.src,
    imagemHero: imagemKaelisHero.src,
    alt: "Kaelis partindo de Becanlar",
    link: "personagens/kaelis",

    frase: "Pelo menos eu tenho motivo para ter minhas orelhas assim. Pior é você com essas bolotinhas achatadas por aí. Tem certeza que sua mãe não te trouxe de Rook arrastado por um pé?",
    raca: "Meio-elfa",
    origem: "Becanlar",
    descricao: "A druidesa de Becanlar",
    historia: "",
    idade: "16 anos"
}

export const garen = {
    nome: "Garen",
    descricao: "O guardião de Vau dos Gansos.",
    imagemCard: imagemGaren.src,
    alt: "Garen chegando em Vardis",
    link: "personagens/garen"
}

export const riel = {
    nome: "Riel",
    descricao: "O ladino de Vardis.",
    imagemCard: imagemRiel.src,
    alt: "Riel em uma taverna de Vênia",
    link: "personagens/riel"
}

export const personagens = [
    kaelis,
    garen,
    riel
];