import React, {Component} from 'react';
import Axios from 'axios';
import './style.css'


class Table extends Component {
    state = {
        data: [],
        count: 0,
        isLoading: true
    };


    componentDidMount() {
        Axios
        .get('https://randomuser.me/api/?seed=employee&results=30&nat=us')
        .then(res => {
            this.setState({
            data: res.data.results, 
            count: res.data.results.length
            })
        })
    };

    render(){
        return (
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className="text-secondary">First</th>
                                <th scope="col" className="text-secondary">Last</th>
                                <th scope="col" className="text-secondary">Email</th>
                                <th scope="col" className="text-secondary">Cell</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(emp => {
                                    return(
                                        <tr className="cursor">
                                            <th scope="row"><img id="thumbnail" src={emp.picture.thumbnail} alt="employee pic"/></th>
                                            <td className="align-middle">{emp.name.first}</td>
                                            <td className="align-middle">{emp.name.last}</td>
                                            <td className="align-middle">{emp.email}</td>
                                            <td className="align-middle">{emp.cell}</td>
                                        </tr>
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export default Table;