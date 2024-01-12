const projects = [
    {
        id: 'square1',
        title: "UX design",
        description: "Understanding the 'Why, What, and How' of product use is crucial. Discover the value of customer journey mapping, from broad patterns to individual relevant experiences. Utilize wireframe tools to plan out the ideal blueprint of a website.",
        links: [ 
        {
          title: "UX Research Report",
          url: "https://drive.google.com/file/d/1rP7JlI9mRJCDGHzUHMYjBt-abS07gV8l/view?usp=sharing"
        },
        {
          title: "Wireframe & Prototype",
          url: "https://xd.adobe.com/view/5bee77bc-6104-48b2-b6ab-e0dbcecbaaf7-0ebd/grid"
        },
        {
          title: "Business Case Study Report",
          url: "https://www.figma.com/proto/MJ3V8KjX7mp311coyyFCeK/Scenario-based-Business-Case-Report?node-id=133-4&starting-point-node-id=133%3A4&scaling=scale-down"
        }],
      },
      {
        id: 'square2',
        title: "HTML & CSS Website",
        description: "HTML builds the architecture of a website, while CSS applies styles to the space. Specify the layout according to the moodboard and concept to achieve the desired look and feel.",
        links: [{
          title: "Eye Candy Cinema",
          url: "https://yingcg.github.io/EyeCandyCinema/"
        },
        {
          title: "My CSS Playground",
          url: "/projects/css",
          route: true
        },{
          title: "Retouch Barn",
          url: "https://yingcg.github.io/retouchbarn/"
        }],
      },
      {
        id: 'square3',
        title: "Vanilla Javascript",
        description: "Just like connect to the electric and water supply to the site, little behaviour can enhance the digital experience more enjoyable. Using JavaScript to manipulate the DOM, I am adding events to the website to create better experience in the browser.",
        links: [{
          title: "Javascript Basic",
          url: "https://yingcg.github.io/blog/js-fundamentals.html",
        },
        {
          title: "Minesweeper Game",
          url: "https://yingcg.github.io/minesweeper/",
        },
        {
          title: "Shape Gallery",
          url: "https://github.com/YingCG/shape-gallery",
        }],
      },
      {
        id: 'square4',
        title: "Javascript Framework",
        description: "My interest of creating interactive experience has motivate me to start this coding journey. You can inmagine how exited I was to update the states!!! Are you aware that you can clicking to individual square box to change colour on this page?",
        links: [
        {
            title: "Interaction design template",
            url: "https://interaction-design-kappa.vercel.app/",
            // route: true
        },
        {
          title: "React App",
          url: "http://photoimagecbd.herokuapp.com"
        }
        // {
        //     title: "Make a booking",
        //     url: "https://github.com/YingCG/make-a-booking",
        //     // route: true
        // },

    ]
      },
      {
        id: 'square5',
        title: "Functions | Events ",
        description: "With a solid understanding of writing JavaScript code and utilizing functions like getElementById(), I progress to programming actions, conditions, calculations, and, most importantly, crafting reusable components for Object-Oriented programming.",
        links: [     
           {
            title: "Ticket Dashboard",
                url: "https://next-dashboard-yingcg.vercel.app/",
                // route: true
          }, {
            title: "Your To-do List",
            url: "/projects/todolist",
            route: true
          },{ title: "Calculator", url: "/projects/calculator", route: true },
         ]
      },
      {
        id: 'square6',
        title: "Callbacks | API | Server",
        description: "Imagine I’m sitting at a table in a restaurant with a menu of choices. The kitchen is the part of the 'system' that will prepare my order. What is missing is the critical link to communicate my order to the kitchen and deliver the food back to my table. That’s where the waiter or API comes in. Either the food is pre-cook (API) or cooking from the internal kitchen(Server) ",
        links: [ {
          title: "callback-promises-asyncAwait",
          url: "https://github.com/YingCG/callback-promises-asyncAwait",
          // route: true
        },{
          title: "React and Sanity",
          url: "https://github.com/YingCG/react-sanity",
        }]
      },{
        id: 'square7',
        title: "Database | CRUD",
        description: "I am fortunate enought to have people explain to me the concept of database when I learned the SQL. Here I am sharing a documentation that I think it is easy intro to understand the concept of database. To explore how to Create, Read, Update and Delete from the database. I have practice creating app using different database in a few different projects ",
        links: [
          {
          title: "SQL notes",
           url: "https://drive.google.com/file/d/1jhNNzyPG9GrWV5JroXeGt3461Yq7-7Ql/view?usp=sharing",
        },
          {
          title: "MERN stack",
           url: "https://github.com/YingCG/MERN-demo",
          // route: true
        },
        {
          title: "Koios Education(Knex Database)",
          url: "https://github.com/YingCG/koios-education",
        //  route: true
        },
        {
          title: "Window Form",
          url: "https://github.com/YingCG/CsharpOOP-WindowsForm",
        }]
      },{
        id: 'square8',
        title: "Authentication",
        description:"In these repo,I am exploring authentication using nodejs-express as backend and different level of authentication! The practice take me to more complext state management, how to pass in object as a wrapper.  I am still in the learning curve of getting it more familiar ",
        links: [ {
          title: "Different way of Authentication",
          url: "https://github.com/YingCG/DifferentAuthentication",
          // route: true
        },{
          title: "Log in with Google",
          url: "https://github.com/YingCG/useContext-googleLogIn",
        }]
      }
]

export default projects;
