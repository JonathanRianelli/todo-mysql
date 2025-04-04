# 📋 To-Do List Full-Stack

<img src=".\client\src\img/crud-mysql.gif">

> **Nota**: Este projeto é destinado para execução local. Não está hospedado publicamente.

## 🚀 Visão Geral
Aplicação full-stack de lista de tarefas com:
- **Frontend**: React + SCSS
- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL

## ⚙️ Pré-requisitos
- Node.js v18+
- MySQL Server 8.0+
- Git (opcional)

## 🛠️ Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/JonathanRianelli/todo-mysql.git
cd todo-mysql
```

### 2. Banco de Dados MySQL
```sql
CREATE DATABASE todo;
USE todo;

CREATE TABLE `tarefas` (
  `idtarefas` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `completo` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idtarefas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 3. Configure o ambiente
Crie `server/.env`:
```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=todo
PORT=3001
```

## 🚀 Execução
**Backend:**
```bash
cd server
npm install
npm start
```

**Frontend:**
```bash
cd client
npm install
npm start
```

## 🏗️ Estrutura do Projeto
```
todo-mysql/
├── client/          # React App
├── server/          # Node.js API
└── README.md
```

## 🔍 Funcionalidades
- ✅ Adicionar tarefas
- ✔️ Marcar como completo
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
