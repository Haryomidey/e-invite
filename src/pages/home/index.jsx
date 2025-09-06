import { images } from "../../assets/images"
import CountdownTimer from "./CountdownTimer"
import EventDetails from "./EventDetails"
import Gallery from "./Gallery"
import Header from "./Header"
import Hero from "./Hero"
import OurStory from "./OurStory"
import RSVP from "./RSVP"
import ThankYou from "./ThankYou"


const WeddingInvite = () => {
    const weddingDate = new Date()
    weddingDate.setMonth(weddingDate.getMonth() + 1)
    weddingDate.setHours(15, 0, 0, 0)

    return (
        <div className="min-h-screen font-montserrat bg-gradient-to-b from-ivory to-white">
            <Header />

            <main>
                <Hero
                    names="Bolanle & Timilehin"
                    date={weddingDate}
                    coverImg={images.couple7}
                />
                <CountdownTimer targetDate={weddingDate} />
                <EventDetails
                    venue="The Palm House, Lekki"
                    time={weddingDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    address="12 Shoreline Drive, Lekki Phase 1, Lagos"
                    dressCode="Traditional attire / Smart casual"
                />
                <OurStory />
                <Gallery />
                <RSVP />
                <ThankYou />
            </main>
        </div>
    )
}

export default WeddingInvite