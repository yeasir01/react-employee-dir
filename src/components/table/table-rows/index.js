import React, {Component} from 'react';
import './style.css';


class TableRows extends Component{
    render(){
        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="text-secondary">
                                First <i className="fas fa-sort cursor" onClick={()=>this.props.sort.sortBy(".name.first")}></i>
                            </th>
                            <th scope="col" className="text-secondary">
                                Last <i className="fas fa-sort cursor"></i>
                            </th>
                            <th scope="col" className="text-secondary">
                                Email <i className="fas fa-sort cursor"></i>
                            </th>
                            <th scope="col" className="text-secondary">
                                Cell <i className="fas fa-sort cursor"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.emplyData.data.map((emp, i) => {
                            return(
                                <tr className="cursor" key={i}>
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