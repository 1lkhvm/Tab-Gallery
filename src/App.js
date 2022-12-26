import React, { useState } from 'react'
import './App.css'

function App() {
  const imgs = [
    { src: "https://i.pinimg.com/originals/b0/68/de/b068de7b54a05cd11fdc29ec16543800.jpg" },
    { src: "https://i.pinimg.com/originals/6f/9a/c8/6f9ac8a3c498c3c321233fefa1a3c186.jpg" },
    { src: "https://i.pinimg.com/originals/87/f2/bc/87f2bc9d8a820221bf961d0b698594b7.jpg" },
    { src: "https://i.pinimg.com/originals/6b/b7/0b/6bb70b77f4d923c7ca5c42e3bc9ae09b.jpg" }

  ]


  const [value, setValue] = useState(imgs[2])


  const clickImg = (x) => {
    const slider = imgs[x]
    setValue(slider)

  }

  return (
    <>
      <div className='bmw-text'>
        <h1>OldSchool BMW</h1>
      </div>

      <div className='card-all'>


        {
          imgs.map((data, cardImg) =>

            <div className='card'>

              <img src={data.src} onClick={() => clickImg(cardImg)} />

            </div>

          )
        }

      </div>

      <div className=' card-foto'>

        <img src={value.src} />

      </div>

      <div class="mina-studio">

        <p>İlham Mikayılov</p>
        <iframe src="https://giphy.com/embed/cfuL5gqFDreXxkWQ4o" frameBorder="0" class="giphy-embed"
          allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/cat-cool-cats-cfuL5gqFDreXxkWQ4o"></a></p>

      </div>


    </>
  )
}

export default App