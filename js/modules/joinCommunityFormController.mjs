/** 
   * Fonction qui verifie l'envoi du formulaire de la communaute JobAtHome
   * @param {object} userData
   * @return {Promise}
 */
export function joinCommunityFormController(userData){

      return new Promise((resolve)=>{

            const {firstName, lastName, email, password, category} = userData;

            if([firstName, lastName, email, password].includes("") === true || category === "Choisir une catégorie"){

                  return resolve("Veuillez remplir tous les champs");

            }

      });

}