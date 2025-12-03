const people = [
    {
        name: "Aarav Mehta",
        jobTitle: "Frontend Developer",
        jobDescription: "Builds responsive, accessible, and interactive user interfaces.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    },
    {
        name: "Riya Kapoor",
        jobTitle: "Backend Developer",
        jobDescription: "Designs server-side logic, manages databases, and builds APIs.",
        image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d"
    },
    {
        name: "Kate Winslet",
        jobTitle: "Cybersecurity Analyst",
        jobDescription: "Protects systems by detecting threats and performing security audits.",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        name: "Angelina Jolie",
        jobTitle: "Data Scientist",
        jobDescription: "Works with large datasets, builds ML models, and finds insights.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Anne Hathaway",
        jobTitle: "AI/ML Engineer",
        jobDescription: "Develops machine learning models and AI-driven solutions.",
        image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"
    }
];




let body = document.querySelector('body')


sum ="";


people.forEach(function(elem){
    sum += `<div class="cards">
        <img src=${elem.image} alt="">
        <h1>${elem.name}</h1>
        <h2>${elem.jobTitle}</h2>
        <p>${elem.jobDescription}</p>
    </div>` 
})


body.innerHTML = sum
