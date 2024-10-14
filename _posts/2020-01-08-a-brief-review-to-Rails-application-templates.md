---
layout: post
title: A brief review to Rails application templates
date: 2020-01-08 13:32:20 +0500
description: What Rails application templates are and how to create one.
#img: i-rest.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Ruby, Rails, Application template]
---

Rails is a web framework characterized by its Convention Over Configuration approach and follows a doctrine focused on developer productivity.

There are many amazing things that make this framework very popular; some of them have been adopted by other frameworks, pushing developer productivity to the highest levels. One of those very interesting functionalities is Rails Application Templates.

Let’s say you have mastered a good set of gems to use in your Rails projects, gems like rspec-rails, factory-girl, etc. Each time you start a new project, it is highly probable you’ll also be adding other dependencies you need. Most of the time it’s not enough with the default supplied tools provided by the framework.

If applications you create are very similar, then you’ll be doing the same scaffolding tasks over and over again. Is there a way to save time, instead of  repeating work?

Yes there is! Rails provides application templates and they made for this. Following the Rails guidelines: “Application templates are simple Ruby files containing DSL (domain specific language) for adding gems/initializers etc., to your freshly created Rails project or an existing Rails project.”

Using and existing template in a new application is simple, just provide the option **-m** and the template to the **rails new** command when creating the new application:

~~~zsh
rails new my_new_application -m <path_to_the_template>
~~~

Here <path_to_the_template> can be a path in your file system or an URL:

~~~zsh
rails new my_new_application -m ~/my_ecomm_template.rb			
rails new my_new_application -m http://templates_store.com/my_ecomm_template.rb
~~~

#Template DSL

Now we know how to pass the template. But, how are dependencies specified inside the template file? Well, dependencies are specified through a Domain Specific Language (DSL). This DSL is easy to understand for any person who knows the basics of Ruby and Rails. Here is an example:

~~~ruby
# my_ecomm_template.rb 
gem_group :development, :test do		  
  gem 'rspec-rails' 
end

gem_group :test do   
  gem 'factory-girl'
end

run 'bundle install'

generate :scaffold, 'product_item product:belongs_to sku:string'

rails_command 'db:migrate'
~~~

In this example, we are declaring we want to add rspec-rails and factory- girl gems, in their gem group. This will modify the Gemfile and add the gem declaration on each group.

Then, gems present in Gemfile are installed when executing “run ‘bundle install’”.

After that, there’s an instruction to generate a scaffold (depending on the project this could include model, controller, view, helper, tests).

Finally there is an instruction on migrating the database.

There are more instructions in this DSL. You can find the complete list at [the official Rails guides](https://guides.rubyonrails.org/rails_application_templates.html).

Having your commonly used gems as well as other Rails application building patterns in an application template is worth it and can save you some effort the next time you start your next big project.

