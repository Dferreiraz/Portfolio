import agencyWebImg from '../assets/images/AgencyWeb.png';
import techSolutionsImg from '../assets/images/TechSolutions.png';
import performaImg from '../assets/images/Performa.png';

export const projects = [
  {
    id: 1,
    title: 'AgencyWeb',
    description:
      'Projeto institucional desenvolvido durante os estudos no curso de Desenvolvedor Front-End do Senai Suíço-Brasileiro, com foco em responsividade e estrutura profissional.',
    image: agencyWebImg,
    tech: ['HTML', 'CSS'],
    demoUrl: 'https://dferreiraz.github.io/AgencyWeb/',
    githubUrl: 'https://github.com/Dferreiraz/AgencyWeb',
  },
  {
    id: 2,
    title: 'TechSolutions',
    description:
      'Projeto institucional desenvolvido para empresa de assistência técnica, com foco em presença digital, design moderno, responsividade e experiência do usuário.',
    image: techSolutionsImg,
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://dferreiraz.github.io/TechSolutions/',
    githubUrl: 'https://github.com/Dferreiraz/TechSolutions',
  },
  {
    id: 3,
    title: 'Performa',
    description:
      'Projeto institucional desenvolvido para empresa do segmento automotivo, focado em apresentação profissional, identidade visual moderna e responsividade.',
    image: performaImg,
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://dferreiraz.github.io/PerformaParabrisas/',
    githubUrl: 'https://github.com/Dferreiraz/PerformaParabrisas',
  },
];