/**
 * Internationalization (i18n) for Otto Freitag Portfolio
 * Supports Portuguese (pt-BR) and English (en-US).
 */

const translations = {
  'pt-BR': {
    // Page Metadata
    'meta.title': 'Otto Freitag | Engenharia de Software e Sysotto',
    'meta.description': 'Otto Freitag, fundador da Sysotto Softwares. Sites e landing pages sob medida, sistemas modulares e projetos enterprise com consultoria técnica.',
    'meta.image_alt': 'Card executivo de Otto Freitag',
    'brand.monogram_alt': 'Monograma de Otto Freitag',

    // Structured Data
    'schema.job_title': 'Fundador da Sysotto e engenheiro de software',
    'schema.expertise_architecture': 'Arquitetura de software modular',
    'schema.expertise_isolation': 'Isolamento de dados multi-tenant',
    'schema.expertise_hardening': 'Hardening de APIs',
    'schema.expertise_consulting': 'Consultoria técnica',
    'schema.organization_description': 'Software house modular com três trilhas de contratação para desenvolvimento sob medida.',
    'schema.catalog_name': 'Trilhas da Sysotto Software House',
    'schema.sites_name': 'Sites e landing pages sob medida',
    'schema.sites_description': 'Projetos com identidade visual própria, build estático portável e hospedagem opcional.',
    'schema.systems_name': 'Sistemas corporativos modulares',
    'schema.systems_description': 'Implantação por contrato sobre Sysotto.Web e Sysotto.Api, com isolamento por tenant e extensões para operações como o Sysotto Commerce.',
    'schema.enterprise_name': 'Projetos enterprise e consultoria técnica',
    'schema.enterprise_description': 'Engenharia sob medida, arquitetura, hardening de APIs e manutenção dedicada, com aplicação ou infraestrutura isolada quando o contrato exigir.',

    // Navigation & Common Accessibility
    'nav.skip_to_content': 'Pular para o conteúdo principal',
    'nav.primary_label': 'Navegação Principal',
    'nav.brand_aria': 'Otto Freitag - Início',
    'nav.cv_aria': 'Baixar currículo em PDF',
    'projects.filter_label': 'Filtrar projetos por categoria',
    'projects.repo_aria': 'Ver repositório do projeto no GitHub',
    'projects.showcase_aria': 'Ver showcase do projeto no GitHub',
    'projects.video_aria': 'Assistir à demonstração do projeto no YouTube',
    'sysotto.tabs_label': 'Visão técnica da Sysotto',
    'modal.close': 'Fechar janela modal',
    'theme.enable_light': 'Ativar tema claro',
    'theme.enable_dark': 'Ativar tema escuro',
    'modal.cert_default': 'Certificado Oficial',
    'modal.document_title': 'Documento do certificado',
    'modal.badge_alt': 'Badge ou certificado',
    'modal.video_default': 'Demonstração em Vídeo',
    'modal.video_subtitle': 'Player sob demanda · Modo Privacidade',
    'modal.video_external': 'Abrir no YouTube',
    'modal.video_external_aria': 'Abrir vídeo original no YouTube em nova aba',
    'modal.video_player_title': 'Reprodutor de vídeo do YouTube',
    'proj.condotrack_video_title': 'CondoTrack — Gestão & Rastreabilidade 360° (Demonstração)',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.sysotto': 'Case Sysotto',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.skills': 'Tecnologias',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.cv': 'Currículo (PDF)',
    'nav.cv_pt': 'Currículo PT-BR',
    'nav.cv_en': 'Resume EN-US',

    // Hero
    'hero.badge': 'Arquiteto de Soluções · Engenheiro de Software · Fundador Sysotto',
    'hero.photo_alt': 'Otto David de Santana Freitag - Retrato Profissional',
    'hero.title_start': 'Engenharia de software e',
    'hero.title_highlight': 'arquitetura de soluções',
    'hero.title_end': 'aliadas a mais de 20 anos de liderança executiva.',
    'hero.subtitle': 'Na Sysotto Softwares, desenvolvo sites autorais, sistemas modulares e projetos corporativos sob medida. Aplico mais de 20 anos de gestão executiva (Gerdau, CSN, Servisan) à engenharia de software para operações críticas.',
    'hero.description': 'Na Sysotto Softwares, desenvolvo sites autorais, sistemas modulares e projetos corporativos sob medida. Aplico mais de 20 anos de gestão executiva (Gerdau, CSN, Servisan) à engenharia de software para operações críticas.',
    'hero.cta_primary': 'Solicitar Orçamento / Diagnóstico',
    'hero.cta_projects': 'Ver cases e projetos',
    'hero.cta_academic': 'Ver Projetos de Engenharia',
    'hero.cta_cv': 'Baixar Currículo (PDF)',
    'hero.cta_contact': 'Contato & Oportunidades',
    'hero.location': 'Piauí, Brasil · Disponível para atuação remota',
    'hero.role_location': 'Piauí, Brasil · Disponível para atuação remota',
    'hero.pill_experience': '20+ Anos em Gestão Executiva',
    'hero.pill_role': 'Arquiteto & Eng. de Software',
    'hero.stat_experience': '20+ Anos',
    'hero.stat_experience_desc': 'Liderança executiva & gestão de resultados',
    'hero.stat_academic': 'Eng. de Software',
    'hero.stat_academic_desc': 'UNIFBV/Wyden + MBA FGV',
    'hero.stat_sysotto': 'Engenharia de Soluções',
    'hero.stat_sysotto_desc': 'Fundador da Sysotto e arquiteto de software',

    // About Section
    'about.title': 'Sobre & Transição de Carreira',
    'about.subtitle': 'Solidez executiva corporativa integrada a rigor técnico em engenharia de software.',
    'about.p1': 'Construí uma carreira de mais de 20 anos como Gerente Geral e Gerente Comercial em grandes operações industriais e logísticas, incluindo <strong>Gerdau S/A</strong> (gestão de filial com crescimento superior a 30% a.a.), <strong>CSN</strong>, <strong>Servisan</strong> e <strong>Servicon</strong>. Essa vivência me confere domínio prático de processos de negócio, liderança de equipes e tomada de decisão orientada a resultados.',
    'about.p2': 'Na transição para a tecnologia, uni essa bagagem executiva à computação aplicada. Como <strong>CEO e Arquiteto de Soluções na Sysotto Softwares</strong>, projeto e implemento plataformas SaaS multi-tenant e sistemas corporativos, com foco em arquiteturas escaláveis (.NET, C#, PostgreSQL e Next.js), segurança e confiabilidade operacional.',
    'about.p3': 'Sou graduando em <strong>Engenharia de Software (UNIFBV/Wyden)</strong>, com <strong>MBA em Gestão Empresarial pela FGV</strong> e <strong>Bacharelado em Turismo pela UNIFOR</strong>, mantendo dedicação contínua aos fundamentos da computação, estruturas de dados, sistemas distribuídos e segurança defensiva.',
    "about.impact_title": "Liderança que gera resultados",
    "about.impact_gerdau_growth_value": "Expansão de Negócios",
    "about.impact_gerdau_growth_desc": "Crescimento superior a 30% ao ano no volume de vendas da filial Fortaleza, acompanhado de aumento da lucratividade.",
    "about.impact_gerdau_context": "Gerdau · Gerente de Unidade · 2004–2010",
    "about.impact_sales_value": "Liderança de Operações",
    "about.impact_sales_desc": "Responsabilidade pela operação no Piauí, com prospecção e retenção de contratos públicos e privados e gestão operacional, financeira e de pessoal.",
    "about.impact_sales_context": "Servisan · Gerente Geral · 2014–2016",
    "about.impact_operations_value": "Aceleração Comercial",
    "about.impact_operations_desc": "Quadruplicação do volume de vendas em dois anos, com participação decisiva no reposicionamento comercial, maior rentabilidade e ganho de participação de mercado no downstream.",
    "about.impact_operations_context": "Metalmecânica Maia · Gerente Comercial · 2012–2014",
    "about.impact_todeschini_value": "Sucesso em Vendas",
    "about.impact_todeschini_desc": "Crescimento de 150% nas vendas em um ano, com desenvolvimento de novos mercados e aprimoramento da gestão comercial.",
    "about.impact_todeschini_context": "Todeschini Manaus · Gerente de Vendas · 2002–2003",
    'about.leadership_title': 'Diferenciais Estratégicos',
    'about.diff_1_title': 'Visão de Negócio & ROI:',
    'about.diff_1_desc': 'Capacidade comprovada de traduzir requisitos complexos de mercado em arquiteturas técnicas escaláveis e lucrativas.',
    'about.diff_2_title': 'Liderança & Gestão de Pessoas:',
    'about.diff_2_desc': 'Experiência sólida na coordenação de equipes multidisciplinares, alinhando objetivos estratégicos a metas operacionais.',
    'about.diff_3_title': 'Engenharia com Foco em Qualidade:',
    'about.diff_3_desc': 'Práticas rigorosas de arquitetura limpa, testes automatizados, segurança fail-closed e isolamento multi-tenant.',
    'timeline.title': 'Marcos Executivos & Trajetória',
    'timeline.sysotto_role': 'CEO & Arquiteto Fundador',
    'timeline.sysotto_date': '2022 – Presente',
    'timeline.sysotto_desc': 'Liderança técnica na Sysotto Softwares, com sites autorais, sistemas modulares sobre Sysotto.Web e Sysotto.Api e projetos sob medida em .NET e Next.js.',
    'timeline.servicon_role': 'Sócio-Gerente',
    'timeline.servicon_date': '2017 – 2021',
    'timeline.servicon_desc': 'Gestão comercial de energia solar e infraestrutura nos estados do Piauí e Maranhão, além da administração contábil e financeira.',
    'timeline.servisan_role': 'Gerente Geral Regional',
    'timeline.servisan_date': '2014 – 2016',
    'timeline.servisan_desc': 'Responsável por uma operação de grande porte em terceirização, prospecção e retenção de contratos corporativos e públicos.',
    'timeline.csn_role': 'Gerente Comercial',
    'timeline.csn_date': '2011 – 2014',
    'timeline.csn_desc': 'Gestão de vendas industriais corporativas e logística de downstream no Ceará, Piauí e Maranhão.',
    'timeline.gerdau_role': 'Gerente de Unidade / Filial Fortaleza',
    'timeline.gerdau_date': '2004 – 2010',
    'timeline.gerdau_desc': 'Liderança de centro de distribuição regional da Gerdau. Crescimento superior a 30% ao ano no volume e alta rentabilidade.',

    // Versatility & Multi-Sector Solutions
    'versatility.pill': 'Soluções Multissetoriais',
    'versatility.title': 'Versatilidade & Capacidade de Entrega por Segmento',
    'versatility.subtitle': 'Arquitetura técnica e visão executiva aplicadas a diferentes portes, necessidades operacionais e mercados.',
    'versatility.ind_title': 'Grandes Indústrias & Operações (Enterprise)',
    'versatility.ind_desc': 'Modelagem de fluxos operacionais de alta complexidade, integração entre gestão executiva e chão de fábrica, auditoria contínua de processos e conformidade regulatória corporativa.',
    'versatility.sme_title': 'PMEs, Varejo & Serviços Comerciais',
    'versatility.sme_desc': 'Automação de operações comerciais e de atendimento, eliminação de intermediários tecnológicos de alto custo, estabilidade operacional e foco direto em redução de custos operacionais.',
    'versatility.saas_title': 'Startups & Produtos Digitais (SaaS B2B)',
    'versatility.saas_desc': 'Concepção de produtos escaláveis com isolamento rigoroso entre clientes, governança multi-tenant, estratégias modernas de provisionamento e visão orientada a retenção e ROI.',

    // Sysotto Section
    'sysotto.pill': 'Arquitetura & Engenharia de Software',
    'sysotto.title': 'Case Sysotto · Software house modular',
    'sysotto.subtitle': 'Modelo comercial vigente, Commerce V2 em implantação e engenharia da plataforma compartilhada.',
    'sysotto.company_name': 'Sysotto Softwares',
    'sysotto.company_tagline': 'Engenharia de software sob medida',
    'sysotto.role_badge': 'Otto Freitag · Fundador e arquiteto',
    'sysotto.lead': 'O ADR 008 formalizou a atuação da Sysotto como software house modular em três trilhas.',
    'sysotto.track_1_title': 'Trilha 1 · Sites e landing pages autorais',
    'sysotto.track_1_desc': 'Design sob medida por cliente, com build estático portável para Caddy ou Cloudflare Pages.',
    'sysotto.track_2_title': 'Trilha 2 · Sistemas sobre o Core Sysotto',
    'sysotto.track_2_desc': 'Portal único Sysotto.Web (app.sysotto.com) e monólito modular Sysotto.Api. A ativação é feita por contrato, com isolamento por TenantId e RLS no PostgreSQL e extensões por cliente.',
    'sysotto.track_3_title': 'Trilha 3 · Projetos exclusivos e enterprise',
    'sysotto.track_3_desc': 'Aplicação ou infraestrutura dedicada quando uma experiência exclusiva ou exigência de conformidade justificar a separação e o contrato cobrir o custo.',
    'sysotto.accelerators': 'Componentes de edição web, estoque industrial e operação de salão e cozinha são reutilizados em projetos sob medida, junto aos módulos compartilhados de vendas, estoque, financeiro e fiscal.',
    'sysotto.tab_commerce': 'Commerce V2',
    'sysotto.commerce_title': 'Sysotto Commerce V2',
    'sysotto.commerce_status': 'Implementado · Soft-launch não fiscal em implantação',
    'sysotto.commerce_desc': 'Módulo da Trilha 2 para operações de varejo multi-filial no portal Sysotto.Web, com ativação por contrato.',
    'sysotto.commerce_features': 'A V2 reúne PDV de balcão, curva ABC de produtos e conciliação bancária com arquivos OFX e CSV.',
    'sysotto.commerce_fiscal': 'A integração fiscal com Dados Jah está implementada. A emissão real de NFC-e e NF-e em produção depende da homologação com emitente autorizado e certificado A1.',
    'sysotto.core_status': 'Sprints 1 a 4 concluídas',
    'sysotto.core_delivery': '<strong>Build e governança</strong> · SemVer 2.0.0 (VER-001), builds determinísticos 100% offline, containers OCI não root (UID 1654) e documentação conforme DOC-MOD-001.',
    'sysotto.status_internal': 'Acelerador interno',
    'previews.sysotto_house_alt': 'Página inicial da Sysotto Software House com a apresentação dos serviços de engenharia e os botões de diagnóstico e contratação',
    'previews.sysotto_house_caption': 'Vitrine pública da Sysotto Software House',
    'previews.sysotto_commerce_alt': 'Tela de frente de caixa do Sysotto Commerce com seleção de filial, carrinho preenchido e formas de pagamento',
    'previews.sysotto_commerce_caption': 'PDV do Sysotto Commerce · Dados de demonstração',
    'previews.lamarie_alt': 'Página inicial do protótipo da LAMARIÊ, com chamada editorial e uma modelo vestindo uma peça da coleção',
    'previews.lamarie_caption': 'Protótipo editorial da LAMARIÊ · Fase 1',
    'sysotto.mockup_terminal_disclaimer': 'Simulação de telemetria e diagnóstico',
    'sysotto.repo_showcase_btn': 'Ver Repositório Showcase no GitHub',
    'sysotto.engineering_references': 'Outras iniciativas técnicas do ecossistema incluem Sysotto.VoIP e SecHub.',
    'sysotto.internal_spec_note': 'Especificação arquitetural interna Sysotto',
    'sysotto.tab_ind': 'Estoque industrial',
    'sysotto.tab_food': 'Salão e cozinha',
    'sysotto.tab_sites': 'Componentes web',
    'sysotto.tab_core': 'Plataforma raiz',
    'sysotto.mock_core_status': '[Diagnóstico de Demonstração]: Validação fail-closed de JWT · RLS Ativo',
    'sysotto.mock_url_core': 'core.sysotto.internal/health/diagnostics',
    
    // Internal inventory and traceability accelerator
    'sysotto.ind_title': 'Estoque e rastreabilidade industrial',
    'sysotto.ind_desc': 'Blocos de gestão fabril e de estoque, com demonstração privada para projetos industriais sob medida.',
    'sysotto.ind_problem': '<strong>Problema de Negócio:</strong> Rastreabilidade deficiente em estoques perecíveis de alto volume, conciliações manuais com divergências contábeis e controle ineficiente de lotes e almoxarifados.',
    'sysotto.ind_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Concepção e desenvolvimento autoral do modelo de domínio, algoritmos FEFO/FIFO/LIFO, rastreabilidade GS1-128 e isolamento com PostgreSQL RLS.',
    'sysotto.ind_functional': '<strong>Escopo arquitetural implementado:</strong> Gestão avançada de inventário com estratégias automatizadas FEFO/FIFO/LIFO, controle de lotes com validade e quarentena, etiquetas GS1-128 QR Code, endereçamento tridimensional de armazéns e rotinas de conciliação de inventário rotativo.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Internal dining-room and kitchen accelerator
    'sysotto.food_title': 'Operação de salão e cozinha',
    'sysotto.food_desc': 'Referência interna de experiência e módulos de salão, cozinha e impressão para projetos gastronômicos sob medida.',
    'sysotto.food_problem': '<strong>Problema de Negócio:</strong> Gargalos de comunicação entre salão e cozinha geram atrasos em comandas e perda de comandas térmicas por instabilidade de rede local.',
    'sysotto.food_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Arquitetura orientada a eventos para o fluxo de pedidos (SignalR) e desenvolvimento do agente desktop autônomo em .NET 10 para comunicação direta com impressoras térmicas ESC/POS sem drivers externos.',
    'sysotto.food_functional': '<strong>Escopo arquitetural implementado:</strong> Módulo TableOrdersManager para controle de mesas e comandas, cardápio digital dinâmico via QR Code, Kitchen Display System (KDS) em tempo real e agente desktop autônomo de impressão térmica (.NET 10 / ESC/POS).',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // SiteBuilder
    'sysotto.site_title': 'Editor visual e CMS',
    'sysotto.site_desc': 'Referência interna para sites autorais e catálogos B2B desenvolvidos sob contrato.',
    'sysotto.site_problem': '<strong>Contexto</strong> · Facilitar a criação e manutenção de sites e catálogos B2B.',
    'sysotto.site_role': '<strong>Papel & Decisões de Arquitetura:</strong> Motor de templates contextuais, pipeline de compressão e recorte de mídia em WebP (Sharp) e infraestrutura de componentes modulares.',
    'sysotto.site_functional': '<strong>Componentes reutilizáveis</strong> · Editor visual com presets, gestão e recorte de mídia em WebP e componentes SSR.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Plataforma raiz · Hardening e governança',
    'sysotto.core_desc': 'Núcleo compartilhado da Trilha 2 para identidade, isolamento de dados e controle de acesso.',
    'sysotto.core_problem': '<strong>Contexto</strong> · Isolar dados e permissões para cada cliente em uma plataforma compartilhada.',
    'sysotto.core_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Middleware central de resolução de tenant fail-closed, orquestrador de migrations de banco com advisory lock concorrente e camada de autorização OpenIddict / JWT.',
    'sysotto.core_functional': '<strong>Isolamento e auditoria</strong> · PostgreSQL RLS por tenant e 499 endpoints auditados na matriz Endpoint × Role × Plano.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Services & Hiring Formats
    'services.pill': 'Catálogo Comercial & Contratação',
    'services.title': 'Serviços & Formatos de Contratação',
    'services.subtitle': 'Sites autorais, sistemas modulares e projetos exclusivos com implantação por contrato.',
    'services.sites_badge': 'Trilha 1 · Presença digital',
    'services.sites_title': 'Sites e landing pages sob medida',
    'services.sites_price': 'Orçamento por escopo',
    'services.sites_desc': 'Sites institucionais, landing pages e catálogos B2B com design próprio para cada cliente.',
    'services.sites_item_1': 'Identidade visual exclusiva e build estático',
    'services.sites_item_2': 'Código-fonte entregue com portabilidade',
    'services.sites_item_3': 'Hospedagem independente opcional, SEO técnico e responsividade',
    'services.sites_cta': 'Solicitar proposta de site',
    'services.erp_badge': 'Trilha 2 · Plataforma Sysotto',
    'services.erp_title': 'Sistemas corporativos e e-commerce modulares',
    'services.erp_price': 'Implantação e customização por contrato',
    'services.erp_desc': 'Sistemas sobre o portal unificado Sysotto.Web e o núcleo Sysotto.Api, com extensões reaproveitáveis conforme a operação de cada cliente.',
    'services.erp_item_1': 'Portal único com isolamento por cliente via PostgreSQL RLS',
    'services.erp_item_2': 'Sysotto Commerce V2 em implantação para soft-launch não fiscal',
    'services.erp_item_3': 'Componentes reutilizáveis de vendas, estoque e financeiro',
    'services.erp_cta': 'Solicitar diagnóstico de sistema',
    'services.custom_badge': 'Trilha 3 · Engenharia dedicada',
    'services.custom_title': 'Projetos exclusivos e consultoria técnica',
    'services.custom_price': 'Proposta sob medida',
    'services.custom_desc': 'Projetos enterprise com aplicação ou infraestrutura dedicada quando o contrato exigir, além de consultoria e sustentação de sistemas personalizados.',
    'services.custom_item_1': 'Integrações críticas e engenharia de desempenho',
    'services.custom_item_2': 'Consultoria de arquitetura, hardening e isolamento de dados',
    'services.custom_item_3': 'Manutenção dedicada com escopo de sustentação contratado',
    'services.custom_cta': 'Conversar sobre o escopo',
    'services.note': 'Escopo, prazos e condições são definidos na proposta para cada cliente.',

    // Academic & Impact Projects
    'projects.title': 'Projetos em Destaque & Repositórios',
    'projects.section_heading': 'Engenharia de Software em Prática',
    'projects.subtitle': 'Seleção de cases e projetos de engenharia de software, design de produto, inteligência artificial e desenvolvimento full-stack.',
    'projects.tab_all': 'Todos os Projetos',
    'projects.tab_sysotto': 'Sistemas Corporativos (Sysotto)',
    'projects.tab_design': 'Design & Prototipagem',
    'projects.tab_hackathons': 'Simulações & Hackathons',
    'projects.tab_academic': 'Ciência da Computação & Fundamentos',
    "projects.case_0": "Problema / Contexto",
    "projects.case_1": "Papel & Decisões de Arquitetura",
    "projects.case_2": "Resultados & Métricas Técnicas",
    "proj.condotrack_case_0": "Filas na portaria, extravios de encomendas e conflitos de reservas em condomínios.",
    "proj.condotrack_case_1": "Líder Técnico e principal engenheiro backend em equipe internacional: Java 21 / Spring Boot 3, modelagem relacional, locks atômicos e auditoria por triggers.",
    "proj.condotrack_case_2": "Validação de QR Code via B-Tree em <400ms; 114 testes automatizados em <9s; HTTP 409 em reservas concorrentes.",
    "proj.sysotto_ind_case_0": "Rastreabilidade de estoques industriais e controle de lotes perecíveis.",
    "proj.sysotto_ind_case_1": "Concepção autoral e arquitetura do domínio industrial em C# .NET 10 / EF Core, com alocação FEFO/FIFO/LIFO e isolamento PostgreSQL RLS.",
    "proj.sysotto_ind_case_2": "Escopo técnico: etiquetas GS1-128 e endereçamento 3D de armazéns. Showcase em preparação; sem métricas de produção publicadas.",
    "proj.c_ds_case_0": "Compreender alocação de memória, ponteiros e custo assintótico de algoritmos.",
    "proj.c_ds_case_1": "Desenvolvimento autoral em ANSI C de listas ligadas, pilhas, filas e árvores binárias, com gerenciamento manual de memória.",
    "proj.c_ds_case_2": "Estruturas implementadas e análise Big-O documentada; verificação de ponteiros nulos na desalocação.",
    "proj.techmind_case_0": "Classificação inteligente de textos com inferência de Machine Learning (NLP).",
    "proj.techmind_case_1": "Contribuição em equipe no Hackathon ONE: integração do backend Java 17 / Spring Boot com a API de ML em Python / FastAPI e deploy na Oracle Cloud.",
    "proj.techmind_case_2": "Integração entre os serviços de classificação e deploy em Oracle Cloud Infrastructure (OCI); sem métricas quantitativas publicadas.",
    'projects.featured_flag': 'Destaque Técnico',
    'projects.role_label': 'Contribuição de Otto:',
    
    // Project items
    'proj.btn_view_showcase': 'Ver Showcase no GitHub',
    'proj.btn_view_repo': 'Ver Repositório no GitHub',

    'proj.sysotto_ind_badge': 'Sysotto · Acelerador interno',
    'proj.sysotto_ind_title': 'Estoque e rastreabilidade industrial',
    'proj.sysotto_ind_desc': '<p><strong>Problema de Negócio:</strong> Rastreabilidade deficiente em estoques industriais de alto volume e perdas financeiras por alocação manual sem controle estrito de lotes perecíveis.</p><p><strong>Decisões Técnicas:</strong> Motor em C# .NET 10 / EF Core com alocação automática FEFO/FIFO/LIFO, geração de etiquetas QR Code GS1-128, endereçamento 3D de armazéns e isolamento lógico via PostgreSQL Row-Level Security (RLS).</p>',
    'proj.sysotto_ind_role': 'Concepção autoral integral e arquitetura de software: modelagem do domínio industrial, implementação dos algoritmos de alocação de estoque e testes de conformidade.',

    'proj.condotrack_badge': 'No Country · Simulação S08',
    'proj.condotrack_title': 'CondoTrack — Gestão & Rastreabilidade 360°',
    'proj.condotrack_desc': '<p><strong>Problema de Negócio:</strong> Filas e lentidão em portarias condominiais por liberação manual, extravios na custódia de encomendas e conflitos de agendamento em áreas comuns.</p><p><strong>Decisões Técnicas:</strong> Backend em Java 21 / Spring Boot 3 com validação de QR Code indexado via B-Tree (&lt;400ms), reservas com locks atômicos (HTTP 409 em concorrência), auditoria imutável via triggers e 114 testes automatizados em &lt;9s.</p>',
    'proj.condotrack_role': 'Desenvolvido em equipe internacional (No Country S08-26 / Team 17). Atuação como Líder Técnico e principal engenheiro backend: arquitetura da API, modelagem relacional, C4 Model e suíte de testes.',
    'proj.condotrack_video_btn': 'Assistir Demonstração (YouTube)',

    'proj.techmind_badge': 'Hackathon ONE · Oracle + Alura',
    'proj.techmind_title': 'TechMind — Classificação com IA & OCI',
    'proj.techmind_desc': 'Solução de classificação inteligente unindo microsserviço backend em Java / Spring Boot e inferência de Machine Learning (NLP) em Python / FastAPI, com esteira de deploy e persistência na Oracle Cloud Infrastructure (OCI).',
    'proj.techmind_role': 'Projeto em equipe desenvolvido no Hackathon ONE. Contribuição na integração entre backend Java 17, API de ML em Python/FastAPI e deploy na Oracle Cloud.',

    'proj.sysotto_food_badge': 'Sysotto · Acelerador interno',
    'proj.sysotto_food_title': 'Comandas e impressão térmica',
    'proj.sysotto_food_desc': 'Demonstração técnica de comandas e cozinha em tempo real, com agente desktop em .NET 10 para impressão térmica direta (ESC/POS).',
    'proj.sysotto_food_role': 'Arquitetura do fluxo de pedidos via SignalR e desenvolvimento autoral do agente desktop em .NET 10 para comunicação térmica direta ESC/POS.',

    'proj.c_ds_badge': 'Ciência da Computação',
    'proj.c_ds_title': 'Estruturas de Dados em C',
    'proj.c_ds_desc': '<p><strong>Problema Computacional:</strong> Dependência de abstrações de alto nível sem domínio de alocação de memória na heap, aritmética de ponteiros e custo assintótico de algoritmos essenciais.</p><p><strong>Decisões Técnicas:</strong> Implementação estrita em ANSI C de listas ligadas, pilhas, filas e árvores binárias de busca; desalocação com verificação de ponteiros nulos (zero memory leaks) e análise assintótica Big-O documentada.</p>',
    'proj.c_ds_role': 'Desenvolvimento autoral integral focado em rigor de Ciência da Computação, gerenciamento manual de memória e testes de integridade estrutural.',

    'proj.microservices_badge': 'Arquitetura Distribuída .NET',
    'proj.microservices_title': 'E-Commerce Microservices',
    'proj.microservices_desc': 'Arquitetura de microsserviços distribuídos em C# / .NET, abordando catálogo de produtos, carrinho de compras, orquestração de pedidos, mensageria assíncrona com RabbitMQ, padrões de resiliência e desacoplamento de serviços.',
    'proj.microservices_role': 'Laboratório individual explorando mensageria assíncrona orientada a eventos, políticas de resiliência Polly, Docker Compose e desacoplamento de banco por serviço.',

    'proj.literalura_badge': 'Java 17 & Spring Boot',
    'proj.literalura_title': 'Challenge LiterAlura & ONE Backend',
    'proj.literalura_desc': 'Aplicação em Java 17 e Spring Boot 3 desenvolvida no programa Oracle Next Education. Consome a API pública Gutendex, processa dados JSON complexos via Jackson e realiza consultas relacionais em PostgreSQL com Spring Data JPA.',
    'proj.literalura_role': 'Implementação individual completa do desafio backend: modelagem de entidades JPA, consumo de API REST externa e consultas personalizadas.',

    'proj.email_ai_badge': 'Python & PLN',
    'proj.email_ai_title': 'Classificador Inteligente de E-mails',
    'proj.email_ai_desc': 'Solução em Python aplicando Processamento de Linguagem Natural (PLN) e aprendizado supervisionado para triagem de caixas de mensagens corporativas, detecção de sentimentos e categorização de chamados.',
    'proj.email_ai_role': 'Implementação autoral aplicando pré-processamento de texto (vetorização TF-IDF) e modelos de classificação Scikit-Learn para triagem de e-mails.',
    'proj.commerce_desc': 'Case da Trilha 2 sobre Sysotto.Web e Sysotto.Api, com PDV, estoque multi-filial e conciliação bancária.',
    'proj.commerce_case_link': 'Ver case Sysotto',
    'proj.lamarie_badge': 'Design System & Protótipo Interativo',
    'proj.lamarie_title': 'LAMARIÊ — Vitrine editorial de moda',
    'proj.lamarie_context': 'Criar uma vitrine digital para uma boutique de moda feminina de Mossoró (RN) e planejar sua evolução para uma loja integrada ao ERP.',
    'proj.lamarie_delivered_label': 'Fase 1 · Entregue e validada tecnicamente',
    'proj.lamarie_delivered': 'Design System completo no Figma Make, com tokens e componentes reutilizáveis, curadoria visual assistida por IA e protótipo editorial interativo validado em desktop e celular.',
    'proj.lamarie_concept_label': 'Fase 2 · Conceito de e-commerce e ERP',
    'proj.lamarie_concept': 'Carrinho, checkout, pagamentos e estoque foram simulados. A operação transacional e a integração de estoque, pedidos e pagamentos com o ERP Sysotto estão planejadas.',

    'proj.dio_agent_title': 'Agentes Autônomos de IA & Voz',
    'proj.dio_agent_desc': 'Projetos desenvolvidos no ecossistema DIO / Suzano explorando modelos de IA generativa, processamento de linguagem natural e recursos de conversão de fala (Speech-to-Text / Text-to-Speech) integrados a fluxos automatizados.',
    'proj.dio_agent_badge': 'IA Generativa & Agentes',

    'proj.currency_title': 'Conversor de Moedas Full-Stack',
    'proj.currency_desc': 'Solução completa desenvolvida com backend em Java consumindo APIs financeiras internacionais de câmbio em tempo real, acoplada a interface web moderna e intuitiva em JavaScript para cotação instantânea de moedas.',
    'proj.currency_badge': 'Full-Stack Java / Web',

    // Tech Stacks Section
    'skills.title': 'Tecnologias & Competências',
    'skills.section_heading': 'Domínio Técnico & Áreas de Foco',
    'skills.subtitle': 'Classificação transparente do ecossistema tecnológico com base no grau de profundidade e aplicação prática.',
    'skills.core_title': 'Tecnologias nos Projetos Atuais da Sysotto',
    'skills.core_desc': 'Tecnologias usadas na plataforma modular Sysotto.Web e Sysotto.Api, incluindo o Sysotto Commerce.',
    'skills.demonstrated_title': 'Tecnologias Demonstradas em Projetos & Estudos',
    'skills.demonstrated_desc': 'Linguagens, frameworks e ferramentas validados em projetos com código-fonte no repositório, simulações acadêmicas e hackathons.',
    'skills.interests_title': 'Interesses & Áreas em Exploração',
    'skills.interests_desc': 'Áreas de dedicação contínua em engenharia de sistemas, programação de baixo nível, controle de memória e segurança.',
    'skills.academic_title': 'Fundamentação Acadêmica & Formações Complementares',
    'skills.academic_desc': 'Tecnologias e linguagens exploradas no âmbito universitário, bootcamps de capacitação e desafios de desenvolvimento para consolidação de fundamentos.',
    'skills.ref_api': 'Sysotto.Api',
    'skills.ref_multitenant': 'Sysotto Multi-Tenant',
    'skills.ref_web': 'Sysotto.Web',
    'skills.ref_infra': 'Sysotto Infra',
    'skills.ref_auth': 'Sysotto Auth',
    'skills.ref_core': 'Plataforma Sysotto',
    'skills.ref_deploy': 'Ambiente & Deploy',
    'skills.ref_condotrack': 'CondoTrack',
    'skills.ref_condotrack_one': 'CondoTrack / ONE',
    'skills.ref_techmind_email': 'TechMind / Classificador',
    'skills.ref_c_ds': 'Estruturas de Dados',
    'skills.ref_sql': 'CondoTrack / TechMind',
    'skills.ref_microservices': 'E-Commerce Microservices',
    'skills.ref_cloud': 'Hackathon / OCI Cert',
    'skills.ref_repos': 'Repositórios & CI/CD',
    'skills.ref_systems': 'Sistemas de Alta Performance',
    'skills.ref_concurrency': 'Memory Safety & Concorrência',
    'skills.ref_sec_study': 'Trilha Cisco / Hackers do Bem',
    'skills.ref_net_study': 'Defesa de Redes (Cisco)',
    'skills.ref_crypto': 'Padrões Zero-Trust',
    'skills.ref_ai_agents': 'Estudos LLM & Agentes',

    // Education & Certifications
    'edu.title': 'Formação Acadêmica & Certificações',
    'edu.section_heading': 'Qualificação & Aprendizado Contínuo',
    'edu.subtitle': 'Compromisso com o aprendizado contínuo, fundamentos da computação e especializações de classe mundial.',
    'edu.academic_title': 'Formação Acadêmica',
    'edu.degree_se': 'Bacharelado em Engenharia de Software',
    'edu.degree_se_inst': 'UNIFBV / Wyden (4º Período - Em andamento · Conclusão prevista: 06/2029)',
    'edu.degree_se_desc': 'Fundamentos de computação, engenharia de requisitos, arquitetura de software, algoritmos, governança de TI e segurança.',
    'edu.degree_mba': 'MBA em Gestão Empresarial',
    'edu.degree_mba_inst': 'Fundação Getúlio Vargas (FGV)',
    'edu.degree_mba_desc': 'Planejamento estratégico, finanças corporativas, liderança de equipes de alto desempenho e inteligência de mercado.',
    'edu.degree_tourism': 'Bacharelado em Turismo',
    'edu.degree_tourism_inst': 'Universidade de Fortaleza (UNIFOR)',
    'edu.degree_tourism_desc': 'Gestão de serviços, relacionamento interpessoal, comunicação executiva e dinâmica de mercado.',

    'edu.certs_title': 'Principais Certificados & Bootcamps',
    'edu.cert_view': 'Visualizar Certificado',
    'edu.cert_download': 'Baixar PDF',
    'edu.certs_more': 'Ver todas as 9 certificações',
    'edu.certs_less': 'Mostrar menos certificações',

    'cert.cs50_title': 'CC50 / CS50: Introdução à Ciência da Computação',
    'cert.cs50_org': 'Harvard University (70 Horas)',
    'cert.cs50_desc': 'C, memória e ponteiros, algoritmos de busca e ordenação, estruturas de dados, Python, SQL, Flask e ética na computação.',

    'cert.cisco_sec_title': 'Cisco Network Security',
    'cert.cisco_sec_org': 'Cisco Networking Academy / SENAI-SC',
    'cert.cisco_sec_desc': 'Segurança de redes, configuração de firewalls ASA, criptografia aplicada, VPNs site-to-site e mitigação de vulnerabilidades.',

    'cert.cisco_def_title': 'Cisco Defesa de Rede (CyberOps)',
    'cert.cisco_def_org': 'Cisco Networking Academy / YDUQS-Wyden',
    'cert.cisco_def_desc': 'Monitoramento de tráfego com Wireshark, políticas de controle de acesso (ACLs), AAA, TACACS+/RADIUS e análise de ameaças.',

    'cert.cisco_linux_title': 'NDG Linux Unhatched',
    'cert.cisco_ds_badge': 'Badge de Ciência de Dados',
    'cert.cisco_ds_title': 'Introdução à Ciência de Dados',
    'cert.cisco_ds_desc': 'Análise e visualização de dados, modelos preditivos e fundamentos de ciência de dados aplicada a negócios.',
    'cert.cisco_linux_org': 'Cisco Networking Academy / NDG',
    'cert.cisco_linux_desc': 'Administração de sistemas Linux, automação em linha de comando, permissões e gerenciamento de arquivos e processos.',

    'cert.oracle_one_title': 'Programa Oracle Next Education (ONE)',
    'cert.oracle_one_org': 'Oracle Brasil & Alura (348 Horas - 7 Formações)',
    'cert.oracle_one_desc': 'Java Orientado a Objetos, Spring Boot 3, APIs REST, Banco de Dados, Metodologias Ágeis, IA Generativa e Hackathon final.',

    'cert.oracle_oci_title': 'Oracle Cloud Infrastructure (OCI)',
    'cert.oracle_oci_org': 'Oracle University',
    'cert.oracle_oci_desc': 'Badge oficial OCI Foundations Associate: arquitetura em nuvem, computação elástica, storage e redes seguras.',

    'cert.hackers_title': 'Hackers do Bem: Cibersegurança',
    'cert.hackers_org': 'RNP / Softex / Ministério da Ciência e Tecnologia',
    'cert.hackers_desc': 'Formação completa em Nivelamento e Básico: fundamentos de segurança da informação, criptografia, redes e GRC.',

    'cert.dio_expert_title': 'Campus Expert & Bootcamps Corporativos',
    'cert.dio_expert_org': 'Digital Innovation One (DIO)',
    'cert.dio_expert_desc': 'Liderança técnica (Turma 13), Santander Bootcamp (Java Back-end), WEX End-to-End (.NET) e Suzano AI Developer.',

    // Education CV Dossier Banner
    'edu.cv_pill': 'Dossiê Executivo & Currículo',
    'edu.cv_title': 'Documentação Profissional & Histórico Consolidado',
    'edu.cv_desc': 'Acesse o currículo consolidado com mais de 20 anos de liderança em gestão de grandes operações, arquitetura de software corporativo e stack de engenharia.',
    'edu.cv_pt_title': 'Currículo Profissional (PT-BR)',
    'edu.cv_pt_desc': 'Histórico executivo completo, métricas de gestão, formação acadêmica e stack de software.',
    'edu.cv_en_title': 'Executive Resume (EN-US)',
    'edu.cv_en_desc': 'Full executive leadership history, business turnaround metrics, and software architecture stack.',
    'edu.cv_btn_download': 'Baixar PDF',

    // Testimonials
    'testimonials.title': 'Recomendações',
    'testimonials.headline': 'O que colegas e gestores dizem',
    'testimonials.t1.text': 'Otto, na Gerência Geral da Base de Teresina PI do Grupo SERVI-SAN desempenhou suas funções de forma otimizada gerando valores significativos para a Organização Empresarial. É dinâmico, tem excelente relacionamento interpessoal e busca sempre resultados.',
    'testimonials.t1.name': 'Gladston Lages',
    'testimonials.t1.role': 'Diretor Financeiro e de Controladoria — gestor de Otto',
    'testimonials.linkedin_label': 'Perfil no LinkedIn de Gladston Lages',

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.headline': 'Vamos construir o futuro da tecnologia juntos.',
    'contact.subtitle': 'Aberto a oportunidades executivas, arquitetura de software corporativo e parcerias estratégicas.',
    'contact.email_label': 'E-mail:',
    'contact.channel_title': 'Vamos conversar sobre seu projeto ou oportunidade?',
    'contact.channel_desc': 'Envie sua solicitação por e-mail.',
    'contact.btn_email': 'Enviar E-mail Direto',
    'contact.location_note': 'Base: Parnaíba / Teresina, PI — Atuação remota',
    'contact.copy_email': 'Copiar E-mail',
    'contact.email_copied': 'E-mail copiado!',
    'contact.origin_prefix': 'Contexto de contato:',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built_with': 'Construído com padrões modernos web, hospedado no GitHub Pages.'
  },

  'en-US': {
    // Page Metadata
    'meta.title': 'Otto Freitag | Software Engineering and Sysotto',
    'meta.description': 'Otto Freitag, founder of Sysotto Softwares. Custom websites and landing pages, modular systems, and enterprise projects with technical consulting.',
    'meta.image_alt': 'Executive card of Otto Freitag',
    'brand.monogram_alt': 'Otto Freitag monogram',

    // Structured Data
    'schema.job_title': 'Sysotto founder and software engineer',
    'schema.expertise_architecture': 'Modular software architecture',
    'schema.expertise_isolation': 'Multi-tenant data isolation',
    'schema.expertise_hardening': 'API hardening',
    'schema.expertise_consulting': 'Technical consulting',
    'schema.organization_description': 'Modular software house offering three engagement tracks for custom development.',
    'schema.catalog_name': 'Sysotto Software House engagement tracks',
    'schema.sites_name': 'Custom websites and landing pages',
    'schema.sites_description': 'Projects with a custom visual identity, portable static build, and optional hosting.',
    'schema.systems_name': 'Modular enterprise systems',
    'schema.systems_description': 'Contract-based deployments on Sysotto.Web and Sysotto.Api, with tenant isolation and extensions for operations such as Sysotto Commerce.',
    'schema.enterprise_name': 'Enterprise projects and technical consulting',
    'schema.enterprise_description': 'Custom engineering, architecture, API hardening, and dedicated maintenance, with isolated applications or infrastructure when required by contract.',

    // Navigation & Common Accessibility
    'nav.skip_to_content': 'Skip to main content',
    'nav.primary_label': 'Main Navigation',
    'nav.brand_aria': 'Otto Freitag - Home',
    'nav.cv_aria': 'Download the resume as a PDF',
    'projects.filter_label': 'Filter projects by category',
    'projects.repo_aria': 'View the project repository on GitHub',
    'projects.showcase_aria': 'View the project showcase on GitHub',
    'projects.video_aria': 'Watch the project demonstration on YouTube',
    'sysotto.tabs_label': 'Sysotto technical overview',
    'modal.close': 'Close modal dialog',
    'theme.enable_light': 'Enable light theme',
    'theme.enable_dark': 'Enable dark theme',
    'modal.cert_default': 'Official Certificate',
    'modal.document_title': 'Certificate document',
    'modal.badge_alt': 'Badge or certificate',
    'modal.video_default': 'Video Demonstration',
    'modal.video_subtitle': 'On-demand player · Privacy-Enhanced Mode',
    'modal.video_external': 'Open in YouTube',
    'modal.video_external_aria': 'Open original video on YouTube in a new tab',
    'modal.video_player_title': 'YouTube video player',
    'proj.condotrack_video_title': 'CondoTrack — 360° Management & Traceability (Demo)',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.sysotto': 'Case Sysotto',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.skills': 'Tech Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume (PDF)',
    'nav.cv_pt': 'Currículo PT-BR',
    'nav.cv_en': 'Resume EN-US',

    // Hero
    'hero.badge': 'Solutions Architect · Software Engineer · Sysotto Founder',
    'hero.photo_alt': 'Otto David de Santana Freitag - Professional Portrait',
    'hero.title_start': 'Software engineering and',
    'hero.title_highlight': 'solutions architecture',
    'hero.title_end': 'backed by 20+ years of executive leadership.',
    'hero.subtitle': 'At Sysotto Softwares, I build custom websites, modular systems, and enterprise projects. I apply more than 20 years of executive management experience (Gerdau, CSN, Servisan) to software engineering for critical operations.',
    'hero.description': 'At Sysotto Softwares, I build custom websites, modular systems, and enterprise projects. I apply more than 20 years of executive management experience (Gerdau, CSN, Servisan) to software engineering for critical operations.',
    'hero.cta_primary': 'Request Quote / Assessment',
    'hero.cta_projects': 'View Case Studies and Projects',
    'hero.cta_academic': 'View Engineering Projects',
    'hero.cta_cv': 'Download Resume (PDF)',
    'hero.cta_contact': 'Contact & Opportunities',
    'hero.location': 'Piauí, Brazil · Available for remote work',
    'hero.role_location': 'Piauí, Brazil · Available for remote work',
    'hero.pill_experience': '20+ Years in Executive Leadership',
    'hero.pill_role': 'Solutions Architect & Engineer',
    'hero.stat_experience': '20+ Years',
    'hero.stat_experience_desc': 'Executive leadership & business growth',
    'hero.stat_academic': 'Software Eng.',
    'hero.stat_academic_desc': 'UNIFBV/Wyden + FGV MBA',
    'hero.stat_sysotto': 'Solutions Engineering',
    'hero.stat_sysotto_desc': 'Sysotto Founder and Software Architect',

    // About Section
    'about.title': 'About & Career Migration',
    'about.subtitle': 'Senior executive leadership combined with technical discipline in software engineering.',
    'about.p1': 'Over a 20-year executive career, I served as General Manager and Commercial Manager in large-scale industrial and distribution operations, including <strong>Gerdau S/A</strong> (leading a regional branch with >30% annual growth), <strong>CSN</strong>, <strong>Servisan</strong>, and <strong>Servicon</strong>. This background gives me direct mastery of business workflows, team leadership, and ROI-driven decision-making.',
    'about.p2': 'Transitioning into technology, I applied this executive background directly to computing. As <strong>CEO and Solutions Architect at Sysotto Softwares</strong>, I design and build multi-tenant SaaS platforms and enterprise architectures, prioritizing scalability (.NET, C#, PostgreSQL, Next.js), fail-closed security, and operational reliability.',
    'about.p3': 'I am pursuing a <strong>B.S. in Software Engineering (UNIFBV/Wyden)</strong>, hold an <strong>MBA in Business Management from FGV</strong>, and a <strong>B.A. in Tourism from UNIFOR</strong>, with continuous focus on computer science fundamentals, data structures, distributed systems, and defensive security.',
    "about.impact_title": "Leadership that delivers results",
    "about.impact_gerdau_growth_value": "Business Expansion",
    "about.impact_gerdau_growth_desc": "Annual sales volume growth above 30% at the Fortaleza branch, alongside increased profitability.",
    "about.impact_gerdau_context": "Gerdau · Branch Manager · 2004–2010",
    "about.impact_sales_value": "Operational Leadership",
    "about.impact_sales_desc": "Responsibility for operations in Piauí, including public and private contract acquisition and retention, operations, finance, and personnel management.",
    "about.impact_sales_context": "Servisan · General Manager · 2014–2016",
    "about.impact_operations_value": "Sales Acceleration",
    "about.impact_operations_desc": "Fourfold growth in sales volume over two years, with a key contribution to commercial repositioning, improved profitability, and increased market share in downstream operations.",
    "about.impact_operations_context": "Metalmecânica Maia · Commercial Manager · 2012–2014",
    "about.impact_todeschini_value": "Sales Success",
    "about.impact_todeschini_desc": "150% sales growth in one year through new market development and improved sales management.",
    "about.impact_todeschini_context": "Todeschini Manaus · Sales Manager · 2002–2003",
    'about.leadership_title': 'Strategic Advantages',
    'about.diff_1_title': 'Business Acumen & ROI Focus:',
    'about.diff_1_desc': 'Proven track record of turning complex operational business needs into scalable, revenue-generating software architectures.',
    'about.diff_2_title': 'Executive Team Leadership:',
    'about.diff_2_desc': 'Proven ability to lead cross-functional teams, orchestrate high-stakes initiatives, and achieve concrete performance metrics.',
    'about.diff_3_title': 'Quality-Driven Engineering:',
    'about.diff_3_desc': 'Strict adherence to clean code, comprehensive automated testing, fail-closed security models, and resilient multi-tenant isolation.',
    'timeline.title': 'Executive Milestones & Career',
    'timeline.sysotto_role': 'CEO & Founding Architect',
    'timeline.sysotto_date': '2022 – Present',
    'timeline.sysotto_desc': 'Technical leadership at Sysotto Softwares across custom websites, modular systems built on Sysotto.Web and Sysotto.Api, and bespoke projects using .NET and Next.js.',
    'timeline.servicon_role': 'Managing Partner',
    'timeline.servicon_date': '2017 – 2021',
    'timeline.servicon_desc': 'Commercial management of solar energy and infrastructure in the states of Piauí and Maranhão, alongside accounting and financial administration.',
    'timeline.servisan_role': 'Regional General Manager',
    'timeline.servisan_date': '2014 – 2016',
    'timeline.servisan_desc': 'Responsible for a large outsourcing operation, business development, and retention of high-value corporate and public contracts.',
    'timeline.csn_role': 'Commercial Manager',
    'timeline.csn_date': '2011 – 2014',
    'timeline.csn_desc': 'Managed industrial sales and downstream logistics across Ceará, Piauí, and Maranhão.',
    'timeline.gerdau_role': 'Unit Manager / Fortaleza Branch',
    'timeline.gerdau_date': '2004 – 2010',
    'timeline.gerdau_desc': 'Led a Gerdau regional distribution center, delivering over 30% annual volume growth and strong profitability.',

    // Versatility & Multi-Sector Solutions
    'versatility.pill': 'Multi-Sector Solutions',
    'versatility.title': 'Versatility & Multi-Sector Delivery Capabilities',
    'versatility.subtitle': 'Technical architecture and executive foresight tailored to diverse organizational scales and market demands.',
    'versatility.ind_title': 'Enterprise Industries & Operations',
    'versatility.ind_desc': 'High-complexity operational workflows modeling, bridging executive governance with shop-floor operations, continuous auditing, and corporate regulatory compliance.',
    'versatility.sme_title': 'SMBs, Retail & Commercial Services',
    'versatility.sme_desc': 'Point-of-sale and customer service automation, eliminating expensive intermediaries, ensuring operational uptime, and delivering direct operational cost reduction.',
    'versatility.saas_title': 'Startups & Digital B2B SaaS',
    'versatility.saas_desc': 'Scalable product design with strict tenant isolation, multi-tenant governance, modern provisioning workflows, and customer retention & ROI orientation.',

    // Sysotto Section
    'sysotto.pill': 'Software Architecture & Engineering',
    'sysotto.title': 'Sysotto Case Study · Modular Software House',
    'sysotto.subtitle': 'The current engagement model, the Commerce V2 rollout, and the engineering behind the shared platform.',
    'sysotto.company_name': 'Sysotto Softwares',
    'sysotto.company_tagline': 'Custom software engineering',
    'sysotto.role_badge': 'Otto Freitag · Founder and architect',
    'sysotto.lead': 'ADR 008 formalized Sysotto’s model as a modular software house with three engagement tracks.',
    'sysotto.track_1_title': 'Track 1 · Custom Websites and Landing Pages',
    'sysotto.track_1_desc': 'A design tailored to each customer, with a portable static build deployable via Caddy or Cloudflare Pages.',
    'sysotto.track_2_title': 'Track 2 · Systems Built on the Sysotto Core',
    'sysotto.track_2_desc': 'One Sysotto.Web portal (app.sysotto.com) and the Sysotto.Api modular monolith. Activation is contract-based, with TenantId and PostgreSQL RLS isolation and customer-specific extensions.',
    'sysotto.track_3_title': 'Track 3 · Bespoke and Enterprise Projects',
    'sysotto.track_3_desc': 'A dedicated application or infrastructure when a bespoke experience or compliance requirement justifies the separation and the contract covers the cost.',
    'sysotto.accelerators': 'Web editing, industrial inventory, and front-of-house and kitchen components are reused in custom projects alongside shared sales, inventory, finance, and tax modules.',
    'sysotto.tab_commerce': 'Commerce V2',
    'sysotto.commerce_title': 'Sysotto Commerce V2',
    'sysotto.commerce_status': 'Implemented · Rolling out for a non-fiscal soft launch',
    'sysotto.commerce_desc': 'A Track 2 module for multi-branch retail operations in the Sysotto.Web portal, with activation under contract.',
    'sysotto.commerce_features': 'V2 includes counter point of sale, ABC product analysis, and bank reconciliation using OFX and CSV files.',
    'sysotto.commerce_fiscal': 'The Dados Jah fiscal integration is implemented. Live NFC-e and NF-e issuance depends on fiscal validation with an authorized issuer and an A1 certificate.',
    'sysotto.core_status': 'Sprints 1–4 completed',
    'sysotto.core_delivery': '<strong>Builds and governance</strong> · SemVer 2.0.0 (VER-001), fully offline deterministic builds, non-root OCI containers (UID 1654), and documentation compliant with DOC-MOD-001.',
    'sysotto.status_internal': 'Internal accelerator',
    'previews.sysotto_house_alt': 'Sysotto Software House homepage introducing its engineering services, with buttons for an assessment and engagement options',
    'previews.sysotto_house_caption': 'Public Sysotto Software House website',
    'previews.sysotto_commerce_alt': 'Sysotto Commerce checkout screen with a branch selector, items in the cart, and payment options',
    'previews.sysotto_commerce_caption': 'Sysotto Commerce point of sale · Demo data',
    'previews.lamarie_alt': 'LAMARIÊ prototype homepage with an editorial headline and a model wearing a piece from the collection',
    'previews.lamarie_caption': 'LAMARIÊ editorial prototype · Phase 1',
    'sysotto.mockup_terminal_disclaimer': 'Simulated telemetry and diagnostics',
    'sysotto.repo_showcase_btn': 'View Showcase Repository on GitHub',
    'sysotto.engineering_references': 'Other technical initiatives in the ecosystem include Sysotto.VoIP and SecHub.',
    'sysotto.internal_spec_note': 'Internal Sysotto architectural specification',
    'sysotto.tab_ind': 'Industrial Inventory',
    'sysotto.tab_food': 'Front of House and Kitchen',
    'sysotto.tab_sites': 'Web Components',
    'sysotto.tab_core': 'Core platform',
    'sysotto.mock_core_status': '[Demonstration Diagnostics]: Fail-closed JWT validation · Active RLS',
    'sysotto.mock_url_core': 'core.sysotto.internal/health/diagnostics',

    // Internal inventory and traceability accelerator
    'sysotto.ind_title': 'Industrial Inventory and Traceability',
    'sysotto.ind_desc': 'Manufacturing and inventory components, with a private demo for custom industrial engagements.',
    'sysotto.ind_problem': '<strong>Business Problem:</strong> Severe material waste due to expiration of perishable inventory and warehouse discrepancies under manual lot control.',
    'sysotto.ind_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Authorial domain modeling, FEFO/FIFO/LIFO automated allocation engine, GS1-128 QR code traceability, and PostgreSQL Row-Level Security (RLS) multi-tenant isolation.',
    'sysotto.ind_functional': '<strong>Implemented architectural scope:</strong> Advanced inventory management with automated FEFO/FIFO/LIFO strategies, lot expiration and quarantine tracking, GS1-128 QR Code labels, 3D warehouse address mapping, and perpetual cycle count reconciliation routines.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Internal dining-room and kitchen accelerator
    'sysotto.food_title': 'Front-of-House and Kitchen Operations',
    'sysotto.food_desc': 'An internal UX reference and a source of dining-room, kitchen, and printing modules for custom food-service projects.',
    'sysotto.food_problem': '<strong>Business Problem:</strong> Communication bottlenecks between front-of-house and kitchen create order delays and lost paper tickets from network instability.',
    'sysotto.food_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Event-driven order workflow architecture via SignalR and autonomous native .NET 10 desktop agent for direct ESC/POS thermal printing without third-party drivers.',
    'sysotto.food_functional': '<strong>Implemented architectural scope:</strong> TableOrdersManager module for simultaneous tables and tabs, dynamic QR Code digital menu, real-time Kitchen Display System (KDS), and autonomous thermal print agent (.NET 10 / ESC/POS).',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // SiteBuilder
    'sysotto.site_title': 'Visual Editor and CMS',
    'sysotto.site_desc': 'An internal reference for custom websites and B2B catalogs delivered under contract.',
    'sysotto.site_problem': '<strong>Context</strong> · Make B2B websites and catalogs easier to build and maintain.',
    'sysotto.site_role': '<strong>Role & Architecture Decisions:</strong> Contextual layout builder engine, media processing pipeline with on-the-fly WebP compression (Sharp), and modular component architecture.',
    'sysotto.site_functional': '<strong>Reusable components</strong> · A visual editor with presets, WebP media management and cropping, and SSR components.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Core Platform · Hardening and Governance',
    'sysotto.core_desc': 'The shared Track 2 platform for identity, data isolation, and access control.',
    'sysotto.core_problem': '<strong>Context</strong> · Isolate each customer’s data and permissions on a shared platform.',
    'sysotto.core_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Fail-closed tenant resolution middleware, database migration runner with concurrent advisory locks, and OpenIddict / JWT authorization pipeline.',
    'sysotto.core_functional': '<strong>Isolation and audit</strong> · PostgreSQL RLS for each tenant and 499 endpoints audited against the Endpoint × Role × Plan matrix.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Services & Hiring Formats
    'services.pill': 'Commercial Catalog & Engagement Models',
    'services.title': 'Services & Engagement Models',
    'services.subtitle': 'Custom websites, modular systems, and bespoke projects delivered under contract.',
    'services.sites_badge': 'Track 1 · Digital Presence',
    'services.sites_title': 'Custom Websites and Landing Pages',
    'services.sites_price': 'Quote based on project scope',
    'services.sites_desc': 'Corporate websites, landing pages, and B2B catalogs with a design tailored to each client.',
    'services.sites_item_1': 'Custom visual identity and static build',
    'services.sites_item_2': 'Portable source code delivered with the project',
    'services.sites_item_3': 'Optional independent hosting, technical SEO, and responsive layouts',
    'services.sites_cta': 'Request a Website Quote',
    'services.erp_badge': 'Track 2 · Sysotto Platform',
    'services.erp_title': 'Modular Enterprise Systems and E-Commerce',
    'services.erp_price': 'Deployment and customization under contract',
    'services.erp_desc': 'Systems built on the unified Sysotto.Web portal and Sysotto.Api core, with reusable extensions matched to each client\'s operations.',
    'services.erp_item_1': 'Unified portal with tenant isolation via PostgreSQL RLS',
    'services.erp_item_2': 'Sysotto Commerce V2 rolling out for a non-fiscal soft launch',
    'services.erp_item_3': 'Reusable sales, inventory, and finance components',
    'services.erp_cta': 'Request a Systems Assessment',
    'services.custom_badge': 'Track 3 · Dedicated Engineering',
    'services.custom_title': 'Bespoke Projects and Technical Consulting',
    'services.custom_price': 'Tailored proposal',
    'services.custom_desc': 'Enterprise projects with dedicated applications or infrastructure when required by contract, plus consulting and maintenance for custom systems.',
    'services.custom_item_1': 'Critical integrations and performance engineering',
    'services.custom_item_2': 'Architecture consulting, hardening, and data isolation',
    'services.custom_item_3': 'Dedicated maintenance with a defined service scope',
    'services.custom_cta': 'Discuss the Project Scope',
    'services.note': 'Scope, timelines, and terms are set in a proposal tailored to each client.',

    // Academic & Impact Projects
    'projects.title': 'Featured Projects & Repositories',
    'projects.section_heading': 'Software Engineering in Practice',
    'projects.subtitle': 'Selected case studies and projects in software engineering, product design, artificial intelligence, and full-stack development.',
    'projects.tab_all': 'All Projects',
    'projects.tab_sysotto': 'Enterprise Systems (Sysotto)',
    'projects.tab_design': 'Design & Prototyping',
    'projects.tab_hackathons': 'Simulations & Hackathons',
    'projects.tab_academic': 'Computer Science & Foundations',
    "projects.case_0": "Problem / Context",
    "projects.case_1": "Role & Architecture Decisions",
    "projects.case_2": "Results & Technical Metrics",
    "proj.condotrack_case_0": "Gate check-in queues, lost parcels, and conflicting condo amenity bookings.",
    "proj.condotrack_case_1": "Tech Lead and primary backend engineer on an international team: Java 21 / Spring Boot 3, relational modeling, atomic locks, and trigger-based auditing.",
    "proj.condotrack_case_2": "B-Tree QR validation in <400ms; 114 automated tests in <9s; HTTP 409 for concurrent reservation conflicts.",
    "proj.sysotto_ind_case_0": "Industrial inventory traceability and perishable lot control.",
    "proj.sysotto_ind_case_1": "Sole author and industrial domain architect using C# .NET 10 / EF Core, FEFO/FIFO/LIFO allocation, and PostgreSQL RLS isolation.",
    "proj.sysotto_ind_case_2": "Technical scope: GS1-128 labels and 3D warehouse addressing. Showcase in preparation; no published production metrics.",
    "proj.c_ds_case_0": "Understand memory allocation, pointers, and asymptotic algorithm costs.",
    "proj.c_ds_case_1": "Sole author of ANSI C linked lists, stacks, queues, and binary search trees with manual memory management.",
    "proj.c_ds_case_2": "Implemented data structures and documented Big-O analysis; null-pointer checks during deallocation.",
    "proj.techmind_case_0": "Intelligent text classification using Machine Learning (NLP) inference.",
    "proj.techmind_case_1": "Hackathon ONE team contribution: integrated the Java 17 / Spring Boot backend with the Python / FastAPI ML API and deployed to Oracle Cloud.",
    "proj.techmind_case_2": "Classification service integration and deployment on Oracle Cloud Infrastructure (OCI); no published quantitative metrics.",
    'projects.featured_flag': 'Technical Highlight',
    'projects.role_label': 'Otto\'s Contribution:',
    
    // Project items
    'proj.btn_view_showcase': 'View GitHub Showcase',
    'proj.btn_view_repo': 'View GitHub Repository',

    'proj.sysotto_ind_badge': 'Sysotto · Internal Accelerator',
    'proj.sysotto_ind_title': 'Industrial Inventory and Traceability',
    'proj.sysotto_ind_desc': '<p><strong>Business Problem:</strong> Deficient lot traceability in high-volume industrial warehouses and financial write-offs resulting from manual allocation of perishable materials.</p><p><strong>Technical Decisions:</strong> C# .NET 10 / EF Core engine with automated FEFO/FIFO/LIFO allocation, GS1-128 QR Code label generation, 3D warehouse address mapping, and PostgreSQL Row-Level Security (RLS) tenant isolation.</p>',
    'proj.sysotto_ind_role': 'Lead architecture and authorial implementation of the domain model, inventory allocation algorithms, and data consistency tests.',

    'proj.condotrack_badge': 'No Country · Simulation S08',
    'proj.condotrack_title': 'CondoTrack — 360° Operations Platform',
    'proj.condotrack_desc': '<p><strong>Business Problem:</strong> Bottlenecks at residential gates with manual check-in queues, parcel custody mishandling, and double-booking conflicts across shared condo amenities.</p><p><strong>Technical Decisions:</strong> Java 21 / Spring Boot 3 backend with B-Tree indexed QR validation (&lt;400ms), conflict-free atomic reservations (HTTP 409 on race conditions), immutable trigger-based audit trails, and 114 automated tests executed in &lt;9s.</p>',
    'proj.condotrack_role': 'Developed within an international team (No Country S08-26 / Team 17). Served as Tech Lead and primary backend engineer: API architecture, relational schema, C4 Model, and test suite.',
    'proj.condotrack_video_btn': 'Watch Demonstration (YouTube)',

    'proj.techmind_badge': 'Hackathon ONE · Oracle + Alura',
    'proj.techmind_title': 'TechMind — AI Classifier & OCI',
    'proj.techmind_desc': 'Intelligent classification solution pairing a Java / Spring Boot backend microservice with Python / FastAPI Machine Learning (NLP) inference, deployed on Oracle Cloud Infrastructure (OCI).',
    'proj.techmind_role': 'Team project developed during Hackathon ONE. Contributed to Java 17 backend integration, Python/FastAPI ML API communication, and Oracle Cloud deployment.',

    'proj.sysotto_food_badge': 'Sysotto · Internal Accelerator',
    'proj.sysotto_food_title': 'Table Orders and Thermal Printing',
    'proj.sysotto_food_desc': 'Technical showcase of real-time table orders and kitchen workflows, with a .NET 10 desktop agent for direct thermal printing (ESC/POS).',
    'proj.sysotto_food_role': 'Architecture of the SignalR event-driven order stream and authorial development of the .NET 10 desktop agent for driverless ESC/POS printing.',

    'proj.c_ds_badge': 'Computer Science',
    'proj.c_ds_title': 'Data Structures in C',
    'proj.c_ds_desc': '<p><strong>Computational Problem:</strong> Heavy reliance on high-level language abstractions without mastery of heap memory management, pointer arithmetic, and asymptotic algorithmic complexity.</p><p><strong>Technical Decisions:</strong> Strict ANSI C implementation of linked lists, stacks, queues, and binary search trees; recursive deallocation with null-pointer checks (zero memory leaks) and documented Big-O asymptotic analysis.</p>',
    'proj.c_ds_role': 'Authorial implementation focusing on Computer Science rigor, manual memory management, and structural integrity test routines.',

    'proj.microservices_badge': 'Distributed .NET Architecture',
    'proj.microservices_title': 'E-Commerce Microservices',
    'proj.microservices_desc': 'Distributed microservices architecture in C# / .NET, covering product catalog, shopping cart, order orchestration, asynchronous RabbitMQ messaging, and resilience patterns.',
    'proj.microservices_role': 'Individual laboratory exploring event-driven messaging, Polly resilience policies, Docker Compose orchestration, and database-per-service isolation.',

    'proj.literalura_badge': 'Java 17 & Spring Boot',
    'proj.literalura_title': 'LiterAlura & ONE Backend Challenge',
    'proj.literalura_desc': 'Java 17 and Spring Boot 3 application developed for the Oracle Next Education program. Consumes the public Gutendex API, processes nested JSON via Jackson, and executes relational queries in PostgreSQL with Spring Data JPA.',
    'proj.literalura_role': 'Complete individual implementation of the backend challenge: JPA entity modeling, external REST API integration, and custom JPQL queries.',

    'proj.email_ai_badge': 'Python & NLP',
    'proj.email_ai_title': 'Intelligent Email Classifier',
    'proj.email_ai_desc': 'Python solution applying Natural Language Processing (NLP) and supervised learning for corporate mailbox triage, sentiment analysis, and ticket classification.',
    'proj.email_ai_role': 'Authorial implementation applying text preprocessing (TF-IDF vectorization) and Scikit-Learn classification pipelines for automated email triage.',
    'proj.commerce_desc': 'A Track 2 case study built on Sysotto.Web and Sysotto.Api, with point of sale, multi-branch inventory, and bank reconciliation.',
    'proj.commerce_case_link': 'View the Sysotto Case Study',
    'proj.lamarie_badge': 'Design System & Interactive Prototype',
    'proj.lamarie_title': 'LAMARIÊ — Editorial Fashion Showcase',
    'proj.lamarie_context': 'Create a digital showcase for a women’s fashion boutique in Mossoró, Brazil, and plan its evolution into an ERP-integrated online store.',
    'proj.lamarie_delivered_label': 'Phase 1 · Delivered and technically validated',
    'proj.lamarie_delivered': 'Complete design system in Figma Make with tokens and reusable components, AI-assisted visual curation, and an interactive editorial prototype tested on desktop and mobile.',
    'proj.lamarie_concept_label': 'Phase 2 · E-commerce and ERP concept',
    'proj.lamarie_concept': 'The cart, checkout, payments, and inventory were simulated. Live transactions and the integration of inventory, orders, and payments with the Sysotto ERP are planned.',

    'proj.dio_agent_title': 'Autonomous AI Agents & Speech',
    'proj.dio_agent_desc': 'Experimental AI agents developed within the DIO / Suzano program leveraging generative LLMs, natural language reasoning, and Speech-to-Text audio transcription workflows.',
    'proj.dio_agent_badge': 'Generative AI & Autonomous Agents',

    'proj.currency_title': 'Full-Stack Currency Converter',
    'proj.currency_desc': 'End-to-end foreign exchange rate calculator featuring a Java backend consuming real-time international exchange APIs, integrated with a clean, responsive JavaScript web interface.',
    'proj.currency_badge': 'Full-Stack Java / Web',

    // Tech Stacks Section
    'skills.title': 'Tech Stacks & Competencies',
    'skills.section_heading': 'Technical Focus Areas',
    'skills.subtitle': 'A structured, transparent taxonomy of technologies based on verified production contexts and academic applications.',
    'skills.core_title': 'Technologies in Current Sysotto Projects',
    'skills.core_desc': 'Technologies used in the modular Sysotto.Web and Sysotto.Api platform, including Sysotto Commerce.',
    'skills.demonstrated_title': 'Technologies Demonstrated in Projects & Studies',
    'skills.demonstrated_desc': 'Languages, frameworks, and tools validated in projects with repository source code, academic simulations, and hackathons.',
    'skills.interests_title': 'Interests & Active Exploration Areas',
    'skills.interests_desc': 'Continuous exploration in systems engineering, low-level programming, memory control, and cybersecurity.',
    'skills.academic_title': 'Academic Foundations & Complementary Technologies',
    'skills.academic_desc': 'Languages and toolsets mastered through university coursework, intensive coding bootcamps, and specialized challenges.',
    'skills.ref_api': 'Sysotto.Api',
    'skills.ref_multitenant': 'Sysotto Multi-Tenant',
    'skills.ref_web': 'Sysotto.Web',
    'skills.ref_infra': 'Sysotto Infra',
    'skills.ref_auth': 'Sysotto Auth',
    'skills.ref_core': 'Sysotto Platform',
    'skills.ref_deploy': 'Environment & Deploy',
    'skills.ref_condotrack': 'CondoTrack',
    'skills.ref_condotrack_one': 'CondoTrack / ONE',
    'skills.ref_techmind_email': 'TechMind / Classifier',
    'skills.ref_c_ds': 'Data Structures',
    'skills.ref_sql': 'CondoTrack / TechMind',
    'skills.ref_microservices': 'E-Commerce Microservices',
    'skills.ref_cloud': 'Hackathon / OCI Cert',
    'skills.ref_repos': 'Repositories & CI/CD',
    'skills.ref_systems': 'High-Performance Systems',
    'skills.ref_concurrency': 'Memory Safety & Concurrency',
    'skills.ref_sec_study': 'Cisco Track / Hackers do Bem',
    'skills.ref_net_study': 'Network Defense (Cisco)',
    'skills.ref_crypto': 'Zero-Trust Standards',
    'skills.ref_ai_agents': 'LLM Studies & Agents',

    // Education & Certifications
    'edu.title': 'Academic Education & Certifications',
    'edu.section_heading': 'Education & Continuous Learning',
    'edu.subtitle': 'Lifelong commitment to computer science fundamentals, engineering rigor, and international credentials.',
    'edu.academic_title': 'Higher Education',
    'edu.degree_se': 'B.S. in Software Engineering',
    'edu.degree_se_inst': 'UNIFBV / Wyden (4th Period - In Progress · Expected: 06/2029)',
    'edu.degree_se_desc': 'Software architecture, algorithms, data structures, requirements engineering, IT governance, and cybersecurity.',
    'edu.degree_mba': 'MBA in Business Management',
    'edu.degree_mba_inst': 'Fundação Getúlio Vargas (FGV)',
    'edu.degree_mba_desc': 'Strategic planning, corporate finance, executive negotiation, and high-performance team leadership.',
    'edu.degree_tourism': 'B.A. in Tourism',
    'edu.degree_tourism_inst': 'Universidade de Fortaleza (UNIFOR)',
    'edu.degree_tourism_desc': 'Service operations management, interpersonal dynamics, and strategic market development.',

    'edu.certs_title': 'Key Certifications & Bootcamps',
    'edu.cert_view': 'View Certificate',
    'edu.cert_download': 'Download PDF',
    'edu.certs_more': 'View all 9 certifications',
    'edu.certs_less': 'Show fewer certifications',

    'cert.cs50_title': 'CC50 / CS50: Introduction to Computer Science',
    'cert.cs50_org': 'Harvard University (70 Hours)',
    'cert.cs50_desc': 'C, memory management & pointers, algorithmic complexity, data structures, Python, SQL, Flask, and computational ethics.',

    'cert.cisco_sec_title': 'Cisco Network Security',
    'cert.cisco_sec_org': 'Cisco Networking Academy / SENAI-SC',
    'cert.cisco_sec_desc': 'Network security principles, ASA firewall configuration, applied cryptography, site-to-site VPN tunnels, and threat mitigation.',

    'cert.cisco_def_title': 'Cisco Network Defense (CyberOps)',
    'cert.cisco_def_org': 'Cisco Networking Academy / YDUQS-Wyden',
    'cert.cisco_def_desc': 'Wireshark packet analysis, Access Control Lists (ACLs), AAA security framework, TACACS+/RADIUS, and incident defense.',

    'cert.cisco_linux_title': 'NDG Linux Unhatched',
    'cert.cisco_ds_badge': 'Data Science Badge',
    'cert.cisco_ds_title': 'Introduction to Data Science',
    'cert.cisco_ds_desc': 'Data analysis and visualization, predictive models, and business data science fundamentals.',
    'cert.cisco_linux_org': 'Cisco Networking Academy / NDG',
    'cert.cisco_linux_desc': 'Linux operating system fundamentals, terminal commands, permissions hierarchy, and process management.',

    'cert.oracle_one_title': 'Oracle Next Education Program (ONE)',
    'cert.oracle_one_org': 'Oracle Brasil & Alura (348 Hours - 7 Tracks)',
    'cert.oracle_one_desc': 'Object-Oriented Java, Spring Boot 3, RESTful APIs, Relational DBs, Agile Methodologies, Generative AI, and Final Hackathon.',

    'cert.oracle_oci_title': 'Oracle Cloud Infrastructure (OCI)',
    'cert.oracle_oci_org': 'Oracle University',
    'cert.oracle_oci_desc': 'Official OCI Foundations Associate badge: Cloud architecture, compute instances, object storage, and secure VCN networking.',

    'cert.hackers_title': 'Hackers do Bem: Cybersecurity',
    'cert.hackers_org': 'RNP / Softex / Ministry of Science & Technology',
    'cert.hackers_desc': 'Complete Leveling & Basic Tracks: Information security pillars, encryption standards, network attack vectors, and GRC.',

    'cert.dio_expert_title': 'Campus Expert & Corporate Bootcamps',
    'cert.dio_expert_org': 'Digital Innovation One (DIO)',
    'cert.dio_expert_desc': 'Technical leadership (Class 13), Santander Bootcamp (Java Back-end), WEX End-to-End (.NET), and Suzano AI Developer.',

    // Education CV Dossier Banner
    'edu.cv_pill': 'Executive Dossier & Resume',
    'edu.cv_title': 'Professional Credentials & Career Dossier',
    'edu.cv_desc': 'Download the consolidated executive dossier featuring 20+ years of corporate leadership, enterprise software architecture, and complete technical stacks.',
    'edu.cv_pt_title': 'Professional Resume (PT-BR)',
    'edu.cv_pt_desc': 'Complete executive leadership history, management metrics, academic credentials, and software stack.',
    'edu.cv_en_title': 'Executive Resume (EN-US)',
    'edu.cv_en_desc': 'Full executive leadership history, business turnaround metrics, and software architecture stack.',
    'edu.cv_btn_download': 'Download PDF',

    // Testimonials
    'testimonials.title': 'Recommendations',
    'testimonials.headline': 'What colleagues and leaders say',
    'testimonials.t1.text': 'At the General Management of the Teresina (PI) Branch of Grupo SERVI-SAN, Otto performed his duties firmly and efficiently, generating significant value for the organization. He is dynamic, has excellent interpersonal skills, and always pursues results.',
    'testimonials.t1.name': 'Gladston Lages',
    'testimonials.t1.role': 'Chief Financial & Controllership Officer — Otto’s manager',
    'testimonials.linkedin_label': 'LinkedIn profile of Gladston Lages',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.headline': 'Let’s build the future of technology together.',
    'contact.subtitle': 'Open to executive leadership roles, corporate software architecture, and strategic advisory.',
    'contact.email_label': 'Email:',
    'contact.channel_title': 'Ready to discuss your project or opportunity?',
    'contact.channel_desc': 'Send your inquiry by email.',
    'contact.btn_email': 'Send Direct Email',
    'contact.location_note': 'Location: Parnaíba / Teresina, PI — Available for remote roles',
    'contact.copy_email': 'Copy Email',
    'contact.email_copied': 'Email copied!',
    'contact.origin_prefix': 'Contact context:',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built_with': 'Built with modern web standards, hosted on GitHub Pages.'
  }
};

