# hackTAMS2020 
This project won best beginner hack in the hackTAMS 2020 Hackathon, and around $2000 worth of prizes!
## Devpost: https://devpost.com/software/killer-eye

Our Roles:
Samarth Kabbur: Main Developer
Emmanuel Roy: Video and Initial Prototype
Samhith Komatreddy: Host, Presentation, Website builder
Harish Jawahar: Researcher, Video, Presentation.

Inspiration:

Over 20,000 people face organ or liver failure under Wilson's disease. Wilson's is an inherited disorder that leaves your body unable to dispose of copper, leading to a build-up that will kill by the time you're 40 years old. The saddest part is how statistically the people most affected by Wilson's are in rural areas are unable to afford a doctor's diagnosis, leaving them to essentially die in the cold.

What it does:

Killer Eye gets a webcam or image input and then classifies each frame using TensorFlow. The website we created is essentially run in one giant HTML file with scripting in JavaScript in it. Our ML model is being kept on an external server and is easily interchangeable if we need to upgrade ASAP.

How it Works: 
The algorithm was a generic ml algorithm that was repurposed and redesigned to be more lightweight and work for our usage. The algorithm was trained with 35 images of Kayser-Fleischer rings from patients with blue eyes, to create the Wilson's Positive classification. It was trained with 25 images of blue eyes without rings, to create the Wilson's Negative classification. Finally, it was trained with 50 random images to create the No Eye Detected classification. There was a total of 500 epochs. We uploaded the model to be hosted on an external server. Then, the website, which included HTML/CSS, JavaScript, and JQuery, was hosted on GitHub. The website was coded to accept a webcam or static image input, process it through the machine learning algorithm, and output a classification. The website only pulls the model once from the external server, then all processing occurs locally. Even though all processing happens locally, the program is extremely fast and accurate.

How we built it:

We made multiple revisions of Killer Eye as a team. We split the work but ended up really taking shifts on the labor portion of the work. For example, while Samarth was coding, Emmanuel, Sam, and Harish were filming the skit. The most labor intensive part was probably debugging which we had to do a ton of.

Challenges we ran into:

Figuring out how to import files in a virtual camera and figuring out how to use TensorFlow specifically for classification. Another big issue was figuring out how to run the app on a locally hosted server, before just realizing we could publish it on GitHub pages.

Accomplishments that we are proud of:

We are proud for making an actual solution that can effectively diagnose Wilson's. It's pretty great to realize that our app could save some random persons life one day and that it could make a significant impact in their well being. We also are proud of how much information we took away from this hack-a-thon about the actual disease itself and how we can help spread awareness to make a communal impact.

What we learned:

We learned a ton about Wilson's and its impact on our community. When it comes to CS knowledge, we gained a deeper understanding about how to apply classifications to HTML, as usually we would just have the classification popup in a script or something. We also learned a lot in making a functional UI that is both pleasant to look at and practical.

What's next for Killer Eye - Diagnosing Wilson's Disease.:

We want to develop Killer Eye to the point it could classify Wilson's at the same level or better then an Ophthalmologist. Better models are needed in order to make our classification system more accurate, so we just need to gather more and better images. We also will focus on making our UI more usable for revision two.

Please make sure to give us credit if you're using our code! Our code includes references to Google's Teachable Machine, and chris-chris
