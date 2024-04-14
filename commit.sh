#!/bin/bash

# Change directory to your repository
cd /Polygad

# Make changes to a file
echo "This is a commit." >> example.txt

# Stage changes
git add .

# Commit changes
git commit -m "Automated commit"

# Push changes to GitHub
git push origin main
