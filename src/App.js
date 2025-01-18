import Account from "./components/Create-account/Account";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import Media from "./components/AMTmedia/Media";
import Content from "./components/ContentCreation/Content";
import Steps from "./components/SimpleSteps/Steps";
import Online from "./components/OnlinePresence/Online"
import Testimolial from "./components/Testimolial/Testimolial";
import Work from "./components/Work/Work"
import Problem from "./components/ProblemSection/Problem";
import Win from "./components/WinSolution/Win";

function App() {
  return (
    <main>
    <Navbar/>
    <Work/>
    <Online/>
    <Problem/>
    <Win/>
    <Steps/>
    <Content/>
    <Media/>
    <Testimolial/>
    <Account/>
    <Footer/>
    </main>
  );
}

export default App;


