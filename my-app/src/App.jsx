import "./App.css";

const arrangedTopics = [
  "web application",
  "JS",
  "function",
  "CSS",
  "UI",
  "UX",
  "react",
  "component",
  "props",
  "state",
  "map",
  "filter",
  "buttons",
  "onClick",
  "forms",
  "validation",
  "onSubmit",
  "links",
  "multipages",
  "router",
  "nested routes",
  "global state",
  "Zustand",
];

const rankingLogic = [
  {
    step: "1. Web & JS Foundations (1–6)",
    detail:
      "Every project starts with core web structure, JavaScript logic, functions, styling, and user interface design before adding frameworks.",
  },
  {
    step: "2. Core React Architecture (7–10)",
    detail:
      "Components, props, and local state form the fundamental building blocks required to render and update a React screen.",
  },
  {
    step: "3. Data Lists & Events (11–14)",
    detail:
      "Array methods like map and filter combined with buttons and onClick bring dynamic lists and basic user interactions to life.",
  },
  {
    step: "4. Forms & Validation (15–17)",
    detail:
      "Handling user inputs, validating fields, and processing onSubmit events build directly on top of local state and event handlers.",
  },
  {
    step: "5. Routing & Global State (18–23)",
    detail:
      "Multi-page navigation, nested routes, and global state tools like Zustand come last as an application scales in size.",
  },
];

const topFiveTopics = [
  {
    title: "JS",
    caption: "Core Web Programming Language",
    description:
      "JavaScript is the foundational programming language that powers modern web interactivity, logic, and data handling. Without a solid grasp of JavaScript functions, arrays, and asynchronous operations, building dynamic React components or managing application behavior becomes nearly impossible.",
  },
  {
    title: "component",
    caption: "Reusable UI Building Blocks",
    description:
      "Components are the independent, reusable building blocks of every React user interface. They allow developers to split complex screens into isolated, manageable pieces of code that combine structure, styling, and behavior into clean, maintainable units.",
  },
  {
    title: "state",
    caption: "Dynamic Component Data Memory",
    description:
      "State represents dynamic data that changes over time inside a React component based on user actions or network responses. Whenever state updates, React automatically re-renders the interface so the screen always stays synchronized with current data.",
  },
  {
    title: "props",
    caption: "Parent To Child Data",
    description:
      "Props pass read-only data and event handlers from parent components down to child components. They make components flexible and reusable by allowing the same UI structure to display different content and react to different inputs.",
  },
  {
    title: "router",
    caption: "Multi-Page Application Navigation",
    description:
      "A router maps browser URLs to specific components, enabling seamless multi-page navigation without full page reloads. It organizes large web applications into structured views, supports nested routes, and preserves browser history for smooth user journeys.",
  },
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <span className="tag">supabaseClient</span>
        <h1>Web & React Learning Roadmap</h1>
        <p className="overall-caption">Foundations To Scalable Apps</p>
      </header>

      {/* Section 1: Logic Behind Importance */}
      <section className="section">
        <h2>Logic Behind Importance</h2>
        <div className="logic-grid">
          {rankingLogic.map((item) => (
            <div key={item.step} className="logic-card">
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Top 5 Important Topics */}
      <section className="section">
        <h2>5 Most Important Topics</h2>
        <div className="top-five-list">
          {topFiveTopics.map((topic, index) => (
            <article key={topic.title} className="topic-card">
              <div className="topic-header">
                <h3>
                  {index + 1}. {topic.title}
                </h3>
                <span className="keyword-badge">{topic.caption}</span>
              </div>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Complete Sequence */}
      <section className="section">
        <h2>Complete Priority Sequence (1–23)</h2>
        <ol className="priority-list">
          {arrangedTopics.map((item, index) => (
            <li key={item} className="priority-item">
              <span className="rank">{index + 1}</span>
              <span className="item-text">{item}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default App;
