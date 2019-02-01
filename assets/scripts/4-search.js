"use strict";

/**
 * Fichier permettant de gérer l'affichage d'un résultat de recherche.
 */


/**
 * Permet de mettre en évidence le pays qui a été sélectionné via la barre de recherche.
 *
 * @param countrySelected     Le nom du pays qui a été sélectionné.
 * @param g                   Le groupe SVG dans lequel le graphique à bulles est dessiné.
 */
function search(countrySelected, g) {
  /* TODO:
       - Mettre en évidence le pays sélectionné en coloriant le cercle en noir et en appliquant une opacité de 100%.
       - Appliquez une opacité de 15% aux cercles associés aux autres pays.
   */

  // Dynamically add css style
  g.select("style.search").remove()
  g.insert("style",":first-child")
  .attr("class","search")
  .attr("type","text/css")
  .html(".searchHighlight { fill: black; opacity: 1 } \
  .searchGray { opacity: 0.15 }")

  g.select(".graph")
  .selectAll(".dot")
  .each(
    function(d) {
      let circle = d3.select(this)
      
      if (d.name == countrySelected)
      {
        circle.attr("class", circle.attr("class")+" searchHighlight")
      }
      else
      {
        circle.attr("class", circle.attr("class")+" searchGray")
      }
    }
    )

}

/**
 * Permet de réinitialiser l'affichage à celle par défaut.
 *
 * @param g   Le groupe SVG dans lequel le graphique à bulles est dessiné.
 */
function reset(g) {
  // TODO: Réinitialiser l'affichage du nuage de points à celle par défaut.
  g.select(".graph")
  .selectAll(".dot")
  .attr("class","dot")
}
