import client02 from '../assets/testimonials/client02.webp'
import client03 from '../assets/testimonials/client03.webp'
import client04 from '../assets/testimonials/client04.webp'

import team01 from '../assets/team/team01.webp'
import team02 from '../assets/team/team02.webp'
import team03 from '../assets/team/team03.webp'


export const heroIntro = [
    {
        class: 'fa-solid fa-users',
        tile: "Temos o Melhor time de Advogados",
        description: 'Sendo os nossos princípios jurídicos o nosso principal valor, procuramos sempre diversificar o leque de casos'
    },
    {
        class: 'fa-solid fa-scale-balanced',
        tile: "Impostos , Negócios e Lei",
        description: 'Diversos profissionais em varias áreas'
    },
    {
        class: 'fa-solid fa-book',
        tile: "Revemos Casos a Abertos",
        description: 'Revemos casos varias vezes para termos a melhor estrategia'
    }
]

export const checks = [
    {
        class:'fa-solid fa-check',
        name:'Advogados Especializados'
    },
    {
        class:'fa-solid fa-check',
        name:'Assesoria Juridica Inovadora'
    },
    {
        class:'fa-solid fa-check',
        name:'Grande Parceria entre Escritorios'
    },
    {
        class:'fa-solid fa-check',
        name:'Grande Desconto em casos'
    },
    {
        class:'fa-solid fa-check',
        name:'Revisao de Casos imparcial'
    },
    {
        class:'fa-solid fa-check',
        name:'Estrategia bem Elaborada'
    },
]

export const service = [
    {
        class:'fa-solid fa-scale-balanced',
        tile:'Ética e Integridade',
        description:'Atuamos com o mais alto padrão ético em todas as nossas ações, garantindo honestidade e transparência em todas as relações'
    },
    {
        class:'fa-solid fa-handshake-angle',
        tile:'Compromisso com o Cliente',
        description:'Colocamos os interesses dos nossos clientes em primeiro lugar, trabalhando arduamente para alcançar os melhores resultados possíveis.'
    },
    {
        class:'fa-solid fa-user-tie',
        tile:'Excelência Profissional',
        description:'Buscamos continuamente a excelência em nossos serviços, através de capacitação constante e uma abordagem detalhista em cada caso.'
    },
    {
        class:'fa-solid fa-hand-holding-heart',
        tile:'Respeito e Empatia',
        description:' Tratamos cada cliente com dignidade e respeito, ouvindo atentamente suas necessidades e preocupações para oferecer soluções personalizadas.'
    },{
        class:'fa-solid fa-lightbulb',
        tile:'Inovação e Adaptabilidade',
        description:'Valorizamos a inovação em nossas estratégias legais, adaptando-nos às mudanças no ambiente jurídico para melhor servir nossos clientes.'
    },
    {
        class:'fa-solid fa-scale-unbalanced-flip',
        tile:'Justiça Social',
        description:'Comprometemo-nos com a promoção da justiça e do acesso igualitário aos serviços legais, participando ativamente de iniciativas que visam ao bem-estar da comunidade.'
    }
]

export const testimonials = [

    {
        description:'Desde a primeira consulta, senti que estava em boas mãos. Os advogados mostraram profundo conhecimento e habilidade para lidar com questões complexas, proporcionando soluções inovadoras e eficazes.',
        img:client03,
        name:'Sergio Paulo Amaral',

    },
    {
        description:'O atendimento personalizado fez toda a diferença no meu caso. Realmente se preocupou em entender minhas necessidades e adaptar as estratégias para alcançar os melhores resultados.',
        img:client04,
        name:'Aline Motta'
    },
    {
        description:'Fiquei impressionado com a eficácia e a rapidez com que meu problema legal foi resolvido. Os advogados sempre mantiveram uma comunicação clara e constante, o que me deu muita confiança no trabalho deles.',
        img:client02,
        name:'Luiz Jr Fontes'}
]

export const number = [
    {
        class: 'fa-solid fa-medal',
        end:390,
        label:'Advogados Qualificados'
    },
    {
        class: "fa-solid fa-star",
        end:3972,
        label:'Clientes Satisfeitos'
    },{
        class: "fa-regular fa-circle-check",
        end:4299,
        label:'Casos Resolvidos'
    },{
        class: "fa-solid fa-trophy",
        end:43,
        label:'Premios'
    }
]

export const team = [
    {
        img:team01,
        name:'Luciana de Alcantra',
        prof:'CEO'
    },
    {
        img:team02,
        name:'Marcus L. de Mendes',
        prof:'Advocado Financeiro'
    },
    {
        img:team03,
        name:'Leonardo Fagundes',
        prof:'Advogado Tributarista'
    }
]


export const menuLinks = [
    {
        label: 'Sobre Nós',
        href: '#sobre',
        class: 'link',
    },
    {
        label: 'Serviços',
        href: '#service',
        class: 'link',
    },
    {
        label: 'Depoimento',
        href: '#testimonials',
        class: 'link',
    },
    {
        label: 'Nosso Time',
        href: '#team',
        class: 'link',
    },
    {
        label: 'Contato',
        href: '#contato',
        class: 'link',
    }
]
