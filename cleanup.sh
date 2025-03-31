#!/bin/bash

# Créer une branche temporaire
git checkout --orphan temp_branch

# Ajouter tous les fichiers
git add .

# Créer un commit pour la branche temporaire
git commit -m "Initial commit"

# Supprimer la branche principale
git branch -D main

# Renommer la branche temporaire en main
git branch -m main

# Pousser la nouvelle branche vers GitHub avec force
git push -f origin main 