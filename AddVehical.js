import React,{useState} from 'react';

function AddVehical() {

    let [vehicle_number,setvehicle_number ]= useState();
    let [topic,settopic]= useState();
    let [tyre_number,settyre_number]= useState();
    let [passing_tonne,setpassing_tonne]= useState();
    let [vehical_weight,setvehical_weight]= useState();
    let [vehical_flooring,setvehical_flooring]= useState('');
    let [vehical_length,setvehical_length]= useState();

    let handleSubmit=()=>{
        alert( "You have added vehical succeesfully !");};

    return (

        <div>
         <form onSubmit={()=>handleSubmit()}>

            <div>
            <label> Vehical Number :</label>
            <input type= 'text' value={vehicle_number} onChange={()=>setvehicle_number(vehicle_number)}></input>
            </div>
            <br/>
            
            <div>
            <label> Vehical Details :</label>
                <select value={topic} onChange={()=>settopic(topic)}>
                <option value="option 1"> Option 1</option>
                <option value="option 2"> Option 2</option>
                <option value="option 3"> Option 3</option>
                </select>
            </div>
            <br/>
            
            <div>
            <label> Number of tyres :</label>
                <input 
                type= 'number' 
                value={tyre_number} 
                onChange={()=>settyre_number(tyre_number)}>
                </input>
            </div>
            <br/>
            
            <div>
            <label> Passing tonne :</label>
                <input 
                type= 'number' 
                value={passing_tonne} 
                onChange={()=>setpassing_tonne(passing_tonne)}>
                </input>
                </div>
            <br/>

            <div>
            <label> Vehical Height :</label>
                <input 
                type= 'number' 
                value={vehical_weight} 
                onChange={()=>setvehical_weight(vehical_weight)}>
                </input>
            </div>
            <br/>

            <div>
            <label> Vehical flooring :</label>
                <input 
                type= 'number' 
                value={vehical_flooring} 
                onChange={()=>setvehical_flooring(vehical_flooring)}>
                </input>
            </div>
            <br/>
            
            <div>
            <label> Passing length :</label>
                <input 
                type= 'number' 
                value={vehical_length} 
                onChange={()=>setvehical_length}>
                </input>
                </div>
            <br/>

            <button type='submit'>Add Vehical</button>

            </form>   
        </div>
    )
}

export default AddVehical
