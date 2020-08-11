import Controller from '@ember/controller';


export default Controller.extend({
  actions: {
    createUser() {
      // get the input value from the .hbs template
      let newFirstName = this.get('newFirstName')
       let newLastName = this.get('newLastName')
      let newEmail = this.get('newEmail')
      let newPhone =this.get('newPhone')
      let newfavgame=this.get('newFavGame')
      // create a record in Ember Data (locally, would not survive page refresh)
      let newRecord = this.store.createRecord('boardgame', {
        firstname: newFirstName,
        lastname: newLastName,
        email:newEmail,
        phone:newPhone,
       favgame:newfavgame
      })
      // Save the record to the API endpoint specified in adapters/application.js
      newRecord.save()
    },
   
    updateUser() {
     let updatedFirstName = this.get('updatedFirstName')
    let updatedLastName = this.get('updatedLastName')
    let updatedEmail = this.get('updatedEmail')   
    let updatedPhone = this.get('updatedPhone')
    let updatedGame = this.get('updateGame')
      let game = this.get('model').findBy('id')
      // console.log(id);
      game.set('firstname', updatedFirstName) 
       game.set('lastname', updatedLastName) 
     game.set('email',updatedEmail)
     game.set('phone',updatedPhone)
     game.set('favgame',updatedGame)
      game.save(); // save the title to API via PATCH
      
    },
  
    destroyUser() { 

 let game=this.get('model').findBy('id');
game.destroyRecord() ;
}
  }
});
