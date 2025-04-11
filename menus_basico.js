const menu = (prefix, NomeDoBot, sender, isPremium) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `
╭── ｢ *BEM VINDO @${sender.split("@")[0]}* 」 ⪨
│  Bot: ${NomeDoBot}
│  Version: Premium
│  Premium: ${isPremium ? 'Sim' : 'não'}
│  ${prefix}Info (nome do comando, INFORMAÇÕES) 
╰────────────────── ⪨  

╭── ｢ *MENU PRINCIPAL* 」 ⪨
│ ⊳ ${prefix}Menudono
│ ⊳ ${prefix}Menuadm
│ ⊳ ${prefix}Menupremium
│ ⊳ ${prefix}Efeitosimg
│ ⊳ ${prefix}Logos
│ ⊳ ${prefix}Brincadeiras
╰────────────────── ⪨  

╭── ｢ *MEMBROS* 」 ⪨
│ ⊳ ${prefix}Comentario (Erro/sugestão/avalie) 
│ ⊳ ${prefix}Comandos-termux (Yosuke.install)
│ ⊳ ${prefix}Dono (Info/dono)
│ ⊳ ${prefix}Perfil (Meu/perfil)
╰──────────── ⪨  

╭── ｢ *INFORMAÇÕES* 」 ⪨
│ ⊳ ${prefix}Ping (Velocidade/Up) 
│ ⊳ ${prefix}Atividade (do Grupo)
│ ⊳ ${prefix}Rankativo
│ ⊳ ${prefix}vermsg (@Marcar)
│ ⊳ ${prefix}Info coins
│ ⊳ ${prefix}Autobaixar (Baixar/vid/auto)
│ ⊳ ${prefix}Moeda
╰──────────────── ⪨  

╭── ｢ *DOWNLOADS* 」 ⪨
│ ⊳ ${prefix}Play (Nome)
│ ⊳ ${prefix}Playdoc (Nome)
│ ⊳ ${prefix}Play_video (Nome)
│ ⊳ ${prefix}Play_audio (Nome)
│ ⊳ ${prefix}Transcrever (audio)
│ ⊳ ${prefix}Tiktok (link)
│ ⊳ ${prefix}Instagram (Link) 
│ ⊳ ${prefix}ifunny (Link)
│ ⊳ ${prefix}Celular (Nome)
│ ⊳ ${prefix}Twitter (Link)
│ ⊳ ${prefix}Playstore (Nome) 
│ ⊳ ${prefix}Chatgpt (Pergunta)
│ ⊳ ${prefix}Mediafire (Link)
│ ⊳ ${prefix}Grupos (Nome)
│ ⊳ ${prefix}Amazon (Nome) 
│ ⊳ ${prefix}Wikipedia (Nome) 
│ ⊳ ${prefix}Pinterest (Nome) 
│ ⊳ ${prefix}Ytsearch (Nome)
│ ⊳ ${prefix}Gerarlink (img/vid)
╰──────────────── ⪨  

╭── ｢ *FIGURINHAS* 」 ⪨
│ ⊳ ${prefix}Attp (texto)
│ ⊳ ${prefix}Tpp (texto
│ ⊳ ${prefix}Rename (texto/texto)
│ ⊳ ${prefix}S (marcar-foto)
│ ⊳ ${prefix}F (marcar-foto)
│ ⊳ ${prefix}Figurinhas (qtn) 
│ ⊳ ${prefix}Toimg (marcar-figu)
╰──────────────── ⪨  

╭── ｢ *COMANDOS INTERATIVO* 」 ⪨
│ ⊳ ${prefix}Falar (Idioma + Texto)
│ ⊳ ${prefix}Tagme 
│ ⊳ ${prefix}Emoji (😏/Whatsapp)
│ ⊳ ${prefix}Emojimix (Emoji+Emoji)
│ ⊳ ${prefix}Tabela (Letras/Simbolos) 
│ ⊳ ${prefix}Mensagem_biblica
│ ⊳ ${prefix}audio_biblico (audio)
│ ⊳ ${prefix}Simi (Fale com ela)  
│ ⊳ ${prefix}Tradutor (pt/dog)
│ ⊳ ${prefix}Signo (Signo)
│ ⊳ ${prefix}Revelar_visu
│ ⊳ ${prefix}Fazernome (Oq deseja)
╰──────────────── ⪨  
`;
};

