# ✈️ Minério Viagens

Plataforma web desenvolvida para consulta e visualização de passagens aéreas, incluindo sistema de conversão automática de valores em milhas.

---

## 📌 Sobre o Projeto

A **Minério Viagens** é uma plataforma front-end criada com HTML, CSS e JavaScript, focada em proporcionar uma experiência moderna e intuitiva para usuários interessados em viagens e passagens aéreas.

O projeto conta com:

* sistema de cadastro de usuários;
* validação de formulários;
* alertas modernos utilizando SweetAlert2;
* conversão automática de valores em reais para milhas;
* alternância dinâmica entre valores em R$ e milhas;
* estrutura organizada em pastas;
* separação de scripts por funcionalidade.

---

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* SweetAlert2

---

## 📂 Estrutura do Projeto

```plaintext
minerio-viagens/
│
├── index.html
├── cadastro.html
├── passagens.html
│
└── src/
    │
    ├── css/
    │   ├── style.css
    │
    ├── js/
    │   ├── cadastro.js
    │   ├── milhas.js
    │   └── main.js
    │
    └── img/
```

---

## ⚙️ Funcionalidades

### ✅ Cadastro de Usuários

* Validação de campos obrigatórios;
* Feedback visual para campos inválidos;
* Popup de sucesso utilizando SweetAlert2.

### ✈️ Conversão para Milhas

* Conversão automática baseada no valor do milheiro;
* Cálculo preciso sem aproximações excessivas;
* Alternância entre:

  * valores em reais;
  * valores em milhas.

### 🎨 Interface Moderna

* Botões estilizados;
* Hover effects;
* Organização responsiva;
* Estrutura escalável para futuras implementações.

---

## 🧮 Fórmula Utilizada

Cada milheiro equivale a:

```plaintext
R$ 36,43
```

Conversão:

```plaintext
Milhas = (Valor da passagem / 36.43) × 1000
```

---

## 📦 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/minerio-viagens.git
```

2. Abra o projeto no VS Code;

3. Execute utilizando o Live Server ou abra o arquivo `index.html`.

---

## 🔮 Melhorias Futuras

* Sistema de login;
* Integração com APIs de passagens;
* Banco de dados;
* Dark mode;
* Favoritos;
* Painel administrativo;
* Sistema de busca e filtros;
* Responsividade avançada.

---

## 👨‍💻 Autor

Desenvolvido por Heitor, Felipe e Kauê.
