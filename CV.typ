#import "@preview/simple-technical-resume:0.1.0": *

#let name = "Levi Kingma"
#let email = "zakelijk@levikingma.com"
#let github = "levi-ivel"
#let linkedin = "levi-kingma-36a317293"
#let personal-site = "levikingma.com"

#show: resume.with(
  top-margin: 0.45in,
  personal-info-font-size: 9.2pt,
  author-position: center,
  personal-info-position: center,
  author-name: name,
  email: email,
  website: personal-site,
  linkedin-user-id: linkedin,
  github-username: github
)

#v(16pt)

#custom-title("Education")[
  #education-heading(
    "Firda", "Leeuwarden, Netherlands",
    "Software Development", "",
    datetime(year: 2023, month: 9, day: 1),
    datetime(year: 2026, month: 7, day: 1)
 )[
    - *On fast-track to finish in 3 years instead of 4*
  ]
]

#v(16pt)

#custom-title("Professional Experience")[  
  #work-heading(
    "Alde Feanen, Frisian Municipality",
    "Team Lead",
    "Friesland, Netherlands",
    datetime(year:2025, month:1, day:1),
    datetime(year:2025, month:6, day:1)
  )[
    - *Led a team of four* to create an interactive, educational webapplication for *National Park Alde Feanen*.
    - The project is currently being developed into a *Software-as-a-Service (SaaS) platform* for *use in multiple parks*.
  ]

  #v(8pt)

  #work-heading(
    "Dairy Campus, Wageningen University",
    "Intern",
    "Leeuwarden, Netherlands",
    datetime(year:2025, month:2, day:1),
    datetime(year:2025, month:7, day:1)
  )[
    - *Developed and maintained data science pipelines*.
    - *Fixed bugs* and implemented *new features* to enhance the companyʼs webapplication.
    - *Worked primarily on* a new application feature projected to *save €12,000 annually*, significantly reducing operational costs.
  ]
]

#v(16pt)

#custom-title("Skills")[
  #columns(
    3
  )[
    #skills()[
      - *Languages:*
      - Python
      - C\#
      - JavaScript
      - Lua
      - SQL
    ]
    #skills()[
      - *Frameworks:*
      - Flask
      - FastAPI
      - .NET
      - React
      - Express.js
    ]
    #skills()[
      - *Technologies:*
      - Git
      - Docker
      - Apache Airflow
      - Microsoft Azure
    ]
  ]
]

#v(16pt)

#custom-title("Certificates")[
  #skills()[
    - *#underline[#link("https://www.credly.com/badges/8a1f4c47-cbf0-4632-a112-e9f8555c7f86/linked_in_profile", "Github Foundations")]*
    #v(8pt)
    - *#underline[#link("https://www.levikingma.com/assets/OOP.pdf", "Object Oriented Programming")]*
    #v(8pt)
    - *#underline[#link("https://www.levikingma.com/assets/FD.pdf", "Frontend Development")]*
  ]
]