exports.menu = menu;

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `
╭──｢ ADMINISTRAÇÃO 」 ⪨	
│ ⊳ ${prefix}ban 
│ ⊳ ${prefix}promover 
│ ⊳ ${prefix}rebaixar 
│ ⊳ ${prefix}listanegra 
│ ⊳ ${prefix}tirardalista 
│ ⊳ ${prefix}so_adm 
│ ⊳ ${prefix}deletar-link 
│ ⊳ ${prefix}autobaixar 
│ ⊳ ${prefix}antilink 
│ ⊳ ${prefix}antilinkgp
│ ⊳ ${prefix}antidoc 
│ ⊳ ${prefix}antictt 
│ ⊳ ${prefix}antifake 
│ ⊳ ${prefix}modobrincadeira 
│ ⊳ ${prefix}antinotas
│ ⊳ ${prefix}limitecaracteres 
│ ⊳ ${prefix}x9cargo
│ ⊳ ${prefix}autofigu
│ ⊳ ${prefix}Zerar_ativo (limpar rankativo!)
│ ⊳ ${prefix}hidetag 
│ ⊳ ${prefix}marcar 
│ ⊳ ${prefix}grupo a/10s (m, h, d)
│ ⊳ ${prefix}grupo f/10s (m, h, d)
│ ⊳ ${prefix}Sorteio Bola/10s (m, h, d)
│ ⊳ ${prefix}status
│ ⊳ ${prefix}limpar 
│ ⊳ ${prefix}linkgp
│ ⊳ ${prefix}grupoinfo
│ ⊳ ${prefix}descgp 
│ ⊳ ${prefix}nomegp 
│ ⊳ ${prefix}criartabela
│ ⊳ ${prefix}tabelagp 
╰──────────────── ⪨  
`;
};

exports.adms = adms;

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​	
╭───────────────────┐
│🥷Menu de dono🥷
├────────────
│ ⊳ ${prefix}ativacoes_dono
│ ⊳ ${prefix}Bangp
│ ⊳ ${prefix}Unbangp
│ ⊳ ${prefix}Fotomenu (MARCAR-IMG) 
│ ⊳ ${prefix}Blockcmd  (cmd)
│ ⊳ ${prefix}Unblockcmd (cmd)
│ ⊳ ${prefix}Legenda_estrangeiro (msg)
│ ⊳ ${prefix}Legendabv (oq qr)
│ ⊳ ${prefix}Legendasaiu (oq qr)
│ ⊳ ${prefix}Legendasaiu2 (oq qr)
│ ⊳ ${prefix}Legendabv2 (oq qr)
│ ⊳ ${prefix}Fundobemvindo (marcar-img)
│ ⊳ ${prefix}Fundosaiu (marcar-img)
│ ⊳ ${prefix}Serpremium
│ ⊳ ${prefix}Listagp
│ ⊳ ${prefix}Antipalavrão 1 / 0
│ ⊳ ${prefix}Antiligar 1 / 0
│ ⊳ ${prefix}Addpalavra (palavrão)
│ ⊳ ${prefix}Delpalavra (palavrão)
│ ⊳ ${prefix}Ativo
│ ⊳ ${prefix}Ausente (fale-oq-faz)
│ ⊳ ${prefix}Delpremium @(marca)
│ ⊳ ${prefix}Addpremium @(marca)
│ ⊳ ${prefix}Clonar [@] (rouba ft de prf)
│ ⊳ ${prefix}Fotobot (img, = foto do BT)
│ ⊳ ${prefix}Descriçãogp (digite-algo)
│ ⊳ ${prefix}Block [@] (bloq de usar cmds) 
│ ⊳ ${prefix}Unblock [@] (desbloquear) 
│ ⊳ ${prefix}Setprefix  (prefixo-novo)
│ ⊳ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
╰───────────────────┘
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭───────────────────┐
│ Logos De 1 Texto
├────────────
│ ⊳ ${prefix}logos1 (txt) 
╰───────────────────┘

