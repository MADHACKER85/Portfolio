import React from 'react';

function App() {
  const skills = [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },
    { name: 'Git' },
    { name: 'Python' },
    { name: 'SQL' },
    { name: 'Power BI' },
    { name: 'Machine Learning' },
    { name: 'Data Analysis' },
    { name: 'VS Code' },
    { name: 'Figma' },
    { name: 'GitHub' },
    { name: 'Responsive Design' },
    { name: 'Google Colab' },
    { name: 'Canva' },
    { name: 'C Programming' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-primary-300">Keerthivasan K</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Data Analyst & Front-End Developer
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/MADHACKER85" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/keerthivasan-k-24586a214/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:kkvs5699@gmail.com" className="text-white hover:text-primary-300 transition-colors">
              Email
            </a>
            <a href="tel:+919025416985" className="text-white hover:text-primary-300 transition-colors">
              Phone
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-primary-900" id="about">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-300 text-center text-lg leading-relaxed">
              A self-motivated Bachelor of Computer Science Engineering student with a strong focus on programming,
              data structures, and software development. Skilled in data visualization, statistical analysis, and predictive
              modeling, driving successful project outcomes. Known for productivity, efficiency, and strong
              communication, contributing to effective team collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-gray-900" id="skills">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-gray-800/50 rounded-lg p-6 shadow-lg transition-all duration-500 ease-in-out 
                         hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] hover:scale-105 hover:bg-gray-700/50 
                         border border-gray-700 hover:border-primary-500 cursor-pointer relative overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <p className="text-center text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
                <div
                  className="absolute -inset-[100%] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,163,255,0.15),transparent_50%)] 
                           group-hover:inset-[-50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-secondary-900" id="education">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-secondary-500 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Engineering (B.E.) - Computer Science & Engineering</h3>
              <p className="text-gray-300">Kongu Engineering College (KEC) | Expected Graduation: 2026</p>
              <p className="text-primary-300 mt-2">CGPA: 6.7</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-secondary-500 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Higher Secondary Certificate (HSC)</h3>
              <p className="text-gray-300">Sagar International School | 2022</p>
              <p className="text-primary-300 mt-2">Percentage: 71%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-primary-900" id="experience">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-secondary-500 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Data Science Intern</h3>
              <p className="text-primary-300">1stop.ai | February 2023 – March 2023</p>
              <p className="text-gray-300 mt-4">
                Managed data preprocessing and statistical modeling while collaborating on complex business problems. 
                Applied machine learning techniques and communicated insights effectively to stakeholders.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-secondary-500 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Cyber Security and Ethical Hacking Intern</h3>
              <p className="text-primary-300">Rinex | September 2023 – October 2023</p>
              <p className="text-gray-300 mt-4">
                Conducted security research, vulnerability assessments, and malware debugging. Developed penetration 
                testing and threat analysis skills while contributing to cybersecurity projects under professional guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-gray-900" id="projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Cleanware Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Cleanware - Professional Cleaning Services</h3>
                <p className="text-gray-300 mb-4">
                  A modern web platform for professional cleaning services featuring responsive design, service booking system, and elegant UI/UX. Built with HTML, CSS, and JavaScript.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://cleanware.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-300 hover:text-primary-400"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/MADHACKER85/Cleanware.in_website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-300 hover:text-primary-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
                alt="ML Stress Detection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">ML Stress Detection System</h3>
                <p className="text-gray-300 mb-4">
                  Developed a machine learning model for stress detection using ECG signals and the WESAD dataset. Features data preprocessing, feature engineering, and model optimization.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Smart Traffic System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Smart Traffic System</h3>
                <p className="text-gray-300 mb-4">
                  Developed a smart traffic management system for four-way junctions, featuring centralized control for efficient traffic flow and optimized signal timing. Implemented as a centralized executable for better maintenance and scalability.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all border border-gray-700 hover:border-primary-500">
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
                alt="E-Commerce Website"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Website with AI Chatbot</h3>
                <p className="text-gray-300 mb-4">
                  Developed an e-commerce platform with an AI chatbot for product recommendations and admin-controlled management using Django, Python, MySQL, and AI technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-secondary-900" id="certifications">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Cyberwarrior by CAPPRICIOSEC UNIVERSITY',
              'CAPM from Simplilearn',
              'Advanced Cyber Security - Threats and Governance by Great Learning',
              'Human Resource Management by Great Learning',
              'Intel Unnati Workshop',
              'NVIDIA Jetson Nano Development Workshop'
            ].map((cert) => (
              <div key={cert} className="bg-gray-800/50 rounded-lg p-6 shadow-lg hover:shadow-secondary-500/20 transition-all border border-gray-700 hover:border-secondary-500">
                <p className="text-gray-300 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-primary-900" id="contact">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-white">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <p>+91 9025416985</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <p>kkvs5699@gmail.com</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <p>linkedin.com/in/keerthivasan-k-24586a214</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <p>github.com/MADHACKER85</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Keerthivasan K. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;