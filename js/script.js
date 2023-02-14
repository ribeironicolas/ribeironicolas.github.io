(function(){
    const body = document.body
    //header
    const aboutMe = document.getElementById("about-me-txt")
    const mySkills = document.getElementById("my-skills-txt")
    const projects = document.getElementById("projects-txt")
    const changeLanguageBtn = document.getElementById("change-language")
    const brazilFlag = document.getElementById("brazil-flag")
    const euaFlag = document.getElementById("eua-flag")
    //main
    const hello = document.getElementById("hello")
    const position = document.getElementById("position")
    const resumeBtn = document.getElementById("resume-btn")
    const resumeArchive = document.getElementById("archive")
    //about me
    const aboutMeTitle = document.getElementById("about-me-title")
    const info = document.getElementById("info")
    //skills
    const skillsTitle = document.getElementById("skills-title")
    //projects
    const projectsTitle = document.getElementById("projects-title")
    //footer
    const footerMention = document.getElementById("footer-mention")
        
    function translateToEnglish() {
        document.title = "Nicolas Ribeiro - EN"
        //header translate
        euaFlag.style.display = "none"
        brazilFlag.style.display = "block"
        aboutMe.textContent = "About me"
        mySkills.textContent = "My Skills"
        projects.textContent = "Projects"
        //main translate
        hello.textContent = "Hi, I'm Nicolas Ribeiro"
        position.textContent = "Front-End Developer & Illustrator"
        resumeBtn.textContent = "Resumé"
        resumeArchive.setAttribute("href", "../assets/Nicolas_Ribeiro_EN.pdf")
        //about me translate
        aboutMeTitle.textContent = "About me"
        info.textContent = "My name is Nicolas Ribeiro, I live in São Paulo. I'm studying the 4th semester of Systems Analysis and Development at Universidade Cidade de São Paulo (UNICID), and it was there that I made my first line of code, since then I've been falling in love and learning more and more in the area, I intend to continue with Front-End development and studying software engineering."
        //skills translate
        skillsTitle.textContent = "My Skills"
        //projects
        projectsTitle.textContent = "Projects and Illustrations"
        //footer
        const highlight = document.createElement('span')
        highlight.textContent = "Nicolas Ribeiro"
        highlight.classList.add("highlight")
        footerMention.textContent = `Developed by `
        footerMention.append(highlight)        
    }   

    function translateToPortuguese() {
        document.title = "Nicolas Ribeiro - PT"
        //header translate
        euaFlag.style.display = "block"
        brazilFlag.style.display = "none"
        aboutMe.textContent = "Sobre mim"
        mySkills.textContent = "Minhas Habilidades"
        projects.textContent = "Projetos"
        //main translate
        hello.textContent = "Olá, eu sou Nicolas Ribeiro"
        position.textContent = "Desenvolvedor Front-End & Ilustrador"
        resumeBtn.textContent = "Currículo"
        resumeArchive.setAttribute("href", "../assets/Nicolas_Ribeiro.pdf")
        //about me translate
        aboutMeTitle.textContent = "Sobre mim"
        info.textContent = "Meu nome é Nicolas Ribeiro, moro em São Paulo. Estou cursando o 4° semestre de Análise e Desenvolvimento de Sistemas na Universidade Cidade de São Paulo (UNICID), e foi nela que fiz minha primeira linha de código, desde então venho me apaixonando e aprendendo cada vez mais na área, pretendo seguir com o desenvolvimento Front-End e realizar uma faculdade de engenharia de software."
        //skills translate
        skillsTitle.textContent = "Minhas Hablidades"
        //projects
        projectsTitle.textContent = "Projetos e Ilustrações"
        //footer
        const highlight = document.createElement('span')
        highlight.textContent = "Nicolas Ribeiro"
        highlight.classList.add("highlight")
        footerMention.textContent = "Desenvolvido por "
        footerMention.append(highlight)  
    }
    
    changeLanguageBtn.addEventListener("change", function() {
        body.classList.toggle('english')
        if(body.classList.contains('english')) {
            translateToEnglish()
        }
        else {
            translateToPortuguese()
        }
    })

})()
