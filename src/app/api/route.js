import { NextResponse } from "next/server";

export const listaDeRoboos = [
    {
        id: 3,
        classe: "Robo, Tier 1",
        nome: "Destrier",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/b/bd/Destrier.png/revision/latest/scale-to-width-down/275?cb=20180403122356",
        piloto: "Augunstin Ikeda",
        estrategia: "O Destrier é um bot de luz versátil que pode ser usado para flanquear, engajar de perto e capturar beacons. A velocidade e durabilidade decentes do Destrier fazem dele um bom flanqueador, porém seu baixo poder de fogo significa que ele é incapaz de causar muitos danos depois que a manobra de flanqueamento for concluída, a menos que esteja lutando contra outros pequenos bots de baixo nível. Contra robôs maiores e mais pesados, o Destrier praticamente não tem chance.",
        habilidades: {
            nome: "N/A",
            descricao: "N/A"
        }
    },
    {
        id: 5,
        classe: "Robo, Tier 2",
        nome: "Rhino",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/c/c2/Rhino.png/revision/latest/scale-to-width-down/275?cb=20180405044019",
        piloto: "Alex Wener",
        estrategia: "A saúde e o poder de fogo do Rhino são impressionantemente altos para um robô Tier 2. Isso permite que o comandante do Rhino o adapte para uma variedade de funções, incluindo cobertura agressiva de farol, assalto, briga ou liderança de equipes de ataque. O Rhino pode ser uma ótima unidade de assalto, mas requer uma estratégia diferente da maioria dos outros robôs com função de assalto. Ao se esconder atrás de uma cobertura até que os inimigos se aproximem, o Rhino pode efetivamente atrair o inimigo para tentar enfrentá-lo. No entanto, assim que chegarem a cerca de 300 m do Rhino, basta sair da cobertura, virar o torso na direção do inimigo enquanto descarrega e, em seguida, ativar o modo de assalto no momento em que suas armas médias ficarem sem munição. Em seguida, ataque o inimigo, disparando suas armas leves até que suas armas médias recarreguem e repita até que o inimigo seja destruído. Este estilo de jogo requer dois conjuntos de armas – as armas leves devem ter a capacidade de causar danos sustentados elevados, enquanto as armas médias devem ser especializadas em danos explosivos. Este estilo de jogo minimiza o tempo que seu Rhino passa sem seu escudo físico, prolongando seu tempo no campo de batalha.",
        habilidades: {
            nome: "Assault Mode",
            descricao: "A habilidade do Rhino é chamada de Modo de Assalto. Quando ativado, um escudo físico é implantado na frente do Rhino, desativando suas armas médias e aumentando sua velocidade de avanço em 100%. No modo Assault a rotação superior do tronco do Rhino é limitada a cerca de 5 graus e tem uma velocidade de rotação de 5 graus por segundo, enquanto a sua parte inferior também tem uma velocidade de rotação de 5 graus por segundo, mas sem quaisquer limites. Semelhante ao Écu, o escudo do Rhino oferece proteção contra armas do tipo energia e cinética, mas não bloqueia armas do tipo foguete (splash)."
        }
    },
    {
        id: 6,
        classe: "Robo, Tier 3",
        nome: "Bulgasari",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/2/25/Bulgasari.png/revision/latest/scale-to-width-down/275?cb=20181126125340",
        piloto: "Cormac D Vos",
        estrategia: "O Bulgasari possui três hardpoints médios. A combinação de seu alto poder de fogo, saúde sólida, forte escudo físico e habilidade Dash pode tornar este robô um bot formidável no campo de batalha. O Bulgasari pode utilizar suas cargas duplas de Dash para realizar emboscadas contra inimigos desavisados. Ele pode usar sua primeira carga Dash para sair da cobertura e descarregar um carregador de suas armas no inimigo (de preferência armas de explosão). Quando o inimigo percebe o que está acontecendo e se vira para enfrentar o Bulgasari, o Bulgasari pode inclinar-se para que seu escudo físico bloqueie o fogo de retorno ou simplesmente usar sua outra carga Dash para voltar para a cobertura.",
        habilidades: {
            nome: "Dash",
            descricao: "A habilidade Dash do Bulgasari dá a ele a capacidade de uma rápida explosão de movimento em qualquer direção. Ele compartilha essa habilidade com os outros dois robôs coreanos, o Kumiho e o Haechi. Outros robôs que possuem essa habilidade são o Nether (porém é chamado de Quake, a habilidade também vem com uma arma embutida que inflige o efeito EMP), Bolt e Strider (observe que esses 3 robôs não têm relação com o Bulgasari). O Bulgasari pode armazenar duas cargas Dash. É o bot mais lento e o robô mais fortemente blindado do grupo de robôs coreanos."
        }
    },
    {
        id: 7,
        classe: "Robo, Tier 4",
        nome: "Typhon",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/a/ae/Typhon.png/revision/latest?cb=20201204210712",
        piloto: "Basil Lapatte",
        estrategia: "O Typhon é um bot extremamente versátil, capaz de cumprir múltiplas funções. É melhor usado como um bot de ataque e fuga / médio alcance para apoiar Titãs e bots engajados contra inimigos. Como uma unidade de ataque e fuga, o Typhon é idealmente utilizado com os módulos Phase Shift e Unidades Overdrive ou Reatores Termonucleares, Phase Shift para se tornar invencível se ainda estiver em campo aberto no momento em que a Supressão do inimigo passar, e os dois últimos para maximizar a produção de dano ao bater e correr. Recomenda-se montar armas de descarregamento rápido como o Cryo para que o Typhon possa sair correndo, descarregar e voltar. Seu escudo Aegis simplificado protege seu casco contra danos, mas devido à sua fraca durabilidade, o comandante precisa usar o Blackout 2.0 para suprimir o inimigo alvo o mais rápido possível. Como o Blackout 2.0 do Typhon só pode infligir seus debuffs em um inimigo por uso de habilidade, é aconselhável mirar em um inimigo de cada vez.",
        habilidades: {
            nome: "Blackout",
            descricao: "A habilidade do Typhon é chamada Blackout 2.0. Após a ativação, o Typhon dispara três canhões de energia, cada um dos quais prejudica o alvo de alguma forma: O primeiro inflige um efeito de Pulso Eletromagnético (EMP), que desativa a habilidade do inimigo, bem como seu Módulo Ativo. A segunda inflige Lockdown, que impede o inimigo de se mover. O terceiro inflige Supressão, que reduz a arma/dano embutido do inimigo em 50%."
        }
    },
    {
        id: 8,
        classe: "Robo, Tier 4",
        nome: "Jaeger",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/a/ad/Jaeger.png/revision/latest?cb=20201205221757",
        piloto: "Otto",
        estrategia: "Jaeger é mais adequado para a função de atirador devido à sua lenta velocidade de movimento quando protegido e durabilidade média. Recomenda-se ser um robô de suporte de longo alcance. Dado dois slots para armas pesadas e uma habilidade de atirador, é uma boa ideia usar armas de atirador como Tempest, Flux, Trebuchets, Hwangje ou Gauss, ou outras armas de médio/longo alcance, como Dragoon e Nucleon. O uso do Avenger não é recomendado devido à sua baixa precisão em distâncias maiores. Como este robô pode escalar estruturas, é melhor usar essa habilidade para ganhar terreno mais alto para ângulos de tiro. Jaeger não deve ser usado como lutador devido à sua baixa velocidade de movimento enquanto usa sua habilidade, grande hitbox e saúde média.",
        habilidades: {
            nome: "Sniper Mode",
            descricao: "A habilidade do Jaeger é chamada de Modo Sniper. Após a ativação, o Jaeger alterna entre seus dois modos: Modo Scout e Modo Ataque. Quando no modo Scout, Jaeger não possui nenhum recurso especial. Ao ativar o Modo de Ataque, o Jaeger implanta uma barreira da classe Aegis com 45.700 de durabilidade no nível base e ativa seu canhão cinético integrado, mas diminui a velocidade. A barreira Aegis do Jaeger só está ativa no Modo de Ataque, mas se regenera passivamente em ambos os modos. O Jaeger sempre começa a partida no modo Scout."
        }
    },
    {
        id: 9,
        classe: "Titan, Tier 2",
        nome: "Ao Ming",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/9/99/Ao_MingInfobox.png/revision/latest/scale-to-width-down/275?cb=20191207183323",
        piloto: "River Chase",
        estrategia: "Posicionar-se corretamente é crucial para evitar ser atirado do céu com extrema rapidez. Os arranha-céus de Shenzhen, por exemplo, podem ser usados ​​como cobertura eficaz no ar. Edifícios mais curtos, como o Coliseu de Roma, também podem ser uma boa cobertura, mas você precisará ajustar a altitude de vôo (o que pode ser feito de várias maneiras, como decolar com um teto acima de você ou enquanto estiver caindo) para poder utilizá-los. Se não houver estruturas grandes o suficiente para fornecer cobertura aérea nas proximidades, é recomendado cair no chão para se proteger assim que for alvo de um inimigo com alto poder de fogo. Isso pode aumentar muito sua capacidade de sobrevivência, já que Ao Ming é suscetível de ser morto instantaneamente (ou quase instantaneamente) por inimigos empunhando armas como Vendicatore Fulgur, Tonans, Discordia ou Tumultus. Além disso, como o Ao Ming tem ambos os pontos rígidos do modo solo posicionados na parte superior de seu chassi, ele pode efetivamente cobrir (atirar sobre estruturas) enquanto sofre pouco ou nenhum dano em troca. Certas estruturas ou um Ao Ming voando em uma altitude mais baixa do que deveria por meio do ajuste de altitude podem permitir cobertura com todas as quatro armas no ar. Esta estratégia pode ser especialmente devastadora contra os Newtons, já que o Dragon Flight é considerado uma habilidade de movimento que faz com que um Ao Ming voador resista aos efeitos do Choke enquanto permanecer em movimento.",
        habilidades: {
            nome: "Dragon Flight",
            descricao: "A habilidade principal do Ao Ming é chamada Dragon Flight, que permite decolar e voar por um período ilimitado de tempo, ao mesmo tempo que permite acesso às suas armas beta e concede um aumento de velocidade de 30% (56 km/h na velocidade máxima). Enquanto está no chão, Ao Ming ganha um bônus de 40-100 pontos de defesa extras além de sua base 50-150, para um total combinado de 90-250. Durante o vôo, o Ao Ming libera suas duas armas beta montadas nas costas ao custo de perder os pontos de defesa bônus, tornando-o mais vulnerável. Após o pouso, essa habilidade tem um curto tempo de espera de 5 segundos. A habilidade secundária do Ao Ming é chamada de Auto-Reparo, que permite curar uma quantidade fixa de durabilidade ao longo de 6 segundos com base no nível do motor (semelhante aos módulos Unidade de Reparo e Unidade de Reparo Avançado). Depois que a duração expira, o Self Repair entra em um tempo de espera de 18 segundos."
        }
    },
    {
        id: 10,
        classe: "Titan, Tier 4",
        nome: "Rook",
        imagem: "https://static.wikia.nocookie.net/walking-war-robots/images/5/51/RookInfobox.png/revision/latest?cb=20231210002628",
        piloto: "3V3R3TT",
        estrategia: "A Torre é um titã que possui uma estrutura grande e volumosa e vários escudos físicos ao redor de seu torso. Ele foi projetado especificamente para resiliência e mobilidade, que também inclui uma configuração típica de hardpoint e sua capacidade de se teletransportar em um novo conjunto de escudos físicos quando necessário. Além disso, este titã é otimizado para estilos de jogo agressivos e tem uma distância ideal de combate de menos de 500 metros na maioria das circunstâncias. A Torre tem vários pontos fortes; uma delas é sua resiliência inerente a danos, suas capacidades de controle (repulsão e supressão) e mobilidade (através do uso de Roque). Possui oito escudos físicos diferentes que oferecem proteção total contra ataques não-AOE, além de sua alta durabilidade bruta. Além disso, esses escudos físicos podem ser destruídos para reparar a durabilidade e para se teletransportar em um novo conjunto para cada novo combate, o que dá à Torre uma capacidade de sobrevivência relativamente boa na maioria dos cenários. Quando necessário, a Torre também pode ativar o Roque para percorrer uma distância curta a moderada em um curto período de tempo, para mergulhar em um alvo ou para garantir outro objetivo (onde a velocidade é inflexível). O benefício adicional da Supressão e Knockback fornecido por Castling, também dá à Torre uma boa sinergia na coordenação com companheiros de equipe, bem como uma vantagem sobre seus alvos ao iniciar um combate.",
        habilidades: {
            nome: "Castling",
            descricao: "O Titã sobe a uma altura fixa e paira. Se houver um inimigo alvejado pelo Titã, ele dispara diretamente na direção da posição do inimigo se a habilidade for ativada novamente. Se não houver nenhum inimigo ao alcance, ativar a habilidade novamente fará o Titã disparar na direção para a qual está voltado. Se a habilidade não for reativada, o Titã cairá. Quando o Titã atinge um inimigo ou cai no chão, ele ativa um campo de poder ao seu redor, que afasta os robôs do Titã, causa dano e aplica Supressão aos inimigos em sua área de efeito.",
            nome2: "Shield Replacement",
            descricao2: "Após um pouco de preparação, o Titã explode todos os seus escudos físicos integrados que ainda não foram destruídos. Para cada escudo destruído, o Titã repara uma parte de sua durabilidade. Após destruir os escudos, o Titã se teletransporta em novos escudos com durabilidade total."
        }
    }
];

export async function GET() {
  return NextResponse.json(listaDeRoboos);
}
