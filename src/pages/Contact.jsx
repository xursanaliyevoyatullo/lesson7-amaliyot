import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h2 className='text-center font-bold text-xl mt-10 mb-3'>Contact</h2>
        <p className='text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat repudiandae minus numquam doloribus placeat magni corporis ipsa doloremque id, nihil dolor rem sint facere corrupti nisi. Enim nobis animi alias. Nesciunt in assumenda rerum ab possimus eaque est nemo quos odio ipsam autem recusandae, vel repellendus cumque quod dolorum? Nemo possimus quibusdam vel doloremque. Necessitatibus deserunt ullam eligendi architecto explicabo sint illo ducimus non soluta ad incidunt, est tempora. Officiis laudantium, voluptate esse praesentium nesciunt eveniet voluptas ipsam sequi iure delectus sint! Quae earum quos nostrum atque reprehenderit eius ad doloremque, odit vero unde! Repellat, officia facere? Expedita, odit!</p>
        <div className='text-center mt-5'>
          <Link to="/" className='btn btn-outline btn-warning'>Go Home</Link>
        </div>
    </div>
  )
}

export default Contact