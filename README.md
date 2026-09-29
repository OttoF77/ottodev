# Portfólio Profissional — Otto David de Santana Freitag

> **CEO da Sysotto Software House & Engenheiro de Software**  
> Mais de 20 anos de experiência em liderança executiva em grandes corporações industriais (Gerdau, CSN, Servisan, Servicon) integrados a sólida fundamentação técnica e arquitetura de software corporativo moderno.

---

## 🌐 Visão Geral do Projeto

Este repositório contém o código-fonte do portfólio profissional de **Otto David de Santana Freitag**, desenvolvido para publicação direta no **GitHub Pages**.

Construído com base em padrões modernos da web, o site foi projetado com foco em alta performance (Core Web Vitals), acessibilidade semântica, responsividade e estética executiva refinada.

---

## 🚀 Principais Funcionalidades

1. **Bilinguismo Completo (PT-BR / EN-US):**
   - Alternância dinâmica e reativa de idioma sem recarregar a página.
   - Atualização automática dos links e nomes de download dos currículos oficiais em PDF (`CV PT-BR` e `Resume EN-US`).
   - Persistência da preferência de idioma no `localStorage`.

2. **Detecção e Alternância de Tema (Dark / Light Mode):**
   - Detecção automática da preferência do sistema operacional (`prefers-color-scheme`).
   - Botão de alternância com transição suave e ícones adaptativos (Sol / Lua).
   - Script inline anti-FOUC (Flash of Unstyled Content) garantindo renderização instantânea no tema correto.
   - Persistência da escolha do usuário no `localStorage`.

3. **Sysotto Software House & Sistemas em Produção:**
   - Apresentação da **Sysotto** como software house especializada em SaaS verticais e ERP modular, tendo Otto como seu CEO e Arquiteto Fundador.
   - Módulos reais detalhados entre o que já está **100% funcional** e o que está **em fase de homologação / próximos lançamentos**:
     - **Sysotto ERP / Industry (IndSaaS):** Gestão avançada de inventário (FEFO, FIFO, LIFO), controle de lotes, rastreabilidade GS1-128 com QR Code, endereçamento 3D de armazéns e inventário rotativo auditado.
     - **Sysotto FoodService (RestSaaS):** Módulo `TableOrdersManager` para comandas e mesas, cardápio digital dinâmico multi-tenant, Kitchen Display System (KDS) em tempo real e agente de impressão térmica desktop nativo em .NET 10 (`Sysotto.PrintingModule.Agent`).
     - **Sysotto SiteBuilder & CMS (SitesSaaS):** Construtor visual contextual com 25 presets prontos, gestão e recorte dinâmico de mídias (`MediaAssets`), Help Hub integrado e suíte com mais de 370 testes automatizados.
     - **Sysotto Multi-Tenant Core:** Resolução dinâmica de tenant via middleware (`MonolithTenantProvider`), isolamento lógico de banco com PostgreSQL RLS, OpenIddict OAuth2/OIDC, segurança fail-closed e Redis cache.
   - Mockups de alta fidelidade simulando a operação real de cada sistema.

4. **Projetos Acadêmicos & Capacitação de Alto Impacto (GitHub OttoF77):**
   - **Estruturas de Dados em C:** Listas encadeadas, árvores binárias, filas, pilhas e algoritmos com gestão manual de ponteiros e memória na heap.
   - **E-Commerce Microservices:** Arquitetura distribuída em C# / .NET com mensageria assíncrona.
   - **Challenge LiterAlura & ONE Backend:** Aplicação corporativa Java 17 + Spring Boot 3 + PostgreSQL consumindo API Gutendex.
   - **Classificador Inteligente de E-mails:** Aplicação em Python aplicando NLP e aprendizado supervisionado.
   - **Agentes Autônomos de IA & Voz:** Agentes conversacionais integrando LLMs e Speech-to-Text (DIO / Suzano).
   - **Conversor de Moedas Full-Stack:** Integração full-stack Java e JavaScript com taxas de câmbio em tempo real.

5. **Taxonomia Tecnológica (Stacks por Nível de Profundidade):**
   - **Stacks Principais (Produção Sysotto):** C#, .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, Redis, Docker, Next.js, React, TypeScript, Tailwind CSS, Linux.
   - **Interesses & Pesquisa Ativa:** Linguagem C, C++, Rust, Cibersegurança Defensiva, Defesa de Redes, Wireshark, Criptografia.
   - **Fundamentação Acadêmica e Formações Complementares:** Java (Spring Boot 3), Python (FastAPI/Flask), T-SQL, Microsoft Azure, Oracle Cloud (OCI).

6. **Formação Acadêmica & Central de Certificados Oficiais:**
   - **Bacharelado em Engenharia de Software** (UNIFBV / Wyden).
   - **MBA em Gestão Empresarial** (Fundação Getúlio Vargas - FGV).
   - **Bacharelado em Turismo** (Universidade de Fortaleza - UNIFOR).
   - **Modal Interativo de Visualização & Download de Certificados:**
     - Harvard University (CC50 / CS50 - 70 Horas)
     - Cisco Networking Academy (Network Security)
     - Cisco Networking Academy (Defesa de Rede / CyberOps)
     - Cisco Networking Academy (NDG Linux Unhatched)
     - Oracle Next Education — ONE (348 Horas - 7 Formações completas)
     - Oracle Cloud Infrastructure (OCI Foundations Associate Badge)
     - Hackers do Bem (Cibersegurança Nivelamento & Básico - MCTI/RNP)
     - Digital Innovation One (DIO Campus Expert T13)
     - Cisco Introduction to Data Science

---

## 📁 Estrutura de Arquivos

```
ottodev/
├── index.html                   # Estrutura semântica e acessível do portfólio
├── .nojekyll                    # Impede o processamento Jekyll no GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow para deploy automático
├── css/
│   └── style.css                # Sistema de design responsivo, variáveis CSS, dark/light
├── js/
│   ├── theme.js                 # Gerenciamento de tema (OS preference, toggle, anti-FOUC)
│   ├── i18n.js                  # Dicionários bilíngues (PT-BR / EN-US) e sincronização
│   └── main.js                  # Modal de certificados, filtros de projetos, menu mobile
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
        ├── sysottologolight.svg
        ├── sysottologodark.svg
        ├── indsaaslogolight.svg
        ├── indsaaslogodark.svg
        ├── restsaaslogolight.svg
        ├── restsaaslogodark.svg
        ├── siteslogolight.svg
        └── siteslogodark.svg
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

Abra `http://localhost:8000` no seu navegador.

---

## 🚢 Publicação no GitHub Pages

O projeto já está configurado com o GitHub Actions workflow (`.github/workflows/deploy.yml`).

Para publicar:
1. Faça o commit e push para o repositório no branch `main`:
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

- **E-mail:** [ottofreitag@uol.com.br](mailto:ottofreitag@uol.com.br)
- **LinkedIn:** [linkedin.com/in/otto-freitag-60912031](https://www.linkedin.com/in/otto-freitag-60912031)
- **GitHub:** [github.com/OttoF77](https://github.com/OttoF77)
- **Localização:** Parnaíba / Teresina - PI, Brasil
