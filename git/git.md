- How to initiate a repository
- How to stage/unstage your changes
- How to commit your changes to the repo
- How to push to the remote repository
- How to resolve merge conflicts

gitbash   cil tool



create a repository
- locally   git init first  master branch
- remote  github new repository

associate local repository with remote repository by git command: git remote add origin https...

then we go to the remote repository we can see branchs and commit count,enter it we can find commit number,whitch is very useful when we go back history and get perticular commit

### set config values

git config --global user.name "alhh"

git config --global user.emai "@gmail"

### add gitignore file

touch .gitignore

.DS_Store
.project
*.pyc

### three stage

- working directory
- staging area
- .git directory(Repository)

### git add -A

### git log

### git remote -v

### git branch -a

### git diff

### after commit push branch to remote

- git branch <branch name>
- git checkout <branch name>
- git push -u origin <branch name>

### merge a branch

- git checkout master
- git pull origin master
- git branch --merged
- git merge <branch name>
- git push origin master

### deleting a branch

- $ git branch --merged
- $ git branch -d <branch name>
- $ git branch -a
- $ git push origin --delete <branch name>

### git GUI tool --- GitKraken

-----------------------------------------------------

### settings

- name
- email
- default editor
- line ending   how git should handle end of lines, in windows end lines are marked with carriage return(CR) and line feed(LF)  **$ git config --global core.autocrlf true**  in mac or linux **$ git config --global core.autocrlf input**

   three defferent levels
   - system   all users in current computer
   - global   all repositories of the current user
   - local    the current repository

### getting help

& git config --help    (windows)html  (mac linus) dump in console press [space] to view another line press [Q] to exit

### cheat sheet (备忘单)

### workflow

### $ git ls-files   list staging area files

### removing files

 git rm <file name>   removes this file from both the working directory as well as the staging area

### renamig and moving files

 git mv <old name> <new name>

### ignoring files

 git rm --catch <direc name>  get error so   $ git rm --catch -r <direc name>

### short status

 git status -s

### viewing the staged & unstaged changes

 git diff --staged     staginh area

 git diff     working directory

### visual diff tools

- kdiff
- p4 merge
- WinMerge(windows)
- vscode

setting

- git config --global diff.tool vscode
- git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

git difftool

git difftool --staged

### viewing the history

git log

git log --oneline

### viewing a commit

git show <commit name>

git show HEAD~2



