# Portfólio Profissional — Otto David de Santana Freitag

> **CEO da Sysotto Softwares & Engenheiro de Software**  
> Mais de 20 anos de liderança executiva em grandes corporações industriais (Gerdau, CSN, Servisan, Servicon) integrados a sólida fundamentação técnica em engenharia de software e arquitetura de sistemas corporativos.

---

## 🌐 Visão Geral do Projeto

Este repositório contém o código-fonte do portfólio profissional de **Otto David de Santana Freitag**, desenvolvido para publicação estática direta no **GitHub Pages**.

Construído sobre padrões modernos da web sem dependências de frameworks externos pesados ou pipelines de build complexos, o projeto prioriza alta performance (Core Web Vitals), acessibilidade semântica (WAI-ARIA), suporte a preferências de movimento (`prefers-reduced-motion`), design responsivo e acabamento visual executivo.

---

## 🚀 Principais Recursos & Decisões Técnicas

1. **Bilinguismo Completo Reativo (PT-BR / EN-US):**
   - Alternância dinâmica de idioma sem recarregar a página gerenciada pelo `I18nManager`.
   - Atualização em tempo real de atributos acessíveis (`aria-label`, `title`), rótulos de botões e metadados de página (`document.title`, `meta[name="description"]`, Open Graph e Twitter Cards).
   - Atualização automática dos links e nomes de download dos currículos oficiais em PDF (`CV PT-BR` e `Resume EN-US`).
   - Persistência da preferência de idioma no `localStorage` com detecção de idioma do navegador.

2. **Detecção e Alternância de Tema (Dark / Light Mode):**
   - Detecção automática da preferência do sistema operacional (`prefers-color-scheme`).
   - Botão de alternância com transição suave e ícones adaptativos (Sol / Lua) com tooltips bilíngues.
   - Script inline anti-FOUC (Flash of Unstyled Content) garantindo renderização instantânea no tema correto antes da pintura da página.
   - Persistência da escolha do usuário no `localStorage`.

3. **Sysotto Softwares · Software house modular em três trilhas (ADR 008)**
   - **Sites e landing pages autorais.** Identidade visual própria e build estático portável.
   - **Sistemas corporativos modulares.** Implantação por contrato sobre `Sysotto.Web` e `Sysotto.Api`, com isolamento por tenant e extensões por cliente. O Sysotto Commerce V2 está em implantação para o soft-launch não fiscal.
   - **Projetos exclusivos e consultoria técnica.** Engenharia sob medida, arquitetura e hardening, com aplicação ou infraestrutura dedicada quando o contrato exigir.
   - O case documenta o hardening da plataforma compartilhada e o papel dos aceleradores internos. A seção de Serviços direciona propostas e diagnósticos para o contato por e-mail.

4. **Casos Técnicos em Destaque & Projetos Relevantes:**
   - **CondoTrack (Destaque Técnico · Simulação No Country S08-26 / Equipe 17):** Plataforma de operações e rastreabilidade 360° em Java 21, Spring Boot 3, Next.js 14, TypeScript e Docker. Otto atuou como Líder Técnico e arquiteto backend, implementando validação de QR Code indexado via B-Tree (<400ms), reservas com locks atômicos concorrentes e suíte com 114 testes automatizados em <9s.
   - **TechMind (Destaque Técnico · Hackathon ONE | Oracle + Alura):** Classificação inteligente com microsserviço Java 17 / Spring Boot, API de inferência Python / FastAPI, React 19 e deploy em Oracle Cloud (OCI).
   - **LAMARIÊ.** Design system e protótipo editorial validados no Figma Make para desktop e celular. A etapa transacional e a integração com ERP são apresentadas como conceito.
   - **Capturas reais.** Vitrine pública da Sysotto, PDV do Commerce com dados de demonstração e protótipo LAMARIÊ, em WebP com fallback JPG e textos alternativos bilíngues.
   - Demais projetos acessíveis via filtros por categoria: Estruturas de Dados em C (gestão manual de memória na heap), E-Commerce Microservices (.NET), Challenge LiterAlura (Java/Spring Boot) e Classificador Inteligente de E-mails (Python NLP).

5. **Taxonomia Tecnológica em 3 Níveis de Maturidade:**
   - **Tecnologias em projetos atuais da Sysotto:** C#, .NET 10, ASP.NET Core, EF Core 10, PostgreSQL, Next.js, React, TypeScript, Tailwind CSS, Docker, Linux.
   - **Tecnologias demonstradas em projetos e estudos:** Java 17/21, Spring Boot 3, Python (FastAPI/NLP), Linguagem C (estruturas de dados e controle de ponteiros), Oracle Cloud Infrastructure (OCI), Git/GitHub.
   - **Interesses & áreas em exploração contínua:** C++, Rust, Cibersegurança Defensiva, Defesa de Redes, Wireshark, Criptografia.

