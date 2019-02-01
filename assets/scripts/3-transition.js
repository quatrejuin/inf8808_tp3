"use strict";

/**
* Fichier permettant de gérer la transition entre les données.
*/


/**
 * Réalise une transition entre les données actuellement utilisées et les nouvelles qui doivent être utilisées.
 *
 * @param g       Le groupe SVG dans lequel le graphique à bulles est dessiné.
 * @param data    Les nouvelles données à utiliser.
 * @param x       L'échelle pour l'axe X.
 * @param y       L'échelle pour l'axe Y.
 * @param r       L'échelle pour le rayon des cercles.
 */
function transition(g, data, x, y, r) {
  /* TODO:
       - Réaliser une transition entre l'ancienne position et la nouvelle position des cercles.
       - Mettre à jour la taille du rayon des cercles.
       - La transition doit se faire en 1 seconde.
   */
  // g.select(".graph")
  // .selectAll(".dot")
  // //.remove()

  let circles = g.select(".graph")
  .selectAll(".dot")
  .data(data)
  .transition("playyear")
  .ease(d3.easeLinear)
  .duration(1000)
  .attr("cx",d=>{return x(d.lifeExpectancy)})
  .attr("cy",d=>{return y(d.income)})
  .attr("r",d=>{return r(d.population)})

}
