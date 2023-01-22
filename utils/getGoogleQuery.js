export const getGoogleQuery = async (input) => {
    let queryArr = input.split(" ");
    let queryStr = "";
    for (let i = 0; i < queryArr.length - 1; i++) {
        queryStr += queryArr[i] + "+";
    }
    queryStr += queryArr[queryArr.length - 1];
    try {
      const response = await fetch(`http://127.0.0.1:5000/search?q=${queryStr}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  
  
  