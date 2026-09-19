import {useEffect,useState} from "react";
import ProjectArchive from "./ProjectArchive";
import "./App.css";
import profile from "./assets/profile.png";
import {FaReact,FaGitAlt,FaGithub} from "react-icons/fa";
import {SiTensorflow,SiPytorch,SiScikitlearn,SiOpencv,SiJavascript,SiFastapi,SiDjango,SiMysql,SiJupyter} from "react-icons/si";
/* LINKS — CHANGE ONLY THESE */

const LINKS = {
  email: "mailto:neeyati.vijj@gmail.com",
  github: "https://github.com/Neeyati97",
  linkedin: "https://linkedin.com/in/neeyativijj",
  resume: "https://drive.google.com/file/d/1eBSulKcSUeY_1Ia99tRh_qofBV1q734U/view?usp=sharing",

  certificates:{
  infosys:"https://drive.google.com/file/d/1qwUUTPvRyc8EaWwXoOwrnEWXQqfx3viI/view?usp=sharing",
  hippocloud:"https://drive.google.com/file/d/1FRc6VE6Tq4Dbsu9nciv-3YuV0GybHKdb/view?usp=sharing",
  csa:"https://drive.google.com/file/d/12zmR2-NW50RLQM0TRVGydkLdDgsNeYEB/view?usp=sharing",
  cad:"https://drive.google.com/file/d/1DkBxemXwVMC8BQIraBoUJEBTEW_TM_6n/view?usp=sharing",
  aws:"https://drive.google.com/file/d/1asyYilQ5lubFcXU2haR-oVZMQkJ6dGE-/view?usp=sharing",
  analytics:"https://drive.google.com/file/d/1u0vmjt6OzFxM2PMklOThr4e0xzRah0GF/view?usp=sharing",
  agile:"https://drive.google.com/file/d/1f7SZnGFCtjpgT4S_9StLIoS8Qo2WydUT/view?usp=sharing",
  cv:"https://drive.google.com/file/d/1UkktLgBZGYS0XiDjQ3E_hYdo0Y1zGmo4/view?usp=sharing",
  llm:"https://drive.google.com/file/d/15E7CMxBCkNloBkk46Av8pNWTcNwV1OGT/view?usp=sharing",
  dl:"https://drive.google.com/file/d/1AYEpylfK_ayjDSj3ndpVNby9cct7jD6j/view?usp=sharing",
  aml:"https://drive.google.com/file/d/1t1pAlQRl5Z1PMJsPbKmMbZaXlntT9J93/view?usp=sharing",
},
  projects: {
    dta: "https://github.com/Neeyati97/Drug-Target-Affinity-Prediction",
    agentdb: "https://github.com/Neeyati97/AgentDB",
    ai: "https://github.com/Neeyati97/ARGUS",
  },
};

const nav = ["about", "experience", "projects", "skills", "position", "contact"];

