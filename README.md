# 🧙 SabioDev

> O único assistente virtual que responde suas dúvidas enquanto julga silenciosamente seu código.

SabioDev é uma experiência de chat interativo com avatar animado, respostas em blocos, animação de digitação e arquitetura escalável para integração com múltiplos modelos de IA.

O projeto foi construído com foco em:

- Arquitetura desacoplada
- Runtime de avatar independente do React
- Sistema de blocos renderizáveis
- Pipeline de animação textual
- Integração com LLMs
- Escalabilidade para futuros recursos

---

# ✨ Features

## 💬 Chat em blocos

As mensagens do assistente são renderizadas em blocos independentes.

Isso permite:

- texto animado
- markdown estruturado
- futuros blocos multimídia
- gráficos
- código
- widgets
- componentes customizados

---

## ⌨️ Typing Animation

O texto do assistente é exibido progressivamente.

O sistema:

- respeita delays
- suporta pontuação
- evita rerenders desnecessários
- renderiza bloco por bloco

Tudo para dar aquela falsa sensação de inteligência superior.

---

## 🧠 AI Provider Architecture

A camada de IA foi desacoplada do frontend.

Atualmente:

- OpenRouter

Futuramente:

- OpenAI
- Gemini
- Ollama
- LM Studio
- Claude
- DeepSeek
- Modelos locais

Sem reescrever metade do projeto.

Milagre arquitetural.

---

## 🎭 Avatar Animado

O SabioDev possui um avatar animado usando:

- Spine 4.2
- PixiJS v8

Estados atuais:

- idle
- thinking
- talking

O runtime do avatar é isolado do React para evitar:

- rerenders
- múltiplos canvases
- summon acidental de entidades gráficas
- sofrimento psicológico

---

# 🏗️ Arquitetura

```txt
src/
 ├── ai/
 │    ├── providers/
 │    ├── services/
 │    └── types/
 │
 ├── avatar/
 │    ├── adapters/
 │    ├── components/
 │    ├── context/
 │    ├── controller/
 │    └── types/
 │
 ├── blocks/
 │    ├── components/
 │    ├── parser/
 │    └── types/
 │
 ├── chat/
 │    ├── components/
 │    ├── context/
 │    ├── controller/
 │    ├── services/
 │    └── types/
 │
 └── shared/
```

---

# ⚙️ Tecnologias

- React
- TypeScript
- Vite
- PixiJS v8
- Spine Runtime
- OpenRouter
- Markdown

---

# 🚀 Instalação

## 1. Clone o projeto

```bash
git clone <repo>
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Configure o `.env`

Crie:

```txt
.env
```

Adicione:

```env
VITE_OPENROUTER_API_KEY=YOUR_KEY
```

---

## 4. Rode o projeto

```bash
npm run dev
```

---

# 🧪 Roadmap

## Chat

- [x] mensagens em blocos
- [x] typing animation
- [x] markdown parser
- [x] status machine
- [ ] streaming token-by-token
- [ ] memória contextual
- [ ] chat persistente

---

## Avatar

- [x] integração Spine
- [x] estados básicos
- [ ] blink automático
- [ ] lipsync
- [ ] olhar seguindo mouse
- [ ] expressões emocionais

---

## IA

- [x] OpenRouter
- [ ] múltiplos providers
- [ ] fallback automático
- [ ] RAG
- [ ] tool calling
- [ ] voice interaction

---

# ⚠️ Observações

## API Keys

Nunca suba:

```txt
.env
```

Use:

```txt
.env.example
```

Porque vazar API key é uma forma muito eficiente de financiar a OpenAI involuntariamente.

---

## React StrictMode

O projeto possui integrações gráficas imperativas.

Durante o desenvolvimento:

- PixiJS
- Spine
- runtimes gráficos

podem exigir cuidados especiais com mount/unmount.

Se você viu:

```txt
this._cancelResize is not a function
```

parabéns.

Você encontrou um ritual ancestral do Pixi v8.

---

# 🧙 Sobre o SabioDev

SabioDev não é apenas um chatbot.

Ele é:

- um mentor
- um mascote
- um tutor
- um possível crítico do seu CSS
- uma entidade parcialmente senciente

Mas acima de tudo:

Ele acredita em você.

Mesmo quando o TypeScript não acredita.

---

# 📜 Licença

Este projeto pode ser utilizado, modificado e distribuído livremente.

Porém:

- os créditos ao autor original são obrigatórios
- mantenha referência ao projeto SabioDev
- mantenha referência ao criador Tiago Sacramento

Uso comercial é permitido desde que os créditos sejam preservados.

Porque até os magos do código merecem reconhecimento.

Só não culpe o SabioDev por commits feitos às 3 da manhã.
