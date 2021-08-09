import Profile from './profile/profile';
import photo from './hela.jpg'
import './App.css';


function App() {
  const handleName= (name) => {alert(`I am ${name}`)};
  return (
    <div className="App">
      <Profile 
      fullName={'Hela ABEDA'}
      profession={'Web developer'}
      bio={"Titulaire d'un diplôme d'Ingénieur génie Electrique, spécialisée en Electronique Embarquée et Telecom, par ailleurs, je suis développeuse front-end junior, je maîtrise les différentes étapes techniques de la création d’un site web."}
      handleName={handleName}
      >
       <div>
         <img src={photo} alt='pic'  style={{width:150,height:200,padding:'5%'}}/>  
       </div>
      </Profile>

    </div>
  );
}

export default App;