const projects = [
  {
    no: "01",
    name: "Drug Target Affinity",
    type: "Deep Learning · Bioinformatics",
    image: "/projects/dta.png",
    text: "A deep learning system for predicting drug–target binding affinity for computational drug discovery.",
    link: LINKS.projects.dta,
  },
  {
    no: "02",
    name: "AgentDB",
    type: "AI · Data · Full Stack",
    image: "/projects/agentdb.png",
    text: "An intelligent workspace for generating, exploring and interacting with structured datasets.",
    link: LINKS.projects.agentdb,
  },
  {
    no: "03",
    name: "AI",
    type: "Agentic Systems",
    image: "/projects/ai.png",
    text: "A multi-agent research system that decomposes complex goals and coordinates specialized research agents.",
    link: LINKS.projects.ai,
  },
];
const skillGroups=[
  {title:"AI / ML",items:[
    {name:"Python",icon:<span>Py</span>,color:"#3776AB"},
    {name:"Pandas",icon:<span>pd</span>,color:"#150458"},
    {name:"NumPy",icon:<span>np</span>,color:"#013243"},
    {name:"Scikit-learn",icon:<SiScikitlearn />,color:"#F7931E"},
    {name:"Matplotlib",icon:<span>plt</span>,color:"#11557C"},
    {name:"TensorFlow",icon:<SiTensorflow />,color:"#FF6F00"},
    {name:"PyTorch",icon:<SiPytorch />,color:"#EE4C2C"},
    {name:"OpenCV",icon:<SiOpencv />,color:"#5C3EE8"},
  ]},

  {title:"Web Development",items:[
    {name:"HTML5",icon:<span>HTML</span>,color:"#E34F26"},
    {name:"CSS3",icon:<span>CSS</span>,color:"#1572B6"},
    {name:"JavaScript",icon:<SiJavascript />,color:"#F7DF1E"},
    {name:"React",icon:<FaReact />,color:"#61DAFB"},
    {name:"Django",icon:<SiDjango />,color:"#092E20"},
    {name:"FastAPI",icon:<SiFastapi />,color:"#009688"},
    {name:"SQL",icon:<span>SQL</span>,color:"#336791"},
    {name:"MySQL",icon:<SiMysql />,color:"#4479A1"},
  ]},

  {title:"Tools",items:[
    {name:"Git",icon:<FaGitAlt />,color:"#F05032"},
    {name:"GitHub",icon:<FaGithub />,color:"#FFFFFF"},
    {name:"Jupyter",icon:<SiJupyter />,color:"#F37626"},
    {name:"Power BI",icon:<span>BI</span>,color:"#F2C811"},
    {name:"Excel",icon:<span>XL</span>,color:"#217346"},
    {name:"PowerPoint",icon:<span>PPT</span>,color:"#D24726"},
    {name:"VS Code",icon:<span>VS</span>,color:"#007ACC"},
    {name:"SQLite",icon:<span>SQL</span>,color:"#003B57"},
    {name:"PyCharm",icon:<span>PC</span>,color:"#21D789"},
    {name:"ServiceNow",icon:<span>SN</span>,color:"#81B5A1"},
    {name:"IntelliJ IDEA",icon:<span>IJ</span>,color:"#FE315D"},
  ]},
];
const certificates=[
  ["01","ServiceNow CSA","ServiceNow",LINKS.certificates.csa],
  ["02","ServiceNow CAD","ServiceNow",LINKS.certificates.cad],
  ["03","AWS","AWS",LINKS.certificates.aws],
  ["04","Data Analytics","edX",LINKS.certificates.analytics],
  ["05","Agile Practitioner & Scrum Master","L&T EduTech",LINKS.certificates.agile],
  ["06","Computer Vision Essentials","L&T EduTech",LINKS.certificates.cv],
  ["07","Language Model Architecture","L&T EduTech",LINKS.certificates.llm],
  ["08","Deep Learning Essentials","L&T EduTech",LINKS.certificates.dl],
  ["09","Applied Machine Learning","L&T EduTech",LINKS.certificates.aml],
];

