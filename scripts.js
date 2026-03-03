function main() {
    const mainView = new MainView();
    const roboticsEmbeddedSystems = new RoboticsEmbeddedSystemsView();
    const fpgaProjects = new FPGAView();
    const webSoftwareApps = new WebSoftwareAppsView();

    function renderRoute() {
        const page = document.getElementById("page-view");
        emptyDOM(page);

        const hash = window.location.hash || "#/about";

        if (hash === "#/RoboticsEmbeddedSystems") {
            page.appendChild(roboticsEmbeddedSystems.elem);
        }
        else if (hash === "#/fpga") {
            page.appendChild(fpgaProjects.elem);
        }
        else if(hash === "#/WebSoftwareApplications") {
            page.appendChild(webSoftwareApps.elem);
        }
        else {
            page.appendChild(mainView.elem);
        }
    }

    renderRoute();
    window.addEventListener("hashchange", renderRoute);
}

window.addEventListener("load", main);

// helper to convert HTML string to DOM element
function createDOM(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
}

// empty DOM
function emptyDOM(elem) {
    while (elem.firstChild) elem.removeChild(elem.firstChild);
}

class MainView {
    constructor() {
        const htmlString = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-pic"></div>
                <h2>Bernek Aujla</h2>
                <p>Computer Engineering Student at UBC</p>
                <p>Email: aujlabernek@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/bernek-aujla-60b63b21b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </aside>

            <main class="main-content">
                <nav class="tabs">
                    <a href="#" class="active">HOME</a>
                    <a href="#/RoboticsEmbeddedSystems">Robotics & Embedded Systems</a>
                    <a href="#/fpga">FPGA & Hardware Acceleration</a>
                    <a href="#/WebSoftwareApplications">Web & Software Applications</a>
                </nav>

                
                    <section class="about card">
                        <h1>About Me</h1>
                        <p>
                            Hi, I’m Bernek Aujla, a computer engineering student at the University of British Columbia with a strong interest in 
                            robotics, embedded systems, FPGA design, and autonomous systems. I first got into tech by building my own PC, which sparked
                            my curiosity about how hardware and software interact. I am currently doing a co-op as an FPGA developer at Lucid Vision Labs,
                            where I have gained hands-on experience in FFPGA RTL design, simulation, and on-hardware validation using VHDL.
                        </p>
                    </section>

                    <section class="skills card">
                        <h1>Technical Skills</h1>

                        <div class="skill-category">
                            <h3>Programming</h3>
                            <div class="skill-list">
                            <span>Java</span>
                            <span>C/C++</span>
                            <span>C#</span>
                            <span>Python</span>
                            <span>Verilog/SystemVerilog</span>
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>
                            <span>SQL</span>
                            <span>VHDL</span>
                            </div>
                        </div>

                        <div class="skill-category">
                            <h3>Tools & Frameworks</h3>
                            <div class="skill-list">
                            <span>IntelliJ</span>
                            <span>Visual Studio</span>
                            <span>Visual Studio Code</span>
                            <span>Git/GitHub</span>
                            <span>Quartus</span>
                            <span>ModelSim</span>
                            <span>Docker</span>
                            <span>ROS 2</span>
                            <span>MATLAB</span>
                            </div>
                        </div>

                        <div class="skill-category">
                            <h3>Platforms / Hardware</h3>
                            <div class="skill-list">
                            <span>DE1-SOC</span>
                            <span>FPGA</span>
                            <span>Breadboard</span>
                            <span>Oscilloscope</span>
                            <span>Unix/Linux/Ubuntu</span>
                            </div>
                        </div>

                        </section>

                        <section class="education card">
                            <h1>Education</h1>
                            <h4><strong>Bachelor of Applied Science – Computer Engineering</strong></h4>
                            <h4>University of British Columbia | Expected Graduation: May 2027</h4>
                        </section>

                
            </main>
        </div>
        `;
        this.elem = createDOM(htmlString);
    }
}

class RoboticsEmbeddedSystemsView {
    constructor() {
        const htmlString = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-pic"></div>
                <h2>Bernek Aujla</h2>
                <p>Computer Engineering Student at UBC</p>
                <p>Email: aujlabernek@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/bernek-aujla-60b63b21b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </aside>

            <main class="main-content">
                <nav class="tabs">
                    <a href="#">HOME</a>
                    <a href="#/RoboticsEmbeddedSystems" class="active">Robotics & Embedded Systems</a>
                    <a href="#/fpga">FPGA & Hardware Acceleration</a>
                    <a href="#/WebSoftwareApplications">Web & Software Applications</a>
                </nav>

                <section class="projects">
                    <h2>Embedded & Software Systems</h2>
                    <div class="project-grid">

                        <div class="card">
                        <h3>F1TENTH CAR | UBC</h3>
                        <p class="project-date">JAN 2025 – APRIL 2025</p>
                        <ul>
                            <li>Collaborated in a team of five to design, build, and program a 1/10th-scale autonomous F1 car; placed in the top four at a competitive university race</li>
                            <li>Developed and tested different perception and control algorithms using ROS 2, and Python, while applying concepts from linear algebra, calculus, optimization, and data structures and learning new concepts like computer vision and reinforced learning</li>
                            <li>Implemented a gap-following algorithm using LiDAR data, while calculating steering angles using a bicycle kinematic model and dynamically adjusting the speed to enable smooth navigation</li>
                            <li>Diagnosed and resolved complex issues that only appeared on the physical car but not in simulation environments</li>
                            <li>Explored reinforcement learning using the CARLA simulator for end-to-end autonomous driving as a separate project, documented findings and challenges in a formal report</li>
                        </ul>
                        </div>

                        <div class="card">
                        <h3>OS161 PROJECT | UBC</h3>
                        <p class="project-date">SEPT 2024 – DEC 2024</p>
                        <ul>
                            <li>Learned about synchronization and implemented locks and condition variables in C to the OS161 source code</li>
                            <li>Collaborated in a group of two to create the system calls for the file system and process creation, termination, and management in OS161, enabling user-space interaction with the kernel</li>
                            <li>Developed and debugged a virtual memory system, that had page tables for physical and virtual memory, used for memory management and address translation, which improved efficiency</li>
                            <li>Gained proficiency in C low-level debugging tools like GDB for kernel development and optimization and how to work in a docker container</li>
                            <li>Analyzed and navigated a large, pre-existing OS161 source codebase to understand kernel architecture and identify integration points for implementing system calls and virtual memory management</li>
                        </ul>
                        </div>

                        
                    </div>
                </section>


                
            </main>
        </div>
        `;
        this.elem = createDOM(htmlString);
    }
}


