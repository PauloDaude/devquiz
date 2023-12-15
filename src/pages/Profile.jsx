import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import NavBarFooter from '../components/NavBarFooter';

import Photo from '../assets/photo-mock.jpg';
import ContentNavigation from '../components/ContentNavigation';
import CardQuiz from '../components/CardQuiz';

import logoPY from '../assets/python-logo.png';
import logoHTMl from '../assets/html-logo.png';
import logoCSS from '../assets/css-logo.png';
import logoJS from '../assets/javascript-logo.png';

// eslint-disable-next-line react/prop-types
const DataProfile = ({ title, data }) => {
  return (
    <div className="text-gray-main text-sm">
      {title}
      <p className="font-bold text-black text-center text-lg">{data}</p>
    </div>
  );
};

const Profile = () => {
  return (
    <>
      <Header />

      <Main profile="true">
        <ContentNavigation back="true" profile="true" navigation="/home" />
        <ContentHeader>
          <div className="flex flex-col items-center">
            <img
              src={Photo}
              alt="Foto de perfil"
              className="w-21 rounded-full border-white border-4"
            />
            <h4 className="font-bold text-lg mt-2">Paulo Daúde</h4>
            <p className="font-thin text-xs text-gray-label">@paulodaude</p>
          </div>
          <div className="flex my-4">
            <div className="flex justify-between w-full">
              <DataProfile title="Jogadas" data="20" />
              <DataProfile title="Criados" data="4" />
              <DataProfile title="Seguidores" data="48" />
              <DataProfile title="Seguindo" data="14" />
            </div>
          </div>
          <button className="bg-black py-3 rounded-full text-white font-medium">
            Editar perfil
          </button>
        </ContentHeader>
        <ContentMain>
          <div className="flex flex-col justify-start mt-6 w-full gap-2">
            <h3 className="font-semibold text-xl">4 Quizzes</h3>
            <div className="flex flex-wrap gap-4">
              <CardQuiz
                author="Paulo D."
                title="Teste o seu conhecimento com Python"
                img={logoPY}
              />
              <CardQuiz
                author="Paulo D."
                title="Vamos ver se manja de CSS"
                img={logoCSS}
              />
              <CardQuiz
                author="Paulo D."
                title="Prove que sabe fazer um HTML bem estruturado"
                img={logoHTMl}
              />
              <CardQuiz
                author="Paulo D."
                title="Demonstre suas habilidades com o JavaScript"
                img={logoJS}
              />
            </div>
          </div>
        </ContentMain>
        <NavBarFooter />
      </Main>

      <Footer />
    </>
  );
};
export default Profile;
