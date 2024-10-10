import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Dr. Deolaine",
    profissão: "Cantora",
    Envolvimento: yes,
   nivelSuspeita: "medio"
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "José Sarney",
    profissão: "Político",
    Envolvimento: yes,
   nivelSuspeita: "alto"
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Paulo Maluf",
    profissão: "Político",
    Envolvimento: yes,
   nivelSuspeita: "alto" 

  }
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeito);
});

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((perseguido) => perseguido.id == id);

    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });

// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissão, nivelSuspeita, Envolvimento} = req.body;
});


  // Remove o suspeito do array de suspeitos
  suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

  return res.status(200).json({
    message: "Suspeito removido com sucesso!",
    suspeito,
  });

export default suspeitosRoutes;