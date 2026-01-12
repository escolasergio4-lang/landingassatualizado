# Store Apps - PWA

Uma Progressive Web App inspirada na Play Store com design escuro moderno e paleta de cores personalizada.

## 🎨 Paleta de Cores

- **Jordy Blue**: #93BFEF (147, 191, 239)
- **Tufts Blue**: #468BE6 (70, 139, 230)  
- **Alice Blue**: #E9F5FF (233, 245, 255)
- **Cobalt Blue**: #1A5799 (26, 87, 153)
- **Cool Black**: #092F64 (9, 47, 100)
- **Eirie Black**: #1F1F1F (31, 31, 31)

## 🚀 Recursos

- ✅ **PWA Instalável**: Funciona como app nativo no Android e iOS
- ✅ **Design Responsivo**: Adaptável para desktop, tablet e mobile
- ✅ **Modo Escuro**: Interface harmônica com glassmorphism
- ✅ **Offline Support**: Funciona sem conexão via Service Worker
- ✅ **Busca e Categorias**: Filtre apps por categoria ou texto
- ✅ **Modal de Detalhes**: Informações completas dos apps
- ✅ **Fácil Adição**: Simples adicionar novos apps no código

## 📱 Como Usar

### Instalação como PWA
1. Abra o site em um navegador moderno (Chrome, Firefox, Safari)
2. Aguarde o prompt de instalação (aparece após 3 segundos)
3. Clique em "Instalar" ou use o menu do navegador → "Instalar aplicativo"
4. O app será instalado como um aplicativo nativo

### Adicionar Novos Apps
Edite o array `apps` no arquivo `index.html`:

```javascript
{
    id: 7,
    name: "Nome do App",
    category: "categoria",
    icon: "URL do ícone",
    images: ["URL da imagem 1", "URL da imagem 2"],
    description: "Descrição curta",
    longDescription: "Descrição detalhada",
    developer: "Desenvolvedor",
    size: "Tamanho",
    version: "Versão",
    rating: 4.5,
    downloads: "Número de downloads",
    price: "Grátis/Pago",
    featured: true/false,
    link: "URL do app"
}
```

## 🛠️ Estrutura dos Arquivos

```
storeapps/
├── index.html          # Aplicação principal
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker (offline support)
├── icon.svg           # Ícone SVG base
├── generate-icons.html # Gerador de ícones
└── README.md          # Este arquivo
```

## 🌐 Funcionalidades PWA

- **Service Worker**: Cache inteligente para funcionar offline
- **Web App Manifest**: Configuração para instalação nativa
- **Responsive Design**: Adaptação para todos os tamanhos de tela
- **Install Prompt**: Notificação amigável para instalação
- **Theme Color**: Cores personalizadas para integração com o sistema

## 🎯 Design Features

- **Glassmorphism**: Efeito de vidro com backdrop-filter
- **Gradientes**: Fundos e botões com gradientes suaves
- **Animações**: Transições suaves e hover effects
- **Cores Coesivas**: Paleta harmoniosa em modo escuro
- **Tipografia**: Fontes modernas e legíveis

## 📱 Compatibilidade

- ✅ Android Chrome 70+
- ✅ iOS Safari 12.2+
- ✅ Desktop Chrome/Firefox/Edge
- ✅ Responsivo para todos os tamanhos

## 🔧 Desenvolvimento

Para desenvolvimento local:
1. Use um servidor HTTP (ex: `python -m http.server` ou `npx serve`)
2. Abra `http://localhost:8000` no navegador
3. Teste o modo PWA com as DevTools (Application → Manifest)

## 📝 Notas

- Os ícones PNG precisam ser gerados usando o `generate-icons.html`
- Para produção, sirva os arquivos via HTTPS
- O Service Worker cacheia os recursos essenciais para funcionar offline