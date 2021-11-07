import './App.css';
import Container from 'react-bootstrap/Container'
import CardGrid from './Card';
import FilterImage from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectLoading } from './itemSlice';
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux';



function App() {
  const loadingData = useSelector(selectLoading);
  return (
    <Container>

      {loadingData ?
        <div className="blockSpinner"><Spinner animation="border" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
        </div> :
        <>
          <FilterImage />
          <CardGrid />
        </>
      }

    </Container>
  );
}

export default App;
