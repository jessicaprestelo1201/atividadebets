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

suspeitosRoutes.post("/", (req, res) => {
  const { nome, profissão, envolvimentoEmApostas, nivelDeSuspeita } = req.body;
  if (!nome || !profissão || !nivelDeSuspeita) {
      return res.status(400).send({ message: "Nome, profissão e nível de suspeita são obrigatórios" });
  }
  const novoSuspeito = {
      id: suspeitos.length + 1,
      nome,
      profissão,
      envolvimentoEmApostas,
      nivelDeSuspeita
  };
  suspeitos.push(novoSuspeito);
  return res.status(201).send(novoSuspeito);
});


suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  const suspeito = suspeitos.find((suspeito) => suspeito.id == id);
  if (!suspeito) {
      return res.status(404).send({ message: `Suspeito com id ${id} não foi encontrado!` });
  }
  return res.status(200).json(suspeito);
});



export default suspeitosRoutes;