import React from "react"

export  default function Home(){
    return(
        <div style={{backgroundColor:'#50C878', textAlign:'center', padding: '20px'}}>
            <h2>This is &quot;Kakashi&apos;s&quot; Image</h2>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8qUYUnYkuHBcOzXZorWgCx-sQmhGNkeoIHfE7BN1BE4eh7lkO5vruA_OIj9Ge_r4yYk&usqp=CAU" 
            alt="kakashi" 
                className='img'
            />
        </div>
    )
}
