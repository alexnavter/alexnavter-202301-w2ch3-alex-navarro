
const flights = [
  { id: 00, to: "New York",     from: "Barcelona",  cost: 700,  scale: false },
  { id: 01, to: "Los Angeles",  from: "Madrid",     cost: 1100, scale: true },
  { id: 02, to: "Paris",        from: "Barcelona",  cost: 210,  scale: false },
  { id: 03, to: "Roma",         from: "Barcelona",  cost: 150,  scale: false },
  { id: 04, to: "London",       from: "Madrid",     cost: 200,  scale: false },
  { id: 05, to: "Madrid",       from: "Barcelona",  cost: 90,   scale: false },
  { id: 06, to: "Tokyo",        from: "Madrid",     cost: 1500, scale: true },
  { id: 07, to: "Shangai",      from: "Barcelona",  cost: 800,  scale: true },
  { id: 08, to: "Sydney",       from: "Barcelona",  cost: 150,  scale: true },
  { id: 09, to: "Tel-Aviv",     from: "Madrid",     cost: 150,  scale: false },
];

const startApp = () => {
  const userName = prompt(
    'Welcome to ISDI Coders Airlines!\nPlease, enter your name:'
    );
    if (userName === '' || userName === ' ') {
        alert('Please enter your name or press CANCEL to exit.')
        askForNameAndGreet();
    } else if (userName === null) {
      alert('Bye! See you soon!');
    } else {
        alert(`Hello there ${userName}! , please press OK to show all flights information.`);
        showInfo();    
    }
}

const showFlights = () => {
  for (let i = 0; i < flights.length; i++){
    if(flights[i].scale === true){
      flights[i].scale = 'tiene escala';
    } else {
      flights[i].scale = 'no tiene escala';
    }
    console.log('El vuelo numero ' + flights[i].id + ' a ' + flights[i].to + ' desde ' + flights[i].from + 'tiene un coste de ' + flights[i].cost + ' y ' + flights[i].scale);
  }
}

const showPrices = () => {
  
  let sum = 0;
    let promedio = 0;

      for (let i = 0; i < flights.length; i++){
      sum += flights[i].cost;
          promedio = sum/flights.length;
      } 
    console.log('---> Average price per flight is: ' + promedio);
} 

const showStopOverFlights = () => {

  let directFlights = 0;
  let stopOverFlights = 0;

  for (i = 0; i < flights.length; i++){
    if(flights[i].scale === 'tiene escala') directFlights++;
    if(flights[i].scale === 'no tiene escala') stopOverFlights++; 
  }
  console.log('---> There are: ' + directFlights + ' direct flights, and ' + stopOverFlights + ' stopover flights');
}

const showLatestFligths = () => {
  console.log('Today latest flights destinations are: ')
    
  for (let i = flights.length - 5; i < flights.length; i++){
      console.log(`${flights[i].to}`);
  }
}

const showInfo = () => {
  showFlights();
  showPrices();
  showStopOverFlights();
  showLatestFligths();
}

startApp();

















