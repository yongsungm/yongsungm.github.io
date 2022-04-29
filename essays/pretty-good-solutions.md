---
layout: essay
type: essay
title: There's Already a Pretty Good Solution
# All dates must be YYYY-MM-DD format!
date: 2022-04-28
labels:
  - Software Engineering
  - Learning
  - Design Patterns
---

One of my favorite aspects of computer science is problem solving, and one of my favorite aspects of problem solving is that there are countless different ways to solve the same problem. This first became apparent to me when I took a programming class in high school and even simple assignments would sometimes result in drastically different yet correct answers from the students. The fascinating thing about this is that it demonstrates the different ways in which people’s minds work. However, there would be certain solutions to problems which I hated just because they were so different from the way I wanted to approach it. What took me a while to learn is that my intuition doesn't always lead to the best solution, and also that getting a program to work doesn't necessarily mean that it's a good program.

<img class="ui image" src="{{ site.baseurl }}/images/exit-ramp.jpg">

Though insertion sort is intuitive, it's not a particularly efficient sorting algorithm. There are however other sorting algorithms which, though unintuitive, are a lot more efficient in most scenarios. The point I'm getting at is that there are a lot of pretty good solutions already out there for frequently recurring problems. This is why it’s important to understand and be able to use design patterns. When it comes to software, there are countless applications that do similar things or have aspects that are equivalent. For example any social media out there will probably implement an object oriented factory that creates users and different types of pages. Just about any website will implement an observer design pattern, so long as they have an interactive element such as a form or a button. In a car pool app I'm currently collaborating on called <a href="https://warrior-ride-buddies.github.io/">Warrior Ride Buddies</a> we're implementing an observer as well as a model-view-controller design pattern. A huge amount of the work that allows us to make this application has already been done for us through the tools which we have available, namely the web framework Meteor, the publish-subscribe database MongoDB, and the React library.

<img class="ui image" src="{{ site.baseurl }}/images/spaghetti.jpg">

If I were to try to create an application such as this without these tools, I'd be extremely hard pressed and would certainly need several more years of education, but I would at least have an idea of what I'd be trying to imitate. Trying to directly code an application such as Warrior Ride Buddies without implementing these design patterns would certainly result in incomprehensible code which would have little chance of being editable or debugged if it managed to work at all. Another crucial benefit of using design patterns is that it facilitates cooperation among developers.


