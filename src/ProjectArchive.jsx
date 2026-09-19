import {useEffect,useState} from "react";
import "./ProjectArchive.css";

const archiveProjects=[
  {
    no:"01",
    title:"ARGUS",
    category:"Academic",
    type:"Agentic AI · Multi-Agent Systems",
    image:"/projects/argus.png",
    link:"https://github.com/Neeyati97/ARGUS",
    description:"A multi-agent AI research system that decomposes complex questions into research tasks, gathers evidence from the web and uploaded documents, critiques weak reasoning, evaluates research quality, and produces evidence-based answers."
  },
  {
    no:"02",
    title:"Drug Target Affinity Prediction",
    category:"Academic",
    type:"Deep Learning · Bioinformatics",
    image:"/projects/dta.png",
    link:"https://github.com/Neeyati97/Drug-Target-Affinity-Prediction",
    description:"A deep learning project focused on predicting drug-target binding affinity for computational drug discovery."
  },
  {
    no:"03",
    title:"AgentDB",
    category:"Academic",
    type:"AI · Data · Full Stack",
    image:"/projects/agentdb.png",
    link:"https://github.com/Neeyati97/AgentDB",
    description:"An AI-powered dataset platform for generating synthetic datasets, discovering real-world datasets, analyzing data, and interacting with datasets through an AI chat assistant."
  },
  {
    no:"04",
    title:"Quantum-Safe Voting System",
    category:"Academic",
    type:"Post-Quantum Cryptography",
    image:"/projects/quantum.png",
    link:"https://github.com/Neeyati97/Quantum_safe-votingsystem",
    description:"A secure, anonymous and verifiable electronic voting system using Kyber-512 encryption and Dilithium-2 digital signatures."
  },
  {
    no:"05",
    title:"Wallie",
    category:"Personal",
    type:"Desktop App · Tauri · React",
    image:"/projects/wallie.png",
    link:"https://github.com/Neeyati97/Wallie",
    description:"A lightweight Windows wallpaper application for managing personal wallpaper collections, instant switching, timed rotation and system-tray controls."
  },
  {
    no:"06",
    title:"IMUMA",
    category:"Personal",
    type:"Image Utility",
    image:"/projects/imuma.png",
    link:"https://github.com/Neeyati97/IMUMA",
    description:"A little image workshop for rescuing tiny images, converting formats, and turning pictures into wallpapers."
  },
  {
    no:"07",
    title:"idea13",
    category:"Personal",
    type:"Computer Vision · OpenCV",
    image:"/projects/idea13.png",
    link:"https://github.com/Neeyati97/idea13",
    description:"A playful computer-vision experiment combining webcam interaction, hand gestures, flowers, stars, powers and puzzle effects."
  },
  {
    no:"08",
    title:"Opticloak",
    category:"Academic",
    type:"Machine Learning",
    image:"/projects/opticloak.png",
    link:"https://github.com/Neeyati97/Opticloak",
    description:"A machine-learning project exploring computational prediction and intelligent analysis."
  },
  {
    no:"09",
    title:"Smart Timetable Planning System",
    category:"Academic",
    type:"FastAPI · React",
    image:"/projects/timetable.png",
    link:"https://github.com/Neeyati97/Timetable_System",
    description:"A timetable planning system built with FastAPI and React for organizing and managing schedules through a clean web interface."
  },
  {
    no:"10",
    title:"Snaplet",
    category:"Personal",
    type:"React · TypeScript · PWA",
    image:"/projects/snaplet.png",
    link:"https://github.com/Neeyati97/Snaplet",
    description:"A lightweight study companion combining focus timers, rest sessions, checklist management and long-term progress tracking in an installable PWA."
  },
  {
    no:"11",
    title:"Automated Task Approval",
    category:"ServiceNow",
    type:"ServiceNow · Flow Designer · ACL",
    image:"/projects/task-approval.png",
    link:"https://github.com/Neeyati97/Automated-task-approval-with-acl-and-workflows-Servicenow-",
    description:"An automated task-management and approval workflow using ServiceNow Flow Designer, ACLs and role-based permissions."
  },
  {
    no:"12",
    title:"Streamlining Ticket Assignment",
    category:"ServiceNow",
    type:"ServiceNow · Automation",
    image:"/projects/ticket-assignment.png",
    link:"https://github.com/Neeyati97/Streamlining-ticket-assignment",
    description:"A ServiceNow workflow that automates ticket assignment using predefined conditions, assignment rules and role-based logic."
  },
  {
    no:"13",
    title:"Real Estate",
    category:"Learning",
    type:"React · Tailwind · Framer Motion",
    image:"/projects/real-estate.png",
    link:"https://github.com/Neeyati97/real_estate",
    description:"A responsive real-estate web application featuring property listings, agent details and interactive navigation."
  },
  {
    no:"14",
    title:"Flutter Basic Breakkie",
    category:"Learning",
    type:"Flutter · Mobile UI",
    image:"/projects/breakkie.png",
    link:"https://github.com/Neeyati97/Flutter-basic-breakkie_",
    description:"A Flutter learning project featuring popular diets, recommended meal plans, categories, SVG icons and search filters."
  },
  {
    no:"15",
    title:"Currency Converter",
    category:"Learning",
    type:"Flutter · API Integration",
    image:"/projects/currency.png",
    link:"https://github.com/Neeyati97/Currency_converter",
    description:"A Flutter currency-converter app with real-time USD-to-INR exchange-rate fetching, validation and responsive UI."
  },
  {
    no:"16",
    title:"FashViT-ion",
    category:"Academic",
    type:"Vision Transformer · Fine-Tuning",
    image:"/projects/fashvit-ion.png",
    link:"https://github.com/Neeyati97/FashViT-ion",
    description:"A fashion-focused deep learning project using Vision Transformer fine-tuning for image classification, model evaluation and custom fashion-image inference."
  }
];

