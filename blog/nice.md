---
title: Issues I had with Strapi Internationalization
author: idahdam
date: 2021-03-08T11:58:05.569Z
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/s--BQnUXhDA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0stcpprta4xdxiaauulj.png
---
Okay, so the tutorial on using and deploying StrapiJS are a lot on the web, so I just want to address some issues I had with StrapiJS. 

<br/>

About a month ago I had a web development project, aimed to revamp the company's website. During the first meeting, we were explained on how the website would look UI wise and it was actually a nice experience working during the pandemic. 

<br/>

I was in charge on the backend, making collections, content internationalization, modifying the CMS UI, and some content integration using StrapIJS, a headless CMS that my project manager had found beforehand. The docs were cool, and the integration was nice, but I right now want to focus on the internationalization part. 

<br/>

At first, content internationalization was not a problem for me, knowing that i18n, a library for doing so, already established for a while. But then I realized doing the client-side translating was not ideal, especially running command to parse and change them into .json file every time they publish a new article and had to redeploy the website. StrapiJS' docs did not have the ability to do so either, even during the time of writing this blogpost. I also found another option, which I can use their API to translate a content-type. What if the translation is written out of context and we had to pay more? But during my headache searching, I found [this ](https://medium.com/strapi/content-internationalization-with-strapi-507ef5869c15)article from StrapiJS medium: 

<br/>

That alone, gave me the ideas on how the algorithm for the content internationalization would work. So, in order to do so, during the making of the collections, we should make n types of components, n being the languages used. For example, during this project I had to make 3 types of components, Indonesian, English, and Chinese, so for the title of the website I made title_en, title_id, and title_chinese.

<br/>

The content further explained that I should install or use GraphQL plugin. Upon looking, I decided to scratch the GraphQL and looking for something simpler. The concept still stands, sending all contents in all language in every GET request everytime client opens a page. 

<br/>

Around 30 minutes of wandering, and some sugar intake, I noticed that we use language-flag-button-drop down on the navbar to change the content language. This suddenly made me realize to use the state of the language chosen to change the contents. It was great!

<br/>

using ReactJS' useContext, you can export the value of the flag state and store them in useContext. The value of them could also be exported and used to determine which language-content to be displayed. It. was. the best feeling ever. 

<br/>

If you ever used React, you would probably already knew that curly brackets can do a lot of things inside of JSX functions, especially running Javascript code. Conditional, mapping, you name it. I finally finished doing the unit testing of content internationalization in a page, and continued doing so while integrating to the front end.

<br/>

Well... it did not stop there. Around 1 week before the deadline, the FE person-in-charge contacted me trying to solve the problem of content internationalization aswell, but upon doing so in mobile version of the website, he wasn't able to do so. I had to jump in my VSCode once more and checking, he did everything I had done and well well. 

<br/>

I ended up making a whole new context and a page checking if the page is opened from a mobile version. It was a simple solution, the redundancy of having two different context would change the language upon changing screen resolution. For example, I tested the mobile version using minimized web browser, changed the language to let's say,  Indonesian. Going back full-screen, it would go back to the context of PC web-browser type. I was assuming that if you opened the page from a mobile version, less likely you would want to try the web version from a mobile phone and vice versa. Please let me know on my socials if you think that I could've gone better, I would love to hear and learn more.

<br/>

Anyway, that's all the issues I had. I hope StrapiJS' internationalization plugin would be available ASAP so no developers would have to deal with this problem anymore. Cheers.