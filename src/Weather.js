import React, {Component, Fragment} from 'react';

class Weather extends Component{
    state={
        temp:'  ',
        windspeed:' ',
        pressure:'',
        clouds:''

    }
    //method to fetch the weather state from api depending on the values of city, country variables
    getweather=(e)=>{
        let city=document.querySelector("form").selcity.value;
        //let country=document.querySelector("form").selcountry.value;

        e.preventDefault();
        fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid={6b046b2841a2e9769dfbbf6190c10c01y}`).then(response=>{
            return response.json()}).then(
                data=>{
                    city=== ''  ? 
                      alert("you should select the country and the city !!!")
                        :
                        this.setState({temp:data
                           
                        })
                        
                }
            )
          
        
    }
    //method to list the result of api fetching
    list=()=>{
        return(
            <Fragment>
            <li className="list-group-item bg-secondary mb-2 text-white" >The tempreture is : {this.state.temp}</li>
            <li className="list-group-item bg-secondary mb-2 text-white" >The speed of the wind is : {this.state.windspeed}</li>
            <li className="list-group-item bg-secondary mb-2 text-white" >The pressure is : {this.state.pressure}</li>
            <li className="list-group-item bg-secondary  text-white" >The clouds is : {this.state.clouds}</li>
            </Fragment>
            )
    }
    render(){
        return(
            <div className="container mt-5">
                <h1>Weather App</h1>

                <form className="form-inline w-100 mt-5" name="form1">
                    <select className="custom-select w-25" name="selcountry">
                       <option value="">--select--</option>
                        <option>syria</option>
                        <option>egypt</option>
                        <option>iraq</option>
                    </select>
                    <select className="custom-select w-25" name="selcity">
                        <option value="">--select--</option>
                        <option>damascus</option>
                        <option>cairo</option>
                        <option>bagdad</option>
                    </select>
                    <button className="btn btn-outline-info" onClick={(e)=>{this.getweather(e)}}>expect the weather</button>

                </form>
                <ul className="list-group mt-5 " id="allcourse">
                          {this.list()}
                </ul>
            </div>
        )
    }


}

export default Weather;