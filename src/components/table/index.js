import React, {Component} from 'react';
import Axios from 'axios';
import Loader from '../loading'
import ErrorAlert from '../error'
import TableRows from './table-rows'

class Table extends Component {
    state = {
        data: [],
        count: 0,
        isLoading: true,
        error: ""
    };

    componentDidMount() {
        Axios
        .get('https://randomuser.me/api/?seed=employee&results=50&nat=us')
        .then(res => {
            this.setState({
            data: res.data.results, 
            count: res.data.results.length,
            isLoading: false,
            error: ""
            })
        }).catch(err =>{ 
            this.setState({
            isLoading: false,
            error: err.message
            })
        })
    };

    render(){
        return (
            <div className="row">
                <div className="col">
                    {
                     this.state.isLoading === true
                     &&
                    <Loader />
                    }
                    {
                    this.state.error !== ""
                    &&
                    <ErrorAlert error={this.state.error}/>
                    }
                    {
                    this.state.isLoading === false && this.state.count !== 0
                    &&
                    <TableRows stateData={this.state}/>
                    }
                </div>
            </div>
        )
    }
};

export default Table;