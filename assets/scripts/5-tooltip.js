"use strict";

/**
 * Fichier permettant de définir le texte à afficher dans l'infobulle.
 */


/**
 * Obtient le texte associé à l'infobulle.
 *
 * @param d               Les données associées au cercle survollé par la souris.
 * @param formatNumber    Fonction permettant de formater correctement des nombres.
 * @return {string}       Le texte à afficher dans l'infobulle.
 */
function getToolTipText(d, formatNumber) {
  // TODO: Retourner le texte à afficher dans l'infobulle selon le format demandé.
  //       Assurez-vous d'utiliser la fonction "formatNumber" pour formater les nombres correctement.
  return "Pays: "+d.name+"<br>"
  +"Espérance de vie: "+formatNumber(d.lifeExpectancy).bold()+" ans<br>"
  +"Revenu: "+formatNumber(d.income).bold()+" USD<br>"
  +"Population: "+formatNumber(d.population).bold()+" habitants<br>"
  +"Zone du monde: "+d.zone+"<br>"
}
