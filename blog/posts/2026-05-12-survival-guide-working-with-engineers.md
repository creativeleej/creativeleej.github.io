---
layout: post
title: "The Technical Writer's Survival Guide to Working with Engineers"
date: 2026-05-12
author: "Haletha Judkins"
excerpt: "The challenge of working with engineers isn't a knowledge gap problem. It's a communication problem. And communication problems are fixable."
description: "Practical advice for technical writers on building productive relationships with engineers — from running better interviews to getting reviews that actually happen."
tags:
  - posts
  - technical-writing
  - collaboration
permalink: /blog/survival-guide-working-with-engineers/
---

Let me tell you about a conversation I had early in my career.

I'd been brought onto a project to document a new developer tool. I sat down with the lead engineer to go over the product, notebook open, ready to take down everything I needed. Forty-five minutes later, I had four pages of notes and understood approximately none of them. He spoke in acronyms I hadn't encountered, referenced internal systems by nickname, and assumed a baseline of knowledge I didn't have.

I left that meeting feeling completely out of my depth.

What I learned over the years that followed — and what I want to share with you here — is that the challenge of working with engineers isn't really a knowledge gap problem. It's a communication problem. And communication problems are fixable.

---

## Understand how engineers think about documentation

Before anything else, it helps to understand where documentation sits in an engineer's mental model of their work.

For most engineers, documentation is a tax, not an investment. It's something that has to happen after the real work is done, and it pulls them away from the thing they actually want to be doing. This isn't laziness or arrogance — it's a rational response to how engineering work is structured. Shipping code is what gets measured. Documentation usually isn't.

When you understand this, the way you approach an engineer for information shifts. You're not asking them to do something they value. You're asking them to spend time on something they find interruptive. The more you can minimize that interruption — coming prepared, asking precise questions, not scheduling a 90-minute meeting when a 15-minute Slack thread would do — the better your working relationship will be.

---

## Do your homework before every conversation

Nothing builds credibility with an engineer faster than showing up prepared. And nothing erodes it faster than asking questions you could have answered yourself.

Before any interview or review session, I read everything I can find: internal wikis, Confluence pages, Jira tickets, Swagger specs, GitHub READMEs, Slack threads if they're accessible. I'm not trying to become an expert before the conversation — I'm trying to understand enough to ask good questions.

Good questions are specific. "Can you explain how authentication works?" is a mediocre question. "The spec says the token expires after one hour — what happens if a user makes a request with an expired token? Does the API return a 401, or does it attempt to refresh automatically?" is a good question. The second version tells the engineer you've read the material, you're thinking about the developer experience, and you have a specific gap that only they can fill.

This approach has another benefit: it changes the dynamic. You stop being a writer who needs things explained and start being a colleague who is stress-testing the documentation. Engineers respect that framing.

---

## Ask for examples, always

Abstract explanations are the enemy of good documentation. When an engineer says "it handles the edge cases gracefully," your job is to find out what that actually means. My standard follow-up question is: "Can you show me an example?" or "What does that look like in practice?" Nine times out of ten, the example is more useful than the explanation — and it's what your readers need anyway.

This is especially important for error handling, edge cases, and parameter behavior. An engineer might describe a parameter as "controls the level of verbosity in the response" in a way that's technically accurate but tells a developer nothing useful. Ask them to show you a response at the lowest setting and the highest setting. Now you have something you can actually document.

---

## Learn to read the code (a little)

I want to be careful here, because I'm not suggesting technical writers need to become engineers. But there is a level of code literacy that makes you significantly more effective — and significantly more credible.

Specifically: being able to read a function signature, understand a basic JSON schema, and follow the flow of a simple script means you can often answer your own questions instead of scheduling another meeting. It means you can spot inconsistencies between the code and the documentation without an engineer pointing them out. And it means you can have a conversation about the API at a level that engineers respect.

I learned to read code through my college curriculum and, later, out of necessity — sitting with developers, asking them to walk me through what I was looking at, picking up languages through documentation projects. You don't need a computer science degree. You need enough to follow along.

---

## Set up a documentation review process they'll actually use

One of the most common failure modes I've seen is a documentation review process that engineers ignore because it asks too much of them. A Google Doc with comments is fine. A 45-minute review meeting for every doc page is not.

What works well:

A short, specific checklist for reviewers: "Is this technically accurate? Are there any missing parameters? Are the error codes correct?" Engineers can answer those questions in ten minutes. They cannot easily answer "Does this read well?"

A clear turnaround expectation. "I need your review by Friday" with a reason — "because this ships with the v2 launch" — is more likely to produce a timely response than an open-ended request.

Small review batches. Sending an engineer fifteen pages of documentation to review is how you get documentation that never gets reviewed. Send one section at a time, with specific questions.

---

## Advocate for the reader, not yourself

The most important thing I've learned in many years of working with subject matter experts is this: when there's tension about documentation content, the winning argument is almost never about writing quality. It's about the reader.

"I think this section needs more detail" is easy to dismiss. "A developer who hasn't seen this API before will get to this point and not know what to do next — here's what I think they need" is much harder to dismiss. You're not advocating for your own preferences. You're advocating for the person who will actually use the product.

Engineers generally care about their users. When you make the user's confusion visible and concrete, most engineers will engage with that seriously.

---

## Build the relationship outside of documentation requests

This one is simple and often overlooked: the best engineering relationships I've had were ones where I showed up before I needed something.

Attending sprint reviews. Reading the product changelog. Commenting on a GitHub discussion. Congratulating an engineer on a launch. None of these things take a lot of time, and all of them build the kind of goodwill that means your next review request gets prioritized instead of deprioritized.

Technical writers are often invisible in engineering organizations — we show up when we need information and disappear when we don't. The ones who build the strongest engineering relationships are the ones who don't disappear.

---

## A final thought

Working with engineers well is a skill that develops over time. It took me years to get comfortable in those conversations — to stop feeling like I was imposing and start feeling like I was contributing.

The thing that shifted it for me was realizing that good documentation is genuinely valuable to engineers, even if they don't always behave that way. Every support ticket that doesn't get filed because the docs were clear enough is time an engineer gets back. Every developer who successfully integrates without opening a GitHub issue is a win for the whole team.

When you can make that case — not in the abstract, but with specific examples from your own work — the relationship changes. You stop being the person who asks engineers for their time. You become the person who saves it.

---

*Haletha Judkins has spent decades collaborating with engineers, product teams, and developers to produce documentation that actually gets used. She writes about technical writing craft, API documentation, and the art of translating complexity for human beings. [Connect with her](https://www.haletha.com/#contact).*