const learningRepos=[
  {
    no:"01",
    title:"AI / ML Notes",
    type:"NOTES · PRACTICALS",
    description:"Structured notes and hands-on work covering Python, NumPy, Pandas, statistics, SQL, machine learning, deep learning, NLP, computer vision and MLOps.",
    topics:["Python","ML","Deep Learning","NLP","CV","MLOps"],
    link:"https://github.com/Neeyati97/AIML"
  },
  {
    no:"02",
    title:"Generative AI",
    type:"NOTES · PRACTICALS",
    description:"My Generative AI learning collection covering LLMs, Hugging Face, OpenAI, prompt engineering, vector databases, LangChain, RAG, fine-tuning, LlamaIndex and LLMOps.",
    topics:["LLMs","LangChain","RAG","Fine-Tuning","LLMOps"],
    link:"https://github.com/Neeyati97/Generative_AI"
  },
  {
    no:"03",
    title:"Agentic AI",
    type:"NOTES · PRACTICALS",
    description:"Notes and practical work covering AI agents, reinforcement learning concepts, LangGraph, multi-agent systems, CrewAI, Agno, Agentic RAG, MCP and OpenAI Agents SDK.",
    topics:["Agents","LangGraph","CrewAI","Agno","MCP"],
    link:"https://github.com/Neeyati97/Agentic_AI"
  },
  {
    no:"04",
    title:"PyTorch Practicals",
    type:"HANDS-ON · NOTEBOOKS",
    description:"A collection of PyTorch notebooks exploring classification workflows across audio, images, pretrained vision models, tabular data and text.",
    topics:["PyTorch","Audio","Vision","Tabular","Text"],
    link:"https://github.com/Neeyati97/PyTorch_Practical"
  }
];

