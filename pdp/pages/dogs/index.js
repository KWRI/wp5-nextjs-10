import { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'


export default function Dogs() {
    const router = useRouter()
    const [breedImageUrl, setBreedImageUrl] = useState('');

    useEffect(async () => {
        let breed = router.asPath.split("?")[1].split('=')[1];
        breed = breed.replace(',', '');
        const resp = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

        setBreedImageUrl(resp.data.message)
    }, [])

    if (!breedImageUrl) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <div>
            <img
                src={breedImageUrl}
                width={500}
                height={500} />
        </div>
    )
}
