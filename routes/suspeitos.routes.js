import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: 1,
        nome: "Dr. Deulaine",
        profissão: "Dj",
        envolvimentoEmApostas: false,
        nivelDeSuspeita: "Alto"
    },
    {
        id: 2,
        nome: "Gustavo Lima",
        profissão: "Cantor",
        envolvimentoEmApostas: true,
        nivelDeSuspeita: "Médio"
    },
    {
        id: 3,
        nome: "Lula",
        profissão: "Presidente",
        envolvimentoEmApostas: false,
        nivelDeSuspeita: "Baixo"
    }
];

suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).send(suspeitos);
});


export default suspeitosRoutes;