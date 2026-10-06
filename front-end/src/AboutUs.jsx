import { useEffect, useState } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState(null)
    
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about-us`)
            .then(response => {
                setAboutUs(response.data)
            })
    }, [])

    if (!aboutUs) return <p>Loading...</p>

    const { title, paragraphs, image } = aboutUs;

    return (
        <>
            <h1>{title}</h1>

            {paragraphs.map((paragraph, id) => (
                <p key={id}>{paragraph}</p>
            ))}

            <img src={image} alt="Photo of me" />
        </>
    )
}

export default AboutUs