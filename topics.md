# Branch

## Show me branches

```
git branch -l -r -a
```

| Flag          | Result                                       |
| ------------- | -------------------------------------------- |
| -l            | Local braches                                |
| -r            | Remote braches                               |
| -a            | All branches                                 |
| \| grep "axe" | Filter results to only those including "axe" |

## Configs

```
git config --global branch.sort -committerdate
```

Displays braches by most recently modified, instead of alphabetically

# Log

```
git log
```

Shows you a chronological list of commits from your current branch starting from most recent

--oneline

this flag gives you a more dense output and is helpful for grep-ing

# Prune

```
git fetch -p
```

Prune will delete branches locally, that have also been deleted in the remote, and have no local changes

# Rebase

```
git switch main
git pull
git switch -
git rebase main

OR

git fetch
git rebase origin/main
```

# Squish

```
git fetch
git log --oneline
<find number of commits you want to squish>
git rebase -i HEAD~3
```

press i to enter interactive mode (vim knowledge required)  
change pick to squish (or p to s)  
esc : w q enter  
your commits are now squished, verify with git log

# Switch to previous branch

```
git switch -
```

you can use this command to go back and forth between two branches if you need to review some code and then resume your work, you don't need to memorise or re-find your working brach

# Auto setup remote

```
git config --global --add --bool push.autoSetupRemote true
```

If you have made a branch on local and tried to push it to remote, this will automatically set remote as the upstream

# Reuse Recorded Resolution

```
git config --global rerere.enabled true
```

Remember manual merge resolutions and auto-apply in future if seen again

# Maintenance

```
git maintenance start
```

Does a bunch of useful stuff, the headlines are

- pre-fetch hourly
- cleans up a bunch of miscellaneous files that probably slow down git :shrug:

also

- does other useful things I don't know about but I know they are harmless to your current workflow, such as
  - garbage collection disabled
  - commit graph updates hourly
  - loose objects cleaned daily
  - incremental repack daily

google these yourselves if you are interested

# Honorable Mentions

## Reflog

shows you your personal history of commands in git, is comprehensive and has helped me recover lost commits by hash in the past

# Workflow

If you need to make a branch

```
git fetch
git switch main
git pull
git switch -c DDSP-1234-do-some-stuff
<make changes>
git commit -m "test(1234): tested a feature"
git push
```

If you need to rebase a branch you are currently on

```
git fetch
git rebase origin/main
<hope for no conflicts>
```

N.B. The above does not update your local main, it rebases directly onto the remote version of main, with your local remaining as it was before the command.
