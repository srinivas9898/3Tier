
import './App.css';

function App() {
    let [player,setPlayers] = useState([]);
   let getDataFromServer = async()=>{

      let reqOptions ={
        method:"GET"
      };

      let JSONData = await fetch("http://localhost:5678/player",reqOptions);

      let JSOData = await JSONData.json();
      setPlayers(JSOData);

      console.log(JSOData);
   };
  return (
    <div className="App">
       <button onClick={()=>{
    getDataFromServer();

       }}>Get Players</button>
       {player.map((ele,i)=>{
        return <h2>{ele.playerName}</h2>;
       })}
    </div>
  );
}

export default App;
