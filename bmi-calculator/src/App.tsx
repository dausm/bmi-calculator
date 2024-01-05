import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [isMeteric, setMetricFlag] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');
  const resultRef = useRef(null);
  
  function calculateBMI(event: any) {
    event.preventDefault();
    let x = 0;
    // Error handle if input is invalid

    if(isMeteric){
      const h = +height / 100;
      x = +weight / h**2;
    } else {
      x = (+weight / (+height)**2) * 703;

    }

    setBmi(x.toFixed(2));

    switch (true) {
      case ( x <= 18.5):
        setMessage('Thin');
        break;
      case ( x <= 24.9):
        setMessage('Healthy')
        break;
      case ( x <= 29.9):
        setMessage('Overweight')
        break;
      case ( x > 29.9):
        setMessage('Obese')
        break;
      default:
        setMessage('');
        break;
    }

    resultRef.current.focus();
  }

  return (
      <div className="container">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index.</p>
        <p>You need to use either the meteric or imperial system.</p>
        <form>
          <label>Use meteric values
            <input 
              type='checkbox' 
              checked={isMeteric} 
              onChange={() => setMetricFlag(!isMeteric)}/>
          </label>
          <label>{isMeteric ? 'Weight (in kg)' : 'Weight (in lb)'}
            <input 
              type='text' 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}/>
          </label>
          <label>{isMeteric ? 'Height (in cm)' : 'Height (in inches)'}
            <input 
              type='text' 
              value={height}
              onChange={(e) => setHeight(e.target.value)}/>
          </label>
        </form>
          <button type='submit' onClick={(event) => calculateBMI(event)}>Calculate</button>

        <p tabIndex={-1} ref={resultRef}>
          Calculated BMI is: {bmi} - {message}
        </p>
      </div>
  )
}

export default App
