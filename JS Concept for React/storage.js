const addToLocal = () => {
      const idInput = document.getElementById('storage-id');
      const id = idInput.value;

      const valueInput = document.getElementById('storage-value');
      const value = valueInput.value;

      //add to local storage
      
      if (id && value) { //empty id and value will not be added
            localStorage.setItem(id, value);
            //To store array or object use JSON.stringify ex. localStorage.setItem('friends', JSON.stringify([2, 12, 5])) ;
            //To read json stringify object convert them with json parse to js object
      }
      idInput.value = '';
      valueInput.value = '';
}