function App() {
  const [showArchive,setShowArchive]=useState(window.location.hash==="#archive");

  useEffect(()=>{
    const handleHash=()=>setShowArchive(window.location.hash==="#archive");
    window.addEventListener("hashchange",handleHash);
    return()=>window.removeEventListener("hashchange",handleHash);
  },[]);

  useEffect(()=>{
    if(showArchive){
      window.scrollTo({top:0,left:0,behavior:"instant"});
    }
  },[showArchive]);

  useEffect(()=>{
    if(showArchive)return;

    const observer=new IntersectionObserver(
      entries=>entries.forEach(e=>e.target.classList.toggle("show",e.isIntersecting)),
      {threshold:.12}
    );

    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[showArchive]);

  useEffect(()=>{
    if(!showArchive&&window.location.hash==="#projects"){
      requestAnimationFrame(()=>{
        document.getElementById("projects")?.scrollIntoView({behavior:"instant"});
      });
    }
  },[showArchive]);

  if(showArchive)return <ProjectArchive/>;
  return (
    <main>
      {/* NAVBAR — FOLLOWS ENTIRE PAGE */}
      <nav className="nav floating-nav">
        <a className="brand" href="#home">NV</a>

        <div className="navlinks">
          {nav.map(item => (
            <a key={item} href={`#${item}`}>{item}</a>
          ))}
        </div>
      </nav>

      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot" />
              Machine Learning Developer
            </div>

            <h1>Hi, I'm <strong>Neeyati Vijjeswarapu</strong></h1>

            <p>
              I build intelligent systems, explore ideas through code and turn
              complicated problems into useful products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button primary">See my work ↘</a>
              <a href={LINKS.resume} target="_blank" className="button ghost">Resume ↗</a>
            </div>
          </div>

          <div className="hero-playground reveal">
            <div className="blob blob-sky" />
            <div className="blob blob-mint" />
            <div className="blob blob-butter" />

            <div className="portrait-shell">
              <img src={profile} alt="Neeyati Vijjeswarapu" />
            </div>

            <div className="floating-pill pill-one">HYDERABAD, INDIA</div>
            <div className="floating-pill pill-two">AI / ML</div>

            <div className="spark spark-one">✦</div>
            <div className="spark spark-two">✦</div>
          </div>
        </div>

        <div className="hero-marquee">
          <div>
            MACHINE LEARNING ✦ CREATIVE DEVELOPMENT ✦ INTELLIGENT SYSTEMS ✦
            MACHINE LEARNING ✦ CREATIVE DEVELOPMENT ✦ INTELLIGENT SYSTEMS ✦
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label reveal"><span>01</span><p>About me</p></div>

        <div className="about-grid">
          <div className="about-title reveal">
            <p>I like making</p>
            <h2>ideas<br />work.</h2>

            <div className="mini-orbit">
              <span>think</span><i>✦</i><span>build</span>
            </div>
          </div>

          <div className="about-story reveal">
            <p className="lead">
              I'm a Computer Science graduate interested in machine learning,
              intelligent systems and building technology that feels useful.
            </p>

            <p>
              I enjoy experimenting beyond the obvious solution and learning by
              turning ideas into real applications.
            </p>

            <a href={LINKS.resume} target="_blank">View full resume ↗</a>
          </div>

          <article className="education-bubble reveal">
            <div className="bubble-top"><span>EDUCATION</span><strong>01</strong></div>

            <div>
              <small>2022 — 2026</small>
              <h3>GMR Institute<br />of Technology</h3>
              <p>B.Tech · Computer Science & Engineering</p>
            </div>

            <div className="cgpa">
              <span>CGPA</span><strong>8.7</strong><small>/ 10</small>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience section" id="experience">
        <div className="section-label reveal"><span>02</span><p>Experience</p></div>

        <div className="experience-head reveal">
          <h2>A little proof<br />I've been busy.</h2>
          <p>Learning, building and working outside the classroom.</p>
        </div>

        <div className="experience-board reveal">
          <article className="job job-latest">
            <span className="year">2025—26</span>
            <div>
              <small>INTERNSHIP</small>
              <h3>Infosys</h3>
              <strong>Software Development Intern</strong>
              <p>Java · SQL · .NET · Angular</p>
            </div>
          </article>

          <article className="job">
            <span className="year">2024</span>
            <div>
              <small>INTERNSHIP</small>
              <h3>HippoCloud Technologies</h3>
              <strong>Python & Django Intern</strong>
              <p>Python · Django · Backend Development</p>
            </div>
          </article>

          <div className="cert-stack">
            <a href={LINKS.certificates.infosys} target="_blank" className="certificate">
              <div className="cert-preview"><img src="/certificates/infosys-preview.png"
        alt="Infosys internship certificate"/></div>
              <span>View credential ↗</span>
            </a>

            <a href={LINKS.certificates.hippocloud} target="_blank" className="certificate cert-second">
              <div className="cert-preview"> <img src="/certificates/hippocloud-preview.png"
        alt="HippoCloud internship certificate"/></div>
              <span>View credential ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section" id="projects">
        <div className="section-label reveal"><span>03</span><p>Selected work</p></div>

        <div className="projects-head reveal">
          <h2>Things I've<br />made happen.</h2>
          <div className="archive-link-wrap">
  <a href="#archive" className="star-button" title="Open Project Archive">★</a>
  <span>to archive</span>
</div></div>

        <div className="project-grid">
          {projects.map(p => (
            <article className="project reveal" key={p.name}>
              <div className="project-image">
                <img src={p.image} alt={`${p.name} preview`} />
                <span>{p.no}</span>
              </div>

              <div className="project-info">
                <small>{p.type}</small>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <a href={p.link} target="_blank">Explore project ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
<section className="skills section" id="skills">
  <div className="section-label reveal"><span>04</span><p>Toolkit</p></div>

  <div className="skills-head reveal">
    <h2>Things in<br />my toolbox.</h2>
  </div>

  <div className="skills-float-grid">
    {skillGroups.map((group,groupIndex)=>(
      <article className="skills-float-card reveal" key={group.title}>
        <div className="skills-card-top">
          <h3>{group.title}</h3>
          <span>{String(groupIndex+1).padStart(2,"0")}</span>
        </div>

        <div className="skills-orbit">
          {group.items.map((skill,index)=>(
            <div
              className={`skill-badge skill-pos-${index+1}`}
              key={skill.name}
            >
              <div className="skill-logo-shell">
                <div
                  className="skill-logo"
                  style={{color:skill.color}}
                >
                  {skill.icon}
                </div>
              </div>

              <small>{skill.name}</small>
            </div>
          ))}
        </div>
      </article>
    ))}
  </div>

  <div className="credentials-head reveal">
  <span>CERTIFICATIONS</span>
  <p>Learning that made it out of the notebook.</p>
</div>

<div className="credentials reveal">
  {certificates.map(([no,name,issuer,link])=>(
    <a href={link} target="_blank" rel="noreferrer" key={name}>
      <span>{no}</span>

      <div>
        <strong>{name}</strong>
        <small>{issuer}</small>
      </div>

      <i>↗</i>
    </a>
  ))}
</div>
</section>

{/* POSITION */}
<section className="position section" id="position">
  <div className="section-label reveal">
    <span>05</span>
    <p>Leadership</p>
  </div>

  <div className="position-grid">
    <div className="position-copy reveal">
      <h2>Not just<br />behind a screen.</h2>
      <p>ACM Student Chapter · GMR Institute of Technology</p>
    </div>

    <div className="roles reveal">
      <article className="role featured">
        <span>2025 — 2026</span>
        <h3>Treasurer</h3>
        <p>Core Position at ACM Student Chapter</p>
      </article>

      <article className="role">
        <span>2023 — 2025</span>
        <h3>Coordinator</h3>
        <p>ACM Student Chapter</p>
      </article>
    </div>
  </div>
</section>

{/* CONTACT */}
<section className="contact section" id="contact">
  <div className="contact-bubble reveal">
    <small>06 / SAY HELLO</small>

    <h2>Want to make<br />something cool?</h2>

    <div className="socials">
      <a href={LINKS.email}>Email ↗</a>
      <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
    </div>

    <a href="#home" className="top">
      <span>↑</span>
      Back to top
    </a>
  </div>

  <div className="contact-decoration">
    <span>✦</span>
    <span>hello!</span>
  </div>
</section>

<footer>
  <strong>THANK YOU.</strong>
  <span>Designed & built by Neeyati Vijjeswarapu.</span>
</footer>
    </main>
  );
}

export default App;