import React from 'react'
import Button from '../components/Button'
import '../components/Main.css'


const About = () => {
  return (
    <div>
        <div className="text">
        <h3>Why Choose Us ?</h3>
        <h1>Nature's Majesty Awaits You</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Id voluptatem molestiae voluptate quibusdam nemo nesciunt excepturi maiores temporibus, dolores optio soluta iure velit omnis adipisci ipsam veritatis sequi molestias. Impedit quam placeat, magnam quasi labore dicta quibusdam nam ut, magni facere reprehenderit quisquam natus eum. 
            Consequuntur enim aliquid impedit qui.</p>
        </div>

        <Button btnName='Read More' />
    </div>
  )
}

export default About