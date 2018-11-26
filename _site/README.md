<div align="center">
  <img src="https://g20hub.firebaseapp.com/assets/images/logo.png" alt="G20 Repository of Digital Policies" width="500" />
</div>

# G20 Repository of Digital Policies
> "Strengthen the exchange of information and experiences to support improving access, adoption, and effective use of digital technologies."

G20 Digital Economy Task Force

This repository serve as a common source for digital policies projects.

## Requirements
To start adding projects to this repository, some technologies are required.

- [Git](https://git-scm.com/)
- [Jekyll](https://jekyllrb.com)
- [Node.js®](https://nodejs.org/en/download/)

## Installation

- [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Its available for all platforms, download [here](https://git-scm.com/downloads).

Once git its installed, let's start cloning the repository using command `git clone`, this command clone a repository into a new directory.
```sh
git clone https://github.com/G20/digitalhub
```

With this command the `digitalhub` repository will be saved locally.

Continue with [Node.js®](https://nodejs.org/en/download/), is a JavaScript runtime built on Chrome's V8 JavaScript engine, can be installed via package manager, [all supported platforms](https://nodejs.org/en/download/package-manager/), its used to build all the interactive components and functionality on the site also to run the project locally in development mode.

Then [npm](npmjs.com), it's the world's largest software registry, with approximately 3 billion downloads per week. Required for run script compilations, its already installed with nodejs.

At last [Jekyll](https://jekyllrb.com), is a simple, extendable, static site generator. You give it text written in your favorite markup language and it churns through layouts to create a static website. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more, follow the next steps to install [Jekyll](https://jekyllrb.com).

- **1.** Install a full [Ruby development environment](https://www.ruby-lang.org/en/downloads/)

- **2.** Install Jekyll and bundler gems, a gem is code you can include in Ruby projects. It allows you to package up functionality and share it across other projects or with other people, Jekyll itself is a gem as well as many Jekyll plugins.
```bash
gem install jekyll bundler
```
- **3.** Change into digitalhub directory
```bash
cd digitalhub
```
- **4.** Build the site and make it available on a local server
```bash
npm run start
```
- **5.** Open a browser and go to http://localhost:4000

If you encounter any unexpected errors during the above, please refer to the [troubleshooting](https://jekyllrb.com/docs/troubleshooting/#configuration-problems) page or the already-mentioned [requirements](https://jekyllrb.com/docs/installation/#requirements) page, as you might be missing development headers or other prerequisites.

## Getting started
The project contains the following directory structure:
```
.
├── _config.yml                             # Stores configuration data.
├── _data                                   # Well-formatted site data should be placed here.
|   ├── template.yml                        # Project template file
|   └── projects                            # Projects folder to save .yml files
|       └── digital-country-initiative.yml
├── _includes                               # These are the partials that can be mixed and matched by your layouts and posts to facilitate reuse.
|   ├── footer.html
|   ├── head.html
|   └── header.html
├── _layouts                                # Site layouts
|   └── default.html
├── _sass                                   # These are sass partials that can be imported into your main.scss which will then be processed into a single stylesheet main.css that defines the styles to be used by your site
|   ├── categories.scss
|   ├── hero.scss
|   ├── modal.scss
|   ├── navbar.scss
|   ├── projects.scss
|   └── site.scss
├── _site                                   # This is where the generated site will be placed (by default) once Jekyll is done transforming it. It’s probably a good idea to add this to your .gitignore file.
├── _assets
|   ├── css                                 # Site stylesheets
|       └── main.scss
|   ├── images
|       └── flags                           # Countries flags
|           └── argentina.png
|       └── slider
|   └── projects                            # Projects images folder (project name as project folder)
|       └── digital-country-initiative
|           └── 1.png
├── node_modules
├── .editorconfig
├── data.json
├── Gemfile
├── Gemfile.lock
├── index.md                                # Provided that the file has a front matter section, it will be transformed by Jekyll.
├── package.json.lock
├── package.json
├── README.md
└── webpack.config.js
```

All the projects files are saved in `_data/projects` folder, project are `.yml` well formatted files, more info about `YAML` can be found [here](http://yaml.org/spec/1.2/spec.html)

```
├── _data                                   # Well-formatted site data should be placed here.
|   ├── template.yml                        # Project template file
|   └── projects                            # Projects folder to save .yml files
|       └── digital-country-initiative.yml
```

> Each project must have their own representative file and the name of that file **MUST BE UNIQUE**.

To start creating a new project let's take the `_data/template.yml` file as base file, this file has the following fields

```yml
name:
category:
description: >-

country:
updated: DD/MM/YYYY
leader:
position:
phone:
email:
link:
tags:
  - Tag 1
images:
  - /assets/projects/<name>/1.jpg
```

These fields make up a project, all the fields are required to ensure a rich website experience.

- **name**: It's the unique project name.
- **category**: Category that the project belongs to, posible values: *Skills for the future of work, Digital Government, Digital Infrastructure, Entrepreneurs and MSMEs, Digital Inclusion or Emerging Technologies.*
- **description**: This field it's dedicated to explain all the details of the project, can include html tags (formating).
- **country**: Project country (G20 list of countries) or "Other".
- **update**: Date of the last update of the project.
- **leader**: The person in charge of the project.
- **position**: Position of the leader, role.
- **phone**: Leader phone number to possible contact.
- **email**: Leader email address.
- **link**: Website of the proyect.
- **tags**: All the tags related to the project, this field accept multiple values using pre-existing tags.
- **images**: List of all the images previously saved into `/assets/projects/<project name>/file1.png`

> Its recomended as standard, name all the images as numbers inside their own project folder.

Once that the file exists and its placed inside the projects folder `_data/projects/<my new project>.yml`, now let's run locally the site to ensure there is not compilations errors, to do this, open a terminal and go inside the project folder and run:

```bash
cd digitalhub/ && npm run start
```
This command will try to compile all the projects and start a local server to test the site with the new project added.

If the compilation was successfull, open a browser and go to `http://localhost:4000` and you should see website running, if not, go to the terminal to get a detailed explanation of what fails, fix it and try again, once the new project appears in the list, we're done.

Then, we need to "compile" before upload, this proccess will take all the project and prepare a final version, so the website can read, run the following command inside the repository folder:

```bash
cd digitalhub/ && npm run build
```

To finish, [add the new files tracked files to version control](https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/), commit with a message explaining what was added, eg. **"New project added: My strategic development project"** and [send a pull request](https://services.github.com/on-demand/github-cli/open-pull-request-github) via github.

The pull request will be validated by the team to ensure everything it's ok and the new project will show up soon in the production site.