class I18nManager {
  constructor() {
    this.storageKey = 'otto_portfolio_lang';
    this.currentLang = this.getInitialLang();
    this.init();
  }

  getInitialLang() {
    // 1. If explicitly on the /en route or document is pre-rendered in en-US
    const isEnDoc = typeof document !== 'undefined' && document.documentElement && document.documentElement.getAttribute('lang') === 'en-US';
    const isEnRoute = typeof window !== 'undefined' && window.location && /\/en(?:\/|\/index\.html)?$/.test(window.location.pathname);
    if (isEnDoc || isEnRoute) {
      return 'en-US';
    }

    // 2. Check saved preference
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(this.storageKey) : null;
    if (saved && (saved === 'pt-BR' || saved === 'en-US')) {
      return saved;
    }

    // 3. Detect browser language
    const browserLang = (typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage)) || '';
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
    return 'en-US';
  }

  syncUrl(lang) {
    if (typeof window === 'undefined' || !window.location || window.location.protocol === 'file:') return;
    try {
      const path = window.location.pathname;
      const isEn = lang === 'en-US';
      const hasEn = /\/en(?:\/|\/index\.html)?$/.test(path);

      let newPath = path;
      if (isEn && !hasEn) {
        if (newPath.endsWith('/index.html')) {
          newPath = newPath.replace(/\/index\.html$/, '/en/');
        } else if (newPath.endsWith('/')) {
          newPath = newPath + 'en/';
        } else {
          newPath = newPath + '/en/';
        }
      } else if (!isEn && hasEn) {
        newPath = newPath.replace(/\/en(?:\/index\.html|\/)?$/, '/');
      }

      if (newPath !== path) {
        // Keep deferred picture assets on the page's original base URL.
        const baseUrl = document.baseURI;
        document.querySelectorAll('picture [srcset]').forEach((source) => {
          const candidates = source.getAttribute('srcset');
          const resolved = candidates.replace(/((?:^|,)\s*)((?:\.\.\/)?assets\/[^\s,]+)/g,
            (_, leading, asset) => leading + new URL(asset, baseUrl).href);
          if (resolved !== candidates) source.setAttribute('srcset', resolved);
        });
        document.querySelectorAll('picture img[src]').forEach((image) => {
          const src = image.getAttribute('src');
          if (/^(?:\.\.\/)?assets\//.test(src)) image.src = new URL(src, baseUrl).href;
        });
        window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
      }
    } catch (_) {
      // Safe fallback if history.replaceState is restricted
    }
  }

  setLanguage(lang, syncHistory = true) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, lang);
    }
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.setAttribute('lang', lang);
    }
    this.applyTranslations();
    this.updateLanguageToggleUI();
    if (syncHistory) {
      this.syncUrl(lang);
    }
  }

  t(key) {
    const dict = translations[this.currentLang] || translations['pt-BR'];
    return dict[key] || key;
  }

  applyTranslations() {
    // 1. Text elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // 2. Elements with data-i18n-aria-label
    const ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      const text = this.t(key);
      if (text) {
        el.setAttribute('aria-label', text);
      }
    });

    // 2b. Localized non-content attributes used by embedded documents and images
    [['data-i18n-title', 'title'], ['data-i18n-alt', 'alt']].forEach(([dataAttr, targetAttr]) => {
      document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
        const text = this.t(el.getAttribute(dataAttr));
        if (text) el.setAttribute(targetAttr, text);
      });
    });

    // 3. Document Title and Page Metadata
    const titleText = this.t('meta.title');
    if (titleText) {
      document.title = titleText;
    }

    const descText = this.t('meta.description');
    if (descText) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', descText);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', descText);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', descText);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && titleText) ogTitle.setAttribute('content', titleText);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && titleText) twitterTitle.setAttribute('content', titleText);

    const imageAlt = this.t('meta.image_alt');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt && imageAlt) ogImageAlt.setAttribute('content', imageAlt);
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt && imageAlt) twitterImageAlt.setAttribute('content', imageAlt);

    const isPt = this.currentLang === 'pt-BR';
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', isPt ? 'pt_BR' : 'en_US');

    const ogLocaleAlt = document.querySelector('meta[property="og:locale:alternate"]');
    if (ogLocaleAlt) ogLocaleAlt.setAttribute('content', isPt ? 'en_US' : 'pt_BR');

    // 4. Update dynamic CV download links according to language and route depth
    const cvButtons = document.querySelectorAll('[data-dynamic-cv]');
    const isEnRoute = typeof window !== 'undefined' && window.location && /\/en(?:\/|\/index\.html)?$/.test(window.location.pathname);
    const isEnDoc = typeof document !== 'undefined' && document.documentElement && document.documentElement.getAttribute('lang') === 'en-US';
    const assetPrefix = (isEnRoute || isEnDoc) ? '../' : '';
    cvButtons.forEach((btn) => {
      btn.setAttribute('href', isPt ? `${assetPrefix}assets/docs/cv-otto-freitag-pt-br.pdf` : `${assetPrefix}assets/docs/cv-otto-freitag-en-us.pdf`);
      btn.setAttribute('download', isPt ? 'CV-Otto-David-Freitag-PT-BR.pdf' : 'CV-Otto-David-Freitag-EN-US.pdf');
    });

    // 5. Dispatch event in case other components need to react
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof CustomEvent !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    }
  }

  updateLanguageToggleUI() {
    const buttons = document.querySelectorAll('[data-action="toggle-lang"]');
    buttons.forEach((btn) => {
      const langText = btn.querySelector('.lang-current-text');
      const isPt = this.currentLang === 'pt-BR';
      const label = isPt ? 'Alterar idioma para English (EN)' : 'Switch language to Portuguese (PT)';
      const title = isPt ? 'Mudar para English' : 'Switch to Portuguese';
      btn.setAttribute('title', title);
      btn.setAttribute('aria-label', label);
      if (langText) {
        langText.textContent = isPt ? 'PT' : 'EN';
      }
      
      const badge = btn.querySelector('.lang-badge');
      if (badge) {
        badge.textContent = isPt ? 'BR' : 'US';
      }
    });
  }

  init() {
    this.setLanguage(this.currentLang, false);

    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        this.applyTranslations();
        this.updateLanguageToggleUI();

        document.querySelectorAll('[data-action="toggle-lang"]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = this.currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
            this.setLanguage(targetLang, true);
          });
        });
      });
    }
  }
}

if (typeof window !== 'undefined') {
  window.i18n = new I18nManager();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, I18nManager };
}
