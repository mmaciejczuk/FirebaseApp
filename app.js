(function(){
        // https://www.youtube.com/watch?v=IfzpKHC6gZE
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCo3ZOn6BMPskoMm7ZiaSC3bMO0QyxgG4s",
                authDomain: "web-quick-start-66485.firebaseapp.com",
                databaseURL: "https://web-quick-start-66485.firebaseio.com",
                projectId: "web-quick-start-66485",
                storageBucket: "web-quick-start-66485.appspot.com",
                messagingSenderId: "831562373541"
            };
            firebase.initializeApp(config);

            var db = firebase.firestore();
            // przykład 1.
            //const docRef = firestore.doc("samples/sandwichData");
            // przykład 2.
            const docRef2 = firestore.collection("samples").doc("sandwichData");
            const output = document.querySelector("#hotDogOutput");
            const inputTextField = document.querySelector("#lastestHotDogStatus");
            const saveButton = document.querySelector("#saveButton");

           saveButton.addEventListener("click", function(){
               const textToSave = inputTextField.value;
               console.log("I am going to save " + textToSave + " to Firestore.");
               docRef.set({
               hotDogStatus: textToSave
               });
           }).then(function(){
               console.log("Status saved!");
           }).catch(function(error){
              console.log("Got an error: ", error);
           });


            // saveButton.addEventListener("click", function(){
            
            // db.collection("samples").add({
            //     first: "Ada",
            //     last: "Lovelace",
            //     born: 1815
            // })
            // .then(function(docRef) {
            //     console.log("Document written with ID: ", docRef.id);
            // })
            // .catch(function(error) {
            //     console.error("Error adding document: ", error);
            // }); 
        //});        
})
