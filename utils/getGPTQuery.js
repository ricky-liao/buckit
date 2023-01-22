export const getGPTQuery = async (input) => {
  input = input + ". Make me a plan to do this in step-by-step format";
  try {
    const response = await fetch('http://127.0.0.1:5000/gpt3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input_text: input })
    });
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  
  
  