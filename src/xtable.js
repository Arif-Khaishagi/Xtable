import React, { useState } from 'react';

const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
];

const XTable = () => {
    const [tableData, setTableData] = useState(data);

    const sortByDate = () => {
        const sortedData = [...tableData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA > dateB) return -1; // Latest dates first
            if (dateA < dateB) return 1;
            return b.views - a.views; // Sort by views if dates are equal
        });
        setTableData(sortedData);
    };

    const sortByViews = () => {
        const sortedData = [...tableData].sort((a, b) => {
            if (b.views - a.views !== 0) return b.views - a.views; // Higher views first
            return new Date(a.date) - new Date(b.date); // Sort by date if views are equal
        });
        setTableData(sortedData);
    };

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.views}</td>
                            <td>{row.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default XTable;
