import React from 'react';
import Loader from '../loading'
import ErrorAlert from '../error'
import './style.css';

const Table = (props) => {
    return (
        <div className="row">
            <div className="col">
                {
                props.state.isLoading === true
                &&
                <Loader />
                }
                {
                props.state.error !== ""
                &&
                <ErrorAlert error={props.state.error}/>
                }
                {
                props.state.isLoading === false && props.state.count !== 0
                &&
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className="text-secondary">
                                    First <i className="fas fa-sort cursor" onClick={()=>props.sort('first')}></i>
                                </th>
                                <th scope="col" className="text-secondary">
                                    Last <i className="fas fa-sort cursor" onClick={()=>props.sort('last')}></i>
                                </th>
                                <th scope="col" className="text-secondary">
                                    Email <i className="fas fa-sort cursor" onClick={()=>props.sort('email')}></i>
                                </th>
                                <th scope="col" className="text-secondary">
                                    Cell <i className="fas fa-sort cursor" onClick={()=>props.sort('cell')}></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.people.map((emp, i) => {
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
                }
            </div>
        </div>
    )
};

export default Table;