window.skillQuestions = {
    dotnetframework: {
        name: ".NET Framework Familiarity",
        priority: 4,
        questions: [
            { q: ".NET Framework vs .NET Core", a: ".NET Framework is Windows-only; .NET Core is cross-platform." },
            { q: "What is AppDomain?", a: "Provides isolation between applications." },
            { q: "WCF vs Web API", a: "WCF supports multiple protocols; Web API is HTTP-based." },
            { q: "Why legacy apps use .NET Framework?", a: "Dependency on old libraries and Windows-only features." },
            { q: "GAC purpose", a: "Stores shared assemblies." },
            { q: "Configuration differences", a: "web.config vs appsettings.json." },
            { q: "Threading model", a: "Uses ThreadPool and synchronization contexts." },
            { q: "CAS security", a: "Code Access Security for permissions." },
            { q: "Migration challenges", a: "API differences, third-party dependencies." },
            { q: "Why AppDomains removed in .NET Core?", a: "Replaced by OS-level isolation." }
        ]
    }
};