class FPGAView {
    constructor() {
        const htmlString = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-pic"></div>
                <h2>Bernek Aujla</h2>
                <p>Computer Engineering Student at UBC</p>
                <p>Email: aujlabernek@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/bernek-aujla-60b63b21b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </aside>

            <main class="main-content">
                <nav class="tabs">
                    <a href="#">HOME</a>
                    <a href="#/RoboticsEmbeddedSystems">Robotics & Embedded Systems</a>
                    <a href="#/fpga" class="active">FPGA & Hardware Acceleration</a>
                    <a href="#/WebSoftwareApplications">Web & Software Applications</a>
                </nav>

                <section class="projects">
                    <h2>FPGA & Hardware Projects</h2>
                    <div class="project-grid">

                        <div class="card">
                        <h3>NEURAL NETWORK ACCELERATOR ON FPGA | UBC</h3>
                        <p class="project-date">NOV 2024 – DEC 2024</p>
                        <ul>
                            <li>Designed a system-on-chip with embedded Nios II and a custom VGA adaptor, word-copy accelerator, and dot product accelerator using Platform Designer</li>
                            <li>Implemented master and slave protocols for custom component integration</li>
                            <li>Optimized memory usage by leveraging on-chip SRAM for dot product calculations</li>
                            <li>Used software to communicate with different hardware components to determine which digit (0..9) a 28×28-pixel greyscale image is inputted</li>
                        </ul>
                        </div>

                        <div class="card">
                        <h3>ARC4 DECRYPTION CIRCUIT | UBC</h3>
                        <p class="project-date">OCT 2024 – NOV 2024</p>
                        <ul>
                            <li>Worked in a group of two to implement the ARC4 algorithm in Verilog by creating separate modules for the components of the algorithm like the key scheduling and pseudo-random generation</li>
                            <li>Learned how to create RAM using the Megafunction Wizard in Quartus, and gained experience creating a design that contains several on-chip memories and modules with variable latencies</li>
                            <li>Simulated and tested the circuit using ModelSim to validate correct decryption outputs across various input streams</li>
                            <li>Improved efficiency by having two modules run at the same time and had one go through all the even keys and the other go through the odd keys</li>
                        </ul>
                        </div>

                        <div class="card">
                        <h3>SIMPLE RISC MACHINE | UBC</h3>
                        <p class="project-date">NOV 2023 – DEC 2023</p>
                        <ul>
                            <li>Developed the Datapath, and Controller for the RISC Machine in Verilog and created a testbench to verify the design</li>
                            <li>Integrated RAM for to store instruction and data which allowed the machine to execute machine code</li>
                            <li>Debugged design using ModelSim waveforms and deployed code on DE1-SOC using Quartus</li>
                        </ul>
                        </div>

                        
                    </div>
                    </section>

                
            </main>
        </div>
        `;
        this.elem = createDOM(htmlString);
    }
}

class WebSoftwareAppsView {
    constructor() {
        const htmlString = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-pic"></div>
                <h2>Bernek Aujla</h2>
                <p>Computer Engineering Student at UBC</p>
                <p>Email: aujlabernek@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/bernek-aujla-60b63b21b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </aside>

            <main class="main-content">
                <nav class="tabs">
                    <a href="#">HOME</a>
                    <a href="#/RoboticsEmbeddedSystems">Robotics & Embedded Systems</a>
                    <a href="#/fpga">FPGA & Hardware Acceleration</a>
                    <a href="#/WebSoftwareApplications" class="active">Web & Software Applications</a>
                </nav>

                <section class="projects">
                    <h2>Web & Software Applications</h2>
                    <div class="project-grid">

                        <div class="card">
                        <h3>ART AUCTION WEB APP WITH SQL DATABASE | UBC</h3>
                        <p class="project-date">JAN 2025 – APRIL 2025</p>
                        <ul>
                            <li>Collaborated in a team of three to develop a full-stack web application where users can bid on and keep track art pieces they own</li>
                            <li>Designed and implemented a relational SQL database from scratch, including ER diagram creation, schema design, and SQL DDL scripting</li>
                            <li>Wrote and optimized backend SQL queries to support frontend functionalities</li>
                            <li>Gained hands-on experience integrating a dynamic web app with a custom-built SQL backend</li>
                        </ul>
                        </div>

                        <div class="card">
                        <h3>WEB CHAT APPLICATION | UBC</h3>
                        <p class="project-date">SEPT 2024 – DEC 2024</p>
                        <ul>
                            <li>Collaborated in a group of two, to create a web site where the user can create a chat room about a topic and people can have live chat in these chat rooms</li>
                            <li>Learned how to create a client-side GUI using HTML and CSS and then have a JavaScript program dynamically render the application on the client side</li>
                            <li>Implemented a way for the client-side code to exchange data with the server which stored the data in a MongoDB database</li>
                            <li>Added basic authentication and authorization, as well as some defensive features and an AI feature that generated positive, neutral, and negative response to the last received message in the room</li>
                        </ul>
                        </div>
                        
                        <div class="card">
                        <h3>INTERNET OF THINGS ANALYTICS SERVER | UBC</h3>
                        <p class="project-date">NOV 2023 – DEC 2023</p>
                        <ul>
                            <li>Worked in a team of three to create a program in Java that simulated actuators/sensors sending events through sockets and then the server processed these events or client requests</li>
                            <li>Learned about concurrent programming and how to create threads so that multiple actuators/sensors can send events at the same time and so that our server can have multiple clients</li>
                            <li>Improved our server implementation by making it more efficient and thread safe by creating a separate thread per client that kept track of that client’s events/requests</li>
                        </ul>
                        </div>


                    </div>
                </section>

                
            </main>
        </div>
        `;
        this.elem = createDOM(htmlString);
    }
}