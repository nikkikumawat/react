import React from 'react'

function Section(props) {
  return (
    <>
      <section style={{ backgroundImage: `url(images/${props.backgroundImage})` }}>
        
        
        <div className='car'>
          <div className='model'>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>

          </div>                                    


          <div className='order'>
            <a href='' className={props.blackBg ? 'black' : ''}>{props.leftbtn}</a>
            {props.rightbtn && <a href='' >{props.rightbtn}</a>}
          </div>

          {props.arrow && <div className='image'>
          <img src='images/down-arrow.svg'></img>
          </div>}
        </div>
      
      </section>
    </>
  )
}


export default Section