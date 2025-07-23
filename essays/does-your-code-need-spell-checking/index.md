---
layout: essay
type: essay
title: Does Your Code Need Spell-Checking?
permalink: essays/does-your-code-need-spell-checking/
# All dates must be YYYY-MM-DD format!
date: 2022-02-10
labels:
  - Software Engineering
  - Learning
---

Every programming language has rules. These rules are different from language to language, and each one has these rules which are set by their grammar library. When these rules are broken, compilation of the offending code will fail and this results in a syntax error. But if these rules aren't broken, and the program compiles successfully and runs, does this mean that it's a good and functional program? No. And I guess that's one of the reasons why coders value what they call "coding standards." These are essentially grammar rules that go beyond the grammar library and aren't typically set in stone. The idea is that they keep code legibile and uniform, which is important for future editing, and somewhat vital for developing programs which are collaborated on by multiple people.
<h2>Uniformity</h2>
Why is uniformity important? There are a few reasons that I can think of. One reason is so that other people can more easily review and understand your code. Another reason is so that you as the original coder can more easily review and understand your code. However, I think the main benefit of having coding standards is to ease the occasionally monumental task of debugging. When you have a large amount of anything to inspect, the task is made many times harder when what you're inspecting lacks uniformity. An analogy of this would be like looking for a specific shirt in a messy room scattered with laundry versus looking for that same shirt in a clean room where all your shirts are hung up in your closet. I think even finding a needle in a haystack might be a little easier if the hay was neatly organized with each straw lying perfectly parallel to each other.
<h2>Code Analysis Tools</h2>
The computer science course that I'm taking has recently started requiring me to use a code analysis tool called ESLint. This is the first time I've experienced having my coding standards so closely scrutinized. Previously, the coding standards I was required to follow consisted of a few rules such as putting curly braces on their own lines or having blank lines in between paragraphs. While I didn't always like or agree with the standards in place, I like and agree less with the standards enforced by ESLint. Forcing the use of single quotations ' instead of double quotations " is alright, but kind of random. Requiring a space in between the closing parenthesis of a function parameter window and the following open curly brace is very eyebrow-raising to me. The most pointless rule of all that I've come across so far is the requirement to have exactly one blank line at the end of your code. The space after a parenthesis does very little (if anything at all) to improve readability, and the blank line rule does literally absolutely nothing! It makes the code look exactly the same! Maybe someone would want that line to be there if they copy and pasted that code into another file with code already in it, but that could easily be done by hitting enter in that one very specific case!
<br>
<br>