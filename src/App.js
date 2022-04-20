import {useEffect, useState} from 'react';


function App() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const request = () => {
            fetch(`http://localhost:8081/temperature`)
                .then((response) =>
                    response.json())
                .then((response) => {
                        console.log(`response:` + JSON.stringify(response))
                        setBeers(() => response)
                    }
                );
        }
        setInterval(request, 5000);
        request();
    }, []);

    return (
        <div className="App">
            <h2>Beers</h2>
            <table>
                <thead>
                <tr>
                    <th align="left">Product</th>
                    <th align="left">Temperature</th>
                    <th align="left">Status</th>
                </tr>
                </thead>
                <tbody>
                {beers.map(beer => (
                    <tr key={beer.product}>
                        <td width={150}>{beer.product}</td>
                        <td width={150}>{beer.temperature}</td>
                        <td width={150}>{beer.status}</td>
                    </tr>

                ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