6. **Formação Acadêmica & Modal de Certificados:**
   - **Bacharelado em Engenharia de Software** (UNIFBV / Wyden · 4º Período em andamento · Conclusão prevista: 06/2029).
   - **MBA em Gestão Empresarial** (Fundação Getúlio Vargas - FGV).
   - **Bacharelado em Turismo** (Universidade de Fortaleza - UNIFOR).
   - **Modal Interativo de Certificados Oficiais:** Implementado conforme WAI-ARIA Modal Dialog, com retenção de foco (focus trap), fechamento por Escape ou clique externo, restauração de foco ao gatilho e downloads de documentos verificados.
     - Harvard University (CC50 / CS50 - 70h)
     - Cisco Networking Academy (Network Security, Defesa de Rede / CyberOps, NDG Linux Unhatched, Data Science)
     - Oracle Next Education — ONE (348h - 7 Formações completas)
     - Oracle Cloud Infrastructure (OCI Foundations Associate Badge)
     - Hackers do Bem (Cibersegurança Nivelamento & Básico - MCTI/RNP/Softex)
     - Digital Innovation One (DIO Campus Expert T13)

7. **Acessibilidade, Movimento & Semântica:**
   - Link de salto acessível (*Skip Link*) para navegação rápida via teclado.
   - Indicadores visíveis de foco de alto contraste (`:focus-visible`) em todos os elementos interativos.
   - Navegação por abas em conformidade com WAI-ARIA (teclas de seta ← / →, Home e End).
   - Suporte a `prefers-reduced-motion` no CSS e no script de rolagem suave.
   - Hierarquia semântica rigorosa de cabeçalhos (`h1` a `h4`) sem saltos de nível.

---

## 📁 Estrutura de Arquivos

```
ottodev/
├── index.html                   # Estrutura semântica e acessível do portfólio
├── en/
│   └── index.html               # Página estática em inglês gerada pelo script de i18n
├── robots.txt                   # Diretivas de indexação
├── sitemap.xml                  # URLs canônicas e alternâncias de idioma
├── .nojekyll                    # Impede processamento Jekyll no GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow para deploy automático
├── css/
│   └── style.css                # Sistema de design responsivo, variáveis CSS, a11y e dark/light
├── js/
│   ├── theme.js                 # Gerenciamento de tema (OS preference, toggle, anti-FOUC, a11y)
│   ├── i18n.js                  # Dicionários bilíngues (PT-BR / EN-US), metadados dinâmicos e CVs
│   └── main.js                  # Modal acessível, filtros de projetos, abas WAI-ARIA, menu mobile
├── scripts/
│   ├── build-i18n-static.mjs     # Regenera a página em inglês e localiza seus metadados
│   └── verify.py               # Audita referências, i18n, estilos inline, JSON-LD e SEO
└── assets/
    ├── docs/
    │   ├── cv-otto-freitag-pt-br.pdf   # Currículo oficial em Português
    │   └── cv-otto-freitag-en-us.pdf   # Currículo oficial em Inglês
    ├── certificates/                   # Certificados oficiais em PDF e Imagem
    │   ├── cert-harvard-cc50.pdf
    │   ├── cert-cisco-network-security.pdf
    │   ├── cert-cisco-network-defense.pdf
    │   ├── cert-cisco-ndg-linux.pdf
    │   ├── cert-oracle-one-program.pdf
    │   ├── cert-oracle-oci-badge.jpg
    │   ├── cert-hackers-do-bem-nivelamento.pdf
    │   ├── cert-hackers-do-bem-basico.pdf
    │   ├── cert-dio-campus-expert.pdf
    │   └── cert-cisco-intro-data-science.pdf
    └── images/
        ├── monogram-of.svg             # Favicon e monograma vetorial
        ├── otto-freitag.jpg            # Retrato profissional de fallback
        ├── og-cover.jpg                # Imagem Open Graph
        └── previews/                   # Capturas dos cases em WebP e JPG
```

---

## 💻 Como Rodar Localmente

Basta iniciar qualquer servidor estático HTTP simples na raiz do projeto:

```bash
# Com Python 3
python3 -m http.server 8000

# Ou com Node.js (npx serve)
npx serve .
```

Abra `http://localhost:8000/` para português ou `http://localhost:8000/en/` para inglês.

Estes comandos regeneram a rota em inglês e executam a auditoria após alterações na página principal ou nos dicionários.

```bash
node scripts/build-i18n-static.mjs
python3 scripts/verify.py
```

As duas rotas incluem metadados de SEO localizados, URLs canônicas próprias e os dados estruturados do portfólio e do catálogo de serviços da Sysotto. Atualize o `lastmod` de cada rota no sitemap quando seu conteúdo mudar de forma relevante.

---

## 🚢 Publicação no GitHub Pages

O projeto já está configurado com o GitHub Actions workflow (`.github/workflows/deploy.yml`).

Para publicar:
1. Faça o commit e push para a branch `main`:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio for Otto Freitag"
   git push origin main
   ```
2. No GitHub, acesse **Settings > Pages** do repositório `OttoF77/ottodev`.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. O workflow será acionado automaticamente e seu site estará publicado em `https://ottof77.github.io/ottodev/`.

---

## 📬 Contato

O portfólio `ottodev` recebe solicitações exclusivamente por e-mail, sem WhatsApp, chatbot, VoIP ou uso de número pessoal. A decisão está registrada na [issue #21](https://github.com/OttoF77/ottodev/issues/21).

- **E-mail:** [otto@sysotto.com](mailto:otto@sysotto.com)

## Perfis profissionais

- **LinkedIn:** [linkedin.com/in/otto-freitag-60912031](https://www.linkedin.com/in/otto-freitag-60912031)
- **GitHub:** [github.com/OttoF77](https://github.com/OttoF77)
- **Localização:** Parnaíba / Teresina - PI, Brasil (Disponível para atuação remota)
