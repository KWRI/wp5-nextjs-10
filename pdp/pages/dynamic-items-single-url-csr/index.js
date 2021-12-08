import { useState, useEffect } from "react";
import axios from 'axios';
import Link from 'next/link'


export default function DynamicItemsSingleUrlPage () {
    const [breeds, setBreeds] = useState([]);

    useEffect(async () => {
        const resp = await axios.get('https://dog.ceo/api/breeds/list/all');
        setBreeds(Object.entries(resp.data.message).map((key) => (key)))
    }, [])

    if (!breeds.length) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <div>
            <ul>
            {
                breeds.map(breed => (
                    <li>
                        <Link href={`/dogs?breed=${breed}`}>
                            <a>{breed}</a>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
