import { useState } from 'react'
import './App.css'

function App() {
  const [isMeteric, setMetricFlag] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');
  
  function calculateBMI() {
    let x = 0;

    if(isMeteric){
      const h = +height / 100;
      x = +weight / h**2;
    } else {
      const b = +weight;
      const c = (+height)**2;
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
  }

// prevent page reload if pressing enter

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index.</p>
        <p>You need to use either the meteric or imperial system. No mixing.</p>
        <form>
          <label>Use meteric values
            <input type='checkbox' checked={isMeteric} onChange={() => setMetricFlag(!isMeteric)}/>
          </label>
          <label>Weight
            <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </label>
          <label>Height
            <input type='text' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </label>
        </form>
          <button type='submit' onClick={() => calculateBMI()}>Calculate</button>

        <p>
          {bmi}
        </p>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App
