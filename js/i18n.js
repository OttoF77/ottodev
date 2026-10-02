/**
 * Internationalization (i18n) for Otto Freitag Portfolio
 * Supports Portuguese (pt-BR) and English (en-US).
 */

const translations = {
  'pt-BR': {
    // Navigation
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
    'hero.title_start': 'Transformando visão estratégica de negócios em',
    'hero.title_highlight': 'arquitetura & software',
    'hero.title_end': 'de alto desempenho.',
    'hero.subtitle': 'Mais de 20 anos de liderança em gestão de negócios e operações de grande porte (Gerdau, CSN, Servisan), com sólida transição para a computação e desenvolvimento de software corporativo moderno em C#, .NET 10, Next.js e baixo nível.',
    'hero.cta_projects': 'Conhecer Soluções & Cases',
    'hero.cta_academic': 'Ver Projetos de Engenharia',
    'hero.cta_cv': 'Baixar Currículo (PT-BR)',
    'hero.role_location': 'Parnaíba & Teresina, PI — Brasil | Disponível para posições executivas e arquitetura de software (remoto e presencial)',
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
    'about.subtitle': 'A união entre solidez executiva de mercado e rigor técnico em engenharia de software.',
    'about.p1': 'Com mais de duas décadas de trajetória como Gerente Geral e Gerente Comercial em líderes industriais e de distribuição nacional como a <strong>Gerdau S/A</strong> (onde liderou expansão com mais de 30% a.a. de crescimento e gestão logística regional), <strong>Companhia Siderúrgica Nacional (CSN)</strong>, <strong>Servisan</strong> e <strong>Servicon</strong>, trago uma bagagem executiva diferenciada para a indústria de software.',
    'about.p2': 'Atualmente, atuo como <strong>CEO e Arquiteto de Soluções na Sysotto Software House</strong>, liderando o design e a implementação de plataformas corporativas SaaS multi-tenant completas, orientadas a microsserviços e monólitos modulares resilientes com <strong>C#, .NET 10, PostgreSQL e Next.js</strong>.',
    'about.p3': 'Graduando em <strong>Engenharia de Software (UNIFBV/Wyden)</strong>, com <strong>MBA em Gestão Empresarial pela FGV (Fundação Getúlio Vargas)</strong> e <strong>Bacharelado em Turismo pela UNIFOR</strong>, mantenho dedicação profunda aos fundamentos da Ciência da Computação, estruturas de dados em C, arquitetura distribuída e cibersegurança.',
    'about.leadership_title': 'Diferenciais Estratégicos',
    'about.diff_1_title': 'Visão de Negócio & ROI:',
    'about.diff_1_desc': 'Capacidade comprovada de traduzir requisitos complexos de mercado em arquiteturas técnicas escaláveis e lucrativas.',
    'about.diff_2_title': 'Liderança & Gestão de Pessoas:',
    'about.diff_2_desc': 'Experiência sólida na coordenação de equipes multidisciplinares, alinhando objetivos estratégicos a metas operacionais.',
    'about.diff_3_title': 'Engenharia com Foco em Qualidade:',
    'about.diff_3_desc': 'Práticas rigorosas de arquitetura limpa, testes automatizados, segurança fail-closed e isolamento multi-tenant.',

    // Versatility & Multi-Sector Solutions
    'versatility.pill': 'Soluções Multissetoriais',
    'versatility.title': 'Versatilidade & Capacidade de Entrega por Segmento',
    'versatility.subtitle': 'Arquitetura técnica e visão executiva aplicadas a diferentes portes, necessidades operacionais e mercados.',
    'versatility.ind_title': 'Grandes Indústrias & Logística (Enterprise)',
    'versatility.ind_desc': 'Controle de estoques de alto volume com regras FEFO/FIFO, rastreabilidade GS1-128, endereçamento tridimensional de armazéns, conformidade regulatória e auditoria contábil.',
    'versatility.sme_title': 'PMEs, Varejo & Serviços Alimentícios',
    'versatility.sme_desc': 'Operação comercial ágil com controle de comandas/mesas, cardápio digital dinâmico via QR Code, Kitchen Display System (KDS) e agente nativo desktop de impressão térmica sem intermediários.',
    'versatility.saas_title': 'Startups & Produtos Digitais (SaaS B2B)',
    'versatility.saas_desc': 'Arquiteturas SaaS multi-tenant resilientes, isolamento de dados com PostgreSQL RLS, construtor de sites em Next.js com geração estática de snapshots e pipelines de alta performance.',
    'versatility.critical_title': 'Sistemas Críticos & Cibersegurança',
    'versatility.critical_desc': 'Engenharia de baixo nível em C/C++, eficiência algorítmica, gerenciamento direto de memória na heap, monitoramento ativo com Wireshark e segurança de redes com padrões Cisco.',

    // Sysotto Section
    'sysotto.badge': 'Case de Engenharia & Empreendedorismo',
    'sysotto.title': 'Sysotto Software House',
    'sysotto.role_badge': 'Otto Freitag — Fundador & Arquiteto',
    'sysotto.lead': 'Fundada e arquitetada por Otto David de Santana Freitag, a Sysotto Software House materializa a união entre visão de negócios corporativos e engenharia de software de ponta, com 4 plataformas corporativas complexas projetadas para alta escala, segurança e resiliência.',
    'sysotto.functional_badge': 'Módulos Funcionais em Produção / Homologação',
    'sysotto.upcoming_badge': 'Em Fase de Homologação & Próximos Lançamentos',
    
    // Sysotto Industry
    'sysotto.ind_title': 'Sysotto ERP / Industry (IndSaaS)',
    'sysotto.ind_desc': 'Sistema integrado de gestão fabril e de estoques de alta precisão para médias e grandes operações industriais.',
    'sysotto.ind_functional': '<strong>O que já está funcional:</strong> Gestão avançada de inventário com estratégias automatizadas FEFO (First-Expired, First-Out), FIFO e LIFO; controle completo de lotes com validade, status de quarentena, timeline de rastreabilidade e geração de etiquetas com QR Code; endereçamento tridimensional de armazéns (corredores, prateleiras, níveis); inventário rotativo passo a passo com conciliação auditada de divergências; gestão comercial e faturamento.',
    'sysotto.ind_upcoming': '<strong>Próximos lançamentos:</strong> Pacote comercial Industry Lite para implantação ágil em pequenas indústrias, fechamento do portal de auto-assinatura e projeção em tempo real de produtos canônicos no catálogo digital B2B.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Sysotto FoodService
    'sysotto.food_title': 'Sysotto FoodService (RestSaaS)',
    'sysotto.food_desc': 'Plataforma especializada para restaurantes, bares e serviços alimentícios, unindo salão, cozinha e gestão de entregas.',
    'sysotto.food_functional': '<strong>O que já está funcional:</strong> Módulo TableOrdersManager para controle simultâneo de mesas e comandas; cardápio digital dinâmico multi-tenant via QR Code; Kitchen Display System (KDS) em tempo real para produção na cozinha; módulo desktop autônomo de impressão térmica de cupons e comandas (<code>Sysotto.PrintingModule.Agent</code>) em .NET 10 com comunicação direta a impressoras de rede/USB sem dependência de drivers de terceiros.',
    'sysotto.food_upcoming': '<strong>Próximos lançamentos:</strong> Integração bidirecional com gateways de entrega e roteirização inteligente de pedidos por rota de entrega.',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // Sysotto SiteBuilder
    'sysotto.site_title': 'Sysotto SiteBuilder & CMS (SitesSaaS)',
    'sysotto.site_desc': 'Motor modular para criação, publicação e hospedagem dinâmica de landing pages institucionais e catálogos.',
    'sysotto.site_functional': '<strong>O que já está funcional:</strong> Editor contextual visual com 25 presets profissionais prontos para uso em múltiplos segmentos; módulo de gestão e recorte dinâmico de mídias (<code>MediaAssets</code>) gerando variantes WebP otimizadas; Help Hub com micro-aulas integradas; arquitetura com 378 testes automatizados aprovados e métricas de desempenho Lighthouse otimizadas.',
    'sysotto.site_upcoming': '<strong>Próximos lançamentos:</strong> Provisionamento automático de domínios personalizados e certificados SSL Let\'s Encrypt sob demanda.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Sysotto Multi-Tenant Core & Security Engine',
    'sysotto.core_desc': 'Núcleo de infraestrutura compartilhada, segurança e orquestração de microsserviços.',
    'sysotto.core_functional': '<strong>O que já está funcional:</strong> Resolução dinâmica de tenant via middleware unificado (<code>MonolithTenantProvider</code>) com proteção contra tenant injection; isolamento lógico com schemas dedicados e PostgreSQL Row Level Security (RLS); autorização OAuth2 / OpenID Connect com OpenIddict; autenticação JWT fail-closed; orquestrador de migrations de banco com advisory lock concorrente; cache distribuído Redis.',
    'sysotto.core_upcoming': '<strong>Próximos lançamentos:</strong> Portal unificado SSO com dashboard centralizado de telemetria e métricas de faturamento por tenant.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Academic & Impact Projects
    'projects.title': 'Projetos em Destaque & Repositórios',
    'projects.subtitle': 'Seleção de projetos do GitHub (OttoF77) demonstrando fundamentos de computação, microsserviços, inteligência artificial e desenvolvimento full-stack.',
    'projects.tab_all': 'Todos os Projetos',
    'projects.tab_sysotto': 'Sistemas Corporativos (Cases Reais)',
    'projects.tab_academic': 'Projetos Acadêmicos & Formação',
    
    // Project items
    'proj.c_ds_title': 'Estruturas de Dados em C',
    'proj.c_ds_desc': 'Implementação de baixo nível em linguagem C de algoritmos essenciais e estruturas de dados: listas encadeadas simples e duplas, pilhas, filas, árvores binárias de busca e algoritmos de ordenação, com gestão manual de ponteiros e desalocação de memória.',
    'proj.c_ds_badge': 'Ciência da Computação & Baixo Nível',

    'proj.microservices_title': 'E-Commerce Microservices',
    'proj.microservices_desc': 'Arquitetura orientada a microsserviços distribuídos em C# / .NET, abordando catálogo de produtos, carrinho, processamento de pedidos, mensageria assíncrona, resiliência e boas práticas de desacoplamento de serviços.',
    'proj.microservices_badge': 'Arquitetura Distribuída .NET',

    'proj.literalura_title': 'Challenge LiterAlura & ONE Backend',
    'proj.literalura_desc': 'Aplicação em Java 17 e Spring Boot 3 desenvolvida para o programa Oracle Next Education. Consome a API pública Gutendex, processa dados JSON via Jackson, e gerencia catálogo literário com consultas complexas e persistência em PostgreSQL.',
    'proj.literalura_badge': 'Java 17 & Spring Boot',

    'proj.email_ai_title': 'Classificador Inteligente de E-mails',
    'proj.email_ai_desc': 'Aplicação em Python aplicando técnicas de Processamento de Linguagem Natural (NLP) e aprendizado supervisionado para classificação semântica, triagem automática e análise de sentimentos em caixas de mensagens corporativas.',
    'proj.email_ai_badge': 'Python & Inteligência Artificial',

    'proj.dio_agent_title': 'Agentes Autônomos de IA & Voz',
    'proj.dio_agent_desc': 'Projetos desenvolvidos no ecossistema DIO / Suzano explorando modelos de IA generativa, processamento de linguagem natural e recursos de conversão de fala (Speech-to-Text / Text-to-Speech) integrados a fluxos automatizados.',
    'proj.dio_agent_badge': 'IA Generativa & Agentes',

    'proj.currency_title': 'Conversor de Moedas Full-Stack',
    'proj.currency_desc': 'Solução completa desenvolvida com backend em Java consumindo APIs financeiras internacionais de câmbio em tempo real, acoplada a interface web moderna e intuitiva em JavaScript para cotação instantânea de moedas.',
    'proj.currency_badge': 'Full-Stack Java / Web',

    // Tech Stacks Section
    'skills.title': 'Tecnologias & Competências',
    'skills.subtitle': 'Classificação transparente do ecossistema tecnológico com base no grau de profundidade e aplicação prática.',
    'skills.core_title': 'Stacks Principais (Produção Sysotto)',
    'skills.core_desc': 'Tecnologias utilizadas diariamente no desenvolvimento dos sistemas em produção da Sysotto Software House, com domínio aprofundado de arquitetura, ciclo de vida e performance.',
    'skills.interests_title': 'Interesses & Pesquisa Ativa (Baixo Nível & Segurança)',
    'skills.interests_desc': 'Áreas de dedicação contínua em engenharia de sistemas, programação de baixo nível, controle rígido de memória e proteção de infraestrutura.',
    'skills.academic_title': 'Fundamentação Acadêmica & Formações Complementares',
    'skills.academic_desc': 'Tecnologias e linguagens exploradas no âmbito universitário, bootcamps de capacitação e desafios de desenvolvimento para consolidação de fundamentos.',

    // Education & Certifications
    'edu.title': 'Formação Acadêmica & Certificações',
    'edu.subtitle': 'Compromisso com o aprendizado contínuo, fundamentos da computação e especializações de classe mundial.',
    'edu.academic_title': 'Formação Acadêmica',
    'edu.degree_se': 'Bacharelado em Engenharia de Software',
    'edu.degree_se_inst': 'UNIFBV / Wyden (3º Período - Em andamento)',
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
    'contact.location_note': 'Base: Parnaíba / Teresina, PI — Atuação remota e presencial',
    'contact.copy_email': 'Copiar E-mail',
    'contact.email_copied': 'E-mail copiado!',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built_with': 'Construído com padrões modernos web, hospedado no GitHub Pages.'
  },

  'en-US': {
    // Navigation
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
    'hero.title_start': 'Bridging executive business strategy with',
    'hero.title_highlight': 'high-performance software',
    'hero.title_end': 'and resilient architecture.',
    'hero.subtitle': 'Over 20 years of executive leadership in business operations and regional distribution (Gerdau, CSN, Servisan), transitioning with technical depth into modern enterprise software engineering in C#, .NET 10, Next.js, and low-level computing.',
    'hero.cta_projects': 'Explore Solutions & Cases',
    'hero.cta_academic': 'View Engineering Projects',
    'hero.cta_cv': 'Download Resume (EN-US)',
    'hero.role_location': 'Parnaíba & Teresina, PI — Brazil | Open to executive and senior software architecture roles (remote & on-site)',
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
    'about.subtitle': 'A unique combination of boardroom executive maturity and modern software engineering discipline.',
    'about.p1': 'With over two decades of experience as General Manager and Commercial Manager at major Brazilian industrial and distribution powerhouses such as <strong>Gerdau S/A</strong> (leading regional distribution centers with >30% annual sales growth), <strong>Companhia Siderúrgica Nacional (CSN)</strong>, <strong>Servisan</strong>, and <strong>Servicon</strong>, I offer a business-first perspective rarely found in software development.',
    'about.p2': 'Currently, I serve as <strong>CEO and Solutions Architect at Sysotto Software House</strong>, where I design and build full-featured multi-tenant B2B SaaS platforms with resilient modular monoliths and microservices using <strong>C#, .NET 10, PostgreSQL, and Next.js</strong>.',
    'about.p3': 'Pursuing a <strong>B.S. in Software Engineering (UNIFBV/Wyden)</strong>, holding an <strong>MBA in Business Management from FGV</strong> and a <strong>Bachelor\'s degree in Tourism from UNIFOR</strong>, I am deeply committed to fundamental computer science principles, C data structures, distributed systems, and cybersecurity.',
    'about.leadership_title': 'Strategic Advantages',
    'about.diff_1_title': 'Business Acumen & ROI Focus:',
    'about.diff_1_desc': 'Proven track record of turning complex operational business needs into scalable, revenue-generating software architectures.',
    'about.diff_2_title': 'Executive Team Leadership:',
    'about.diff_2_desc': 'Proven ability to lead cross-functional teams, orchestrate high-stakes initiatives, and achieve concrete performance metrics.',
    'about.diff_3_title': 'Quality-Driven Engineering:',
    'about.diff_3_desc': 'Strict adherence to clean code, comprehensive automated testing, fail-closed security models, and resilient multi-tenant isolation.',

    // Versatility & Multi-Sector Solutions
    'versatility.pill': 'Multi-Sector Solutions',
    'versatility.title': 'Versatility & Multi-Sector Delivery Capabilities',
    'versatility.subtitle': 'Technical architecture and executive foresight tailored to diverse organizational scales and market demands.',
    'versatility.ind_title': 'Enterprise Industry & Supply Chain',
    'versatility.ind_desc': 'High-volume inventory governance with automated FEFO/FIFO rules, GS1-128 lot traceability, 3D warehouse address mapping, strict regulatory compliance, and audited reconciliation.',
    'versatility.sme_title': 'SMBs, Retail & Food Service',
    'versatility.sme_desc': 'Agile point-of-sale operations, concurrent table and tab management, dynamic QR menus, real-time Kitchen Display Systems, and autonomous native desktop thermal printing agents.',
    'versatility.saas_title': 'Startups & Digital B2B SaaS',
    'versatility.saas_desc': 'Resilient multi-tenant architectures, row-level security isolation in PostgreSQL, Next.js dynamic site builders with static snapshot pipelines, and audited Lighthouse performance.',
    'versatility.critical_title': 'Critical Systems & Cybersecurity',
    'versatility.critical_desc': 'Low-level systems engineering in C/C++, algorithmic efficiency, direct heap memory control, active network traffic inspection with Wireshark, and Cisco network defense standards.',

    // Sysotto Section
    'sysotto.badge': 'Featured Case: Engineering & Entrepreneurship',
    'sysotto.title': 'Sysotto Software House',
    'sysotto.role_badge': 'Otto Freitag — Founder & Lead Architect',
    'sysotto.lead': 'Founded and engineered by Otto David de Santana Freitag, Sysotto Software House unites senior corporate business acumen with cutting-edge software architecture, featuring 4 full-scale enterprise platforms built for high throughput, security, and multi-tenant resilience.',
    'sysotto.functional_badge': 'Live & Functional Production Modules',
    'sysotto.upcoming_badge': 'In Final Staging & Upcoming Launches',
    
    // Sysotto Industry
    'sysotto.ind_title': 'Sysotto ERP / Industry (IndSaaS)',
    'sysotto.ind_desc': 'High-precision manufacturing and inventory management ERP engineered for industrial plants and distribution centers.',
    'sysotto.ind_functional': '<strong>Currently Functional:</strong> Advanced inventory engine with automated FEFO (First-Expired, First-Out), FIFO, and LIFO lot allocation strategies; complete lot lifecycle management with expiration monitoring, quarantine gates, traceability timelines, and QR code labeling; 3D warehouse address mapping (aisles, shelves, racks); rotary inventory wizard with automated discrepancy reconciliation; sales & billing workflows.',
    'sysotto.ind_upcoming': '<strong>Upcoming Launches:</strong> Industry Lite turnkey package for fast-track SME onboarding, self-serve subscription checkout, and real-time canonical B2B digital catalog projection contract.',
    'sysotto.ind_stack': 'Stack: C# .NET 10, ASP.NET Core, EF Core 10, PostgreSQL 17, FluentValidation, Next.js, TypeScript, Tailwind CSS.',

    // Sysotto FoodService
    'sysotto.food_title': 'Sysotto FoodService (RestSaaS)',
    'sysotto.food_desc': 'All-in-one restaurant and bar operational suite integrating dining floor, kitchen production, and delivery logistics.',
    'sysotto.food_functional': '<strong>Currently Functional:</strong> TableOrdersManager for concurrent table and individual tab management; dynamic multi-tenant QR code digital catalog; real-time Kitchen Display System (KDS) for production lines; autonomous desktop printing module agent (<code>Sysotto.PrintingModule.Agent</code>) built in .NET 10 providing direct ESC/POS hardware control for thermal receipt and label printers without third-party spooler dependencies.',
    'sysotto.food_upcoming': '<strong>Upcoming Launches:</strong> Turnkey delivery gateway integrations and route-optimized dispatch algorithms.',
    'sysotto.food_stack': 'Stack: Next.js (App Router), React, SignalR, .NET 10 Desktop Agent, PostgreSQL, Tailwind CSS.',

    // Sysotto SiteBuilder
    'sysotto.site_title': 'Sysotto SiteBuilder & CMS (SitesSaaS)',
    'sysotto.site_desc': 'Dynamic multi-tenant website creator and high-speed content delivery engine for commercial storefronts.',
    'sysotto.site_functional': '<strong>Currently Functional:</strong> Contextual visual editor with 25 pre-built professional presets across diverse market verticals; media management pipeline (<code>MediaAssets</code>) with dynamic WebP cropping and optimization; interactive Help Hub with micro-lessons; complete suite of 378 passing automated tests and Lighthouse performance-audited architecture.',
    'sysotto.site_upcoming': '<strong>Upcoming Launches:</strong> Automated custom domain mapping with instant on-demand Let\'s Encrypt SSL provisioning.',
    'sysotto.site_stack': 'Stack: Next.js App Router, React 19, TypeScript, Sharp/WebP, PostgreSQL, Turborepo.',

    // Sysotto Platform Core
    'sysotto.core_title': 'Sysotto Multi-Tenant Core & Security Engine',
    'sysotto.core_desc': 'Shared infrastructure spine, identity federation, and distributed microservices orchestration.',
    'sysotto.core_functional': '<strong>Currently Functional:</strong> Dynamic tenant resolution middleware (<code>MonolithTenantProvider</code>) preventing tenant injection attacks; logical isolation through dedicated schemas and PostgreSQL Row Level Security (RLS); OAuth2 / OpenID Connect authorization powered by OpenIddict; fail-closed JWT authentication; advisory-lock concurrent database migration runner; distributed caching with Redis.',
    'sysotto.core_upcoming': '<strong>Upcoming Launches:</strong> Unified SSO customer portal with tenant-level telemetry and aggregated billing metrics.',
    'sysotto.core_stack': 'Stack: C# .NET 10, OpenIddict, PostgreSQL 17, Redis, Docker Compose, Linux.',

    // Academic & Impact Projects
    'projects.title': 'Featured Projects & Repositories',
    'projects.subtitle': 'Curated open-source repositories from GitHub (OttoF77) highlighting computer science foundations, microservices, AI, and full-stack software development.',
    'projects.tab_all': 'All Projects',
    'projects.tab_sysotto': 'Enterprise Systems (Real-World Cases)',
    'projects.tab_academic': 'Academic & Foundation Projects',
    
    // Project items
    'proj.c_ds_title': 'Data Structures in C',
    'proj.c_ds_desc': 'Low-level C implementations of core computer science algorithms and data structures: singly and doubly linked lists, stacks, queues, binary search trees, and sorting algorithms, focusing on manual pointer manipulation and heap memory management.',
    'proj.c_ds_badge': 'Computer Science & Low-Level',

    'proj.microservices_title': 'E-Commerce Microservices',
    'proj.microservices_desc': 'Distributed microservices architecture built in C# / .NET, covering product catalogs, shopping carts, order orchestration, asynchronous event messaging, resilience patterns, and service decoupling.',
    'proj.microservices_badge': 'Distributed .NET Architecture',

    'proj.literalura_title': 'LiterAlura & ONE Backend Challenge',
    'proj.literalura_desc': 'Java 17 and Spring Boot 3 enterprise application created under the Oracle Next Education program. Ingests data from the public Gutendex API, parses complex JSON with Jackson, and executes relational queries in PostgreSQL with Spring Data JPA.',
    'proj.literalura_badge': 'Java 17 & Spring Boot',

    'proj.email_ai_title': 'Intelligent Email Classifier',
    'proj.email_ai_desc': 'Python AI solution utilizing Natural Language Processing (NLP) and supervised classification techniques to triage corporate email streams, detect sentiment, and route support tickets automatically.',
    'proj.email_ai_badge': 'Python & Artificial Intelligence',

    'proj.dio_agent_title': 'Autonomous AI Agents & Speech',
    'proj.dio_agent_desc': 'Experimental AI agents developed within the DIO / Suzano program leveraging generative LLMs, natural language reasoning, and Speech-to-Text audio transcription workflows.',
    'proj.dio_agent_badge': 'Generative AI & Autonomous Agents',

    'proj.currency_title': 'Full-Stack Currency Converter',
    'proj.currency_desc': 'End-to-end foreign exchange rate calculator featuring a Java backend consuming real-time international exchange APIs, integrated with a clean, responsive JavaScript web interface.',
    'proj.currency_badge': 'Full-Stack Java / Web',

    // Tech Stacks Section
    'skills.title': 'Tech Stacks & Competencies',
    'skills.subtitle': 'A structured, transparent taxonomy of technologies based on production mastery and academic application.',
    'skills.core_title': 'Core Production Stacks (Sysotto)',
    'skills.core_desc': 'Technologies used daily in active production and deployment at Sysotto Software House, with deep architecture, lifecycle, and scalability mastery.',
    'skills.interests_title': 'Active Focus & Low-Level Interests (Systems & Security)',
    'skills.interests_desc': 'Continuous active research in systems engineering, low-level memory mechanics, and infrastructure cybersecurity defense.',
    'skills.academic_title': 'Academic Foundations & Complementary Technologies',
    'skills.academic_desc': 'Languages and toolsets mastered through university coursework, intensive coding bootcamps, and specialized challenges.',

    // Education & Certifications
    'edu.title': 'Academic Education & Certifications',
    'edu.subtitle': 'Lifelong commitment to computer science fundamentals, engineering rigor, and international credentials.',
    'edu.academic_title': 'Higher Education',
    'edu.degree_se': 'B.S. in Software Engineering',
    'edu.degree_se_inst': 'UNIFBV / Wyden (3rd Period - In Progress)',
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
    'contact.location_note': 'Location: Parnaíba / Teresina, PI — Available worldwide (remote & on-site)',
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
    document.documentElement.setAttribute('lang', lang.startsWith('pt') ? 'pt-BR' : 'en');
    this.applyTranslations();
    this.updateLanguageToggleUI();
  }

  t(key) {
    const dict = translations[this.currentLang] || translations['pt-BR'];
    return dict[key] || key;
  }

  applyTranslations() {
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

    // Update dynamic CV download links according to language
    const cvButtons = document.querySelectorAll('[data-dynamic-cv]');
    cvButtons.forEach((btn) => {
      const isPt = this.currentLang === 'pt-BR';
      btn.setAttribute('href', isPt ? 'assets/docs/cv-otto-freitag-pt-br.pdf' : 'assets/docs/cv-otto-freitag-en-us.pdf');
      btn.setAttribute('download', isPt ? 'CV-Otto-David-Freitag-PT-BR.pdf' : 'CV-Otto-David-Freitag-EN-US.pdf');
    });

    // Dispatch event in case other components need to react
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
  }

  updateLanguageToggleUI() {
    const buttons = document.querySelectorAll('[data-action="toggle-lang"]');
    buttons.forEach((btn) => {
      const langText = btn.querySelector('.lang-current-text');
      const nextLang = this.currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
      const label = this.currentLang === 'pt-BR' ? 'English (EN)' : 'Português (PT)';
      btn.setAttribute('title', `Mudar para ${label}`);
      btn.setAttribute('aria-label', `Alterar idioma para ${label}`);
      if (langText) {
        langText.textContent = this.currentLang === 'pt-BR' ? 'PT' : 'EN';
      }
      
      const badge = btn.querySelector('.lang-badge');
      if (badge) {
        badge.textContent = this.currentLang === 'pt-BR' ? 'BR' : 'US';
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
