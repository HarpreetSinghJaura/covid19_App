import React from 'react';


import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{
    state={
        data:{},
        country:'',
    }
   async componentDidMount()
    {
        const fetchedData=await fetchData();
        this.setState({data:fetchedData})
    }
    handleCOuntryChange= async(country)=>{
        console.log(country);

    }
    render(){
        const {data}=this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker  handleCOuntryChange={this.handleCOuntryChange}/>
                <Charts/>
            </div>
        )
    }
}

export default App;
