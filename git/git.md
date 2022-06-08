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

 git rm --cached <direc name>  get error so   $ git rm --cached -r <direc name>

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

git show HEAD~1:<file path and name>

git ls-tree <commit name>     show snapshot

use **git show** command can view a git object in git's database as fllow:

- commits
- blobs(files)
- trees(directories)
- tags

### unstaging files

git restore --staged <file name>

### discarding local changes

git restore <file name>

untarcked file

git clean -fd

### restoring a file to an earlier version

git restore --source=HEAD~1 <file name>

-----------------------------------------------
### trackig branches

git branch --track <local banranch name> <remote branch name>

git checkout --track <remote branch name>

### deleting branches

git branch -d <branch name>

### mergin branches

### rebasing branchs

git rebase <branch name>

### comparing branches

git log <branch name1>..<branch name2>    which commits are in 2,but not in 1

------------------

git commit -a -m ""     both stage and commit

git merge

- fast-forward merge     direct path
- 3-way merge       merge these branches together into a new commit

git diff <branch name1>..<branch name2>


### merge branches

git checkout -b <branch name>   git branch <branch name> git checkout <branch name>

### detached head

when HEAD is instead pointing directly to a commit, we have a detached HEAD state,one way out of this state is to just checkout a branch again

git checkout <branch name>

or create a branch and then checkout it

### git stash

get a clean state

git stash

git stash list

git stash list -p

we can re-apply these stashes at any time

git stash apply    re-apply the most recent stash

git stash pop     re-apply the most recent stash and remove it from the stash list

git stash apply <stash label>

git stash save ""

### reusable command alias

alias graph="git log --all --decorate --oneline --graph"

