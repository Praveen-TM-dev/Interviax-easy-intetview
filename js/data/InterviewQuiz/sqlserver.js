window.skillQuestions = {
    sqlserver: {
        name: "SQL Server / Sybase",
        priority: 8,
        questions: [
            { q: "Clustered vs Non-clustered index", a: "Clustered defines physical order; non-clustered stores pointers." },
            { q: "Deadlocks", a: "Occurs when transactions block each other." },
            { q: "Execution plan", a: "Shows query execution strategy." },
            { q: "CTE vs Temp table", a: "CTE is logical; temp table is physical." },
            { q: "Normalization", a: "Reducing redundancy." },
            { q: "Isolation levels", a: "Read Uncommitted to Serializable." },
            { q: "Stored procedures benefits", a: "Performance, security." },
            { q: "Index fragmentation", a: "Occurs due to data modifications." },
            { q: "Transaction log", a: "Records all transactions." },
            { q: "Lock escalation", a: "Row locks escalated to table locks." }
        ]
    }
};
