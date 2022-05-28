**FR : Voici les étapes à respecter pour créer le bot**

_1. Aller dans le `config.js` et insérer le token de votre bot._
_2. Créer la base de données. Pour cela, installer Xampp (https://www.apachefriends.org/fr/download.html (8.1.6 ou plus). Démarrer Apache et MySQL en Admin. Créer une nouvelle base de données dans laquelle vous créerez la table serveur avec guildID et préfix en VARCHAR avec une taille de 255. Puis, mettez guildID en primaire (plus puis primaire). Ensuite aller dans `Database.js` puis mettez le nom de votre base de données. NE TOUCHEZ PAS AU MOT DE PASSE !_
_3. Ensuite, installer les modules discord.js , mysql et fs en faisant :_

**npm i mysql**\n
**npm i discord.js**\n
**npm i fs**

_Dans la console._

_4. Aller dans messageCreate.js dans Events puis Bot et mettez votre ID à la ligne 37 et pareil dans le interactionCreate.js mais ligne 13_

_Facultatif : aller dans le ready.js dans Events et Bot puis changé le status du bot !_

_5. Lancer le bot en mettant `node index` ou `node index.js` dans le terminal ( CTRL + J pour en ouvrir un)_


**Un problème ? contacte moi sur Discord :**

`! " wApp#5648`

PS : Pour inviter le bot , cocher dans OAuth2 : 

bot
application_commands
ADMINSTRATOR ( Administrateur )


sinon les SlashCommand ne s'afficheront pas !