╭───────────────────┐
│ Logos De 2 Texto
├────────────
│ ⊳ ${prefix}Comporn (txt/txt) 
│ ⊳ ${prefix}Glitch (txt/txt)
│ ⊳ ${prefix}Glitch3 (txt/txt)
│ ⊳ ${prefix}Grafity (txt-txt)
│ ⊳ ${prefix}Space (txt/txt)
│ ⊳ ${prefix}Marvel (txt/txt)
│ ⊳ ${prefix}Stone (txt/txt)
│ ⊳ ${prefix}Steel (txt/txt)
╰───────────────────┘
`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`
╭───────────────┐
├ Alteradores de audio/video 
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ Alterar Videos
├────────────
│ ⊳ ${prefix}Videolento (marca)
│ ⊳ ${prefix}Videorapido (marca)
│ ⊳ ${prefix}Videocontrario (marca)
╰──────────┐
╭──────────┴─┐
│ Alterar Audios
├────────────
│ ⊳ ${prefix}Audiolento (marca)
│ ⊳ ${prefix}Audiorapido (marca)
│ ⊳ ${prefix}Grave (marca)
│ ⊳ ${prefix}Grave2 (marca)
│ ⊳ ${prefix}Esquilo (marca)
│ ⊳ ${prefix}Estourar (marca)
│ ⊳ ${prefix}Bass (marca)
│ ⊳ ${prefix}Bass2 (marca)
│ ⊳ ${prefix}Vozmenino (marca)
│ ⊳ ${prefix}Audioreverse (marca)
╰──────────┘
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭───────────────┐
├─ Menu Premium
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ ⊳ ADICIONE SEUS COMANDOS PREMIUM / VEJA O ${prefix}infopremium
╰──────────┘
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭──｢ BRINCADEIRAS 」 ⪨
│ ⊳ ${prefix}gay 
│ ⊳ ${prefix}feio 
│ ⊳ ${prefix}corno 
│ ⊳ ${prefix}Vesgo 
│ ⊳ ${prefix}Bebado 
│ ⊳ ${prefix}Gostoso 
│ ⊳ ${prefix}Gostosa 
│ ⊳ ${prefix}puta
│ ⊳ ${prefix}Beijo 
│ ⊳ ${prefix}Matar 
│ ⊳ ${prefix}Tapa 
│ ⊳ ${prefix}Chute 
│ ⊳ ${prefix}golpista    
│ ⊳ ${prefix}Nazista 
│ ⊳ ${prefix}Chance (fale algo) 
│ ⊳ ${prefix}Casal
│ ⊳ ${prefix}Shipo 
│ ⊳ ${prefix}Rankgay 
│ ⊳ ${prefix}Rankgado 
│ ⊳ ${prefix}Rankcorno 
│ ⊳ ${prefix}Rankgostoso
│ ⊳ ${prefix}Rankgostosa 
│ ⊳ ${prefix}Ranknazista 
│ ⊳ ${prefix}Rankotakus 
│ ⊳ ${prefix}Rankpau 
│ ⊳ ${prefix}Iniciar_forca
│ ⊳ ${prefix}Ppt (PEDRA/PAPEL/TESOURA) 
│ ⊳ ${prefix}Jogodavelha 
│ ⊳ ${prefix}Cassino
╰────────────────── ⪨  
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​
╭───────────────
├─ Menu De Efeitos
├───────────────
│ Usuário: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ ⊳ ${prefix}Legenda (marcar)-(img)
│ ⊳ ${prefix}Procurado (marcar)-(img)
│ ⊳ ${prefix}Hitler (marcar)-(img)
│ ⊳ ${prefix}Preso (marcar)-(img)
│ ⊳ ${prefix}Lixo (marcar)-(img)
│ ⊳ ${prefix}Deletem (marcar)-(img)
│ ⊳ ${prefix}Morto (marcar)-(img) 
│ ⊳ ${prefix}Lgbt (marcar)-(img) 
│
╰──────────
`;
};

exports.efeitos = efeitos;
