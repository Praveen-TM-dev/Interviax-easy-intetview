window.skillQuestions = {
    aspdotnetcore: {
        name: "ASP.NET Core",
        priority: 1,
        questions: [
            { q: "Explain ASP.NET Core request pipeline", a: "It is a sequence of middleware components that handle HTTP requests and responses. Each middleware can process, modify, or short-circuit the pipeline." },
            { q: "Middleware vs Filters", a: "Middleware runs globally for all requests, while filters are part of MVC and run during action execution." },
            { q: "Dependency Injection lifetimes", a: "Transient: new instance every time, Scoped: per HTTP request, Singleton: application lifetime." },
            { q: "What is Kestrel?", a: "A cross-platform web server used internally by ASP.NET Core." },
            { q: "IHost vs IWebHost", a: "IHost is generic for all workloads; IWebHost is specific to web hosting." },
            { q: "How do you handle global exceptions?", a: "Using UseExceptionHandler or custom exception middleware." },
            { q: "Explain Minimal APIs", a: "A lightweight approach for building APIs without controllers, introduced in .NET 6." },
            { q: "How does configuration work?", a: "Configuration is built from multiple providers like appsettings.json, environment variables, and secrets." },
            { q: "How do you improve performance?", a: "Caching, async APIs, response compression, proper DI lifetimes." },
            { q: "What is endpoint routing?", a: "It maps incoming requests to endpoints based on route patterns." }
        ]
    }
};
