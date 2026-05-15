# PDF Service (Node.js/React-PDF)

Microserviço genérico de geração de PDF utilizando React e `@react-pdf/renderer` para alta performance e layouts declarativos. Este serviço foi projetado para ser uma alternativa leve e tipada ao serviço de PDF baseado em Chromium.

## Características

- **React Templates**: Define layouts utilizando componentes React, facilitando a reutilização de componentes e a lógica de visualização.
- **Engine Nativa**: Renderização direta para stream de PDF sem a necessidade de um navegador headless (Chromium), o que reduz drasticamente o consumo de memória e o tamanho da imagem Docker.
- **Tipagem Forte**: Totalmente desenvolvido em TypeScript, garantindo que os dados enviados para os templates estejam sempre corretos.
- **Pronto para Docker**: Dockerfile multi-stage otimizado para produção.
- **Fácil Extensibilidade**: Adicionar novos templates é tão simples quanto criar um novo componente React e registrá-lo.

## Configuração

A porta padrão do serviço é a **8889**, mantendo a compatibilidade com o ecossistema de serviços da stack.

### Porta do Serviço (Variável de Ambiente)
```bash
PORT=8889
```

## Como Executar

### 1. Instalação e Build
Antes de rodar, instale as dependências e compile o código TypeScript:
```bash
# Instala as dependências e gera o diretório dist/
make build
```

### 2. Execução (Desenvolvimento)
Para rodar localmente com **Hot Reload** (o servidor reinicia a cada alteração no código):
```bash
make dev
```

### 3. Docker (Produção/Testes)
O projeto inclui comandos para subir o ambiente via Docker Compose:

```bash
# Sobe o container do serviço
make up

# Para derrubar o serviço
make down
```

### 4. Limpeza
Para remover artefatos de build e pastas de dependências:
```bash
make clean
```

## API Endpoint

### Gerar PDF
**POST** `http://localhost:8889/v1/pdf/generate`

**Payload Exemplo:**
```json
{
  "template": "simple",
  "data": {
    "title": "Relatório de Vendas",
    "content": "Este é um exemplo de conteúdo gerado via React-PDF.",
    "items": ["Item A", "Item B", "Item C"]
  }
}
```

## Testes e Qualidade

O projeto utiliza **Jest** para testes unitários e garante a integridade do motor de geração:

- **Executar Testes Unitários:**
  ```bash
  make test
  ```

- **Testar API Manualmente (via Curl):**
  ```bash
  make test-api
  ```
  *(O PDF gerado será salvo como `test_react.pdf` na raiz do projeto).*

## Estrutura do Projeto

- `src/engine`: Lógica central de renderização (converte React element para Stream).
- `src/templates`: Componentes React-PDF que definem os layouts disponíveis.
- `src/types`: Definições de tipos e interfaces para payloads e templates.
- `tests/`: Testes automatizados espelhando a estrutura do `src/`.
- `Makefile`: Automação de tarefas de build, execução e testes.
