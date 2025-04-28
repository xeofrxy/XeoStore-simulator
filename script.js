let visiteurs = 120;
let paniersAbandonnes = 24;
let clientsFideles = 8;
let commandes = 15;
let satisfaction = 4.6;

function afficherFournisseur() {
  alert("C'est la page fournisseur où tu choisis tes produits. À l'heure actuelle, tu peux choisir parmi des gadgets tendance!");
}

function gérerPublicité() {
  alert("Publicité TikTok : Tu choisis ton budget et tu vois combien de visiteurs tu peux attirer.");
}

function voirTableauDeBord() {
  alert("Ici, tu vois tes finances, le nombre de visiteurs et l'état de tes ventes.");
}

function passerLeTemps() {
  // Simuler une journée qui passe
  visiteurs += Math.floor(Math.random() * 50); // Ajouter des visiteurs
  paniersAbandonnes = Math.floor(Math.random() * 50); // Nouveaux paniers abandonnés
  clientsFideles = Math.floor(Math.random() * 10); // Nouveaux clients fidèles
  commandes = Math.floor(Math.random() * 20); // Commandes du jour

  // Mettre à jour les données affichées
  document.getElementById('visiteurs').innerText = visiteurs;
  document.getElementById('paniers-abandonnes').innerText = paniersAbandonnes;
  document.getElementById('clients-fideles').innerText = clientsFideles;
  document.getElementById('commandes').innerText = commandes;

  // Ajouter un graphique avec les données de cash flow (facultatif mais très cool)
  updateCashFlow();
}

// Fonction pour mettre à jour le graphique CashFlow
function updateCashFlow() {
  let ctx = document.getElementById('graphiqueCashFlow').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5'],
      datasets: [{
        label: 'Cash Flow',
        data: [2000, 2400, 3000, 2800, 3200], // Montant du cash flow
        borderColor: '#1db954',
        fill: false
      }]
    }
  });
}