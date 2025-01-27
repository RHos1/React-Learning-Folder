import ReactDOM from 'react-dom/client';

function App() {
  const firstname = "Joe"
  const secondname = "Biden"
  return (
    
    <h1>Hello {firstname}  {secondname} </h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
