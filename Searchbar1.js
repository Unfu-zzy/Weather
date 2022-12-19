import React from 'react';

// Difference between onChange and onKeyDown
     /*  https://codingbeautydev.com/blog/react-get-input-value-on-enter/ */
      //



/* const Searchweather = (props) => {
	return (
		<div className='Searchweather'>
       <label for="Search" style={{ color: "white"}}>Search a location</label>
            <br></br>
			<input
				className='weatherinput'
				value={props.value}
				onChange={(event) => props.setSearch(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
}; */








const Searchweather = (props) => { 

   /*  const handleKeyDown = event => {
        if (event.key === 'Enter') {
          // 👇️ your logic here
          props.setSearch(event.target.value)


        }
      }; */
    

    return( 
        <div className='Searchweather'>
            <label for="Search" style={{ color: "white"}}>Search a location</label>
            <br></br>
            <input
                className='weatherinput'
                value={props.value}  
                onChange={(event) => props.setSearch(event.target.value)}
                placeholder="Search"  
                name="Search"  
           />

        </div>
    )
} 

export default Searchweather;