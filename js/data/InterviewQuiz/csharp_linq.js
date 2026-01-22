window.skillQuestions = {
    csharp_linq: {
        name: "C# / LINQ",
        priority: 3,
        questions: [
            { q: "IEnumerable vs IQueryable", a: "IEnumerable executes in memory; IQueryable executes at the data source." },
            { q: "How async/await works internally?", a: "Compiler creates a state machine to free threads during async waits." },
            { q: "What causes memory leaks in .NET?", a: "Static references, event handlers, undisposed IDisposable objects." },
            { q: "Struct vs Class", a: "Structs are value types; classes are reference types." },
            { q: "Garbage Collection generations", a: "Gen 0, Gen 1, Gen 2 based on object lifetime." },
            { q: "Deferred execution in LINQ", a: "Query executes only when enumerated." },
            { q: "Select vs SelectMany", a: "Select maps; SelectMany flattens collections." },
            { q: "Span<T> usage", a: "Provides memory-safe access without allocations." },
            { q: "Task vs ValueTask", a: "ValueTask reduces allocations for high-performance scenarios." },
            { q: "Lock vs Semaphore", a: "Lock is thread-based; Semaphore controls concurrent access." }
        ]
    }
};
