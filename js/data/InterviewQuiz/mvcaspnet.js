window.skillQuestions = {
    mvcaspnet: {
        name: "MVC.NET / ASP.NET",
        priority: 2,
        questions: [
            { q: "Explain MVC lifecycle", a: "Request -> Routing -> Controller -> Action -> Result -> View -> Response." },
            { q: "ViewData vs ViewBag vs TempData", a: "ViewData/ViewBag are request-scoped; TempData persists across redirects." },
            { q: "Partial View vs Layout", a: "Partial View is reusable UI; Layout is the master page." },
            { q: "What is ModelState?", a: "It stores validation state of model binding." },
            { q: "Attribute routing vs Conventional routing", a: "Attribute routing uses attributes; conventional uses route templates." },
            { q: "AntiForgeryToken purpose", a: "Prevents CSRF attacks." },
            { q: "Session vs Cache", a: "Session is user-specific; Cache is application-wide." },
            { q: "HTML Helpers vs Tag Helpers", a: "Tag Helpers provide cleaner HTML syntax." },
            { q: "TempData storage", a: "Stored in cookies or session." },
            { q: "MVC vs Razor Pages", a: "Razor Pages are page-focused; MVC is controller-focused." }
        ]
    }
};
