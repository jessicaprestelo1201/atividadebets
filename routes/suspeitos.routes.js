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
