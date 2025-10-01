# 📱 Driven Recharge

## 🚀 Link do Deploy

Acesse a API em produção aqui:

🔗 (https://recharge-driven-creq.onrender.com)

---

## 📦 Funcionalidades da API

### 📲 Telefones (`/phones`)
- **POST /phones**: Cadastra um telefone (até 3 por cliente, por CPF).
- **GET /phones/:document**: Lista os telefones de um cliente pelo CPF.

### 💸 Recargas (`/recharges`)
- **POST /recharges**: Faz uma recarga (entre R$10 e R$1000).
- **GET /recharges/:number**: Lista recargas feitas em um número.

### 📊 Consolidado (`/summary/:document`)
- **GET**: Retorna todos os telefones e suas recargas associadas a um CPF.

---

## 🧱 Tecnologias utilizadas

- **Node.js + Express**
- **TypeScript**
- **PostgreSQL**
- **Joi** para validação de dados
- **Dotenv** para variáveis de ambiente
- **Render** para deploy da API

