/**
 * Internationalization (i18n) for Otto Freitag Portfolio
 * Supports Portuguese (pt-BR) and English (en-US).
 */

const translations = {
  'pt-BR': {
    // Page Metadata
    'meta.title': 'Otto David de Santana Freitag | Liderança Executiva & Engenharia de Software',
    'meta.description': 'Portfólio executivo de Otto David de Santana Freitag: mais de 20 anos de liderança executiva em grandes corporações (Gerdau, CSN, Servisan), Arquiteto de Soluções e fundador da Sysotto Softwares.',
    'meta.image_alt': 'Retrato profissional de Otto Freitag',
    'brand.monogram_alt': 'Monograma de Otto Freitag',

    // Navigation & Common Accessibility
    'nav.skip_to_content': 'Pular para o conteúdo principal',
    'nav.primary_label': 'Navegação Principal',
    'nav.brand_aria': 'Otto Freitag - Início',
    'nav.cv_aria': 'Baixar currículo em PDF',
    'projects.filter_label': 'Filtrar projetos por categoria',
    'projects.repo_aria': 'Ver repositório do projeto no GitHub',
    'projects.showcase_aria': 'Ver showcase do projeto no GitHub',
    'projects.video_aria': 'Assistir à demonstração do projeto no YouTube',
    'sysotto.tabs_label': 'Plataformas e Módulos Sysotto',
    'sysotto.sites_video_aria': 'Assistir ao tour técnico da Sysotto Sites no YouTube',
    'modal.close': 'Fechar janela modal',
    'theme.enable_light': 'Ativar tema claro',
    'theme.enable_dark': 'Ativar tema escuro',
    'modal.cert_default': 'Certificado Oficial',
    'modal.document_title': 'Documento do certificado',
    'modal.badge_alt': 'Badge ou certificado',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.versatility': 'Atuação',
    'nav.sysotto': 'Case Sysotto',
    'nav.projects': 'Projetos',
    'nav.skills': 'Tecnologias',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.cv': 'Currículo (PDF)',
    'nav.cv_pt': 'Currículo PT-BR',
    'nav.cv_en': 'Resume EN-US',

    // Hero
    'hero.badge': 'Liderança Executiva · Arquiteto de Soluções · Engenheiro de Software',
    'hero.title_start': 'Liderança executiva aliada à',
    'hero.title_highlight': 'engenharia de software',
    'hero.title_end': 'e arquitetura de soluções.',
    'hero.subtitle': 'Mais de 20 anos de gestão executiva em grandes operações industriais (Gerdau, CSN) integrados ao desenvolvimento de software corporativo. Como fundador da Sysotto Softwares, projeto sistemas e plataformas SaaS com foco em processos críticos, escalabilidade e resultado de negócio.',
    'hero.cta_projects': 'Ver Projetos & Cases',
    'hero.cta_academic': 'Ver Projetos de Engenharia',
    'hero.cta_cv': 'Baixar Currículo (PDF)',
    'hero.cta_contact': 'Contato & Oportunidades',
    'hero.audience_recruiters': 'Oportunidades profissionais:',
    'hero.audience_recruiters_link': 'Liderança e engenharia sênior',
    'hero.audience_clients': 'Soluções corporativas:',
    'hero.audience_clients_link': 'Conhecer plataformas Sysotto',
    'hero.role_location': 'Parnaíba & Teresina, PI — Brasil | Disponível para atuação remota',
    'hero.pill_experience': '20+ Anos em Gestão Executiva',
    'hero.pill_role': 'Arquiteto & Eng. de Software',
    'hero.stat_experience': '20+ Anos',
    'hero.stat_experience_desc': 'Liderança executiva & gestão de resultados',
    'hero.stat_academic': 'Eng. de Software',
    'hero.stat_academic_desc': 'UNIFBV/Wyden + MBA FGV',
    'hero.stat_sysotto': 'Engenharia de Soluções',
    'hero.stat_sysotto_desc': 'Fundador da Sysotto & Arquiteto SaaS',

    // About Section
    'about.title': 'Sobre & Transição de Carreira',
    'about.subtitle': 'Solidez executiva corporativa integrada a rigor técnico em engenharia de software.',
    'about.p1': 'Construí uma carreira de mais de 20 anos como Gerente Geral e Gerente Comercial em grandes operações industriais e logísticas, incluindo <strong>Gerdau S/A</strong> (gestão de filial com crescimento superior a 30% a.a.), <strong>CSN</strong>, <strong>Servisan</strong> e <strong>Servicon</strong>. Essa vivência me confere domínio prático de processos de negócio, liderança de equipes e tomada de decisão orientada a resultados.',
    'about.p2': 'Na transição para a tecnologia, uni essa bagagem executiva à computação aplicada. Como <strong>CEO e Arquiteto de Soluções na Sysotto Softwares</strong>, projeto e implemento plataformas SaaS multi-tenant e sistemas corporativos, com foco em arquiteturas escaláveis (.NET, C#, PostgreSQL e Next.js), segurança e confiabilidade operacional.',
    'about.p3': 'Sou graduando em <strong>Engenharia de Software (UNIFBV/Wyden)</strong>, com <strong>MBA em Gestão Empresarial pela FGV</strong> e <strong>Bacharelado em Turismo pela UNIFOR</strong>, mantendo dedicação contínua aos fundamentos da computação, estruturas de dados, sistemas distribuídos e segurança defensiva.',
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
    'timeline.sysotto_desc': 'Liderança integral no desenvolvimento das plataformas SaaS de ERP Industrial, Food Service e SiteBuilder multi-tenant em .NET 10 e Next.js.',
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
    'versatility.tag_gov': 'Governança de Processos',
    'versatility.tag_audit': 'Auditoria & Compliance',
    'versatility.tag_exec': 'Visão Executiva',
    'versatility.tag_scale': 'Escalabilidade',
    'versatility.sme_title': 'PMEs, Varejo & Serviços Comerciais',
    'versatility.sme_desc': 'Automação de operações comerciais e de atendimento, eliminação de intermediários tecnológicos de alto custo, estabilidade operacional e foco direto em redução de custos operacionais.',
    'versatility.tag_efficiency': 'Eficiência Operacional',
    'versatility.tag_autonomy': 'Autonomia Técnica',
    'versatility.tag_cost': 'Redução de Custos',
    'versatility.tag_realtime': 'Fluxo em Tempo Real',
    'versatility.saas_title': 'Startups & Produtos Digitais (SaaS B2B)',
    'versatility.saas_desc': 'Concepção de produtos escaláveis com isolamento rigoroso entre clientes, governança multi-tenant, estratégias modernas de provisionamento e visão orientada a retenção e ROI.',
    'versatility.tag_tenant': 'Arquitetura Multi-Tenant',
    'versatility.tag_failclosed': 'Segurança Fail-Closed',
    'versatility.tag_product': 'Estratégia de Produto',
    'versatility.tag_ha': 'Alta Disponibilidade',
    'versatility.critical_title': 'Sistemas Críticos & Segurança Aplicada',
    'versatility.critical_desc': 'Projetos que exigem integridade absoluta de dados, controle rigoroso de recursos computacionais, disciplina de segurança defensiva e tolerância zero a falhas silenciosas.',
    'versatility.tag_integrity': 'Integridade de Dados',
    'versatility.tag_defense': 'Defesa em Profundidade',
    'versatility.tag_memory': 'Controle de Memória',
    'versatility.tag_zerotrust': 'Zero-Trust',

    // Sysotto Section
    'sysotto.pill': 'Arquitetura & Engenharia de Software',
    'sysotto.title': 'Case Sysotto: Engenharia & Plataformas SaaS',
    'sysotto.subtitle': 'Plataformas modulares projetadas e arquitetadas por Otto David de Santana Freitag, demonstrando padrões corporativos, domínio rico e isolamento multi-tenant.',
    'sysotto.company_name': 'Sysotto Softwares',
    'sysotto.company_tagline': 'Ecossistema SaaS & Engenharia Corporativa',
    'sysotto.role_badge': 'Otto Freitag — Arquiteto Fundador & Engenheiro Principal',
    'sysotto.lead': 'Criada e arquitetada por Otto David de Santana Freitag, a Sysotto Softwares desenvolve plataformas corporativas voltadas a processos críticos, gestão de estoques e presença web. Sysotto Sites encontra-se online e operacional, enquanto as soluções Industry e FoodService estão em fase final de preparação técnica.',
    'sysotto.mockup_disclaimer': 'Demonstração visual · Dados ilustrativos',
    'sysotto.mockup_terminal_disclaimer': 'Simulação de telemetria e diagnóstico',
    'sysotto.repo_showcase_btn': 'Ver Repositório Showcase no GitHub',
    'sysotto.internal_spec_note': 'Especificação arquitetural interna Sysotto',
    'sysotto.tab_ind': 'Sysotto Industry',
    'sysotto.tab_food': 'Sysotto FoodService',
    'sysotto.tab_sites': 'Sysotto Sites',
    'sysotto.tab_core': 'Multi-Tenant Core',
    'sysotto.status_sites_online': '● Online & Em Operação',
    'sysotto.status_industry_prep': '● Em Preparação',
    'sysotto.status_food_prep': '● Em Preparação',
    'sysotto.sites_status_tag': 'Plataforma Online · Versão Atual em Staging',
    'sysotto.sites_video_btn': 'Assistir Tour Técnico (YouTube)',
    'sysotto.mock_kpi_lots_title': 'Lotes na Demonstração',
    'sysotto.mock_kpi_lots_val': '1.482',
    'sysotto.mock_simulated_tag': '(Simulado)',
    'sysotto.mock_kpi_rules_title': 'Regras de Alocação',
    'sysotto.mock_kpi_rules_val': 'FEFO / FIFO / LIFO',
    'sysotto.mock_kpi_acc_title': 'Meta de Acuracidade',
    'sysotto.mock_kpi_acc_val': '99.8%',
    'sysotto.mock_target_tag': '(Meta Teórica)',
    'sysotto.mock_table_footer_note': '<strong>Rastreabilidade QR Code:</strong> Estrutura de etiqueta GS1-128 para conferência (Demonstração).',
    'sysotto.mock_table_badge': 'Dados Ilustrativos',
    'sysotto.mock_kds_footer_note': 'Painel KDS: Demonstração de fluxo com 14 comandas simuladas',
    'sysotto.mock_kds_signalr': 'Stream SignalR (Simulado)',
    'sysotto.mock_sites_footer_left': 'Renderizador SSR / Static Snapshots',
    'sysotto.mock_sites_footer_right': 'Layout Ilustrativo · Tour em Vídeo Disponível',
    'sysotto.mock_core_status': '[Diagnóstico de Demonstração]: Validação fail-closed de JWT · RLS Ativo',
    'sysotto.mock_table_lot': 'Lote / Código',
    'sysotto.mock_table_product': 'Produto',
    'sysotto.mock_table_expiry': 'Validade',
    'sysotto.mock_table_location': 'Endereço do estoque',
    'sysotto.mock_table_status': 'Status',
    'sysotto.mock_product_coil': 'Bobina de aço galvanizado',
    'sysotto.mock_location_b': 'Rua B · Mód. 04 · Nív. 2',
    'sysotto.mock_status_fefo': 'Alocado por FEFO',
    'sysotto.mock_product_profile': 'Perfil estrutural U',
    'sysotto.mock_location_a': 'Rua A · Mód. 01 · Nív. 1',
    'sysotto.mock_status_fifo': 'Ativo por FIFO',
    'sysotto.mock_product_chemical': 'Insumo químico decapante',
    'sysotto.mock_location_quarantine': 'Quarentena Q-01',
    'sysotto.mock_status_review': 'Em análise',
    'sysotto.mock_ticket_one': 'Mesa 07 · Comanda #1042',
    'sysotto.mock_ticket_preparing': 'Em preparo (04:12)',
    'sysotto.mock_food_item_one': '1x Filé-mignon ao poivre',
    'sysotto.mock_food_item_two': '1x Risoto de parmesão',
    'sysotto.mock_food_note': '* Obs.: sem glúten / molho à parte',
    'sysotto.mock_server_one': 'Garçom: Carlos R.',
    'sysotto.mock_printed': '🖨️ Comprovante impresso',
    'sysotto.mock_ticket_two': 'Mesa 12 · Comanda #1045',
    'sysotto.mock_ticket_ready': 'Pronto para entrega',
    'sysotto.mock_food_item_three': '2x Salmão grelhado com alcaparras',
    'sysotto.mock_food_item_four': '2x Suco natural de laranja',
    'sysotto.mock_server_two': 'Garçonete: Luiza M.',
    'sysotto.mock_total_time': 'Tempo total: 12 min',
    'sysotto.mock_preset': 'Preset: Indústria B2B Clean #08',
    'sysotto.mock_device_desktop': 'Desktop',
    'sysotto.mock_device_tablet': 'Tablet',
    'sysotto.mock_device_mobile': 'Celular',
    'sysotto.mock_cta': 'Botão CTA: Conectar',
    'sysotto.mock_url_industry': 'industry.sysotto.com.br/dashboard/estoque/lotes',
    'sysotto.mock_url_food': 'foodservice.sysotto.com.br/kitchen',
    'sysotto.mock_url_sites': 'sitebuilder.sysotto.com.br/editor?tenant=ind-norte',
    'sysotto.mock_url_core': 'core.sysotto.internal/health/diagnostics',
    
    // Sysotto Industry
    'sysotto.ind_title': 'Sysotto ERP / Industry (IndSaaS)',
    'sysotto.ind_desc': 'Sistema integrado de gestão fabril e de estoques de alta precisão para médias e grandes operações industriais.',
    'sysotto.ind_problem': '<strong>Problema de Negócio:</strong> Rastreabilidade deficiente em estoques perecíveis de alto volume, conciliações manuais com divergências contábeis e controle ineficiente de lotes e almoxarifados.',
    'sysotto.ind_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Concepção e desenvolvimento autoral do modelo de domínio, algoritmos FEFO/FIFO/LIFO, rastreabilidade GS1-128 e isolamento com PostgreSQL RLS.',
    'sysotto.ind_functional': '<strong>Escopo arquitetural implementado:</strong> Gestão avançada de inventário com estratégias automatizadas FEFO/FIFO/LIFO, controle de lotes com validade e quarentena, etiquetas GS1-128 QR Code, endereçamento tridimensional de armazéns e rotinas de conciliação de inventário rotativo.',
    'sysotto.ind_upcoming': '<strong>Evolução técnica planejada:</strong> Pacote comercial Industry Lite e projeção de produtos no catálogo digital B2B.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Sysotto FoodService
    'sysotto.food_title': 'Sysotto FoodService (RestSaaS)',
    'sysotto.food_desc': 'Plataforma especializada para restaurantes, bares e serviços alimentícios, unindo salão, cozinha e gestão de entregas.',
    'sysotto.food_problem': '<strong>Problema de Negócio:</strong> Gargalos de comunicação entre salão e cozinha geram atrasos em comandas e perda de comandas térmicas por instabilidade de rede local.',
    'sysotto.food_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Arquitetura orientada a eventos para o fluxo de pedidos (SignalR) e desenvolvimento do agente desktop autônomo em .NET 10 para comunicação direta com impressoras térmicas ESC/POS sem drivers externos.',
    'sysotto.food_functional': '<strong>Escopo arquitetural implementado:</strong> Módulo TableOrdersManager para controle de mesas e comandas, cardápio digital dinâmico via QR Code, Kitchen Display System (KDS) em tempo real e agente desktop autônomo de impressão térmica (.NET 10 / ESC/POS).',
    'sysotto.food_upcoming': '<strong>Evolução técnica planejada:</strong> Roteirização de entregas e integrações bidirecionais de pedidos.',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // Sysotto Sites
    'sysotto.site_title': 'Sysotto Sites — Plataforma Web & CMS',
    'sysotto.site_desc': 'Plataforma para criação, publicação e hospedagem dinâmica de landing pages e catálogos B2B com renderização otimizada.',
    'sysotto.site_problem': '<strong>Problema de Negócio:</strong> Criação rápida de catálogos e sites B2B sem depender de equipes de TI para cada alteração de layout.',
    'sysotto.site_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Motor de templates contextuais, pipeline de compressão e recorte de mídia em WebP (Sharp) e infraestrutura de componentes modulares.',
    'sysotto.site_functional': '<strong>Escopo arquitetural implementado:</strong> Editor contextual visual com presets profissionais pré-configurados, módulo de gestão e recorte dinâmico de mídias (WebP), Help Hub e componentes SSR otimizados.',
    'sysotto.site_upcoming': '<strong>Evolução técnica planejada:</strong> Provisionamento automático de domínios personalizados e certificados SSL Let\'s Encrypt sob demanda.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Sysotto Multi-Tenant Core & Security Engine',
    'sysotto.core_desc': 'Núcleo de infraestrutura compartilhada, segurança e orquestração de microsserviços.',
    'sysotto.core_problem': '<strong>Problema de Negócio:</strong> Risco de vazamento de dados entre empresas clientes (cross-tenant data leak) e gargalos de autenticação em arquiteturas multi-tenant.',
    'sysotto.core_role': '<strong>Arquitetura & Implementação (Otto Freitag):</strong> Middleware central de resolução de tenant fail-closed, orquestrador de migrations de banco com advisory lock concorrente e camada de autorização OpenIddict / JWT.',
    'sysotto.core_functional': '<strong>Escopo arquitetural implementado:</strong> Resolução dinâmica de tenant via middleware (MonolithTenantProvider) com proteção contra tenant injection, isolamento lógico com PostgreSQL Row Level Security (RLS), autorização OAuth2 / OIDC via OpenIddict e cache distribuído Redis.',
    'sysotto.core_upcoming': '<strong>Evolução técnica planejada:</strong> Portal unificado SSO com dashboard centralizado de telemetria e métricas de faturamento por tenant.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Academic & Impact Projects
    'projects.title': 'Projetos em Destaque & Repositórios',
    'projects.section_heading': 'Engenharia de Software em Prática',
    'projects.subtitle': 'Seleção de projetos do GitHub (OttoF77) demonstrando fundamentos de computação, microsserviços, inteligência artificial e desenvolvimento full-stack.',
    'projects.tab_all': 'Todos os Projetos',
    'projects.tab_sysotto': 'Sistemas Corporativos (Sysotto)',
    'projects.tab_hackathons': 'Simulações & Hackathons',
    'projects.tab_academic': 'Ciência da Computação & Fundamentos',
    'projects.featured_flag': '★ Destaque Técnico',
    'projects.role_label': 'Contribuição de Otto:',
    
    // Project items
    'proj.btn_view_showcase': 'Ver Showcase no GitHub',
    'proj.btn_view_repo': 'Ver Repositório no GitHub',

    'proj.sysotto_ind_badge': 'Sysotto · Em Preparação (Showcase)',
    'proj.sysotto_ind_title': 'Sysotto ERP / Industry Suite',
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

    'proj.sysotto_food_badge': 'Sysotto · Em Preparação',
    'proj.sysotto_food_title': 'Sysotto FoodService & Agente de Impressão',
    'proj.sysotto_food_desc': 'Sistema operacional para restaurantes e bares com Kitchen Display System em tempo real, gestão de comandas e mesas, e agente desktop nativo em .NET 10 para impressão térmica direta (ESC/POS).',
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
    'skills.core_desc': 'Tecnologias centrais aplicadas na arquitetura e engenharia das plataformas da Sysotto Softwares (Sites, Industry Suite e FoodService).',
    'skills.demonstrated_title': 'Tecnologias Demonstradas em Projetos & Estudos',
    'skills.demonstrated_desc': 'Linguagens, frameworks e ferramentas validados em projetos com código-fonte no repositório, simulações acadêmicas e hackathons.',
    'skills.interests_title': 'Interesses & Áreas em Exploração',
    'skills.interests_desc': 'Áreas de dedicação contínua em engenharia de sistemas, programação de baixo nível, controle de memória e segurança.',
    'skills.academic_title': 'Fundamentação Acadêmica & Formações Complementares',
    'skills.academic_desc': 'Tecnologias e linguagens exploradas no âmbito universitário, bootcamps de capacitação e desafios de desenvolvimento para consolidação de fundamentos.',
    'skills.ref_industry': 'Sysotto Industry',
    'skills.ref_industry_sites': 'Sysotto Industry / Sites',
    'skills.ref_multitenant': 'Sysotto Multi-Tenant',
    'skills.ref_sites': 'Sysotto Sites',
    'skills.ref_sites_ui': 'Sysotto Sites / UI',
    'skills.ref_infra': 'Sysotto Infra',
    'skills.ref_auth': 'Sysotto Auth',
    'skills.ref_core': 'Sysotto Core',
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

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.headline': 'Vamos construir o futuro da tecnologia juntos.',
    'contact.subtitle': 'Aberto a oportunidades executivas, arquitetura de software corporativo e parcerias estratégicas.',
    'contact.email_label': 'E-mail:',
    'contact.phone_label': 'Telefone / WhatsApp:',
    'contact.linkedin_label': 'LinkedIn:',
    'contact.github_label': 'GitHub:',
    'contact.location_label': 'Localização:',
    'contact.location_val': 'Parnaíba / Teresina - PI, Brasil (Disponibilidade Global)',
    'contact.fast_response': 'Atendimento Direto & Ágil',
    'contact.channel_title': 'Vamos conversar sobre seu projeto ou oportunidade?',
    'contact.channel_desc': 'Disponível para posições executivas de liderança, arquitetura técnica de software corporativo e parcerias estratégicas.',
    'contact.btn_whatsapp': 'Iniciar Conversa no WhatsApp',
    'contact.btn_email': 'Enviar E-mail Direto',
    'contact.btn_cv': 'Baixar Currículo (PDF)',
    'contact.cv_label': 'Currículo Profissional:',
    'contact.cv_link_text': 'Baixar Versão Consolidada (PDF)',
    'contact.location_note': 'Base: Parnaíba / Teresina, PI — Atuação remota',
    'contact.copy_email': 'Copiar E-mail',
    'contact.email_copied': 'E-mail copiado!',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built_with': 'Construído com padrões modernos web, hospedado no GitHub Pages.'
  },

  'en-US': {
    // Page Metadata
    'meta.title': 'Otto David de Santana Freitag | Executive Leadership & Software Engineering',
    'meta.description': 'Executive portfolio of Otto David de Santana Freitag: 20+ years of executive leadership in major corporations (Gerdau, CSN, Servisan), Solutions Architect and founder of Sysotto Softwares.',
    'meta.image_alt': 'Professional portrait of Otto Freitag',
    'brand.monogram_alt': 'Otto Freitag monogram',

    // Navigation & Common Accessibility
    'nav.skip_to_content': 'Skip to main content',
    'nav.primary_label': 'Main Navigation',
    'nav.brand_aria': 'Otto Freitag - Home',
    'nav.cv_aria': 'Download the resume as a PDF',
    'projects.filter_label': 'Filter projects by category',
    'projects.repo_aria': 'View the project repository on GitHub',
    'projects.showcase_aria': 'View the project showcase on GitHub',
    'projects.video_aria': 'Watch the project demonstration on YouTube',
    'sysotto.tabs_label': 'Sysotto Platforms and Modules',
    'sysotto.sites_video_aria': 'Watch the Sysotto Sites technical tour on YouTube',
    'modal.close': 'Close modal dialog',
    'theme.enable_light': 'Enable light theme',
    'theme.enable_dark': 'Enable dark theme',
    'modal.cert_default': 'Official Certificate',
    'modal.document_title': 'Certificate document',
    'modal.badge_alt': 'Badge or certificate',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.versatility': 'Expertise',
    'nav.sysotto': 'Case Sysotto',
    'nav.projects': 'Projects',
    'nav.skills': 'Tech Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume (PDF)',
    'nav.cv_pt': 'Currículo PT-BR',
    'nav.cv_en': 'Resume EN-US',

    // Hero
    'hero.badge': 'Executive Leadership · Solutions Architect · Software Engineer',
    'hero.title_start': 'Executive leadership integrated with',
    'hero.title_highlight': 'software engineering',
    'hero.title_end': 'and solutions architecture.',
    'hero.subtitle': 'Over 20 years of executive leadership in major industrial operations (Gerdau, CSN) combined with enterprise software development. As founder of Sysotto Softwares, I architect SaaS platforms and systems focused on critical workflows, scalability, and measurable business impact.',
    'hero.cta_projects': 'View Projects & Cases',
    'hero.cta_academic': 'View Engineering Projects',
    'hero.cta_cv': 'Download Resume (PDF)',
    'hero.cta_contact': 'Contact & Opportunities',
    'hero.audience_recruiters': 'Career opportunities:',
    'hero.audience_recruiters_link': 'Executive & senior engineering roles',
    'hero.audience_clients': 'Enterprise solutions:',
    'hero.audience_clients_link': 'Explore Sysotto platforms',
    'hero.role_location': 'Parnaíba & Teresina, PI — Brazil | Available for remote roles',
    'hero.pill_experience': '20+ Years in Executive Leadership',
    'hero.pill_role': 'Solutions Architect & Engineer',
    'hero.stat_experience': '20+ Years',
    'hero.stat_experience_desc': 'Executive leadership & business growth',
    'hero.stat_academic': 'Software Eng.',
    'hero.stat_academic_desc': 'UNIFBV/Wyden + FGV MBA',
    'hero.stat_sysotto': 'Solutions Engineering',
    'hero.stat_sysotto_desc': 'Sysotto Founder & SaaS Architect',

    // About Section
    'about.title': 'About & Career Migration',
    'about.subtitle': 'Senior executive leadership combined with technical discipline in software engineering.',
    'about.p1': 'Over a 20-year executive career, I served as General Manager and Commercial Manager in large-scale industrial and distribution operations, including <strong>Gerdau S/A</strong> (leading a regional branch with >30% annual growth), <strong>CSN</strong>, <strong>Servisan</strong>, and <strong>Servicon</strong>. This background gives me direct mastery of business workflows, team leadership, and ROI-driven decision-making.',
    'about.p2': 'Transitioning into technology, I applied this executive background directly to computing. As <strong>CEO and Solutions Architect at Sysotto Softwares</strong>, I design and build multi-tenant SaaS platforms and enterprise architectures, prioritizing scalability (.NET, C#, PostgreSQL, Next.js), fail-closed security, and operational reliability.',
    'about.p3': 'I am pursuing a <strong>B.S. in Software Engineering (UNIFBV/Wyden)</strong>, hold an <strong>MBA in Business Management from FGV</strong>, and a <strong>B.A. in Tourism from UNIFOR</strong>, with continuous focus on computer science fundamentals, data structures, distributed systems, and defensive security.',
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
    'timeline.sysotto_desc': 'End-to-end leadership in developing SaaS platforms for industrial ERP, food service, and multi-tenant site building with .NET 10 and Next.js.',
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
    'versatility.tag_gov': 'Process Governance',
    'versatility.tag_audit': 'Audit & Compliance',
    'versatility.tag_exec': 'Executive Oversight',
    'versatility.tag_scale': 'Scalability',
    'versatility.sme_title': 'SMBs, Retail & Commercial Services',
    'versatility.sme_desc': 'Point-of-sale and customer service automation, eliminating expensive intermediaries, ensuring operational uptime, and delivering direct operational cost reduction.',
    'versatility.tag_efficiency': 'Operational Efficiency',
    'versatility.tag_autonomy': 'Technical Autonomy',
    'versatility.tag_cost': 'Cost Reduction',
    'versatility.tag_realtime': 'Real-Time Workflows',
    'versatility.saas_title': 'Startups & Digital B2B SaaS',
    'versatility.saas_desc': 'Scalable product design with strict tenant isolation, multi-tenant governance, modern provisioning workflows, and customer retention & ROI orientation.',
    'versatility.tag_tenant': 'Multi-Tenant Architecture',
    'versatility.tag_failclosed': 'Fail-Closed Security',
    'versatility.tag_product': 'Product Strategy',
    'versatility.tag_ha': 'High Availability',
    'versatility.critical_title': 'Mission-Critical Systems & Applied Security',
    'versatility.critical_desc': 'Engineering for absolute data integrity, stringent compute resource budgeting, defensive security discipline, and zero tolerance for silent failures.',
    'versatility.tag_integrity': 'Data Integrity',
    'versatility.tag_defense': 'Defense-in-Depth',
    'versatility.tag_memory': 'Memory Control',
    'versatility.tag_zerotrust': 'Zero-Trust',

    // Sysotto Section
    'sysotto.pill': 'Systems Architecture & Engineering',
    'sysotto.title': 'Sysotto Case: Engineering & SaaS Platforms',
    'sysotto.subtitle': 'Modular platforms designed and architected by Otto David de Santana Freitag, demonstrating enterprise patterns, rich domain logic, and multi-tenant isolation.',
    'sysotto.company_name': 'Sysotto Softwares',
    'sysotto.company_tagline': 'Multi-Tenant SaaS Ecosystem & Enterprise Engineering',
    'sysotto.role_badge': 'Otto Freitag — Founding Architect & Principal Engineer',
    'sysotto.lead': 'Founded and architected by Otto David de Santana Freitag, Sysotto Softwares develops enterprise platforms for mission-critical operations, inventory governance, and web presence. Sysotto Sites is online and operational, while the Industry and FoodService solutions are in final technical preparation.',
    'sysotto.mockup_disclaimer': 'Visual demo · Illustrative data',
    'sysotto.mockup_terminal_disclaimer': 'Simulated telemetry and diagnostics',
    'sysotto.repo_showcase_btn': 'View Showcase Repository on GitHub',
    'sysotto.internal_spec_note': 'Internal Sysotto architectural specification',
    'sysotto.tab_ind': 'Sysotto Industry',
    'sysotto.tab_food': 'Sysotto FoodService',
    'sysotto.tab_sites': 'Sysotto Sites',
    'sysotto.tab_core': 'Multi-Tenant Core',
    'sysotto.status_sites_online': '● Online & Operational',
    'sysotto.status_industry_prep': '● In Preparation',
    'sysotto.status_food_prep': '● In Preparation',
    'sysotto.sites_status_tag': 'Online Platform · Latest Release in Staging',
    'sysotto.sites_video_btn': 'Watch Technical Tour (YouTube)',
    'sysotto.mock_kpi_lots_title': 'Tracked Lots (Mock)',
    'sysotto.mock_kpi_lots_val': '1,482',
    'sysotto.mock_simulated_tag': '(Simulated)',
    'sysotto.mock_kpi_rules_title': 'Allocation Strategies',
    'sysotto.mock_kpi_rules_val': 'FEFO / FIFO / LIFO',
    'sysotto.mock_kpi_acc_title': 'Target Accuracy',
    'sysotto.mock_kpi_acc_val': '99.8%',
    'sysotto.mock_target_tag': '(Theoretical Target)',
    'sysotto.mock_table_footer_note': '<strong>QR Code Traceability:</strong> GS1-128 compliant label payload structure (Demonstration).',
    'sysotto.mock_table_badge': 'Illustrative Data',
    'sysotto.mock_kds_footer_note': 'KDS Screen: Live flow demonstration with 14 simulated kitchen tickets',
    'sysotto.mock_kds_signalr': 'SignalR Stream (Simulated)',
    'sysotto.mock_sites_footer_left': 'SSR Renderer / Static Snapshots',
    'sysotto.mock_sites_footer_right': 'Illustrative Mockup · Video Tour Available',
    'sysotto.mock_core_status': '[Demonstration Diagnostics]: Fail-closed JWT validation · Active RLS',
    'sysotto.mock_table_lot': 'Lot / Code',
    'sysotto.mock_table_product': 'Product',
    'sysotto.mock_table_expiry': 'Expiry date',
    'sysotto.mock_table_location': 'Warehouse location',
    'sysotto.mock_table_status': 'Status',
    'sysotto.mock_product_coil': 'Galvanized steel coil',
    'sysotto.mock_location_b': 'Aisle B · Bay 04 · Level 2',
    'sysotto.mock_status_fefo': 'Allocated by FEFO',
    'sysotto.mock_product_profile': 'U-shaped structural section',
    'sysotto.mock_location_a': 'Aisle A · Bay 01 · Level 1',
    'sysotto.mock_status_fifo': 'Active by FIFO',
    'sysotto.mock_product_chemical': 'Pickling chemical supply',
    'sysotto.mock_location_quarantine': 'Quarantine Q-01',
    'sysotto.mock_status_review': 'Under review',
    'sysotto.mock_ticket_one': 'Table 07 · Order #1042',
    'sysotto.mock_ticket_preparing': 'In preparation (04:12)',
    'sysotto.mock_food_item_one': '1x Filet mignon au poivre',
    'sysotto.mock_food_item_two': '1x Parmesan risotto',
    'sysotto.mock_food_note': '* Note: gluten-free / sauce on the side',
    'sysotto.mock_server_one': 'Server: Carlos R.',
    'sysotto.mock_printed': '🖨️ Receipt printed',
    'sysotto.mock_ticket_two': 'Table 12 · Order #1045',
    'sysotto.mock_ticket_ready': 'Ready for delivery',
    'sysotto.mock_food_item_three': '2x Grilled salmon with capers',
    'sysotto.mock_food_item_four': '2x Fresh orange juice',
    'sysotto.mock_server_two': 'Server: Luiza M.',
    'sysotto.mock_total_time': 'Total time: 12 min',
    'sysotto.mock_preset': 'Preset: Clean B2B Industry #08',
    'sysotto.mock_device_desktop': 'Desktop',
    'sysotto.mock_device_tablet': 'Tablet',
    'sysotto.mock_device_mobile': 'Mobile',
    'sysotto.mock_cta': 'CTA button: Connect',
    'sysotto.mock_url_industry': 'industry.sysotto.com.br/dashboard/inventory/lots',
    'sysotto.mock_url_food': 'foodservice.sysotto.com.br/kitchen',
    'sysotto.mock_url_sites': 'sitebuilder.sysotto.com.br/editor?tenant=industrial-north',
    'sysotto.mock_url_core': 'core.sysotto.internal/health/diagnostics',

    // Sysotto Industry
    'sysotto.ind_title': 'Sysotto ERP / Industry (IndSaaS)',
    'sysotto.ind_desc': 'High-precision manufacturing and inventory management ERP engineered for industrial plants and distribution centers.',
    'sysotto.ind_problem': '<strong>Business Problem:</strong> Severe material waste due to expiration of perishable inventory and warehouse discrepancies under manual lot control.',
    'sysotto.ind_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Authorial domain modeling, FEFO/FIFO/LIFO automated allocation engine, GS1-128 QR code traceability, and PostgreSQL Row-Level Security (RLS) multi-tenant isolation.',
    'sysotto.ind_functional': '<strong>Implemented architectural scope:</strong> Advanced inventory management with automated FEFO/FIFO/LIFO strategies, lot expiration and quarantine tracking, GS1-128 QR Code labels, 3D warehouse address mapping, and perpetual cycle count reconciliation routines.',
    'sysotto.ind_upcoming': '<strong>Planned technical evolution:</strong> Turnkey Industry Lite package and B2B digital catalog projection.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Sysotto FoodService
    'sysotto.food_title': 'Sysotto FoodService (RestSaaS)',
    'sysotto.food_desc': 'Operational suite for restaurants and bars integrating dining floor, kitchen production, and delivery logistics.',
    'sysotto.food_problem': '<strong>Business Problem:</strong> Communication bottlenecks between front-of-house and kitchen create order delays and lost paper tickets from network instability.',
    'sysotto.food_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Event-driven order workflow architecture via SignalR and autonomous native .NET 10 desktop agent for direct ESC/POS thermal printing without third-party drivers.',
    'sysotto.food_functional': '<strong>Implemented architectural scope:</strong> TableOrdersManager module for simultaneous tables and tabs, dynamic QR Code digital menu, real-time Kitchen Display System (KDS), and autonomous thermal print agent (.NET 10 / ESC/POS).',
    'sysotto.food_upcoming': '<strong>Planned technical evolution:</strong> Dispatch route planning and two-way delivery aggregator webhooks.',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // Sysotto Sites
    'sysotto.site_title': 'Sysotto Sites — Web Platform & CMS',
    'sysotto.site_desc': 'Web platform for dynamic creation, publishing, and hosting of landing pages and B2B catalogs with optimized rendering.',
    'sysotto.site_problem': '<strong>Business Problem:</strong> High cost and slow turnaround for businesses maintaining marketing sites and B2B product catalogs without engineering dependency.',
    'sysotto.site_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Contextual layout builder engine, media processing pipeline with on-the-fly WebP compression (Sharp), and modular component architecture.',
    'sysotto.site_functional': '<strong>Implemented architectural scope:</strong> Visual contextual builder with pre-configured professional presets, media management with dynamic WebP resizing, Help Hub, and SSR-optimized components.',
    'sysotto.site_upcoming': '<strong>Planned technical evolution:</strong> Automated custom domain routing and on-demand Let\'s Encrypt SSL certificate provisioning.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Sysotto Multi-Tenant Core & Security Engine',
    'sysotto.core_desc': 'Shared infrastructure spine, identity federation, and distributed microservices orchestration.',
    'sysotto.core_problem': '<strong>Business Problem:</strong> Risk of cross-tenant data leakage in shared database architectures and authentication bottlenecks across microservices.',
    'sysotto.core_role': '<strong>Architecture & Implementation (Otto Freitag):</strong> Fail-closed tenant resolution middleware, database migration runner with concurrent advisory locks, and OpenIddict / JWT authorization pipeline.',
    'sysotto.core_functional': '<strong>Implemented architectural scope:</strong> Dynamic tenant resolution via middleware (MonolithTenantProvider) preventing tenant injection, PostgreSQL Row Level Security (RLS) data isolation, OAuth2 / OIDC authorization with OpenIddict, and Redis distributed caching.',
    'sysotto.core_upcoming': '<strong>Planned technical evolution:</strong> Unified SSO identity portal with centralized tenant telemetry and billing usage dashboards.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Academic & Impact Projects
    'projects.title': 'Featured Projects & Repositories',
    'projects.section_heading': 'Software Engineering in Practice',
    'projects.subtitle': 'Curated open-source repositories from GitHub (OttoF77) highlighting computer science foundations, microservices, AI, and full-stack software development.',
    'projects.tab_all': 'All Projects',
    'projects.tab_sysotto': 'Enterprise Systems (Sysotto)',
    'projects.tab_hackathons': 'Simulations & Hackathons',
    'projects.tab_academic': 'Computer Science & Foundations',
    'projects.featured_flag': '★ Technical Highlight',
    'projects.role_label': 'Otto\'s Contribution:',
    
    // Project items
    'proj.btn_view_showcase': 'View GitHub Showcase',
    'proj.btn_view_repo': 'View GitHub Repository',

    'proj.sysotto_ind_badge': 'Sysotto · In Preparation (Showcase)',
    'proj.sysotto_ind_title': 'Sysotto ERP / Industry Suite',
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

    'proj.sysotto_food_badge': 'Sysotto · In Preparation',
    'proj.sysotto_food_title': 'Sysotto FoodService & Printing Agent',
    'proj.sysotto_food_desc': 'Operational restaurant suite with real-time Kitchen Display System (KDS), table/tab management, and autonomous .NET 10 native desktop agent for direct ESC/POS thermal printing.',
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
    'skills.core_desc': 'Core technologies applied in the architecture and engineering of Sysotto Softwares platforms (Sites, Industry Suite, and FoodService).',
    'skills.demonstrated_title': 'Technologies Demonstrated in Projects & Studies',
    'skills.demonstrated_desc': 'Languages, frameworks, and tools validated in projects with repository source code, academic simulations, and hackathons.',
    'skills.interests_title': 'Interests & Active Exploration Areas',
    'skills.interests_desc': 'Continuous exploration in systems engineering, low-level programming, memory control, and cybersecurity.',
    'skills.academic_title': 'Academic Foundations & Complementary Technologies',
    'skills.academic_desc': 'Languages and toolsets mastered through university coursework, intensive coding bootcamps, and specialized challenges.',
    'skills.ref_industry': 'Sysotto Industry',
    'skills.ref_industry_sites': 'Sysotto Industry / Sites',
    'skills.ref_multitenant': 'Sysotto Multi-Tenant',
    'skills.ref_sites': 'Sysotto Sites',
    'skills.ref_sites_ui': 'Sysotto Sites / UI',
    'skills.ref_infra': 'Sysotto Infra',
    'skills.ref_auth': 'Sysotto Auth',
    'skills.ref_core': 'Sysotto Core',
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

    // Contact
    'contact.title': 'Get In Touch',
    'contact.headline': 'Let’s build the future of technology together.',
    'contact.subtitle': 'Open to executive leadership roles, corporate software architecture, and strategic advisory.',
    'contact.email_label': 'Email:',
    'contact.phone_label': 'Phone / WhatsApp:',
    'contact.linkedin_label': 'LinkedIn:',
    'contact.github_label': 'GitHub:',
    'contact.location_label': 'Location:',
    'contact.location_val': 'Parnaíba / Teresina - PI, Brazil (Available Globally)',
    'contact.fast_response': 'Direct & Fast Communication',
    'contact.channel_title': 'Ready to discuss your project or opportunity?',
    'contact.channel_desc': 'Available for executive leadership positions, enterprise software architecture, and strategic consulting.',
    'contact.btn_whatsapp': 'Start WhatsApp Conversation',
    'contact.btn_email': 'Send Direct Email',
    'contact.btn_cv': 'Download Resume (PDF)',
    'contact.cv_label': 'Professional Resume:',
    'contact.cv_link_text': 'Download Consolidated Version (PDF)',
    'contact.location_note': 'Location: Parnaíba / Teresina, PI — Available for remote roles',
    'contact.copy_email': 'Copy Email',
    'contact.email_copied': 'Email copied!',

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
    const saved = localStorage.getItem(this.storageKey);
    if (saved && (saved === 'pt-BR' || saved === 'en-US')) {
      return saved;
    }
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage || '';
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
    return 'en-US';
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.setAttribute('lang', lang);
    this.applyTranslations();
    this.updateLanguageToggleUI();
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

    // 4. Update dynamic CV download links according to language
    const cvButtons = document.querySelectorAll('[data-dynamic-cv]');
    cvButtons.forEach((btn) => {
      btn.setAttribute('href', isPt ? 'assets/docs/cv-otto-freitag-pt-br.pdf' : 'assets/docs/cv-otto-freitag-en-us.pdf');
      btn.setAttribute('download', isPt ? 'CV-Otto-David-Freitag-PT-BR.pdf' : 'CV-Otto-David-Freitag-EN-US.pdf');
    });

    // 5. Dispatch event in case other components need to react
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
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
    this.setLanguage(this.currentLang);

    document.addEventListener('DOMContentLoaded', () => {
      this.applyTranslations();
      this.updateLanguageToggleUI();

      document.querySelectorAll('[data-action="toggle-lang"]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetLang = this.currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
          this.setLanguage(targetLang);
        });
      });
    });
  }
}

window.i18n = new I18nManager();