function ProjectArchive(){
  const [filter,setFilter]=useState("All");
  const [cursor,setCursor]=useState({x:0,y:0,active:false,hover:false});

  const filters=["All","Academic","Personal","ServiceNow","Learning"];

  const visibleProjects=
    filter==="All"
      ? archiveProjects
      : archiveProjects.filter(project=>project.category===filter);

  useEffect(()=>{
    const move=e=>setCursor(c=>({...c,x:e.clientX,y:e.clientY,active:true}));
    const leave=()=>setCursor(c=>({...c,active:false}));

    window.addEventListener("mousemove",move);
    document.documentElement.addEventListener("mouseleave",leave);

    return()=>{
      window.removeEventListener("mousemove",move);
      document.documentElement.removeEventListener("mouseleave",leave);
    };
  },[]);

  const hoverOn=()=>setCursor(c=>({...c,hover:true}));
  const hoverOff=()=>setCursor(c=>({...c,hover:false}));

  return(
    <main className="archive-page">

      <div
        className={`archive-cursor ${cursor.active?"visible":""} ${cursor.hover?"hovering":""}`}
        style={{left:cursor.x,top:cursor.y}}
      >
        <img src="/archive/cursor.png" alt="" />
      </div>

      <nav className="archive-nav">
        <a
          href="#projects"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          ← Back to portfolio
        </a>

        <span>NV / PROJECT ARCHIVE</span>
      </nav>

      <header className="archive-hero">

        <div className="archive-title">
          <span>PROJECT ARCHIVE / 2026</span>

          <h1>
            More things<br/>
            I've made.
          </h1>

          <p>
            Experiments, academic work, utilities and projects built simply
            because I wanted to see if I could make them work.
          </p>
        </div>

        <div className="archive-player">
          <img
            src="/archive/cassette-player.png"
            alt="Blue floral cassette player"
          />

          <small>PLAY / EXPLORE / REPEAT</small>
        </div>

      </header>

      <section className="archive-projects">

        <div className="archive-toolbar">

          <div className="filter-cloud">
            {filters.map(item=>(
              <button
                key={item}
                className={`filter-bubble ${filter===item?"active":""}`}
                onClick={()=>setFilter(item)}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                {item}
                <span>{filter===item?"●":"○"}</span>
              </button>
            ))}
          </div>

          <div className="project-count">
            <span>{String(visibleProjects.length).padStart(2,"0")}</span>
            <small>SHOWING</small>
          </div>

        </div>

        <div className="archive-grid">

          {visibleProjects.map(project=>(
            <article
              className="archive-card"
              key={project.title}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >

              <div className="archive-image">

                <img
                  src={project.image}
                  alt={project.title}
                  onError={e=>{
                    e.currentTarget.style.display="none";
                    e.currentTarget.parentElement.classList.add("missing-image");
                  }}
                />

                <span>{project.no}</span>

                <div className="archive-fallback">
                  <small>{project.category}</small>
                  <strong>{project.title}</strong>
                </div>

              </div>

              <div className="archive-info">

                <div className="archive-meta">
                  <span>{project.category}</span>
                  <small>{project.type}</small>
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                >
                  View project ↗
                </a>

              </div>

            </article>
          ))}

        </div>

      </section>

      <section className="archive-learning">

        <div className="learning-heading">

          <div>
            <span>NOTES / LEARNING / PRACTICE</span>

            <h2>
              Things I learned<br/>
              along the way.
            </h2>
          </div>

          <p>
            Notes I wrote, concepts I revised and code I practiced while
            figuring things out one topic at a time.
          </p>

        </div>

        <div className="learning-grid">

          {learningRepos.map(repo=>(
            <article
              className="learning-card"
              key={repo.title}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >

              <div className="learning-card-top">
                <span>{repo.no}</span>
                <small>{repo.type}</small>
              </div>

              <h3>{repo.title}</h3>

              <p>{repo.description}</p>

              <div className="learning-tags">
                {repo.topics.map(topic=>(
                  <span key={topic}>{topic}</span>
                ))}
              </div>

              <a
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                Explore repository
                <span>↗</span>
              </a>

            </article>
          ))}

        </div>

      </section>

      <section className="archive-ending">

        <small>THE ARCHIVE IS NEVER REALLY FINISHED.</small>

        <h2>
          More experiments will appear here.
        </h2>

        <span>16 → ∞</span>

      </section>

      <footer className="archive-footer">
        <span>NEEYATI VIJJESWARAPU</span>

        <a
          href="#projects"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          RETURN TO PORTFOLIO ↑
        </a>
      </footer>

    </main>
  );
}

export default ProjectArchive;