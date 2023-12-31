import { useState } from 'react';

import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import CardQuiz from '../components/CardQuiz';

import NavBarFooter from '../components/NavBarFooter';

import logoPY from '../assets/python-logo.png';
import logoHTML from '../assets/html-logo.png';
import logoCSS from '../assets/css-logo.png';
import logoJS from '../assets/javascript-logo.png';
import logoJAVA from '../assets/java-logo.png';
import logoCSHARP from '../assets/csharp-logo.png';
import logoGIT from '../assets/git-logo.png';
import Popup from '../components/Popup';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const openPopup = quiz => {
    setSelectedQuiz(quiz); // Armazena o quiz selecionado
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedQuiz(null); // Limpa o quiz selecionado ao fechar o popup
  };

  const quizzes = [
    {
      id: 1,
      title: 'Desafios simples de Java',
      author: 'Ricardo L.',
      img: logoJAVA
    },
    {
      id: 2,
      title: 'Conhecendo o Mundo do C#',
      author: 'Camila F.',
      img: logoCSHARP
    },
    {
      id: 3,
      title: 'HTML5 e Suas Novidades',
      author: 'Rafaela V.',
      img: logoHTML
    },

    {
      id: 4,
      title: 'Teste o seu conhecimento com Python',
      author: 'Paulo D.',
      img: logoPY
    },
    {
      id: 5,
      title: 'CSS para Web Design',
      author: 'Amanda S.',
      img: logoCSS
    },
    {
      id: 6,
      title: 'Demonstre suas habilidades com o JavaScript',
      author: 'Paulo D.',
      img: logoJS
    },
    {
      id: 7,
      title: 'Teste o lado obscuro do Java',
      author: 'Júlio O.',
      img: logoJAVA
    },
    {
      id: 3,
      title: 'JavaScript: Conceitos Básicos',
      author: 'André S.',
      img: logoJS
    },
    {
      id: 9,
      title: 'Python para Iniciantes',
      author: 'Felipe A.',
      img: logoPY
    },
    {
      id: 10,
      title: 'Vamos ver se manja de CSS',
      author: 'Paulo D.',
      img: logoCSS
    },
    {
      id: 11,
      title: 'HTML para Iniciantes',
      author: 'Carlos O.',
      img: logoHTML
    },
    {
      id: 12,
      title: 'Testando sua Proficiência em Git',
      author: 'Alexandre T.',
      img: logoGIT
    },
    {
      id: 13,
      title: 'Prove que sabe fazer um HTML bem estruturado',
      author: 'Paulo D.',
      img: logoHTML
    }
  ];

  return (
    <>
      <Header />

      <Main logged="true">
        <ContentNavigation home="true" />

        <ContentHeader
          title="Bem vindo 👋"
          subtitle="Escolha um dos quizzes abaixo para jogar"
        />

        <ContentMain>
          <div className="flex flex-col items-start sm:items-center w-full h-full py-4">
            <h3 className="text-lg font-semibold">Galeria de Quizzes</h3>
            <div className="flex sm:justify-center w-full flex-wrap gap-3 mt-1 sm:mt-4">
              <Popup visible={popupVisible} onClose={closePopup}>
                {selectedQuiz && (
                  <div className="flex flex-col items-center bg-white shadow-lg z-10 rounded-xl">
                    <h2 className="font-semibold text-lg p-5 bg-yellow-main rounded-t-xl">
                      Quiz indisponível no momento para jogar :(
                    </h2>
                    <div className="flex flex-col items-center py-4">
                      <h3 className="font-semibold text-lg ">
                        {selectedQuiz.title}
                      </h3>
                      <p>Autor: {selectedQuiz.author}</p>
                    </div>
                  </div>
                )}
              </Popup>
              {quizzes.map(quiz => (
                <CardQuiz
                  key={quiz.id}
                  onClick={() => openPopup(quiz)}
                  img={quiz.img}
                  author={quiz.author}
                  title={quiz.title}
                />
              ))}
            </div>
          </div>
        </ContentMain>

        <NavBarFooter />
      </Main>

      <Footer />
    </>
  );
};

export default Home;
