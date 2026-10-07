import './AboutUs.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState(null)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about-us`)
            .then(response => {
                setAboutUs(response.data)
            })
            // taken from Messages.jsx
            .catch(err => {
                const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
                setError(errMsg)
            })
    }, [])

    if (!aboutUs) return <p>Loading...</p>

    const { title, paragraphs, image } = aboutUs;

    return (
        <>
            <h1>{title}</h1>

            {error && <p>{error}</p>}

            <img src={image} alt="Photo of me" className="image" />

            {paragraphs.map((paragraph, id) => (
                <p key={id}>{paragraph}</p>
            ))}
        </>
    )
}

export default AboutUs