import API from '../../utils/api';
import React from 'react';

const Table = () => {
    return (
        <div className="row">
            <div className="col">
                <table className="table">
                    {console.log(JSON.stringify(API.getUsers()))}
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>Some</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;