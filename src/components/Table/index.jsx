import React from 'react';

const Table = ({ data }) => {
    const books = data;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Published</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((data, i) => {
                        return (
                            <tr className="hover">
                                <th>{i}</th>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.isbn}</td>
                                <td>{data.published}</td>
                                <td className="items-center justify-center flex gap-2">
                                    <div>
                                        <button className="btn btn-accent btn-outline">
                                            Edit Book
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn btn-accent btn-outline">
                                            Neutral
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
