import React from 'react'
import Heading from './Heading.js'
import Section from './Section.js'
import "./Tesla.css"

function Home() {
  return (
    <>
      <Heading></Heading>
      <Section name="Model 3"
        desc="Order Online for touchless delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backgroundImage="model-3.jpg"
        arrow={true}
        >           
      </Section>


      <Section name="Model Y"
        desc="Order Online for touchless delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backgroundImage="model-y.jpg">
      </Section>


      <Section name="Model S"
        desc="Order Online for touchless delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backgroundImage="model-s.jpg">
      </Section>


      <Section name="Model X"
        desc="Order Online for touchless delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backgroundImage="model-x.jpg">
      </Section>



      <Section name="Solar Panels"
        desc="Lower Cost Solar Panels in India"
        leftbtn="Order Now"
        rightbtn="Learn More"
        backgroundImage="solar-panel.jpg">                
      </Section>


      <Section name="Solar Roof"
        desc="Leasing starting at $349/mo"
        leftbtn="Order Now"
        rightbtn="Learn More"
        backgroundImage="solar-roof.jpg">
      </Section>

      
      <Section name="Accessories"
        desc="Leasing starting at $349/mo"
        leftbtn="learn more"
        // rightbtn="order now"
        blackBg={true}
        backgroundImage="accessories.jpg">
          
      </Section>
    </>
  )
}

export default Home