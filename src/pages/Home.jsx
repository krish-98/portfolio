import React from "react"
import audio from "../assets/hip-hop-rock-beats-118000.mp3"
import audio2 from "../assets/bounce-114024.mp3"

const Home = () => {
  return (
    <main>
      <div className="h-[80vh] flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Bonjour, I'm Murali Krishnan A Front-end Developer.
        </h1>

        <audio controls autoPlay src={audio} type="audio/mpeg">
          Hi
        </audio>

        <audio
          className="bg-red-300"
          controls
          autoPlay
          src={audio2}
          type="audio/mpeg"
        >
          Hi
        </audio>
      </div>
    </main>
  )
}

export default Home
