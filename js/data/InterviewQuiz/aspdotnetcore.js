window.skillQuestions = {
    aspdotnetcore: {
        name: "ASP.NET Core",
        priority: 1,
        questions: [
            {
                q: "What is ASP.NET Core and why is it preferred over ASP.NET MVC?",
                a: `ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern web applications and APIs.
                    It is designed to be modular, cloud- ready, and testable.
                    
                    <b>Key advantages:</b>
                    <ul style="margin-top: -15px;">
                        <li>Cross-platform (Windows, Linux, macOS)</li>
                        <li style="margin-top: -15px;">High performance (Kestrel server)</li>
                        <li style="margin-top: -15px;">Built-in Dependency Injection</li>
                        <li style="margin-top: -15px;">Middleware-based request pipeline</li>
                        <li style="margin-top: -15px;">Unified framework for MVC, Web API, Razor Pages, Blazor</li>
                    </ul>`
            },
            {
                q: "Explain Cross-platform (Windows, Linux, macOS)?",
                a: `ASP.NET Core is fully cross-platform, meaning applications can run on Windows, Linux, and macOS without code changes.
                    This is possible because it's built on .NET Core, not the Windows-only .NET Framework..
                    
                    <b>Why it matters:</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Enables hosting on Linux servers (cost-effective)</li>
                        <li style="margin-top: -15px;">Works well with Docker and cloud platforms</li>
                        <li style="margin-top: -15px;">Ideal for modern DevOps environments</li>
                    </ul>`
            },
            {
                q: "Explain High Performance (Kestrel Server)?",
                a: `Kestrel is a cross-platform, high-performance web server used by ASP.NET Core to handle HTTP requests.
                    In simple terms, Kestrel is the engine that listens for HTTP requests and sends responses back to clients.
                    <b>Key Points about Kestrel</b>:
                    <b>1. Built specifically for ASP.NET Core</b>
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Kestrel is the default web server for ASP.NET Core</li>
                        <li style="margin-top: -15px;">Optimized for modern web applications</li>
                        <li style="margin-top: -15px;">Works on Windows, Linux, and macOS</li>
                    </ul>                    
                    <b>2. High Performance</b>
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Uses asynchronous and non-blocking I/O</li>
                        <li style="margin-top: -15px;">Handles thousands of concurrent requests efficiently</li>
                        <li style="margin-top: -15px;">Minimizes memory allocations</li>
                    </ul>
                     <b>3. Cross-platform</b>
                     Unlike IIS (which is Windows-only), Kestrel:
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Runs on Linux and macOS</li>
                        <li style="margin-top: -15px;">Works well with Docker containers</li>
                        <li style="margin-top: -15px;">Is cloud-friendly (Azure, AWS, etc.)</li>
                    </ul>
                    <b>4. Works Behind a Reverse Proxy</b>
                     In production, Kestrel usually runs behind a reverse proxy like:
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>IIS (Windows)</li>
                        <li style="margin-top: -15px;">Nginx</li>
                        <li style="margin-top: -15px;">Apache</li>
                    </ul>
                    <b>Why use a reverse proxy?</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>SSL termination</li>
                        <li style="margin-top: -15px;">Load balancing</li>
                        <li style="margin-top: -15px;">Security filtering</li>
                    </ul>
                    <i>In production, Kestrel is typically hosted behind a reverse proxy for security and scalability.</i>
                    <b>A reverse proxy is a server that sits in front of backend servers and handles client requests on their behalf</b>.

                    <b>5. Supports HTTP/1.1, HTTP/2, and HTTP/3</b>
                     Kestrel supports:
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>HTTP/1.1</li>
                        <li style="margin-top: -15px;">HTTP/2</li>
                        <li style="margin-top: -15px;">HTTP/3 (QUIC)</li>
                    </ul>
                    <b style="font-size:17px;">How Kestrel Fits in ASP.NET Core Architecture</b>
                    <b>Client -> Reverse Proxy -> Kestrel -> Middleware -> Controller</b>`
            },
            {
                q: "Explain Built-in Dependency Injection (DI)?",
                a: `Dependency Injection (DI) is a design pattern in which an object does not create the objects it depends on, but instead receives them from an external source.
                    Built-in Dependency Injection (DI) in ASP.NET Core is a framework feature that automatically provides required objects (dependencies) to a class instead of the class creating them itself.
                    In Short: ASP.NET Core manages object creation and lifetime for you.
                    In simple terms: Dependencies are "injected" into a class rather than being created inside it.
                    <b>Why Dependency Injection is Needed</b>
                    Without DI:
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Classes create their own dependencies</li>
                        <li style="margin-top: -15px;">Code becomes tightly coupled</li>
                        <li style="margin-top: -15px;">Difficult to test and maintain</li>
                    </ul>
                   <pre style="margin: -20px;color: red;"><code>
                    public class OrderService
                    {
                        private readonly EmailService _emailService = new EmailService();
                    }
                    </code></pre>

                    With DI:
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Loose coupling</li>
                        <li style="margin-top: -15px;">Easy unit testing</li>
                        <li style="margin-top: -15px;">Cleaner and scalable architecture</li>
                    </ul>
                    <pre style="margin: -20px;color: green;"><code>
                    public class OrderService
                    {
                        private readonly IEmailService _emailService;

                        public OrderService(IEmailService emailService)
                        {
                           _emailService = emailService;
                        }
                    }
                    </code></pre>

                    <i>Dependency Injection helps achieve loose coupling and improves testability and maintainability.</i>

                    <b>What Makes ASP.NET Core DI "Built-in"?</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>No external libraries required</li>
                        <li style="margin-top: -15px;">Available by default in every ASP.NET Core project</li>
                        <li style="margin-top: -15px;">Integrated with the framework (Controllers, Middleware, Filters)</li>
                    </ul>

                    <b>How DI Works in ASP.NET Core</b>
                    <b>1. Register Services</b>
                    Services are registered in Program.cs.
                    Types of lifetimes:
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Transient - New instance every time - Lightweight services(Use Case)</li>
                        <li style="margin-top: -15px;">Scoped  - One instance per HTTP request - Database context(Use Case)</li>
                        <li style="margin-top: -15px;">Singleton - One instance for the entire application (Single instance for app lifetime) - Caching, logging(Use Case)</li>
                    </ul>
                    <pre style="margin: -20px;color: green;"><code>
                    builder.Services.AddScoped<IUserService, UserService>();
                     </code></pre>

                    <b>2. Inject Dependencies</b>
                    Dependencies are injected via constructor injection.
                    Types of lifetimes:                     
                    <pre style="margin: -20px;color: green;"><code>
                    public class UserController : Controller
                    {
                        private readonly IUserService _userService;

                        public UserController(IUserService userService)
                        {
                            _userService = userService;
                        }
                    }
                     </code></pre>
                     Interview tip: "DbContext is usually registered as Scoped to avoid concurrency issues."

                    <b>Where DI is Used in ASP.NET Core</b>
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li></li>
                        <li style="margin-top: -15px;">Controllers</li>
                       <li style="margin-top: -15px;">Middleware</li>
                       <li style="margin-top: -15px;">Minimal APIs</li>
                       <li style="margin-top: -15px;">Filters</li>
                       <li style="margin-top: -15px;">Background services</li>
                    </ul>

                    <b>Advantages of Built-in DI</b>
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li></li>
                        <li style="margin-top: -15px;">No need for third-party containers</li>
                       <li style="margin-top: -15px;">Centralized configuration</li>
                       <li style="margin-top: -15px;">Improves testability (mocking)</li>
                       <li style="margin-top: -15px;">Encourages clean architecture</li>
                    </ul>

                    <b>Real-World Example</b>
                    In a real project:
                     <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li></li>
                        <li style="margin-top: -15px;">Controllers depend on interfaces</li>
                       <li style="margin-top: -15px;">Services implement business logic</li>
                       <li style="margin-top: -15px;">Database access is injected via DbContext</li>
                       <li style="margin-top: -15px;">Everything is managed by the DI container</li>
                    </ul>
                    <b>One-Line Interview Answer</b>
                    <i>"Built-in Dependency Injection in ASP.NET Core allows the framework to manage object creation and lifetime, enabling loose coupling, better testability, and cleaner architecture."</i>
                    `
            },
            {
                q: "Explain Middleware-based Request Pipeline?",
                a: `ASP.NET Core processes requests using a middleware pipeline.

                    Each middleware:
                    
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Receives the request</li>
                        <li style="margin-top: -15px;">Can modify it</li>
                        <li style="margin-top: -15px;">Passes it to the next middleware</li>
                    </ul>                    
                    <b>Common middleware examples:</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Receives the request</li>
                        <li style="margin-top: -15px;">Authentication</li>
                        <li style="margin-top: -15px;">Authorization</li>
                        <li style="margin-top: -15px;">Logging</li>
                        <li style="margin-top: -15px;">Exception handling</li>
                    </ul>
                    <b>Why it's powerful:</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Receives the request</li>
                        <li style="margin-top: -15px;">Highly customizable request flow</li>
                        <li style="margin-top: -15px;">Better control over request/response lifecycle</li>
                    </ul>
                    <b>Interview explanation:</b>
                    <i>"Requests in ASP.NET Core flow through a configurable middleware pipeline, allowing fine-grained control over how requests are handled."</i>
                    `
            },
            {
                q: "Explain Unified Framework (MVC, Web API, Razor Pages, Blazor)?",
                a: `ASP.NET Core provides a single, unified framework for building different types of applications:                    
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>MVC -> Full-featured web apps</li>
                        <li style="margin-top: -15px;">Web API -> RESTful APIs</li>
                        <li style="margin-top: -15px;">Razor Pages -> Page-focused development</li>
                        <li style="margin-top: -15px;">Blazor -> Interactive UI using C# instead of JavaScript</li>
                    </ul>
                    <b>Why this is important:</b>
                    <ul style="margin-top: -15px;margin-bottom: -25px;">
                        <li>Same tooling and libraries</li>
                        <li style="margin-top: -15px;">Shared authentication and DI</li>
                        <li style="margin-top: -15px;">Consistent development experience</li>
                    </ul>                    
                    <b>Interview statement:</b>
                    <i>"ASP.NET Core unifies multiple application models under one framework, making development consistent and flexible."</i>
                    `
            },
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
