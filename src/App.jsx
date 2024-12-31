import { useEffect } from "react";
function App() {
    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=kano&appid=54cb4436af4623404812d9c1bf43568e')
       .then(response => response.json()).then(data => console.log(data))
    })
    return (
        <></>
    );
}

export default App;