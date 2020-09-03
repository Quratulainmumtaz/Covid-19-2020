import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/Country';
import styles from './App.module.css';
import {fetchData} from './Components/api/index';
import cornaImage from './images/image.png';




class App extends Component{
  state={
    data: {},
    country:'',
  }
 async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data:fetchedData})

  }
  
  countryChangeHandler= async(country)=>{
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    //first we fectch the data
    this.setState({data:fetchedData, country: country})

    

  }
  render(){
    const {data, country} = this.state;
    return(
     
      <div className={styles.container}>
        <img className={styles.img} src={cornaImage} alt="COVID-19"/>
         <Cards data={data}/>
        <CountryPicker   countryChangeHandler={this.countryChangeHandler}/>
        <Chart data={data} country={country} />
        

      </div>
    );
  }
}


export default App;
