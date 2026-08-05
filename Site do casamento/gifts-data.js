const GIFT_CATEGORIES = [
    {
        id: 'eletrodomesticos',
        name: 'Eletrodomésticos e Portáteis',
        items: [
            { id: 'air-fryer', name: 'Air Fryer', image: 'https://images.unsplash.com/photo-1626082927389-94a39c7a0811?w=480&h=360&fit=crop&q=80' },
            { id: 'panela-pressao-eletrica', name: 'Panela de pressão elétrica', image: 'https://images.unsplash.com/photo-1584999730741-783870a41234?w=480&h=360&fit=crop&q=80' },
            { id: 'liquidificador-mixer', name: 'Liquidificador potente ou Mixer 3 em 1', image: 'https://images.unsplash.com/photo-1570224895907-049ae71aedb4?w=480&h=360&fit=crop&q=80' },
            { id: 'processador-alimentos', name: 'Processador de alimentos', image: 'https://images.unsplash.com/photo-1570224895907-049ae71aedb4?w=480&h=360&fit=crop&q=80' },
            { id: 'cafeteira', name: 'Cafeteira (cápsulas ou programável)', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=480&h=360&fit=crop&q=80' },
            { id: 'chaleira-eletrica', name: 'Chaleira elétrica', image: 'https://images.unsplash.com/photo-1597318181409-c763004019be?w=480&h=360&fit=crop&q=80' },
            { id: 'torradeira', name: 'Torradeira elétrica', image: 'https://images.unsplash.com/photo-1585515655856-4baf9204608e?w=480&h=360&fit=crop&q=80' },
            { id: 'grill-omeleteira', name: 'Grill ou omeleteira elétrica', image: 'https://images.unsplash.com/photo-1608039829572-7854f8c4e565?w=480&h=360&fit=crop&q=80' },
            { id: 'crepeira-waffle', name: 'Crepeira ou máquina de waffle', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=480&h=360&fit=crop&q=80' },
            { id: 'aspirador-robo', name: 'Aspirador de pó robô', image: 'https://images.unsplash.com/photo-1558317241-9cb0c8a4272c?w=480&h=360&fit=crop&q=80' },
            { id: 'aspirador-vertical', name: 'Aspirador vertical sem fio', image: 'https://images.unsplash.com/photo-1527515637462-cff94ee9841e?w=480&h=360&fit=crop&q=80' },
            { id: 'passadeira-vapor', name: 'Passadeira a vapor ou Ferro de passar a vapor', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7117c?w=480&h=360&fit=crop&q=80' },
            { id: 'microondas', name: 'Micro-ondas', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=480&h=360&fit=crop&q=80' },
            { id: 'forno-bancada', name: 'Forno elétrico de bancada ou Air Fryer Oven', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=480&h=360&fit=crop&q=80' },
            { id: 'caixa-som-inteligente', name: 'Caixa de som inteligente (estilo Alexa / Echo Show)', image: 'https://images.unsplash.com/photo-1543512214-318801e1f585?w=480&h=360&fit=crop&q=80' },
            { id: 'batedeira-planetaria', name: 'Batedeira planetária', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&h=360&fit=crop&q=80' },
            { id: 'purificador-agua', name: 'Purificador de água refrigerado', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=480&h=360&fit=crop&q=80' }
        ]
    },
    {
        id: 'cozinha',
        name: 'Cozinha e Servir',
        items: [
            { id: 'jogo-panelas', name: 'Jogo de panelas antiaderentes ou inox', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&h=360&fit=crop&q=80' },
            { id: 'panelas-ceramica', name: 'Jogo de panelas de cerâmica ou ferro fundido', image: 'https://images.unsplash.com/photo-1584999730741-783870a41234?w=480&h=360&fit=crop&q=80' },
            { id: 'panela-fondue', name: 'Panela de fondue', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=480&h=360&fit=crop&q=80' },
            { id: 'utensilios-silicone', name: 'Kit de utensílios de silicone para cozinha', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=480&h=360&fit=crop&q=80' },
            { id: 'potes-hermeticos', name: 'Kit de potes herméticos de vidro (conjunto grande)', image: 'https://images.unsplash.com/photo-1615485290384-441d4c089949?w=480&h=360&fit=crop&q=80' },
            { id: 'facas-churrasco', name: 'Jogo de facas para churrasco e cozinha', image: 'https://images.unsplash.com/photo-1593618998160-e34014bb7889?w=480&h=360&fit=crop&q=80' },
            { id: 'tabua-corte', name: 'Tábua de corte em madeira nobre ou bambu', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=480&h=360&fit=crop&q=80' },
            { id: 'xicaras-cafe', name: 'Conjunto de xícaras de café com pires', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca73?w=480&h=360&fit=crop&q=80' },
            { id: 'xicaras-cha', name: 'Conjunto de xícaras de chá', image: 'https://images.unsplash.com/photo-1563822249360-3ea785137327?w=480&h=360&fit=crop&q=80' },
            { id: 'pratos-dia-dia', name: 'Jogo de pratos rasos e fundos para o dia a dia', image: 'https://images.unsplash.com/photo-1603199506016-b9e59413327d?w=480&h=360&fit=crop&q=80' },
            { id: 'aparelho-jantar', name: 'Aparelho de jantar completo de porcelana ou cerâmica', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=480&h=360&fit=crop&q=80' },
            { id: 'tacas', name: 'Jogo de taças para água, vinho e espumante', image: 'https://images.unsplash.com/photo-1510812431400-57451511201b?w=480&h=360&fit=crop&q=80' },
            { id: 'copos-dia-dia', name: 'Conjunto de copos para o dia a dia', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17bf34?w=480&h=360&fit=crop&q=80' },
            { id: 'copos-whisky', name: 'Conjunto de copos baixos para whisky/drinks', image: 'https://images.unsplash.com/photo-1569529463443-d829367f2b86?w=480&h=360&fit=crop&q=80' },
            { id: 'kit-bar', name: 'Kit para bar/coquetelaria (coqueteleira, dosador, macerador)', image: 'https://images.unsplash.com/photo-1470337450cd753ad6c665dd4?w=480&h=360&fit=crop&q=80' },
            { id: 'jarra-vidro', name: 'Jarra de vidro para suco/água', image: 'https://images.unsplash.com/photo-1625772453520-9a162d5b1a04?w=480&h=360&fit=crop&q=80' },
            { id: 'boleira', name: 'Suporte para bolo / Boleira de vidro com tampa', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=480&h=360&fit=crop&q=80' },
            { id: 'travessas', name: 'Conjunto de travessas refratárias de cerâmica/vidro', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=480&h=360&fit=crop&q=80' },
            { id: 'talheres-dia-dia', name: 'Jogo de talheres completo para uso diário', image: 'https://images.unsplash.com/photo-1603199506016-b9e59413327d?w=480&h=360&fit=crop&q=80' },
            { id: 'faqueiro-elegante', name: 'Faqueiro elegante para ocasiões especiais', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=480&h=360&fit=crop&q=80' },
            { id: 'galheteiro', name: 'Galheteiro (porta azeite, vinagre, sal e pimenta)', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=480&h=360&fit=crop&q=80' },
            { id: 'porta-temperos', name: 'Porta-temperos giratório ou magnético', image: 'https://images.unsplash.com/photo-1506368249637-73a05d6f6488?w=480&h=360&fit=crop&q=80' }
        ]
    },
    {
        id: 'cama-mesa-banho',
        name: 'Cama, Mesa e Banho',
        items: [
            { id: 'lencois-algodao', name: 'Jogo de lençóis 100% algodão ou percal (2 jogos)', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=480&h=360&fit=crop&q=80' },
            { id: 'lencois-cetim', name: 'Jogo de lençóis de cetim ou toque de seda', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=480&h=360&fit=crop&q=80' },
            { id: 'edredom', name: 'Edredom Queen/King', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=480&h=360&fit=crop&q=80' },
            { id: 'cobre-leito', name: 'Kit de cobre-leito / Colcha decorativa', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=480&h=360&fit=crop&q=80' },
            { id: 'travesseiros', name: 'Travesseiros ergonômicos ou de pluma', image: 'https://images.unsplash.com/photo-1584100936595-c0654b45a962?w=480&h=360&fit=crop&q=80' },
            { id: 'protetor-colchao', name: 'Protetor impermeável para colchão e travesseiros', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=480&h=360&fit=crop&q=80' },
            { id: 'toalhas-banho', name: 'Jogo de toalhas de banho macias (2 a 3 jogos)', image: 'https://images.unsplash.com/photo-1616628182502-92729037d4d4?w=480&h=360&fit=crop&q=80' },
            { id: 'toalhas-rosto', name: 'Toalhas de rosto e lavabo extras', image: 'https://images.unsplash.com/photo-1616628182502-92729037d4d4?w=480&h=360&fit=crop&q=80' },
            { id: 'tapete-banheiro', name: 'Jogo de piso/tapete para banheiro', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=480&h=360&fit=crop&q=80' },
            { id: 'roupoes', name: 'Roupões de banho para o casal', image: 'https://images.unsplash.com/photo-1616628182502-92729037d4d4?w=480&h=360&fit=crop&q=80' },
            { id: 'trilhos-mesa', name: 'Jogo de amarração / Trilhos de mesa e americanos', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=480&h=360&fit=crop&q=80' },
            { id: 'toalha-mesa', name: 'Toalha de mesa para jantar', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=480&h=360&fit=crop&q=80' }
        ]
    },
    {
        id: 'decoracao',
        name: 'Decoração, Casa e Automação',
        items: [
            { id: 'luminaria-abajur', name: 'Luminária de mesa / Abajur moderno', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=480&h=360&fit=crop&q=80' },
            { id: 'manta-sofa', name: 'Manta decorativa para sofá / Peseira', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=480&h=360&fit=crop&q=80' },
            { id: 'almofadas', name: 'Almofadas decorativas para sala', image: 'https://images.unsplash.com/photo-1584100936595-c0654b45a962?w=480&h=360&fit=crop&q=80' },
            { id: 'espelho', name: 'Espelho aduela ou espelho de parede moderno', image: 'https://images.unsplash.com/photo-1618220179428-22790b461135?w=480&h=360&fit=crop&q=80' },
            { id: 'vasos-decorativos', name: 'Jogo de vasos decorativos', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=480&h=360&fit=crop&q=80' },
            { id: 'difusor-ar', name: 'Difusor de aromas / Umidificador de ar ultrassônico', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=480&h=360&fit=crop&q=80' },
            { id: 'quadros', name: 'Kit de quadros ou pôsteres decorativos', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=480&h=360&fit=crop&q=80' },
            { id: 'lampadas-inteligentes', name: 'Lâmpadas inteligentes Wi-Fi / Fitas LED inteligentes', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=360&fit=crop&q=80' },
            { id: 'fechadura-digital', name: 'Fechadura eletrônica digital para porta de entrada', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=480&h=360&fit=crop&q=80' }
        ]
    },
    {
        id: 'organizacao',
        name: 'Organização e Limpeza',
        items: [
            { id: 'mop', name: 'Mop giratório ou Mop spray', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=480&h=360&fit=crop&q=80' },
            { id: 'cesto-roupa', name: 'Cesto de roupa suja duplo (para separar roupas)', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7117c?w=480&h=360&fit=crop&q=80' },
            { id: 'cabides', name: 'Kit de cabides padronizados (veludo ou madeira)', image: 'https://images.unsplash.com/photo-1555041469-a586c628ea9c?w=480&h=360&fit=crop&q=80' },
            { id: 'organizadores-gaveta', name: 'Organizadores de gaveta e closet', image: 'https://images.unsplash.com/photo-1555041469-a586c628ea9c?w=480&h=360&fit=crop&q=80' },
            { id: 'caixas-organizadoras', name: 'Kit de caixas organizadoras para despensa e closet', image: 'https://images.unsplash.com/photo-1555041469-a586c628ea9c?w=480&h=360&fit=crop&q=80' },
            { id: 'escada-dobravel', name: 'Escada dobrável leve para uso doméstico', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=480&h=360&fit=crop&q=80' },
            { id: 'kit-lavanderia', name: 'Kit para lavanderia (varal retrátil, pregadores de qualidade, bacias)', image: 'https://images.unsplash.com/photo-1626806787461-f20e5d7ca93a?w=480&h=360&fit=crop&q=80' }
        ]
    }
];
