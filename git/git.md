# Git

To start a local repository, in CMD type
```
git init
```

To check status
```
git status
```

To stage files for commit, use `add`
```
git add <file>

# since it is executed in CMD, wildcard syntax is also applicable
git add *.md

# to remove individual file
git rm --cached <added_file_to_undo>

# to remove all staged file
git reset
```

To commit with message
```
git commit -m "<message>"
```


## Branching


Making a new branch
```
git checkout -b <make a branch name>
```

Switching branch
```
# switching to 'origin/trial'.
git checkout origin/trial
```

## Merging branches

Once the branch is ready to merge, you can switch back to main branch and run
```
# merging branch (branch B into main)
git checkout main
git merge <your branch B>

# deleting branch b
git branch -d <your branch B>
```

## Remote repository

Add connection to a remote repo
```
git remote add <give the repo a name> <repo url>
```


## Push to remote repo

The general syntax is as follow: `git push <remote repo name> <local branch>:<remote repo branch>`<br>
Let's say you push to a remote you named `origin` with your local branch `head`, to the remote branch `update`

```
git push origin head:update

```
More info [^1]



## Compare differences between two files


Compare same file at different commit (eg update branch vs master branch with one commit before)
```
git diff master_branch~1 update_branch index.html
```

### Two different commits
Compare two different commits on a certain file
```
git diff <commit 1 short hash> <commit 2 short hash> <file>
```


## Authenitcation
Authentication with git credential manager[^2]<br>
Installation should have been done along with git installation, standalone installation is also available
To login, run:
```
git credential-manager github login
```



.gitignore tips:
>to add file into .gitignore - `echo <file> >> .gitignore`


[^1]:[push to remote repo]( https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)
[^2]:[GCM](https://github.com/git-ecosystem/git-credential-manager)
