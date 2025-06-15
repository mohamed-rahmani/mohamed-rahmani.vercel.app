export default function page() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16 text-justify">
      <h1 className="text-5xl font-extrabold mt-6">Bilan - BUT Informatique</h1>
      <p>
        Depuis le début de mon parcours en BUT Informatique, j’ai fait le choix
        d’une formation polyvalente et professionnalisante qui me permettrait
        d’allier théorie et pratique contrairement à une CPGE MP2i, avec une
        forte dimension projet. Mon intérêt pour l’informatique s’est rapidement
        développé durant mes années de lycée notamment pour le développement web
        et logiciel, et j’ai orienté mon choix de formation dans cette
        direction, c’est ainsi que j’ai décidé d’intégrer le BUT Informatique de
        Villetaneuse. Ces trois années m’ont permis de développer des
        compétences solides en programmation, gestion de projet, et travail en
        équipe. Aujourd’hui, je vise une poursuite d’études possible en école
        d’ingénieur dans le domaine du Machine Learning.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        💡 Compétence 1 - Réaliser un développement d’application
      </h1>
      <p>
        Tout au long de ma formation, j’ai conçu différentes applications web
        complexes, comme un site de formations en ligne (React, Laravel,
        PostgreSQL) ou un site intranet de gestion de bons de livraison (PHP,
        JS, PostgreSQL). Ces projets m’ont permis de mettre en œuvre une
        architecture MVC, de développer des interfaces utilisateurs
        fonctionnelles et d’assurer l’interaction avec les bases de données. Le
        projet Vizucar, quant à lui, a été une expérience complète mêlant
        plusieurs technologies modernes : Electron, Next.js, Spring Boot,
        MongoDB. Des projets qui m’ont permis de gagner en rigueur, en
        autonomie, et appris à mieux structurer mon code pour le rendre évolutif
        et lisible notamment grâce à des modules comme Maintenance Applicative.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        ⚙️ Compétence 2 — Optimiser des applications
      </h1>
      <p>
        L’optimisation est apparue essentielle dès que les projets ont gagné en
        complexité. Certains projets comme Vizucar ont nécessité des réflexions
        approfondies sur la performance : traitement d’image, temps de réponse
        API, intégration de moteurs de recherche multimodale, allégement de
        composants React et en choisissant des structures de données plus
        adaptées côté backend. J’ai utilisé des requêtes optimisées, mis en
        place du lazy loading ou encore structuré le code backend pour éviter la
        duplication et la lenteur dans les appels. Grâce à l’utilisation de
        Docker et à l’analyse des performances API, j’ai appris à identifier les
        goulets d’étranglement et à proposer des améliorations concrètes. Ces
        expériences m’ont permis de mieux mesurer l’impact d’un mauvais choix
        technique sur les performances globales.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        🛠️ Compétence 3 — Administrer des systèmes informatiques
      </h1>
      <p>
        J’ai été amené à configurer des environnements complets pour nos
        projets. J’ai utilisé Docker pour isoler et reproduire des
        environnements de développement, notamment pour Vizucar. J’ai aussi
        déployé des projets sur Vercel et AWS, configuré des serveurs locaux
        (WAMP), et géré des bases de données PostgreSQL et MongoDB. Lors de
        certains projets et du stage de 3ième année, j’ai participé à la gestion
        des connexions sécurisées à la base PostgreSQL et à la configuration de
        l’architecture backend en Java. Ce qui m’a permis de mieux comprendre
        les contraintes d’un système d’informations en production, et d’en
        assurer la stabilité et la sécurité.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        📊 Compétence 4 — Gérer des données de l’information
      </h1>
      <p>
        La manipulation, la structuration et la sécurisation des données ont été
        au cœur de mes projets. Dans le site intranet et le site de formations,
        j’ai conçu des modèles relationnels optimisés, utilisé PostgreSQL avec
        des jointures complexes, et respecté les principes d’intégrité
        référentielle. Sur Vizucar, j’ai aussi expérimenté des bases NoSQL
        (MongoDB), ce qui m’a permis de comparer les deux approches.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        📁 Compétence 5 — Conduire un projet
      </h1>
      <p>
        J’ai piloté plusieurs projets universitaires en équipe : planification
        (Trello), gestion de version (GitHub/Gitlab), priorisation des tâches et
        respect des deadlines(Matrice RACI, Gantt). Sur le projet Vizucar, nous
        avons appliqué une méthode proche d’Agile avec des sprints et des points
        hebdomadaires. Durant mon stage de première année, j’ai suivi les
        différentes phases d’un cycle projet réel : recueil du besoin,
        conception, développement, tests, et itérations avec les retours
        utilisateurs. J’ai ainsi appris à mieux structurer mon travail, à
        anticiper les risques et à documenter chaque étape de manière claire
        pour assurer la continuité d’un projet.
      </p>
      <h1 className="text-2xl font-bold mt-6">
        🤝 Compétence 6 — Collaborer au sein d’une équipe informatique
      </h1>
      <p>
        Travailler efficacement en équipe a été essentiel tout au long de ma
        formation. J’ai appris à communiquer clairement mes idées, à écouter
        celles des autres, et à adapter mon travail aux contraintes collectives.
        J’ai participé à des revues de code, à des résolutions de conflits Git,
        et réalisé des présentations orales de projets.
      </p>
      <h1 className="text-2xl font-bold mt-6">👨‍💻 Volet Stage BUT 3</h1>
      <p>
        J’ai intégré le 12 juin 2025, l’entreprise HALIL pour développer une
        application web de gestion des flux de commandes. L’objectif est de
        centraliser les informations liées aux produits, fournisseurs et
        commandes dans une interface fluide et fonctionnelle. Pour cela, j’ai
        utilisé Angular pour le frontend, Java pour le backend, et PostgreSQL
        pour la base de données.
      </p>
      <h2 className="text-xl font-bold">Missions principales :</h2>
      <ul className="list-disc px-[1.2rem]">
        <li>
          Développement de modules pour la gestion des entités métier :
          produits, fournisseurs, commandes.
        </li>
        <li>
          Mise en place d’une interface utilisateur intuitive et fluide,
          facilitant la saisie et la consultation d’informations.
        </li>
        <li>
          Tests des principales fonctionnalités et intégration des retours
          utilisateurs pour proposer un premier MVP.
        </li>
        <li>
          Participation à la rédaction de la documentation technique du projet.
        </li>
      </ul>
      <h2 className="text-xl font-bold">Bilan :</h2>
      <p>
        Ayant commencé mon stage de 3ième année uniquement il y a une semaine,
        je ne pourrais pas fournir un bilan critique et d’auto-évalution sur mon
        stage. Néanmoins, à la fin de celui-ci, je ne manquera pas de fournir
        des éléments du stage que je pourrai mettre en avant pour renforcer mon
        profil et mes candidatures.
      </p>
      <h1 className="text-2xl font-bold mt-6">🎓 Conclusion</h1>
      <p>
        Ces trois années en BUT Informatique m’ont permis de construire une base
        solide, autant sur le plan technique que sur le plan humain. J’ai appris
        à concevoir des applications complètes, à résoudre des problèmes
        concrets, à collaborer efficacement et à m’adapter à des environnements
        professionnels variés. Chaque projet, chaque SAÉ, chaque stage a
        contribué à forger ma rigueur, ma curiosité et mon autonomie. Ce
        parcours m’a conforté dans mon orientation et m’a donné envie
        d’approfondir encore mes compétences, que ce soit en poursuivant mes
        études ou dans le monde professionnel car on le sait que trop bien
        l’informatique est un domaine qui demande sans cesse de s’instruire.
      </p>
    </article>
  );
}
