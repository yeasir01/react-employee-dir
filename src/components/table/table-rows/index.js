import React, {Component} from 'react';
import './style.css'

class TableRows extends Component{
    render(){
        return (
            <div className="table-responsive">
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
                        {this.props.stateData.data.map(emp => {
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
        )
    }
}

export default TableRows