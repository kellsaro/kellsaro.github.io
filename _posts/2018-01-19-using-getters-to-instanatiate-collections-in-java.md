---
layout: post
title: Using getters to instantiate collections in Java
date: 2018-1-19 13:32:20 +0500
description: # Add post description (optional)
#img: i-rest.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Java, Collections, Lazy initialization]
---

Two facts:
* Collections are one of the most used data types in all kind of software projects.
* Java has been criticized as a very verbose programming language.

I realized that each time I used my collections I had to check if they were null. It is boring and it bloats my code.

In projects I have developed, for practical purposes there is no difference if a collection is null or empty. So, since some time ago I have adopted the practice to instantiate the class fields of collections data types in the corresponding getter method when the field is null.

~~~java
public class Example{

   private List<Thing> things;
   
   public List<Thing> getThings(){
 
       if(things == null) things = new ArrayList<>();
 
       return things;
   }
}
~~~

Thus, I do not need null checking anymore because I access my collections through the corresponding getter method even when I am coding inside the same class, applying The Uniform Access Principle.

This convention has saved me a lot of time, has cleaned up my code for a better understanding and now my applications are more robust.

I hope this could be useful to you, but do not apply it blindly.

### P.D.
After publish this post in [LinkedIn](https://www.linkedin.com/pulse/using-getters-instantiate-collections-java-maykell-s%25C3%25A1nchez-romero/) a [friend of mine](https://www.linkedin.com/in/atguz/) pointed that this is a known pattern
called __Lazy initialization__ and with the new __Optional__ type introduced in Java languaje
the code could be even more elegant and syntetic:

~~~java
public class Example{

    private List<Thing> things;
   
    public List<Thing> getThings(){
 
      return things = Optional.ofNullable(things).orElseGet(ArrayList::new);
    }
}
~~~

I like it :)




