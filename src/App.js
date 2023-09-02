import logo from './Couchsurfing_Pereira_1.png';
import { AppContainer, CouchsurfingLogoContainer } from './styled';
function App() {
  return (
    <>
      <AppContainer>
        <CouchsurfingLogoContainer 
          src={logo} 
          alt="logo de couchsurfing pereira"
          width={300}
          height={300}
        />
      </AppContainer>
      <div style={{"width": "100vw", "height": "100vh", "background": "grey"}}>
      </div>
    </>
    
  );
}



export default App;