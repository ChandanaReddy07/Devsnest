
const Image=()=>{
    return(
        <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675
        " alt="" />
    )
}



const Card=()=>{
    return(
      <div className="card">
          <Image/>

          <h2>
              This is a card
          </h2>
          <p>
              react card
          </p>
      </div>
    )
}

export default Card