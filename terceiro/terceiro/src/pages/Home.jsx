import Button from 'react-bootstrap/Button';
import MyCard from '../components/MyCard';

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <Button variant="outline-dark">Dark</Button>
      <MyCard titulo="The Goat" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFYKqLWdrXb1q6gfrYV3IQat-vwiJSYTvIA&s" desc="Melhor jogo do planeta"/>

    </div>
  );
};

export default Home;
