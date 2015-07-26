## Brian’s Blinker Code Assignment

I utilized Bootstrap responsive framework for the majority of layout and heavy lifting functionality. Not only is it clean and modern, it’s easily customizable and is well supported.

I think I’ve pretty well translated what the design dictated. I didn’t want to stray from the design as I felt it all made sense and was very cohesive. I took some liberties in the responsive layouts, particularly with the top user and vehicle information panel and with the tabbed navigation (bottom right).

Certainly not every detail is perfect. I wanted to demonstrate code and functionality as a whole, and display an emphasis on development process and tools (SCSS, Jade, Gulpfile, etc.). In a normal workflow process, I’d dedicate a few more hours to pushing pixel perfection detail just a bit further.

## Regarding development workflow

I set up a simple Gulpfile to automate CSS preprocessing (SCSS), Javascript optimization/minification (Uglify) and HTML tempting (Jade). Application-ready files are located in the /dist/ directory and original pre-processed files are in the /assets/ directory.

## Regarding fonts (Benton Sans) - Due to format and licensing restrictions, I was not able to get a web font kit generated from the font files that were sent over. I added Benton Sans as the primary in the CSS font-stack, so as long as this is viewed on a machine that has Benton Sans installed, I think it should pull the font in and display properly. I added Open Sans as the fallback in the font-stack, which works pretty well. On my end, Firefox was not pulling in Benton Sans, but Chrome was. Obviously, in a production environment, we would have a Benton Sans web license and would properly embed the font via CSS @font-face property or via a supplied CDN link.

## Regarding CSS

Again, this pulls pretty heavily from Bootstrap and a custom Bootstrap theme. I’ve added an overriding CSS file that I coded by hand for customizations and overrides to layout and interactions (assets/scss/app.scss). 

## Regarding JS

Bootstrap optimally handles the simple functions on this page - Messaging modal, image carousel and tabbed navigation. Really, I didn’t even have to write any custom javascript/jquery, but I added a simple landing screen/loader via jQuery just to get something in there. In a real application environment, I’d expect some up front loading and perhaps a similar loading screen would work nicely. In terms of jQuery (specifically), I am very experienced and have developed some very complex custom applications and UI functionality.

## Closing Thoughts

I considered utilizing AngularJS and/or JSON to pull in data on this page, which would be perfectly reasonable for this type of application. In the interest of focusing on front end layout and working within a industry-standard framework (Bootstrap), I opted to stick with standard HTML markup and focus on building a responsive Bootstrap architecture that made sense for this application as well as focusing on design detail.

I also considered developing this by hand, bypassing Bootstrap or any other frameworks, which I certainly could have done (including writing jQuery to handle the UI features). I opted NOT to do this because I feel working with and customizing Bootstrap is likely a more accurate real-world scenario. Regarding responsive breakpoint (media queries) functionality, grid-based templating, CSS3 animation and transition features, and everything else that is baked into Bootstrap, all of this could be coded by hand and perhaps would make sense in the long run if focusing on optimization. However, in the real world, utilizing well supported tools such as Bootstrap provides efficiency and scalability, as well as coherence with the modern web, which maximizes usability.