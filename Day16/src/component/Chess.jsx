
// const Image=()=>{
//     return(
//         <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675
//         " alt="" />
//     )
// }

const r1=()=>{

    return (
        <div className='row'>
            {
                [1,2,3,4,5,6,7,8].map((item)=>{
                    return (
                        item%2===0?
                        (<div className='card1'></div>):
                        (<div className='card2'></div>)

                    )
                })
            }

        </div>
    )

}
const r2=()=>{

    return (
        <div className='row'>
            {
                [1,2,3,4,5,6,7,8].map((item)=>{
                    return (
                        item%2===0?
                        (<div className='card2'></div>):
                        (<div className='card1'></div>)

                    )
                })
            }

        </div>
    )

}

const Chess=()=>{
    return(
      <div className="card">
          {/* <Image/>

          <h2>
              This is a card
          </h2>
          <p>
              react card
          </p> */}
          {
               [1,2,3,4].map((item)=>{
                return (
                  <div>
                      <r1/>
                      <r2/>

                </div>

                )
            })
          }
      </div>
    )
}

export default Chess