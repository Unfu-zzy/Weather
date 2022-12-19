import React from 'react';

const Searchweather = (props) => { 

    const handleClick = () => {
      // 👇️ toggle
      props.setIsActive(current => !current);
  
      // 👇️ or set to true
      // setIsActive(true);
      // if(props.search === ' '){
      //   props.setIsActive(false)
      // }
    };

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
            <button type="submit"
             onClick={handleClick}
             >Search</button>
        </div>
    )
} 

export default Searchweather;